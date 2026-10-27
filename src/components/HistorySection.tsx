import React from 'react';
import { 
  History, 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  Layers, 
  Hammer, 
  CheckCircle2 
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { NavSection } from './Navbar';

interface HistorySectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const HistorySection: React.FC<HistorySectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const milestones = [
    {
      year: '1977',
      period: 'Foundational Era',
      title: 'The Artisanal Stonemasonry Atelier',
      desc: 'Founded in Malta by the Attard brothers as an artisanal stonemasonry and structural masonry enterprise. Delivering high-precision limestone restoration and traditional building framing with master European craftsmanship.',
      image: '/images/stonemasonry-limestone-atelier.jpg',
      tag: 'Founding Milestone'
    },
    {
      year: '1985',
      period: 'Industrial Expansion',
      title: 'Heavy Plant & Civil Infrastructure Fleets',
      desc: 'Invested heavily in modern mechanized plant fleets, deep excavation machinery, and commercial tower cranes, transitioning the company into a full-scale tier-one general contractor capable of complex urban groundworks.',
      image: '/images/highway-viaduct-construction.jpg',
      tag: 'Civil Modernization'
    },
    {
      year: '1992',
      period: 'Materials Leadership',
      title: 'Automated Concrete Batching & Precast Complex',
      desc: 'Commissioned Malta\'s premier computer-controlled concrete batching campus in the Ta\' Qali Industrial Zone. Introduced certified ready-mix concrete formulations, structural hollow-core slabs, and precast beam manufacturing.',
      image: '/images/cement-batching-plant.jpg',
      tag: 'Attard Materials'
    },
    {
      year: '2002',
      period: 'Turnkey Excellence',
      title: 'Marine Harbours & Commercial High-Rises',
      desc: 'Awarded major public infrastructure, maritime quay walls, deep-water piling, and complex multi-storey commercial towers. Attard Bros solidified its reputation for delivering demanding engineering specifications with absolute precision.',
      image: '/images/harbour-quay-marine-piling.jpg',
      tag: 'Attard Projects'
    },
    {
      year: '2010',
      period: 'Artisanal Craftsmanship',
      title: 'Inauguration of the Master Joinery Atelier',
      desc: 'Established our bespoke woodwork and architectural millwork manufacturing facility in Ta\' Qali. Equipped with multi-axis CNC routers and custom finish spray booths serving luxury hotels, corporate headquarters, and private villas.',
      image: '/images/joinery-millwork-atelier.jpg',
      tag: 'Attard Joinery'
    },
    {
      year: '2018',
      period: 'Integrated Living',
      title: 'Launch of Attard Properties Development',
      desc: 'Formed our dedicated real estate development vehicle, investing in prime residential enclaves, commercial corporate business centers, and sustainable lifestyle communities across the Maltese Islands.',
      image: '/images/aurelia-cultural-forum.jpg',
      tag: 'Attard Properties'
    },
    {
      year: '2023 – 2026',
      period: 'Next Generation',
      title: 'Low-Carbon Precast & Full BIM Digital Twins',
      desc: 'Pioneered proprietary low-carbon GeoCrete mixes, circular aggregate reclamation, and Level 2 BIM digital twin project execution—setting the benchmark for 21st-century Mediterranean construction and engineering.',
      image: '/images/bim-digital-twin-site.jpg',
      tag: 'Future-Ready'
    }
  ];

  return (
    <section id="history" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <History className="w-3.5 h-3.5" />
            <span>The Group Heritage · 1977 to 2026</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Our History
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            Founded in 1977 as an artisanal stonemasonry venture, Attard Bros Group has evolved through steadfast commitment to quality, heavy capital reinvestment, and relentless craftsmanship into Malta&rsquo;s foremost integrated construction and property development force.
          </p>
        </div>

        {/* Founding Philosophy Editorial Banner */}
        <div className="bg-[#F8F9FA] border border-[#E8ECF0] p-8 sm:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
                Founding Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#062746] leading-snug">
                &ldquo;Never outsource the soul of structural integrity.&rdquo;
              </h2>
              <p className="text-base sm:text-lg text-[#344B62] leading-relaxed">
                When the Attard brothers established the business in 1977, they recognized that true construction superiority requires complete command over every phase: the stone, the concrete, the structural frame, and the bespoke joinery finishes. This uncompromising standard created Malta&rsquo;s unique &ldquo;Foundation to Finish&rdquo; integrated delivery model.
              </p>
              <div className="pt-2 flex flex-wrap gap-6 text-xs sm:text-sm font-medium text-[#344B62]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547A9B]" />
                  <span>100% In-House Batching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547A9B]" />
                  <span>Dedicated Precast Manufacturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#547A9B]" />
                  <span>Artisanal Joinery Factory</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#062746] text-white p-8 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
                Historical Benchmark
              </div>
              <div className="space-y-5">
                <div>
                  <div className="text-4xl font-semibold tracking-tight text-white">1977</div>
                  <div className="text-xs text-white/70 mt-1">Year Founded in Ta&rsquo; Qali, Malta</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-4xl font-semibold tracking-tight text-white">650+</div>
                  <div className="text-xs text-white/70 mt-1">Landmark Developments Completed</div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-4xl font-semibold tracking-tight text-white">4</div>
                  <div className="text-xs text-white/70 mt-1">Specialized Turnkey Disciplines</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chronological Milestones - Editorial Two-Column Alternating Layout */}
        <div className="space-y-24">
          {milestones.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={item.year}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#062746]">
                      {item.year}
                    </span>
                    <span className="h-4 w-px bg-[#E8ECF0]" />
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#547A9B]">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium text-[#062746] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#344B62] leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-[#F8F9FA] border border-[#E8ECF0] text-xs font-medium text-[#547A9B] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Rectangular Image Composition */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden border border-[#E8ECF0] bg-[#F8F9FA]">
                    <ArchitecturalImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#062746] text-white px-3 py-1 text-xs font-medium tracking-wider">
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section Transition Navigation */}
        <div className="mt-28 p-10 sm:p-14 bg-[#F8F9FA] border border-[#E8ECF0] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Next Section
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#062746]">
              Discover Our Corporate Strategy
            </h3>
            <p className="text-base text-[#344B62]">
              Explore how our vertically integrated operations and engineering autonomy safeguard quality across every project phase.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('strategy')}
              className="px-8 py-4 bg-[#062746] text-white font-medium text-sm uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-3"
            >
              <span>Explore Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-white text-[#062746] border border-[#E8ECF0] font-medium text-sm uppercase tracking-wider hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              Back to About
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
