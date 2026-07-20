import { CourseLogo } from "./Logo";
import { FCMobileIllustration, FreeFireIllustration, CallOfDutyIllustration } from "./CourseIllustrations";

const illustrations: Record<string, React.ReactNode> = {
  "pro-season": <FCMobileIllustration />,
  "fire-royale": <FreeFireIllustration />,
  "duty-squad": <CallOfDutyIllustration />,
};

export function CourseCard({
  name,
  subtitle,
  course,
  status,
  size = "default",
}: {
  name: string;
  subtitle: string;
  course: "pro-season" | "fire-royale" | "duty-squad" | "content-creation" | "tech";
  status: "live" | "coming-soon";
  size?: "default" | "compact";
}) {
  const isLive = status === "live";
  const isCompact = size === "compact";
  const illustration = illustrations[course];

  return (
    <div
      className={`hover-lift group relative overflow-hidden rounded-lg border p-5 transition-all sm:p-6 ${
        isLive
          ? "border-primary/40 bg-surface-elevated hover:border-primary hover:shadow-[0_0_24px_-6px_rgba(57,255,106,0.2)]"
          : "border-border bg-surface/30 hover:border-border-bright"
      } ${isCompact ? "opacity-60" : ""}`}
    >
      {illustration && !isCompact && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {illustration}
        </div>
      )}

      {!isLive && !isCompact && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] transition-opacity group-hover:opacity-70" />
      )}

      <div className="relative">
        <CourseLogo course={course} size={isCompact ? 32 : 44} />
        <h3 className={`mt-3 font-display font-bold transition-colors group-hover:text-foreground sm:mt-4 ${isCompact ? "text-sm" : "text-base sm:text-lg"}`}>
          {name}
        </h3>
        <p className={`mt-1 text-xs text-muted sm:text-sm ${isCompact ? "line-clamp-2" : ""}`}>{subtitle}</p>
        <span
          className={`mt-4 inline-block rounded px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest transition-colors sm:text-[10px] ${
            isLive ? "bg-primary/10 text-primary" : "bg-border text-muted"
          }`}
        >
          {isLive ? "Live now" : "Coming soon"}
        </span>
      </div>
    </div>
  );
}
