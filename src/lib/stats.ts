

'use client';

import { getWeek, startOfWeek } from 'date-fns';
import { XpToast } from '@/components/xp-toast';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export type LearningStats = {
  timeSpentSeconds: number;
  totalWordsReviewed: number;
  xp: number;
  activityLog: string[];
  spellingPractice: {
    count: number;
    date: string;
  };
  lastLoginDate: string;
  weekStartDate?: string; // ISO date string for start of the week
  reviewedNow: number;
};

export type XpEvent =
  | 'review_word'
  | 'spell_correct'
  | 'daily_login'
  | 'master_word'
  | 'grammar_test';

export const XP_AMOUNTS: Record<XpEvent, number> = {
    review_word: 5,
    spell_correct: 5,
    daily_login: 20,
    master_word: 10,
    grammar_test: 20
};

export const getInitialStats = (today: string): LearningStats => ({
    timeSpentSeconds: 0,
    totalWordsReviewed: 0,
    xp: 0,
    activityLog: [],
    spellingPractice: { count: 0, date: today },
    lastLoginDate: '1970-01-01',
    weekStartDate: startOfWeek(new Date(), { weekStartsOn: 1 }).toISOString(), // Monday
    reviewedNow: 0,
});

export const getStatsForUser = async (userId: string): Promise<LearningStats> => {
    const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
    const statsSnap = await getDoc(statsDocRef);

    let stats: LearningStats;

    if (statsSnap.exists()) {
        stats = statsSnap.data() as LearningStats;
    } else {
        stats = getInitialStats(new Date().toLocaleDateString('en-CA'));
        // If no stats exist, save the initial stats to Firestore
        await setDoc(statsDocRef, stats);
    }

    // --- Data Migration & Defaults ---
    if (typeof stats.xp !== 'number') stats.xp = 0;
    if (!stats.lastLoginDate) stats.lastLoginDate = '1970-01-01';
    if (!stats.weekStartDate) stats.weekStartDate = (startOfWeek(new Date(), { weekStartsOn: 1 })).toISOString();
    if (typeof stats.reviewedNow !== 'number') stats.reviewedNow = 0;

    // --- Weekly XP Reset Logic ---
    const lastWeekStartDate = new Date(stats.weekStartDate);
    if (getWeek(new Date(), { weekStartsOn: 1 }) !== getWeek(lastWeekStartDate, { weekStartsOn: 1 })) {
        stats.xp = 0; // Reset XP
        stats.weekStartDate = (startOfWeek(new Date(), { weekStartsOn: 1 })).toISOString();
    }

    return stats;
}

export const updateXp = async (userId: string, event: XpEvent) => {
    if (!userId) return { updated: false, amount: 0 };

    const stats = await getStatsForUser(userId);
    const amount = XP_AMOUNTS[event];
    const today = new Date().toLocaleDateString('en-CA');

    if (event === 'daily_login') {
        if (stats.lastLoginDate === today) {
            return { updated: false, amount: 0 }; // Already awarded today
        }
        stats.lastLoginDate = today;
    }

    stats.xp += amount;

    const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
    await setDoc(statsDocRef, stats, { merge: true });

    return { updated: true, amount };
};


type UpdateStatsParams = {
  userId: string;
  reviewedCount?: number;
  durationSeconds?: number;
  testName?: string;
  spelledCount?: number;
  toast?: (props: any) => void;
  reviewedNowIncrement?: number;
};

export const updateLearningStats = async ({
  userId,
  reviewedCount = 0,
  durationSeconds = 0,
  testName,
  spelledCount = 0,
  toast,
  reviewedNowIncrement = 0,
}: UpdateStatsParams) => {
  if (!userId) return;

  const stats = await getStatsForUser(userId);
  const today = new Date().toLocaleDateString('en-CA');

  // Update stats
  stats.totalWordsReviewed += reviewedCount;
  stats.timeSpentSeconds += durationSeconds;
  stats.spellingPractice.count += spelledCount;
  stats.reviewedNow += reviewedNowIncrement;

  // Log activity
  if (!stats.activityLog.includes(today)) {
    stats.activityLog.push(today);
  }

  // Log completed test and award XP
  if (testName) {
      stats.xp += XP_AMOUNTS.grammar_test;
      if (toast) {
           toast({
              description: <XpToast event="grammar_test" amount={XP_AMOUNTS.grammar_test} />,
              duration: 3000,
          });
      }
  }

  const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
  await setDoc(statsDocRef, stats, { merge: true });
};
