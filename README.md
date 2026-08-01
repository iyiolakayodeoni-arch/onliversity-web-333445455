# Onliversity — Web App

Phase 0 scaffold, built from the Onliversity Full Briefing (Part 4) and the Pro Season Academy MVP Build Guide.

## App downloads

The app is distributed as a direct Android APK (not a store listing).

- Put the signed APK at `public/downloads/ProSeasonAcademy-v1.0.0.apk` (the filename is read
  from `downloadUrl` in `lib/app-data.ts`).
- The `/download` page checks the file on load: when it exists, the download button goes
  live automatically; when it doesn't, the page shows an honest "final build almost ready"
  state with email capture, so the site never advertises a download that isn't there.


**What's in this scaffold (Phase 0, Days 2–4):**
- Next.js 14 (App Router) + TypeScript + Tailwind
- Brand design tokens as CSS variables (`app/globals.css`, `tailwind.config.ts`) — phosphor green, deep charcoal, amber accent, per Briefing Part 2.2
- Space Grotesk (headers) + Inter (body), per Briefing Part 2.3
- The broken-infinity logo component with a swappable center-icon slot, per Briefing Part 2.1 (`components/Logo.tsx`)
- Base layout shell: nav + course-catalog page, Pro Season Academy live, other courses as "coming soon" cards

**Not yet wired up (next steps, still Phase 0/1):**
- Supabase project, auth, and `profiles` table
- Auth-gated vs public routes
- Real onboarding flow

---

## Getting started on your machine

1. **Install dependencies**
   ```
   npm install
   ```

2. **Run it locally**
   ```
   npm run dev
   ```
   Open http://localhost:3000 — you should see the Onliversity homepage with the course catalog.

3. **Connect Supabase** (Phase 0, Day 1 in the build plan)
   - Create a project at supabase.com if you haven't already
   - Copy `.env.local.example` to `.env.local`
   - Fill in your project's URL and anon key from Supabase → Project Settings → API
   - `lib/supabase.ts` (add this next) will read these automatically

4. **Push to your GitHub repo**
   ```
   git init
   git add .
   git commit -m "Phase 0: web app scaffold with brand system"
   git remote add origin <your ProCoach org repo URL>
   git push -u origin main
   ```

---

## Project structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx           — homepage (hero + course catalog)
  globals.css        — brand color variables, base styles
components/
  Logo.tsx            — broken-infinity mark, swappable center icon
  Nav.tsx             — top navigation
  CourseCard.tsx       — course catalog card (live / coming-soon states)
```

## What to build next (per the day-by-day plan)

- Phase 0 Day 1: Supabase project + `profiles` table + Auth (do this first, it's not in this scaffold)
- Phase 0 Day 5: Anthropic API calling helper (assemble context → call Claude → store jsonb)
- Phase 0 Day 6: Background job queue (Celery+Redis or Supabase Edge Functions + cron)
- Phase 1: Onboarding flow (splash → sign-up → referral source → "setting up your coach")
