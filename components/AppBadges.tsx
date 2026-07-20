function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Deliberately built as generic buttons rather than the official Apple/Google
 * badge artwork — those are trademarked assets. Also shown in a "coming soon"
 * state since the app isn't live yet; swap the href + label once it ships.
 */
export function AppBadges() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex flex-1 cursor-not-allowed items-center gap-3 rounded border border-border bg-surface px-5 py-3 opacity-70">
        <DownloadIcon />
        <div className="text-left">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Coming soon
          </p>
          <p className="font-display text-sm font-bold">App Store</p>
        </div>
      </div>
      <div className="flex flex-1 cursor-not-allowed items-center gap-3 rounded border border-border bg-surface px-5 py-3 opacity-70">
        <DownloadIcon />
        <div className="text-left">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Coming soon
          </p>
          <p className="font-display text-sm font-bold">Google Play</p>
        </div>
      </div>
    </div>
  );
}
