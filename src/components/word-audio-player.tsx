
"use client";

import { useState } from "react";
import { Volume2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { generateSpeech } from "@/ai/flows/text-to-speech-flow";
import { useToast } from "@/hooks/use-toast";

interface WordAudioPlayerProps {
  word: string;
}

export function WordAudioPlayer({ word }: WordAudioPlayerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePlayAudio = async () => {
    setIsLoading(true);
    try {
      const result = await generateSpeech({ text: word });
      if (result?.audioDataUri) {
        const audio = new Audio(result.audioDataUri);
        audio.play();
      } else {
        throw new Error("Audio data URI was not returned from the AI.");
      }
    } catch (error) {
      console.error("Failed to generate or play audio:", error);
      toast({
        title: "Error",
        description: "Could not play audio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handlePlayAudio}
      disabled={isLoading}
      className="h-9 w-9 text-primary hover:text-primary/90"
      aria-label={`Listen to the word: ${word}`}
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Volume2 className="h-6 w-6" />
      )}
    </Button>
  );
}
