function initials(name: string) {
  const clean = name.trim();
  if (!clean) return "?";
  const parts = clean.split(/[\s_-]+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function ProfilePreview({ username }: { username: string }) {
  const displayName = username || "player";

  return (
    <div className="rounded border border-primary/30 bg-surface-elevated p-6 shadow-[0_0_40px_-14px_rgba(57,255,106,0.35)]">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background font-display text-lg font-bold text-primary">
          {initials(displayName)}
        </div>
        <div>
          <p className="font-display text-lg font-bold">@{displayName}</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Pro Season Academy
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
          Your Journey
        </p>
        <p className="mt-2 text-sm text-foreground">
          Choose your coach on the dashboard. Your choice is locked — this is your path now.
        </p>
      </div>

      <p className="mt-4 text-xs text-muted">
        Every lesson, every checkpoint, every coaching moment — pulled from their actual career.
      </p>
    </div>
  );
}
