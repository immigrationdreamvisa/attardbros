import React, { useState } from 'react';
import { X, MapPin, Calendar, Layers, CheckCircle2, ArrowUpRight, Share2, Check } from 'lucide-react';
import { Project } from '../../data/companyData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState<string>(project.heroImage);
  const [copied, setCopied] = useState(false);

  const allImages = [project.heroImage, ...(project.gallery || [])];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-5xl bg-[#F5F2EC] text-[#252525] border border-[#D9D3C8] shadow-2xl overflow-hidden my-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D3C8] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#243B32] border-r border-[#D9D3C8] pr-3">
              {project.category}
            </span>
            <span className="text-xs text-[#A58B65] font-mono">
              PROJECT DOSSIER · REF #{project.id.toUpperCase().slice(0, 8)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#252525]/70 hover:text-[#243B32] transition-colors flex items-center gap-1.5 text-xs"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#252525]/70 hover:text-[#243B32] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Main Hero Image */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] bg-[#192A23] overflow-hidden border border-[#D9D3C8]">
              <img
                src={activeImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13201A]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs font-mono text-[#F5F2EC] bg-[#13201A]/80 px-2.5 py-1 border border-[#243B32]">
                LOCATION: {project.location} · YEAR: {project.year}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#243B32] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Header */}
          <div className="border-b border-[#D9D3C8] pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#252525]/60 mb-2">
              <span className="font-semibold text-[#243B32]">{project.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#A58B65]" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 font-mono text-[#A58B65]">
                <Calendar className="w-3.5 h-3.5" />
                Completed {project.year}
              </span>
            </div>

            <h3 className="font-serif-title text-3xl sm:text-4xl text-[#243B32] font-normal">
              {project.title}
            </h3>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#EBE7DF] border border-[#D9D3C8]">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
                Client / Commission
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#252525] mt-1 truncate">
                {project.client}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
                Built Surface Area
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#252525] mt-1 font-mono">
                {project.area}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
                Contract Model
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#252525] mt-1">
                EPC Turnkey General
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#243B32] font-semibold">
                Environmental Standard
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#A58B65] mt-1 font-mono">
                BREEAM / LEED Gold
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-4">
            <h4 className="font-serif-title text-2xl text-[#243B32] font-normal">
              Architectural & Structural Overview
            </h4>
            <p className="text-sm text-[#252525]/85 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#D9D3C8]">
            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#243B32] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A58B65]" />
                <span>Architectural Highlights</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#252525]/85">
                {project.architecturalHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#243B32] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#243B32] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A58B65]" />
                <span>Engineering & Civil Scope</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#252525]/85">
                {project.engineeringScope.map((scope, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#243B32] shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5 border-t border-[#D9D3C8] bg-[#EBE7DF]">
          <div className="text-xs text-[#252525]/70">
            Interested in commissioning similar structural works or fit-outs?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-[#D9D3C8] text-xs font-semibold uppercase tracking-wider text-[#252525] hover:bg-white transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#243B32] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#192A23] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Consult Directorate</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A58B65]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
