import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Building2, 
  Layers, 
  Hammer, 
  Home, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { DIVISIONS, Division } from '../data/companyData';

interface DivisionsSectionProps {
  onSelectDivision: (division: Division) => void;
  onOpenConsultation?: () => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({ 
  onSelectDivision,
  onOpenConsultation 
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'construction-projects':
        return <Building2 className="w-5 h-5 text-[#A58B65]" />;
      case 'building-materials':
        return <Layers className="w-5 h-5 text-[#A58B65]" />;
      case 'interior-fitout':
        return <Hammer className="w-5 h-5 text-[#A58B65]" />;
      case 'property-development':
        return <Home className="w-5 h-5 text-[#A58B65]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#A58B65]" />;
    }
  };

  const getDivisionBadge = (id: string, idx: number) => {
    switch (id) {
      case 'construction-projects':
        return {
          code: 'ATELIER 01',
          category: 'TIER-1 EPC & CIVIL CONTRACTING',
          accent: 'EUROCODE CERTIFIED',
          scopeSummary: 'Monumental structural framing, marine port works, deep piling & seismic stabilization.'
        };
      case 'building-materials':
        return {
          code: 'ATELIER 02',
          category: 'ARCHITECTURAL PRECAST & CONCRETE',
          accent: 'AUTOMATED BATCHING',
          scopeSummary: 'CE-marked precast panels, hollowcore floor slabs, GeoCrete low-carbon mixes & dressed travertine.'
        };
      case 'interior-fitout':
        return {
          code: 'ATELIER 03',
          category: '5-AXIS CNC & MASTER JOINERY',
          accent: '12,000 M² PRODUCTION ATELIER',
          scopeSummary: 'Bespoke millwork, acoustic timber walling, luxury hotel fit-outs & certified fire doors.'
        };
      case 'property-development':
        return {
          code: 'ATELIER 04',
          category: 'PRIME REAL ESTATE & ESG ASSETS',
          accent: 'LEED & BREEAM CERTIFIED',
          scopeSummary: 'Visionary coastal estates, Grade-A commercial pavilions & biophilic passive house masterplans.'
        };
      default:
        return {
          code: `ATELIER 0${idx + 1}`,
          category: 'SPECIALIZED VALMONT DIVISION',
          accent: 'IN-HOUSE ATELIER',
          scopeSummary: 'Integrated multidisciplinary execution.'
        };
    }
  };

