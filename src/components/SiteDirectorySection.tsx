import React from 'react';
import { 
  ArrowUpRight, 
  Building2, 
  Layers, 
  Hammer, 
  Home, 
  Compass, 
  Shield, 
  Award, 
  Briefcase, 
  Phone, 
  MapPin, 
  Clock, 
  LayoutGrid,
  FileText
} from 'lucide-react';
import { DIVISIONS, Division } from '../data/companyData';

interface SiteDirectorySectionProps {
  onSelectDivision: (division: Division) => void;
  onOpenConsultation: () => void;
  onOpenHeritage: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const SiteDirectorySection: React.FC<SiteDirectorySectionProps> = ({
  onSelectDivision,
  onOpenConsultation,
  onOpenHeritage,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const navGroups = [
    {
      category: '01 · Corporate Identity',
      icon: <Compass className="w-4 h-4 text-[#A58B65]" />,
      links: [
        { label: 'Home & Cinematic Vision', action: () => scrollTo('hero'), tag: 'Top' },
        { label: 'About Us & Leadership', action: () => scrollTo('about'), tag: 'Section' },
        { label: '48-Year Heritage Dossier', action: onOpenHeritage, tag: 'Archive' },
        { label: 'Institutional Statistics', action: () => scrollTo('stats'), tag: 'Section' }
      ]
    },
    {
      category: '02 · Specialized Divisions',
      icon: <Building2 className="w-4 h-4 text-[#A58B65]" />,
      links: DIVISIONS.map((d) => ({
        label: d.name,
        action: () => onSelectDivision(d),
        tag: 'Division'
      }))
    },
    {
      category: '03 · Portfolio & Standards',
      icon: <Layers className="w-4 h-4 text-[#A58B65]" />,
      links: [
        { label: 'Featured Landmark Works', action: () => scrollTo('projects'), tag: 'Portfolio' },
        { label: 'Quality & Engineering Standards', action: () => scrollTo('divisions'), tag: 'ISO 9001' },
        { label: 'Awards & Honors', action: () => scrollTo('awards'), tag: 'Trophies' },
        { label: 'Campus Facilities Map', action: () => scrollTo('contact'), tag: 'Map' }
      ]
    },
    {
      category: '04 · Talent, Contact & Governance',
      icon: <Phone className="w-4 h-4 text-[#A58B65]" />,
      links: [
        { label: 'Careers & Vacancies', action: () => scrollTo('careers'), tag: 'Careers' },
        { label: 'Corporate Tender Dossier', action: () => scrollTo('contact'), tag: 'Contact' },
        { label: 'Schedule Consultation', action: onOpenConsultation, tag: 'Directorate' },
        { label: 'Privacy & GDPR Policy', action: onOpenPrivacy, tag: 'Legal' },
        { label: 'Terms of Engagement', action: onOpenTerms, tag: 'Legal' }
      ]
    }
  ];

  return (
    <section id="directory" className="py-24 lg:py-32 bg-[#EBE7DF] border-b border-[#D9D3C8] relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.28em] uppercase text-[#243B32] font-semibold mb-3">
              <LayoutGrid className="w-3.5 h-3.5 text-[#A58B65]" />
              <span>08 · Complete Site Directory</span>
              <span aria-hidden="true" className="text-[#A58B65]">·</span>
              <span>All Navigation Buttons</span>
            </div>
            <h2 className="font-serif-title text-section-title font-light text-[#243B32] tracking-tight leading-[1.08]">
              Master Navigation & <br />
              <span className="italic font-normal text-[#A58B65]">Architectural Directory.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#252525]/80 leading-relaxed">
            Directly access every section, business division, career opening, technical archive, and consultation booking across the Valmont Group portal.
          </p>
        </div>

        {/* 4-Column Directory Grid with All Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {navGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 sm:p-7 bg-[#F5F2EC] border border-[#D9D3C8] flex flex-col justify-between shadow-xs hover:border-[#243B32] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-[#D9D3C8] text-xs font-semibold uppercase tracking-wider text-[#243B32] mb-4">
                  {group.icon}
                  <span>{group.category}</span>
                </div>

                <div className="space-y-2">
                  {group.links.map((link, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={link.action}
                      className="w-full text-left p-2.5 rounded-xs hover:bg-[#EBE7DF] transition-colors flex items-center justify-between text-xs text-[#252525] group cursor-pointer"
                    >
                      <span className="group-hover:text-[#243B32] font-medium leading-snug">
                        {link.label}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="text-[10px] font-mono text-[#A58B65] uppercase">
                          {link.tag}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#243B32] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
