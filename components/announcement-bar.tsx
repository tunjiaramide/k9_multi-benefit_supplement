const message = "Joint · Digestive · Skin & Coat · Everyday Wellness";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-bg-soft text-ink/80">
      <div className="flex whitespace-nowrap py-2 text-xs font-data tracking-wide">
        <div className="animate-[marquee_30s_linear_infinite] flex shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>{message}</span>
              <span className="text-accent" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
        <div
          className="animate-[marquee_30s_linear_infinite] flex shrink-0 items-center gap-8 pr-8 motion-reduce:animate-none"
          aria-hidden
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>{message}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
