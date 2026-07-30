import { CourseLogo } from "./Logo";
import {
  FCMobileIllustration,
  FreeFireIllustration,
  CallOfDutyIllustration,
} from "./CourseIllustrations";

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
  course:
    | "pro-season"
    | "fire-royale"
    | "duty-squad"
    | "content-creation"
    | "tech";
  status: "live" | "coming-soon";
  size?: "default" | "compact";
}) {
  const isLive = status === "live";
  const isCompact = size === "compact";
  const illustration = illustrations[course];

  return (
    <div
      className={`glass-card hover-lift group relative overflow-hidden p-6 ${
        isLive
          ? "!border-primary/30 hover:!border-primary hover:shadow-glow-md"
          : ""
      } ${isCompact ? "opacity-60" : ""}`}
    >
      {illustration && !isCompact && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {illustration}
        </div>
      )}

      {!isLive && !isCompact && (
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] transition-opacity group-hover:opacity-60 rounded-2xl" />
      )}

      <div className="relative">
        <CourseLogo course={course} size={isCompact ? 32 : 44} />
        <h3
          className={`mt-4 font-display font-bold transition-colors group-hover:text-foreground ${
            isCompact ? "text-sm" : "text-lg"
          }`}
        >
          {name}
        </h3>
        <p
          className={`mt-2 text-sm text-muted ${
            isCompact ? "line-clamp-2" : ""
          }`}
        >
          {subtitle}
        </p>
        <span
          className={`mt-5 inline-block rounded-lg px-3 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors ${
            isLive
              ? "bg-primary/10 text-primary"
              : "bg-surface text-muted border border-border"
          }`}
        >
          {isLive ? "Live now" : "Coming soon"}
        </span>
      </div>
    </div>
  );
}
