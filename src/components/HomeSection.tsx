import React from 'react';
import { 
  ArrowUpRight, 
  Building2, 
  Layers, 
  Hammer, 
  Home as HomeIcon, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  Maximize2
} from 'lucide-react';
import { Hero } from './Hero';
import { DIVISIONS, Division, PROJECTS, Project, COMPANY_STATS } from '../data/companyData';
import { NavSection } from './Navbar';

interface HomeSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onSelectProject: (project: Project) => void;
  onSelectDivision: (division: Division) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
  onSelectDivision,
}) => {
  // Flagship landmark works for the home page spotlight
  const spotlightProjects = PROJECTS.slice(0, 3);

  // The 3 Core Expertise Divisions matching official Attard Bros assets & visual reference
  const expertiseCards = [
    {
      id: 'materials',
      brandName: 'Attard',
      divisionName: 'Materials',
      accentColor: '#00A3E0', // Cyan blue from reference
      image: 'https://cdn.prod.website-files.com/686bcd3b2b3764c6da874887/6900a8f99fe32cd87efcdab9_expertise-thumbnail-materials.webp',
      route: 'materials' as NavSection,
    },
    {
      id: 'projects',
      brandName: 'Attard',
      divisionName: 'Projects',
      accentColor: '#E06A3B', // Warm copper/orange from reference
      image: 'https://cdn.prod.website-files.com/686bcd3b2b3764c6da874887/6900a9bc68326ed9c59468d1_expertise-thumbnail-projects.webp',
      route: 'projects' as NavSection,
    },
    {
      id: 'properties',
      brandName: 'Attard',
      divisionName: 'Properties',
      accentColor: '#00A86B', // Emerald green from Attard Properties branding
      image: 'https://cdn.prod.website-files.com/686bcd3b2b3764c6da874887/698371242d453347067e47e6_b3fc5e0f2a53bbb8ff27f9e098bcf593_properties.webp',
      route: 'properties' as NavSection,
    }
  ];

  const scrollToOverview = () => {
    const el = document.getElementById('home-expertise');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#062746] font-sans">
      {/* 1. Architectural Hero Canvas */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreProjects={() => onNavigate('projects')}
        onScrollToOverview={scrollToOverview}
      />

      {/* 2. Our Expertise Section - Exact Match to Attard Bros Reference */}
      <section id="home-expertise" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8ECF0] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Heading & Clean Hairline Divider */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#062746] tracking-tight pb-4">
              Our Expertise
            </h2>
            <div className="h-px w-full bg-[#E8ECF0]" />
          </div>

          {/* 3 Equal Cards Grid: Equal Margins, Identical Aspect Ratio, Neither Small Nor Big */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertiseCards.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.route)}
                className="group relative aspect-[3/4] sm:aspect-[3/4.2] overflow-hidden bg-[#F8F9FA] border border-[#E8ECF0] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 rounded-[2px]"
              >
                {/* Background Full-Bleed Photograph with Zoom Effect */}
                <img
                  src={item.image}
                  alt={`${item.brandName} ${item.divisionName}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Angled Division Brand Badge at Bottom Left (Exact Reference Match) */}
                <div 
                  className="absolute bottom-0 left-0 bg-[#002147] py-3.5 sm:py-4 pl-6 sm:pl-7 pr-12 sm:pr-14 flex items-center gap-3.5 sm:gap-4 z-10 transition-all duration-300 group-hover:bg-[#062746]"
                  style={{ 
                    clipPath: 'polygon(0 0, calc(100% - 36px) 0, 100% 100%, 0 100%)',
                    maxWidth: '88%'
                  }}
                >
                  {/* Attard 3-Triangle Logo in Division Accent Color */}
                  <div className="shrink-0 flex items-center" style={{ color: item.accentColor }}>
                    <svg 
                      viewBox="0 0 32 30" 
                      className="w-8 h-8 sm:w-9 sm:h-9 stroke-current fill-none" 
                      strokeWidth="2.3" 
                      strokeLinejoin="round" 
                      strokeLinecap="round"
                    >
                      <polygon points="16,3 23,15 9,15" />
                      <polygon points="8,17 15,29 1,29" />
                      <polygon points="24,17 31,29 17,29" />
                    </svg>
                  </div>

                  {/* Division Brand Name Stacking */}
                  <div className="flex flex-col leading-[1.08]" style={{ color: item.accentColor }}>
                    <span className="text-[19px] sm:text-[22px] font-semibold tracking-tight font-sans">
                      {item.brandName}
                    </span>
                    <span className="text-[20px] sm:text-[24px] font-bold tracking-tight font-sans">
                      {item.divisionName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Curated Landmark Projects Spotlight */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E8ECF0] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#547A9B] font-semibold mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Featured Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#062746] tracking-tight leading-[1.1]">
                Monumental Works. <br />
                <span className="font-light text-[#344B62]">Engineered for Generations.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <p className="max-w-md text-base text-[#344B62] leading-relaxed md:text-right">
                Explore signature Mediterranean commercial towers, civil maritime port terminals, and bespoke residential sanctuaries executed by Attard Bros.
              </p>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#062746] hover:text-[#547A9B] transition-colors cursor-pointer"
              >
                <span>View Full 650+ Projects Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#547A9B]" />
              </button>
            </div>
          </div>

          {/* 3 Signature Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spotlightProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative aspect-square overflow-hidden cursor-pointer border border-[#E8ECF0] bg-white flex flex-col justify-between hover:border-[#547A9B] transition-all duration-300"
              >
                {/* Background Image with Zoom */}
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062746]/90 via-[#062746]/30 to-transparent transition-opacity duration-300" />

                {/* Top Badge Bar */}
                <div className="relative z-10 p-5 flex items-center justify-between w-full">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#062746] border border-[#E8ECF0]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-medium uppercase bg-[#062746]/80 text-white">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#547A9B] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-white/80">{project.location}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                    <span>{project.area}</span>
                    <span className="flex items-center gap-1 text-white group-hover:text-[#547A9B] transition-colors">
                      <span>Inspect Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Group Scale & Institutional Numbers */}
      <section className="py-20 lg:py-24 bg-[#062746] text-white relative overflow-hidden font-sans">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold mb-3">
              Institutional Scale · 1977 to 2026
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]">
              The Rigor of Numbers. <br />
              <span className="font-light text-white/70">Forty-Eight Years of Permanence.</span>
            </h2>
          </div>

          {/* 4 Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-6 sm:pt-0 sm:px-6 first:pl-0">
              <div className="text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                48
              </div>
              <div className="text-xs uppercase tracking-wider text-[#547A9B] font-semibold mb-1">
                Years of Heritage
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Founded in 1977 in Ta&rsquo; Qali as a specialist stonemasonry enterprise, evolving into a tier-one construction conglomerate.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                650+
              </div>
              <div className="text-xs uppercase tracking-wider text-[#547A9B] font-semibold mb-1">
                Landmark Deliveries
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Major commercial towers, civil maritime port terminals, and bespoke residential sanctuaries across Malta.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                12,000m²
              </div>
              <div className="text-xs uppercase tracking-wider text-[#547A9B] font-semibold mb-1">
                Dedicated Atelier
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                State-of-the-art joinery manufacturing plant with 5-axis robotic CNC milling, acoustic pressing, and spray booths.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-2">
                99.8%
              </div>
              <div className="text-xs uppercase tracking-wider text-[#547A9B] font-semibold mb-1">
                On-Time Handover
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Strict adherence to milestones through proprietary Building Information Modeling (BIM Level 2) schedules.
              </p>
            </div>
          </div>

          {/* Directorate Quote */}
          <div className="mt-16 p-8 sm:p-10 bg-white/5 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-[10px] uppercase tracking-widest text-[#547A9B] font-mono">
                Executive Directorate Standard
              </div>
              <blockquote className="text-lg sm:text-xl text-white font-medium italic leading-relaxed">
                &ldquo;Structural permanence is never outsourced. We formulate every batch, shape every timber joint, and engineer every foundation with our own hands.&rdquo;
              </blockquote>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="px-6 py-3.5 bg-white text-[#062746] hover:bg-[#F8F9FA] transition-colors text-xs font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <span>Read Our Full Heritage</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Consultation Tender Callout */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA] border-t border-[#E8ECF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 lg:p-12 bg-white border border-[#E8ECF0] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#547A9B] font-semibold">
                Direct Tender & Partnership Inquiries
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#062746] leading-tight">
                Plan Your Next Landmark Site with Attard Bros
              </h3>
              <p className="text-sm text-[#344B62] leading-relaxed">
                Connect with our chartered engineers and executive directorship for confidential scoping, early-stage BOQ cost feasibility models, and constructability audits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#062746] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#344B62] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Request Executive Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 border border-[#E8ECF0] text-[#062746] hover:bg-[#F8F9FA] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Campus Directory</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
