"use client";

/**
 * Esports-broadcast style scrolling ticker.
 * Sits between sections to add rhythm + constant motion.
 * Duplicates content so the loop is seamless.
 */
export function Marquee({
  items,
  speed = "normal",
  reverse = false,
  className = "",
}: {
  items: string[];
  speed?: "normal" | "fast";
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className={`marquee-track ${speed === "fast" ? "fast" : ""} ${reverse ? "rev" : ""}`}>
        {row.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted/80 whitespace-nowrap">
            <span className="text-primary">◆</span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