  const scrollToDivision = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`division-card-${id}`);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const displayedDivisions = activeTab === 'all' 
    ? DIVISIONS 
    : DIVISIONS.filter(d => d.id === activeTab);

  return (
    <section id="divisions" className="py-20 lg:py-32 bg-[#EBE7DF] border-b border-[#D9D3C8] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#243B32] font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#A58B65]" />
              <span>02 · Vertical Integration</span>
              <span aria-hidden="true" className="text-[#A58B65]">·</span>
              <span>4 Specialized Ateliers</span>
            </div>
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-light text-[#243B32] tracking-tight leading-[1.06]">
              Specialized Divisions. <br />
              <span className="italic font-normal text-[#A58B65]">Four In-House Ateliers.</span>
            </h1>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-[#252525]/85 leading-relaxed">
              By unifying quarrying, European-standard concrete batching, heavy structural contracting, and 5-axis joinery under single-point ownership, Valmont Group eliminates subcontractor friction and delivers uncompromising architectural integrity.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#A58B65] uppercase">
              <span>Zero Subcontractor Friction</span>
              <span className="text-[#252525]/30">·</span>
              <span>Singular Accountability</span>
            </div>
          </div>
        </div>

        {/* Interactive 4-Atelier Quick Switcher Navigation Bar */}
        <div className="mb-14 p-2 bg-[#F5F2EC] border border-[#D9D3C8] flex flex-wrap items-center justify-between gap-2 shadow-xs">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#243B32] text-[#F5F2EC] shadow-xs'
                  : 'text-[#252525]/75 hover:text-[#243B32] hover:bg-white'
              }`}
            >
              All 4 Ateliers
            </button>
            {DIVISIONS.map((div, i) => (
              <button
                key={div.id}
                onClick={() => scrollToDivision(div.id)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === div.id
                    ? 'bg-[#243B32] text-[#F5F2EC] shadow-xs'
                    : 'text-[#252525]/75 hover:text-[#243B32] hover:bg-white'
                }`}
              >
                <span className="text-[10px] font-mono text-[#A58B65]">0{i + 1}</span>
                <span>{div.name}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 text-xs text-[#252525]/60 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A58B65]" />
            <span>CE & EUROCODE CERTIFIED</span>
          </div>
        </div>

        {/* Alternating In-Depth Showcases for the 4 Divisions */}
        <div className="space-y-16 lg:space-y-20">
          {displayedDivisions.map((div, index) => {
            const meta = getDivisionBadge(div.id, index);
            const isEven = index % 2 === 1;

            return (
              <div
                key={div.id}
                id={`division-card-${div.id}`}
                className="group bg-[#F5F2EC] border border-[#D9D3C8] p-6 sm:p-10 lg:p-12 hover:border-[#A58B65] transition-all duration-500 shadow-sm hover:shadow-2xl scroll-mt-28"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Showcase Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div 
                      onClick={() => onSelectDivision(div)}
                      className="relative overflow-hidden aspect-[16/10] bg-[#192A23] border border-[#D9D3C8] cursor-pointer group/img"
                    >
                      <img
                        src={div.image}
                        alt={div.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 filter brightness-[0.92] group-hover/img:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1713] via-[#0e1713]/40 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2EC] px-3 py-1 bg-[#13201A]/85 backdrop-blur-md border border-white/10">
                          <span className="text-[#A58B65] font-semibold">{meta.code}</span>
                          <span className="text-white/30">/</span>
                          <span className="tracking-widest uppercase text-[10px]">{meta.accent}</span>
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-[#13201A]/80 text-[#A58B65] backdrop-blur-md border border-white/10">
                          {div.keyStats[0]?.value}
                        </span>
                      </div>

                      {/* Bottom Facility & Title on Image */}
                      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#A58B65] mb-1">
                            <MapPin className="w-3 h-3 text-[#A58B65]" />
                            <span>{div.featuredFacility}</span>
                          </div>
                          <h3 className="font-serif-title text-2xl sm:text-3xl text-[#F5F2EC] font-light leading-snug">
                            {div.name}
                          </h3>
                        </div>
                        <div className="w-11 h-11 bg-[#13201A]/90 backdrop-blur-md border border-[#A58B65]/40 text-[#F5F2EC] flex items-center justify-center group-hover/img:bg-[#A58B65] group-hover/img:text-[#192A23] transition-all duration-300 shadow-md">
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover/img:translate-x-0.5 group-hover/img:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specification & Scopes Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A58B65] font-semibold mb-2">
                        {getDivisionIcon(div.id)}
                        <span>{meta.category}</span>
                      </div>
                      <h2 className="font-serif-title text-3xl sm:text-4xl text-[#243B32] font-normal leading-tight">
                        {div.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#A58B65] font-medium mt-1">
                        {div.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#252525]/85 leading-relaxed">
                      {div.longDescription}
                    </p>

                    {/* Key Engineering Scopes Grid */}
                    <div className="pt-4 border-t border-[#D9D3C8] space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#243B32] font-semibold">
                        <span>Core In-House Capabilities</span>
                        <span className="text-[10px] font-mono text-[#A58B65]">CE Mark Accredited</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#252525]">
                        {div.capabilities.slice(0, 4).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 p-2 bg-white/70 border border-[#D9D3C8]/60">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#243B32] shrink-0 mt-0.5" />
                            <span className="font-medium text-[11px] leading-tight">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Division Production Metrics & Action CTAs */}
                    <div className="pt-4 border-t border-[#D9D3C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        {div.keyStats.slice(0, 2).map((st, i) => (
                          <div key={i}>
                            <div className="text-lg sm:text-xl font-serif-title text-[#243B32] font-semibold tabular-nums">
                              {st.value}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-[#A58B65] font-medium">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => onSelectDivision(div)}
                          className="px-4 py-2.5 bg-[#243B32] hover:bg-[#192A23] text-[#F5F2EC] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                        >
                          <span>Explore Dossier</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#A58B65]" />
                        </button>
                        {onOpenConsultation && (
                          <button
                            onClick={onOpenConsultation}
                            className="p-2.5 border border-[#D9D3C8] hover:border-[#243B32] text-[#243B32] hover:bg-white transition-colors cursor-pointer"
                            title="Consult Division Director"
                          >
                            <PhoneCall className="w-4 h-4 text-[#A58B65]" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vertical Integration Synergy Infographic Card */}
        <div className="mt-20 p-8 sm:p-12 bg-[#13201A] text-[#F5F2EC] border border-[#243B32] relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-mono text-[#A58B65]">
              <Sparkles className="w-3.5 h-3.5 text-[#A58B65]" />
              <span>Singular Project Governance</span>
            </div>
            <h3 className="font-serif-title text-3xl sm:text-4xl font-light text-[#F5F2EC] leading-tight">
              The Valmont Integrated Advantage: <br />
              <span className="italic text-[#A58B65]">One Master Contractor, Zero Friction.</span>
            </h3>
            <p className="text-sm text-[#D9D3C8] leading-relaxed max-w-2xl">
              Traditional developers coordinate 20+ disconnected subcontractors, compounding delays, blame-shifting, and budget creep. Valmont replaces this fragile model by producing certified precast, casting structural concrete, fabricating master woodwork, and financing real estate internally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 border-t border-[#243B32]">
              <div>
                <span className="text-[10px] font-mono text-[#A58B65] uppercase">Phase 01</span>
                <div className="text-sm font-semibold text-white mt-0.5">Raw Material Batching</div>
                <div className="text-[11px] text-[#D9D3C8]/70 mt-1">Quarrying, Precast & Laboratory Testing</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A58B65] uppercase">Phase 02</span>
                <div className="text-sm font-semibold text-white mt-0.5">Civil & Structural EPC</div>
                <div className="text-[11px] text-[#D9D3C8]/70 mt-1">Tier-1 Piling, Concrete Framing & Port Works</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A58B65] uppercase">Phase 03</span>
                <div className="text-sm font-semibold text-white mt-0.5">Artisanal Fit-Out</div>
                <div className="text-[11px] text-[#D9D3C8]/70 mt-1">5-Axis CNC Millwork & Turnkey Luxury Interiors</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A58B65] uppercase">Phase 04</span>
                <div className="text-sm font-semibold text-white mt-0.5">Asset Stewardship</div>
                <div className="text-[11px] text-[#D9D3C8]/70 mt-1">BREEAM Certification & Lifecycle Operations</div>
              </div>
            </div>

            {onOpenConsultation && (
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-[#D9D3C8]/80">
                  Ready to tender a complex development or procure structural components?
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#A58B65] hover:bg-[#b89c74] text-[#192A23] font-semibold uppercase text-xs tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span>Request Integrated Tender Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
