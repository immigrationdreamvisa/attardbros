import React from 'react';
import { ArrowRight, Check, ShieldCheck, Building2, Layers, Award } from 'lucide-react';
import { NavSection } from './Navbar';

interface AboutSectionProps {
  onOpenHeritage?: () => void;
  onOpenConsultation?: () => void;
  onNavigate?: (section: NavSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenHeritage, 
  onOpenConsultation,
  onNavigate 
}) => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-white text-[#062746] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#547A9B]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#547A9B] font-mono">
            About Attard Bros Group
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Narrative, Pillars & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Large Elegant Heading (64-82px on desktop) */}
            <h1 className="text-display-large font-bold text-[#062746] text-balance">
              Building Excellence Through Generations.
            </h1>

            {/* Introductory Statement (18-20px) */}
            <p className="text-editorial-body font-medium text-[#062746]/90 leading-relaxed max-w-2xl">
              We are committed to delivering excellence across construction, engineering, materials production, property development, fit-outs and joinery.
            </p>

            {/* In-depth Narrative */}
            <div className="space-y-5 text-base sm:text-lg text-[#344B62] leading-relaxed max-w-2xl border-t border-[#E8ECF0] pt-6">
              <p>
                Founded in 1977 as an artisanal stonemasonry enterprise in Malta, Attard Bros Group has grown into an internationally benchmarked construction conglomerate. Over nearly five decades, our multi-generational leadership has championed unified vertical execution—controlling every critical discipline from raw aggregates to high-rise civil handovers.
              </p>
              <p>
                Unlike conventional general contracting firms that outsource mission-critical stages, Attard Bros operates with complete industrial self-sufficiency. We engineer our own precast concrete, run dedicated automated batching facilities, craft bespoke architectural joinery in our 12,000m² factory, and provide chartered structural engineering from project inception.
              </p>
            </div>

            {/* Key Value Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8ECF0]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#062746]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#547A9B]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#062746]">Vertical Supply Autonomy</div>
                  <div className="text-xs text-[#344B62] mt-0.5">Automated batching & precast complexes</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#062746]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#547A9B]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#062746]">BIM Level 2 Engineering</div>
                  <div className="text-xs text-[#344B62] mt-0.5">Digital-twin clash detection & precision</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#062746]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#547A9B]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#062746]">Master Joinery Atelier</div>
                  <div className="text-xs text-[#344B62] mt-0.5">12,000m² robotic CNC manufacturing</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#062746]/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#547A9B]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#062746]">Triple ISO Certified</div>
                  <div className="text-xs text-[#344B62] mt-0.5">ISO 9001, ISO 14001 & ISO 45001</div>
                </div>
              </div>
            </div>

            {/* Navigation Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                onClick={() => onNavigate && onNavigate('history')}
                className="px-8 py-4 bg-[#062746] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0A3762] transition-colors cursor-pointer flex items-center gap-2.5 rounded-none shadow-sm"
              >
                <span>Our History</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('strategy')}
                className="px-8 py-4 border border-[#E8ECF0] text-[#062746] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8F9FA] hover:border-[#062746]/30 transition-colors cursor-pointer flex items-center gap-2.5 rounded-none"
              >
                <span>Our Strategy</span>
                <ArrowRight className="w-4 h-4 text-[#547A9B]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#547A9B] hover:text-[#062746] transition-colors cursor-pointer"
              >
                Request Briefing
              </button>
            </div>
          </div>

          {/* Right Column: Genuine Construction Photograph (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Simple rectangular image composition with subtle border and shadow */}
            <div className="relative border border-[#E8ECF0] p-2 bg-[#F8F9FA] shadow-[0_4px_20px_rgba(6,39,70,0.04)]">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src="/images/bim-digital-twin-site.jpg"
                  alt="Attard Bros civil engineers and construction directors reviewing technical blueprints on active site"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
              </div>

              {/* Minimalist Caption Bar */}
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-[#344B62]">
                <span className="font-semibold text-[#062746]">Civil Engineering Directorate</span>
                <span className="font-mono text-[11px] text-[#547A9B]">EST. 1977 · MALTA</span>
              </div>
            </div>

            {/* Key Corporate Metrics Row */}
            <div className="grid grid-cols-3 gap-3 border border-[#E8ECF0] p-6 bg-white shadow-[0_2px_12px_rgba(6,39,70,0.03)]">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#062746] font-mono">1977</div>
                <div className="text-[11px] uppercase tracking-wider text-[#547A9B] font-semibold mt-1">Founded</div>
              </div>
              <div className="border-l border-[#E8ECF0] pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#062746] font-mono">650+</div>
                <div className="text-[11px] uppercase tracking-wider text-[#547A9B] font-semibold mt-1">Projects</div>
              </div>
              <div className="border-l border-[#E8ECF0] pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#062746] font-mono">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-[#547A9B] font-semibold mt-1">In-House</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
