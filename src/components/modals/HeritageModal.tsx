import React from 'react';
import { X, Calendar } from 'lucide-react';

interface HeritageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeritageModal: React.FC<HeritageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const milestones = [
    {
      year: '1978',
      title: 'Foundation in Artisanal Stonemasonry',
      desc: 'Founded by master masons delivering high-precision globigerina limestone restoration and structural residential framing with traditional craftsmanship.'
    },
    {
      year: '1989',
      title: 'First Automated Concrete Batching Campus',
      desc: 'Commissioned our proprietary automated batching plant in Hal Far, introducing computer-controlled slump testing and certified ready-mix concrete.'
    },
    {
      year: '1998',
      title: 'Expansion into Tier-1 Civil Infrastructure',
      desc: 'Awarded landmark marine deep-pile civil engineering contracts, harbor quay walls, and the first post-tensioned commercial high-rise towers in the region.'
    },
    {
      year: '2008',
      title: '12,000m² Artisanal Joinery Atelier Inauguration',
      desc: 'Established our state-of-the-art woodworking and CNC milling facility in San Gwann, serving five-star hospitality brands across Europe.'
    },
    {
      year: '2017',
      title: 'Establishment of Valmont Property Development',
      desc: 'Launched our real estate development vehicle, investing €480M+ in luxury residential sanctuaries and sustainable passive-house commercial offices.'
    },
    {
      year: '2024 - 2026',
      title: 'Net-Zero GeoCrete & Digital Twin Construction',
      desc: 'Pioneered low-carbon precast formulas reducing embodied carbon by 38% alongside full BIM Level 2 digital twin lifecycle handovers.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-3xl bg-[#F5F2EC] text-[#252525] border border-[#D9D3C8] shadow-2xl overflow-hidden my-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D3C8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#243B32]">
              Corporate History
            </span>
            <span className="text-[#D9D3C8]">·</span>
            <span className="text-xs text-[#A58B65] font-mono">
              EST. 1978 &ndash; PRESENT
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#243B32] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
              48 Years of Construction Excellence
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-[#243B32] font-normal mt-1">
              Building Enduring Legacies
            </h2>
            <p className="text-xs sm:text-sm text-[#252525]/80 mt-2 leading-relaxed">
              From an independent stonemasonry atelier in 1978 to a multi-tiered corporate group operating four specialized business divisions, explore the milestones that defined our trajectory.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D9D3C8]">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#243B32] bg-[#F5F2EC] group-hover:bg-[#243B32] transition-colors" />

                <div className="space-y-1">
                  <span className="font-serif-title text-xl text-[#A58B65] font-semibold tabular-nums">
                    {m.year}
                  </span>
                  <h4 className="font-serif-title text-lg text-[#243B32] font-normal">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 border-t border-[#D9D3C8] bg-[#EBE7DF]">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#243B32] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#192A23] transition-colors cursor-pointer"
          >
            Close History
          </button>
        </div>
      </div>
    </div>
  );
};
