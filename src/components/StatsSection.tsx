import React, { useEffect, useState, useRef } from 'react';
import { COMPANY_STATS } from '../data/companyData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(COMPANY_STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts = COMPANY_STATS.map((stat) => {
        return Math.floor(easedProgress * stat.value);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(COMPANY_STATS.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#192A23] text-[#F5F2EC] border-y border-[#243B32] relative font-sans">
      <div className="absolute inset-0 bg-architectural-grid-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Minimal Horizontal Number-Based Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#243B32]">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F2EC] tracking-tight tabular-nums">
                    {stat.prefix}
                    {counts[idx]}
                  </span>
                  <span className="font-serif-title text-3xl sm:text-4xl text-[#A58B65] font-light">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9D3C8] mt-2">
                  {stat.label}
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs text-[#A58B65] mt-4 font-normal">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
