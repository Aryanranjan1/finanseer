import { cn } from "@/lib/utils";

export function RiveAnimationPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden bg-[#0a0f18]",
        className
      )}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </div>
  );
}
