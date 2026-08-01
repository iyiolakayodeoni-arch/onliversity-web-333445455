/**
 * ProSeasonAcademy — Season-based versioning & changelog
 * "Seasons" replace traditional version numbers.
 * Season 1 is the founding season. Each new season = a major app update.
 */

export interface SeasonEntry {
  season: number;
  label: string;
  date: string;
  isLatest: boolean;
  isCurrent: boolean;
  size: string;
  androidVersion: string;
  highlights: string[];
  changelog: {
    category: string;
    items: string[];
  }[];
}

export const appInfo = {
  name: "ProSeasonAcademy",
  developer: "Onliversity",
  category: "Education · Esports",
  contentRating: "Everyone",
  containsAds: false,
  price: "Free first week · Paid after",
  description: `ProSeasonAcademy is Mirror's professional development programme for FC Mobile players — the first programme built on the Mirror method, and the template for every future Onliversity course.

The Mirror records the evidence. You do the seeing. Before each match you set an intention. At half-time and full-time you answer in your own words. You watch the versions of your thinking sit beside the recording — until self-deception becomes difficult to maintain.

Your journey is yours: six universal stages, moved forward only by your own matches, answers and receipts. One coach, locked permanently. One standard. No excuses.

The app never thinks for you. Raw match video stays on your phone and is never uploaded.

Season One has 1,000 seats. The first week is free — 3-day grace after expiry, refunds for time not used. When the season is full, new players join the waitlist.`,
  permissions: [
    "Network access",
    "Storage (match screenshots)",
    "Notifications",
  ],
  dataSafety: [
    "Data is encrypted in transit",
    "You can request data deletion",
    "No data shared with third parties",
  ],
};

export const seasons: SeasonEntry[] = [
  {
    season: 1,
    label: "Season One — The Foundation",
    date: "July 2026",
    isLatest: true,
    isCurrent: true,
    size: "48 MB",
    androidVersion: "8.0+",
    highlights: [
      "Choose your permanent coach — Chinedu or Obinna",
      "5-match Baseline Scan to start your journey",
      "6-stage coaching journey per coach",
      "Match Vault — log and reflect on real FC Mobile matches",
      "Match Scan — The Eye & The Mind progress checks",
      "Loss Journal — track patterns, fix habits",
      "Community / The Halls — academy rooms and founder access",
      "XP, badges, and progression system",
      "Founder's Week — free access, no surprise payments",
      "Private founder contact for support and feedback",
    ],
    changelog: [
      {
        category: "Launch",
        items: [
          "Season One is live — the founding season of ProSeasonAcademy",
          "1,000 seats available during Founder's Week",
          "Two coaches with distinct worlds, voices, and journey paths",
          "Full 6-stage journey with objectives, locks, and XP",
          "Match Vault for real match logging and reflection",
          "Match Scan system combining vault evidence, mechanic focus, and self-awareness",
          "Loss Journal for pattern tracking after defeats",
          "Community halls with founder presence and broadcasts",
          "Private founder contact for support, bugs, and payment issues",
        ],
      },
      {
        category: "Coach System",
        items: [
          "Chinedu 'The King' Okafor — defensive, disciplined, clinical. From Bodija, Ibadan.",
          "Obinna 'Tekkerz' Eze — flair, skill moves, unpredictable. From GRA, Port Harcourt.",
          "Permanent coach lock — commitment makes the relationship mean something",
          "Coach-specific film room sessions with unique voice and personality",
          "Coach scout files with detailed personality, strengths, flaws, and catchphrases",
        ],
      },
      {
        category: "Match System",
        items: [
          "Match Vault — structured manual logging (scoreline, mode, composure, mechanic usage)",
          "Loss Journal — one-line pattern reflection after each defeat",
          "Match Scan — stage checkpoint combining The Vault, The Eye, and The Mind",
          "Honour-system approach — honest about not having official FC Mobile data feed",
          "Match Watcher foundation for future score/event detection assist",
        ],
      },
      {
        category: "Community",
        items: [
          "Academy halls — relevant rooms for discussion, wins, losses, and progress",
          "Founder broadcasts — clear academy-wide announcements",
          "Direct founder contact — private thread for questions, bugs, support",
          "Progress sharing and presence indicators",
          "Respectful football/gaming culture moderation",
        ],
      },
      {
        category: "Account & Progress",
        items: [
          "Academy profile with selected coach, stage, XP, and badges",
          "Local progress persistence — your data survives app restarts",
          "Notification preferences and sound settings",
          "Academy ID and membership status display",
          "Lapsed access handling — nothing deleted, grace period included",
        ],
      },
    ],
  },
];
