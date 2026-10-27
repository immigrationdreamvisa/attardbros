import React from 'react';
import { ArrowUp, ArrowUpRight, MapPin, Phone, Mail, Linkedin, Instagram, Youtube, ShieldCheck } from 'lucide-react';
import { DIVISIONS, Division } from '../data/companyData';
import { NavSection } from './Navbar';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onSelectDivision: (division: Division) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectDivision,
  onOpenConsultation,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001833] text-white border-t border-white/10 relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
        {/* Top Tier: Clean Corporate Bar with Logo & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            {/* 3 Triangles Logo */}
            <div className="w-10 h-10 bg-[#002147] border border-white/20 flex items-center justify-center shrink-0 rounded-xs">
              <svg 
                viewBox="0 0 32 30" 
                className="w-6 h-6 text-white fill-none stroke-current" 
                strokeWidth="2.2" 
                strokeLinejoin="round" 
                strokeLinecap="round"
              >
                <polygon points="16,3 23,15 9,15" />
                <polygon points="8,17 15,29 1,29" />
                <polygon points="24,17 31,29 17,29" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight uppercase leading-none text-white block">
                ATTARD BROS GROUP
              </span>
              <div className="text-[10px] tracking-widest uppercase text-gray-300 font-semibold mt-1">
                CORPORATE DIRECTORY · EST. 1977 · MALTA
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-gray-400 font-mono hidden md:inline tracking-wider">
              ISO 9001 · ISO 14001 · ISO 45001 CERTIFIED
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                <ArrowUp className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </div>

        {/* 4-Column Grid: Description, Divisions, Quick Links, Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-14 border-b border-white/10">
          {/* Col 1: Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Corporate Overview
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Attard Bros Group is Malta&rsquo;s leading construction, civil engineering, precast concrete manufacturing, and property development conglomerate. Delivering complete foundation-to-finish solutions since 1977.
            </p>
            <div className="pt-2 text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00C853]" />
              <span>CERTIFIED: ISO 9001 · ISO 14001 · ISO 45001 · CE MARK</span>
            </div>
          </div>

          {/* Col 2: Business Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('expertise')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="font-semibold text-white">Our Expertise Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('materials')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span>Materials (Concrete & Supplies)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span>Projects (Commercial & Civil)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('properties')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer group"
                >
                  <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                  <span>Properties (Developments & Living)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  48-Year History
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('strategy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('divisions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Specialized Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Landmark Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Corporate Headquarters
            </h4>
            <div className="text-xs text-gray-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>Ta&rsquo; Qali Industrial Zone, Attard, ATD 4000, Malta</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="font-mono text-white font-semibold">+356 21 415 332</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-white hover:underline cursor-pointer">info@attardbros.com</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex items-center gap-3 text-gray-300">
                <a 
                  href="#linkedin" 
                  className="p-2 border border-white/15 hover:border-white hover:text-white hover:bg-white/5 transition-all rounded-xs"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#instagram" 
                  className="p-2 border border-white/15 hover:border-white hover:text-white hover:bg-white/5 transition-all rounded-xs"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#youtube" 
                  className="p-2 border border-white/15 hover:border-white hover:text-white hover:bg-white/5 transition-all rounded-xs"
                  title="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 1977 &ndash; {new Date().getFullYear()} Attard Bros Group Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#cookies"
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms();
              }}
              className="hover:text-white transition-colors"
            >
              Cookie Governance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
