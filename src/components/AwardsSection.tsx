import React from 'react';
import { Trophy } from 'lucide-react';
import { AWARDS } from '../data/companyData';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-24 lg:py-36 bg-[#F5F2EC] border-b border-[#D9D3C8] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#243B32] font-semibold mb-3">
              <span>05 · Institutional Honors</span>
              <span aria-hidden="true" className="text-[#A58B65]">·</span>
              <span>Peer Recognition</span>
            </div>
            <h2 className="font-serif-title text-section-title font-light text-[#243B32] tracking-tight leading-[1.08]">
              Honored for Architectural & <br />
              <span className="italic font-normal text-[#A58B65]">Structural Excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#252525]/80 leading-relaxed">
            Consistently recognized by international and European civil engineering bodies for pioneering sustainable construction, precast innovation, and master-crafted interiors.
          </p>
        </div>

        {/* Clean Horizontal Editorial Layout */}
        <div className="divide-y divide-[#D9D3C8] border-y border-[#D9D3C8]">
          {AWARDS.map((award, index) => (
            <div
              key={index}
              className="py-8 lg:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-[#EBE7DF] transition-colors px-4 -mx-4"
            >
              {/* Year & Badge (2 cols) */}
              <div className="md:col-span-2 flex items-center md:flex-col md:items-start justify-between gap-2">
                <span className="font-serif-title text-3xl lg:text-4xl font-light text-[#243B32] group-hover:text-[#A58B65] transition-colors tabular-nums">
                  {award.year}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A58B65] font-semibold">
                  {award.category}
                </span>
              </div>

              {/* Award Title & Organization (5 cols) */}
              <div className="md:col-span-5 space-y-1">
                <h3 className="font-serif-title text-xl sm:text-2xl text-[#243B32] font-normal group-hover:text-[#A58B65] transition-colors">
                  {award.title}
                </h3>
                <div className="text-xs text-[#252525]/70 font-medium tracking-wide">
                  {award.organization}
                </div>
              </div>

              {/* Award Description (5 cols) */}
              <div className="md:col-span-5 flex items-start justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
                  {award.description}
                </p>
                <div className="w-10 h-10 shrink-0 border border-[#D9D3C8] bg-white flex items-center justify-center text-[#243B32] group-hover:border-[#243B32] group-hover:bg-[#243B32] group-hover:text-[#F5F2EC] transition-all duration-300">
                  <Trophy className="w-4 h-4 text-[#A58B65] group-hover:text-[#F5F2EC]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
