/**
 * Pro Season Academy — Season-based versioning & changelog
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
  downloads: string;
  rating: number;
  ratingCount: number;
  highlights: string[];
  changelog: {
    category: string;
    items: string[];
  }[];
}

export const appInfo = {
  name: "Pro Season Academy",
  developer: "Onliversity",
  category: "Education · Esports",
  contentRating: "Everyone",
  installs: "1,000+",
  containsAds: false,
  price: "Free (Founder's Week)",
  description: `Pro Season Academy is a private FC Mobile performance academy inside the Onliversity ecosystem.

Choose one permanent coach. Walk their real journey from grassroots to championship — 6 stages, one path. Log real FC Mobile matches in the Match Vault. Reflect through The Eye and The Mind Match Scan. Track patterns in the Loss Journal.

This is not a public tips app or a content library. It's a serious, personal football academy where invited players train under a chosen coach, reflect on real matches, prove progress through structured scans, and improve inside a serious community.

Season One has 1,000 seats. Founder's Week is active — use the academy for free and help shape it before paid access begins.`,
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
    downloads: "1,000+",
    rating: 4.9,
    ratingCount: 127,
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
          "Season One is live — the founding season of Pro Season Academy",
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
