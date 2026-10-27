import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Division } from '../../data/companyData';
import { NavSection } from '../Navbar';

export interface AllNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (section: NavSection) => void;
  onSelectDivision?: (division: Division) => void;
  onOpenConsultation?: () => void;
  onOpenHeritage?: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const AllNavModal: React.FC<AllNavModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenConsultation,
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (section: NavSection) => {
    onClose();
    if (onNavigate) {
      onNavigate(section);
    } else {
      window.location.hash = section;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-in fade-in duration-200 font-sans">
      {/* Semi-transparent backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Left Slide-in Expertise Drawer matching live reference screenshot */}
      <div 
        className="relative z-10 w-full max-w-[480px] sm:max-w-[520px] bg-[#002147] text-white h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300 border-r border-white/10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Attard Bros Expertise Divisions Menu"
      >
        {/* Top Header with Brand Mark and Close Button */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/15 bg-[#001733] shrink-0">
          <div className="flex items-center gap-3">
            <svg 
              viewBox="0 0 32 30" 
              className="w-6 h-6 text-white fill-none stroke-current" 
              strokeWidth="2.2" 
              strokeLinejoin="round" 
              strokeLinecap="round"
            >
              <polygon points="16,3 23,15 9,15" />
              <polygon points="8,17 15,29 1,29" />
              <polygon points="24,17 31,29 17,29" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[14px] font-semibold tracking-tight uppercase text-white">Attard Bros Group</span>
              <span className="text-[11px] tracking-wider uppercase text-white/60">Expertise Divisions</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer rounded-xs"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Dedicated Expertise Cards (Stacked Vertically & Divided by Subtle Hairlines) */}
        <div className="flex-1 flex flex-col divide-y divide-white/15">
          {/* 1. Attard Materials */}
          <button
            type="button"
            onClick={() => handleSelect('materials')}
            className="group w-full text-left p-6 sm:p-8 flex flex-col justify-between flex-1 hover:bg-white/[0.04] transition-all cursor-pointer relative"
          >
            <div className="flex items-start justify-between w-full gap-4">
              {/* Logo / Brand Name */}
              <img 
                src="/images/attard-materials.svg" 
                alt="Attard Materials" 
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  // Text fallback if svg is unavailable
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Large Diagonal Arrow matching reference */}
              <div className="text-[#14AFFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path 
                    d="M10.2788 0.8733L12.5883 3.1855L35.7656 4.2318L36.8146 27.409L39.1241 29.7185" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                  <path 
                    d="M0.8733 39.124L35.7655 4.2318" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>

            <p className="text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed mt-6">
              Attard Materials is a leading supplier of high-quality construction materials from foundation to finish.
            </p>
          </button>

          {/* 2. Attard Projects */}
          <button
            type="button"
            onClick={() => handleSelect('projects')}
            className="group w-full text-left p-6 sm:p-8 flex flex-col justify-between flex-1 hover:bg-white/[0.04] transition-all cursor-pointer relative"
          >
            <div className="flex items-start justify-between w-full gap-4">
              {/* Logo / Brand Name */}
              <img 
                src="/images/attard-projects.svg" 
                alt="Attard Projects" 
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Large Diagonal Arrow matching reference */}
              <div className="text-[#E06A3B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path 
                    d="M10.2788 0.8733L12.5883 3.1855L35.7656 4.2318L36.8146 27.409L39.1241 29.7185" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                  <path 
                    d="M0.8733 39.124L35.7655 4.2318" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>

            <p className="text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed mt-6">
              At Attard Projects, we provide 360-degree services and project management in construction, fit-outs and joinery to execute your vision from its early ideas to completion.
            </p>
          </button>

          {/* 3. Attard Properties */}
          <button
            type="button"
            onClick={() => handleSelect('properties')}
            className="group w-full text-left p-6 sm:p-8 flex flex-col justify-between flex-1 hover:bg-white/[0.04] transition-all cursor-pointer relative"
          >
            <div className="flex items-start justify-between w-full gap-4">
              {/* Logo / Brand Name */}
              <img 
                src="/images/attard-properties.svg" 
                alt="Attard Properties" 
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Large Diagonal Arrow matching reference */}
              <div className="text-[#D4DF72] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path 
                    d="M10.2788 0.8733L12.5883 3.1855L35.7656 4.2318L36.8146 27.409L39.1241 29.7185" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                  <path 
                    d="M0.8733 39.124L35.7655 4.2318" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>

            <p className="text-white/90 text-sm sm:text-[15px] font-normal leading-relaxed mt-6">
              Attard Properties is where we build top-tier modern residences in the most sought-after locations.
            </p>
          </button>
        </div>

        {/* Bottom Bar with Quick Links */}
        <div className="px-6 sm:px-8 py-4 border-t border-white/15 bg-[#001733] flex items-center justify-between text-xs text-white/70 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('expertise')}
            className="hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>All Expertise Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {onOpenConsultation && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="text-[#14AFFF] hover:text-white font-medium transition-colors cursor-pointer"
            >
              Contact Directorate
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
