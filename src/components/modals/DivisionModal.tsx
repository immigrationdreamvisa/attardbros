import React, { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, Download } from 'lucide-react';
import { Division } from '../../data/companyData';

interface DivisionModalProps {
  division: Division | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  division,
  onClose,
  onOpenConsultation,
}) => {
  if (!division) return null;

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-5xl bg-[#F5F2EC] text-[#252525] border border-[#D9D3C8] shadow-2xl overflow-hidden my-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D3C8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#243B32]">
              Specialized Business Division
            </span>
            <span className="text-[#D9D3C8]">·</span>
            <span className="text-xs text-[#A58B65] font-mono">
              VALMONT OPERATIONAL ARM
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

        {/* Modal Scroll Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Header Banner with new image */}
          <div className="relative aspect-[21/9] sm:aspect-[16/7] bg-[#192A23] overflow-hidden border border-[#D9D3C8]">
            <img
              src={division.image}
              alt={division.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13201A] via-[#192A23]/50 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A58B65]">
                {division.featuredFacility}
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#F5F2EC] font-light mt-1">
                {division.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D3C8] mt-2 max-w-2xl">
                {division.tagline}
              </p>
            </div>
          </div>

          {/* Division Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#EBE7DF] border border-[#D9D3C8]">
            {division.keyStats.map((stat, i) => (
              <div key={i}>
                <div className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
                  {stat.label}
                </div>
                <div className="text-xl sm:text-2xl font-serif-title text-[#243B32] mt-1 font-semibold tabular-nums">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h3 className="font-serif-title text-2xl text-[#243B32] font-normal">
              Division Architecture & Operational Scale
            </h3>
            <p className="text-sm text-[#252525]/85 leading-relaxed">
              {division.longDescription}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-4 pt-4 border-t border-[#D9D3C8]">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#243B32]">
              Specialized Scope of Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {division.capabilities.map((cap, i) => (
                <div key={i} className="p-4 bg-white border border-[#D9D3C8] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#243B32] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#252525]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Production Campus */}
          <div className="p-6 bg-white border border-[#D9D3C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A58B65]">
                Dedicated Campus
              </span>
              <h5 className="font-serif-title text-lg text-[#243B32] mt-0.5 font-normal">
                {division.featuredFacility}
              </h5>
              <p className="text-xs text-[#252525]/70 mt-1">
                Equipped with automated machinery, quality testing labs, and certified safety infrastructure.
              </p>
            </div>
            <button
              onClick={handleDownloadBrochure}
              className="px-4 py-2 text-xs border border-[#D9D3C8] hover:border-[#243B32] text-[#243B32] transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#A58B65]" />
              <span>{downloadSuccess ? 'Brochure Dossier Saved' : 'Technical PDF Sheet'}</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-[#D9D3C8] bg-[#EBE7DF]">
          <div className="text-xs text-[#252525]/70">
            Discuss tender requirements or schedule a facility inspection with division leadership.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-[#D9D3C8] text-xs font-semibold uppercase tracking-wider text-[#252525] hover:bg-white transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#243B32] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#192A23] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Consult Division Director</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A58B65]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
