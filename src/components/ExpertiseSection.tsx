import React from 'react';
import { 
  Briefcase, 
  Layers, 
  Building2, 
  Home, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2,
  Cpu,
  Factory
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { NavSection } from './Navbar';

interface ExpertiseSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const divisions = [
    {
      id: 'materials' as NavSection,
      number: '01',
      title: 'Materials',
      subtitle: 'Certified Concrete, Structural Steel & Aggregates',
      description: 'Delivering dependable building materials and quality products that support every stage of construction. From automated ready-mix batching to architectural precast and CE-marked structural supplies.',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
      stats: '250,000 m³ Annual Concrete Capacity',
      highlights: [
        'Automated Computer-Controlled Batching',
        'Certified Precast Beams & Slabs',
        'Structural Steel & Rebar Fabrication',
        'Testing Laboratory & CE Marking'
      ]
    },
    {
      id: 'projects' as NavSection,
      number: '02',
      title: 'Projects',
      subtitle: 'Commercial, Residential & Civil Infrastructure',
      description: 'Delivering construction excellence through quality engineering, planning and execution. We manage complex tier-one civil projects, maritime works, and architectural towers from groundbreak to handover.',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      stats: '650+ Landmark Developments Completed',
      highlights: [
        'High-Rise Commercial Towers',
        'Marine Harbours & Deep Piling',
        'Industrial Logistics Campuses',
        'Full BIM Level 2 Coordination'
      ]
    },
    {
      id: 'properties' as NavSection,
      number: '03',
      title: 'Properties',
      subtitle: 'Thoughtful Property Development & Modern Spaces',
      description: 'Creating modern spaces through thoughtful property development and construction. We originate, design, and manage premium residential enclaves, commercial corporate pavilions, and sustainable communities.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      stats: '€480M+ Real Estate Portfolio Managed',
      highlights: [
        'Luxury Residential Enclaves',
        'Grade-A Corporate Business Centers',
        'Contemporary Apartment Buildings',
        'Sustainable Energy-Efficient Design'
      ]
    }
  ];

  return (
    <section id="expertise" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Integrated Business Divisions</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Expertise That Builds the Future.
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            From quality building materials to complex construction projects and innovative property developments, our expertise spans every stage of the built environment.
          </p>
        </div>

        {/* Hero Editorial Construction Showcase */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-[#E8ECF0] bg-[#F8F9FA] mb-24">
          <ArchitecturalImage
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1600&q=80"
            alt="Expertise In Action Active Construction Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062746]/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold block mb-2">
                Unified In-House Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
                Single-Source Accountability Across Materials, Projects & Properties
              </h2>
            </div>
          </div>
        </div>

        {/* The Three Dedicated Divisions Showcase */}
        <div className="space-y-24 mb-28">
          {divisions.map((division, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={division.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-medium tracking-tight text-[#062746]">
                      {division.number}
                    </span>
                    <span className="h-4 w-px bg-[#E8ECF0]" />
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#547A9B]">
                      Division
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-medium text-[#062746] tracking-tight">
                    {division.title}
                  </h2>

                  <div className="text-sm font-semibold uppercase tracking-wider text-[#547A9B]">
                    {division.subtitle}
                  </div>

                  <p className="text-base sm:text-lg text-[#344B62] leading-relaxed">
                    {division.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {division.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-xs sm:text-sm text-[#344B62] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#547A9B] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => onNavigate(division.id)}
                      className="px-7 py-3.5 bg-[#062746] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore {division.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono font-medium text-[#547A9B]">
                      {division.stats}
                    </span>
                  </div>
                </div>

                {/* Rectangular Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    onClick={() => onNavigate(division.id)}
                    className="relative aspect-[16/10] overflow-hidden border border-[#E8ECF0] bg-[#F8F9FA] group cursor-pointer"
                  >
                    <ArchitecturalImage
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 text-[#062746] px-3 py-1 text-xs font-medium uppercase tracking-wider border border-[#E8ECF0]">
                      {division.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="p-10 sm:p-14 bg-[#F8F9FA] border border-[#E8ECF0] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Commercial Tenders & Inquiries
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#062746]">
              Engage Our Multi-Disciplinary Team
            </h3>
            <p className="text-base text-[#344B62]">
              Whether specifying bulk concrete batching, tendering for a commercial tower, or investing in property, our engineering directors are ready to assist.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#062746] text-white font-medium text-sm uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-3"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-[#062746] border border-[#E8ECF0] font-medium text-sm uppercase tracking-wider hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              Contact Offices
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
