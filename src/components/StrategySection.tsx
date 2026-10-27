import React from 'react';
import { 
  Target, 
  Layers, 
  Compass, 
  Hammer, 
  Building2, 
  ArrowUpRight, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { NavSection } from './Navbar';

interface StrategySectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const pillars = [
    {
      number: '01',
      title: 'Vertical Supply-Chain Autonomy',
      subtitle: 'Eliminating Outsourcing Fragility',
      desc: 'By owning and operating automated concrete batching plants, precast curing bays, and certified aggregate production, Attard Bros removes external supply bottlenecks, guarantees certified mix consistency, and reduces construction cycle times by up to 25%.',
      metric: '100% In-House Batching',
      image: '/images/cement-batching-plant.jpg'
    },
    {
      number: '02',
      title: 'Digital-Twin Technical Governance',
      subtitle: 'BIM Level 2 & Parametric Feasibility',
      desc: 'Every complex civil development is engineered in a 3D digital-twin environment prior to groundbreak. Clash detection, structural load simulations, and real-time robotic total stations eliminate costly on-site change orders.',
      metric: 'Zero Structural Clashes',
      image: '/images/bim-digital-twin-site.jpg'
    },
    {
      number: '03',
      title: 'Master Joinery & Architectural Fit-Out',
      subtitle: 'Millimeter Precision Craftsmanship',
      desc: 'Our 12,000m² Ta\' Qali manufacturing atelier pairs multi-axis CNC robotics with veteran European woodcrafters, creating bespoke architectural millwork, timber facades, and turnkey interior finishes that elevate property market valuations.',
      metric: '12,000m² Dedicated Atelier',
      image: '/images/joinery-millwork-atelier.jpg'
    },
    {
      number: '04',
      title: 'Strategic Development & Real Estate',
      subtitle: 'Generational Value Creation',
      desc: 'Through Attard Properties, we originate, capitalize, and co-develop flagship commercial landmarks and residential sanctuaries that embody resilient construction, LEED Platinum standards, and strong long-term yields.',
      metric: '€480M+ Pipeline Managed',
      image: '/images/aurelia-cultural-forum.jpg'
    }
  ];

  const operationalCycle = [
    {
      step: '01',
      phase: 'Aggregate & Material Chemistry',
      description: 'Controlled limestone crushing, pozzolanic binder optimization, and certified high-strength precast production.'
    },
    {
      step: '02',
      phase: 'Structural Civil Engineering',
      description: 'Deep-foundation piling, post-tensioned slabs, structural steel frameworks, and turnkey general contracting.'
    },
    {
      step: '03',
      phase: 'Architectural Joinery & Finishing',
      description: 'In-house custom cabinetry, timber wall paneling, acoustic ceilings, and precision architectural metalwork.'
    },
    {
      step: '04',
      phase: 'Asset Handover & Lifecycle',
      description: 'Full BIM lifecycle documentation, facility management readiness, and premium property portfolio management.'
    }
  ];

  return (
    <section id="strategy" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <Target className="w-3.5 h-3.5" />
            <span>Corporate Strategy · The Integrated Model</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Our Strategy
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            Our corporate strategy centers on eliminating subcontractor dependencies through unified industrial ownership. By synthesizing civil contracting, building materials, joinery manufacturing, and real estate investment under one roof, Attard Bros delivers unmatched reliability, speed, and architectural permanence.
          </p>
        </div>

        {/* Editorial Advantage Overview - Two Column Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pb-20 border-b border-[#E8ECF0]">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              The Attard Bros Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#062746] leading-tight">
              Why Turnkey Vertical Integration Outperforms Traditional Contracting.
            </h2>
            <p className="text-base sm:text-lg text-[#344B62] leading-relaxed">
              Traditional developers coordinate dozens of disconnected subcontractors, resulting in communication gaps, delayed handovers, and compounding cost overruns. Attard Bros Group operates as a single, fully accountable engineering powerhouse where technical standards flow directly from our concrete plants to the final joinery polish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-6 bg-[#F8F9FA] border border-[#E8ECF0]">
                <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">25%</div>
                <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">Faster Handover</div>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E8ECF0]">
                <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">100%</div>
                <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">CE Compliance</div>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E8ECF0]">
                <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">38%</div>
                <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">Lower Embodied Carbon</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] border border-[#E8ECF0] bg-[#F8F9FA] overflow-hidden">
              <ArchitecturalImage
                src="/images/novum-tower-construction.jpg"
                alt="Strategic Construction Tower Crane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* The 4 Core Strategic Pillars */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Strategic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#062746] mt-2 tracking-tight">
              Four Pillars of Operational Supremacy
            </h2>
            <p className="text-base sm:text-lg text-[#344B62] mt-3">
              How our business units interlock to create unstoppable momentum and risk mitigation for major institutional and private clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar) => (
              <div 
                key={pillar.number}
                className="bg-[#FFFFFF] border border-[#E8ECF0] p-8 sm:p-10 flex flex-col justify-between hover:border-[#547A9B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8ECF0] mb-6">
                    <span className="text-3xl font-semibold text-[#062746]">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#547A9B]">
                      {pillar.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-[#062746] mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#547A9B] mb-4">
                    {pillar.subtitle}
                  </div>
                  <p className="text-base text-[#344B62] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8ECF0]">
                  <div className="aspect-[16/7] overflow-hidden border border-[#E8ECF0] bg-[#F8F9FA]">
                    <ArchitecturalImage
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Turnkey Lifecycle - Clean Editorial Presentation */}
        <div className="bg-[#F8F9FA] border border-[#E8ECF0] p-10 sm:p-14 mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              The Turnkey Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#062746] mt-2">
              From Raw Aggregate to Architectural Trophy
            </h2>
            <p className="text-base text-[#344B62] mt-3">
              Every project journey follows our closed-loop quality assurance cycle, eliminating friction across all trade handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalCycle.map((cycle) => (
              <div 
                key={cycle.step}
                className="bg-[#FFFFFF] border border-[#E8ECF0] p-6 space-y-4"
              >
                <div className="text-2xl font-semibold text-[#062746]">
                  {cycle.step}
                </div>
                <h3 className="text-base font-semibold text-[#062746]">
                  {cycle.phase}
                </h3>
                <p className="text-sm text-[#344B62] leading-relaxed">
                  {cycle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Dialogue Box */}
        <div className="p-10 sm:p-14 bg-[#FFFFFF] border border-[#E8ECF0] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Pre-Construction & Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#062746]">
              Discuss a Commercial Tender or Joint Venture
            </h3>
            <p className="text-base text-[#344B62]">
              Connect directly with our pre-construction directors, structural engineering teams, and commercial estimators.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#062746] text-white font-medium text-sm uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-3"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-[#F8F9FA] text-[#062746] border border-[#E8ECF0] font-medium text-sm uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Back to About
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
