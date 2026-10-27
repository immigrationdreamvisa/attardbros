import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onScrollToOverview?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onExploreProjects,
  onScrollToOverview 
}) => {
  const handleScrollDown = () => {
    if (onScrollToOverview) {
      onScrollToOverview();
    } else {
      const el = document.getElementById('home-expertise');
      if (el) {
        const navOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] max-h-[1080px] w-full flex flex-col justify-end text-white bg-[#001428] font-sans overflow-hidden">
      {/* Background Architectural Canvas - Exact Match to Attard Bros Reference Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.prod.website-files.com/686bcd3b2b3764c6da874887/68e7a7c917525db4bffe80f0_home-hero.webp"
          alt="Attard Bros landmark architectural facade with modern grey louvers and glazing"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Subtle Contrast Scrim Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35" />
      </div>

      {/* Main Bottom-Left Content - Exact Match to Reference Screenshot */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full pb-14 sm:pb-20 lg:pb-24">
        <div className="space-y-6 sm:space-y-7 max-w-4xl">
          {/* Monumental Clean Typography */}
          <h1 className="text-white text-5xl sm:text-7xl lg:text-[88px] font-normal tracking-tight leading-[1.04] select-none font-sans drop-shadow-md">
            Creating <br />
            Better Spaces.
          </h1>

          {/* Scroll to Explore Link with Chevron */}
          <div className="pt-1">
            <button
              onClick={handleScrollDown}
              className="inline-flex items-center gap-2.5 text-white hover:text-white/85 text-[17px] sm:text-[19px] font-light tracking-wide transition-all cursor-pointer group select-none drop-shadow-sm"
              aria-label="Scroll to explore more content"
            >
              <span>Scroll to explore</span>
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
