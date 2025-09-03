

"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import type { EmblaCarouselType } from 'embla-carousel-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getWordsForStudent } from "@/lib/firestore";
import { type Word } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { updateStudentProgressInStorage } from "@/lib/storage";
import { ClientOnly } from "@/components/client-only";
import { useLanguage } from "@/hooks/use-language";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { updateLearningStats, updateXp, XP_AMOUNTS } from "@/lib/stats.tsx";
import { WordProgress } from "@/lib/storage";
import Image from "next/image";
import { WordAudioPlayer } from "@/components/word-audio-player";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { XpToast } from "@/components/xp-toast";
import { useSearchParams } from "next/navigation";
import { ScheduleOption } from "@/lib/types";

export default function LearnClientPage() {
  const { t, translateContent } = useLanguage();
  const { toast } = useToast();
  const [words, setWords] = useState<(Word & WordProgress)[]>([]);
  const [sessionFinished, setSessionFinished] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<EmblaCarouselType | undefined>();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const unitFilter = searchParams.get("unit");
  const lessonFilter = searchParams.get("lesson");

  const loadWords = useCallback(async () => {
    if (userId) {
      setLoading(true);
      const allWords = await getWordsForStudent(userId);
      const newWords = allWords.filter(word => 
        word.strength === 0 &&
        (!unitFilter || word.unit === unitFilter) &&
        (!lessonFilter || word.lesson === lessonFilter)
      );
      setWords(newWords);
      if (newWords.length === 0) {
        setSessionFinished(true);
      }
      setLoading(false);
    }
  }, [userId, unitFilter, lessonFilter]);


  const handleUpdateStats = useCallback(async (reviewedCount: number, durationSeconds: number) => {
    if (userId) {
      await updateLearningStats({ userId, reviewedCount, durationSeconds, toast });
    }
  }, [userId, toast]);

  useEffect(() => {
    startTimeRef.current = Date.now();
    loadWords();

    const cleanup = () => {
      if (userId && startTimeRef.current) {
        const endTime = Date.now();
        const durationSeconds = Math.round((endTime - startTimeRef.current) / 1000);
        if (durationSeconds > 0) {
          handleUpdateStats(0, durationSeconds);
        }
        startTimeRef.current = null;
      }
    }

    window.addEventListener('beforeunload', cleanup);
    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
    };
  }, [userId, loadWords, handleUpdateStats]);

  const updateSlideStatus = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    const slides = emblaApi.slideNodes();
    slides.forEach((slide, index) => {
      if (emblaApi.selectedScrollSnap() === index) {
        slide.classList.add('is-selected');
      } else {
        slide.classList.remove('is-selected');
      }
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    updateSlideStatus(api);
    setCurrentWordIndex(api.selectedScrollSnap());
    
    api.on("select", updateSlideStatus);
    api.on("select", () => setCurrentWordIndex(api.selectedScrollSnap()));

    return () => {
      api.off("select", updateSlideStatus);
    };
  }, [api, updateSlideStatus]);

  useEffect(() => {
    if (api) {
        api.reInit();
        updateSlideStatus(api);
    }
    if (words.length === 0 && !loading) {
        setSessionFinished(true);
    } else {
        setSessionFinished(false);
    }
  }, [words, api, loading, updateSlideStatus]);
  
  const handleMustLearn = async () => {
    const currentWord = words[currentWordIndex];
    if (!currentWord || !userId) return;
    // Set the review for today
    const nextReview = new Date(); 
    nextReview.setHours(0, 0, 0, 0); // Set to the beginning of the day in local timezone
    await updateStudentProgressInStorage(userId, currentWord.id, { strength: 1, nextReview });
    await handleUpdateStats(1, 0);
    // Remove the learned word from the main list to prevent it from reappearing
    setWords(prev => prev.filter(w => w.id !== currentWord.id));
  };

  const handleIKnowIt = async () => {
    const currentWord = words[currentWordIndex];
    if (!currentWord || !userId) return;
    const nextReview = new Date(); // It will be ignored since strength is -1
    await updateStudentProgressInStorage(userId, currentWord.id, { strength: -1, nextReview });
    const { amount } = await updateXp(userId, 'master_word');
    toast({
        description: <XpToast event="master_word" amount={amount} />,
        duration: 3000,
    });
    await handleUpdateStats(1, 0);
    // Remove the learned word from the main list to prevent it from reappearing
    setWords(prev => prev.filter(w => w.id !== currentWord.id));
  };
  

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        User not found. Please log in again.
      </div>
    );
  }

  return (
    <ClientOnly>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-secondary overflow-hidden">
        <div className="w-full max-w-5xl flex items-center justify-between mb-4 px-4">
            <Link href={`/dashboard?userId=${userId}`}>
              <Button variant="outline">
                {t('learn.backToDashboard')}
              </Button>
            </Link>
        </div>

        <div className="w-full max-w-5xl">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {!loading && (sessionFinished || words.length === 0) && (
            <div className="text-center p-8 bg-card rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold font-headline mb-4">{t('learn.sessionFinished.title')}</h2>
              <p className="text-muted-foreground mb-6">You've learned all available new words for this selection!</p>
              <Button asChild>
                <Link href={`/dashboard?userId=${userId}`}>
                  {t('learn.backToDashboard')}
                </Link>
              </Button>
            </div>
          )}

          {!loading && !sessionFinished && words.length > 0 && (
            <Carousel 
                setApi={setApi} 
                opts={{ align: "center", loop: false }} 
                className="w-full"
            >
                <CarouselContent>
                    {words.map((word) => (
                         <CarouselItem key={word.id} className="md:basis-1/2 lg:basis-2/5 embla__slide">
                            <div className="p-1">
                                <div
                                    className="bg-card rounded-2xl border-4 border-b-8 border-r-8 border-slate-300 shadow-xl p-4 sm:p-6 flex flex-col"
                                >
                                    <div className="flex-1 flex items-center justify-center aspect-video w-full overflow-hidden rounded-lg bg-white">
                                        <Image
                                            src={word.imageUrl}
                                            alt={word.word}
                                            width={400}
                                            height={225}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-center space-y-4 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <h2 className="text-4xl font-bold font-headline text-primary">{word.word}</h2>
                                            <WordAudioPlayer word={word.word} />
                                        </div>
                                        <Separator />
                                        <p className="text-5xl font-bold text-muted-foreground font-headline">{word.arabicTranslation || word.word}</p>
                                    </div>
                                    <p className="text-sm text-center text-muted-foreground mt-auto">{word.definition}</p>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <Button onClick={handleMustLearn} variant="destructive" size="lg" className="h-12 text-base">Must Learn</Button>
                                        <Button onClick={handleIKnowIt} variant="default" size="lg" className={cn("bg-blue-600 hover:bg-blue-700 h-12 text-base")}>I Know It</Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </ClientOnly>
  );
}
