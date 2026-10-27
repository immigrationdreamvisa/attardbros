import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight, 
  Phone, 
  Mail, 
  Layers, 
  Hammer, 
  Home,
  History,
  Target,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { DIVISIONS, Division } from '../data/companyData';

export type NavSection = 
  | 'home' 
  | 'about' 
  | 'history' 
  | 'strategy' 
  | 'divisions' 
  | 'expertise' 
  | 'materials' 
  | 'projects' 
  | 'properties' 
  | 'careers' 
  | 'contact';

export interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onSelectDivision: (division: Division) => void;
  onOpenAllNav?: () => void;
  onOpenHeritage?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentSection,
  onNavigate,
  onOpenConsultation, 
  onSelectDivision,
  onOpenAllNav,
  onOpenHeritage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for transparent hero navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isExpertiseActive = 
    currentSection === 'expertise' || 
    currentSection === 'materials' || 
    currentSection === 'projects' || 
    currentSection === 'properties' ||
    currentSection === 'divisions';

  const isGroupActive = 
    currentSection === 'about' || 
    currentSection === 'history' || 
    currentSection === 'strategy';

  const isTransparent = currentSection === 'home' && !isScrolled;

  return (
    <>
      <header 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300 ${
          isTransparent ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent shadow-none' : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Top Dark Navy Accent Bar */}
        <div className={`h-[4px] sm:h-[5px] bg-[#001428] w-full transition-opacity duration-300 ${isTransparent ? 'opacity-0' : 'opacity-100'}`} />

        {/* Main Navbar Bar */}
        <div className={`h-[64px] sm:h-[68px] flex items-center justify-between transition-colors duration-300 ${
          isTransparent ? 'bg-transparent border-transparent' : 'bg-white border-b border-gray-200/90'
        }`}>
          {/* Left Angled Navy Brand Container */}
          <div 
            className="h-full flex items-center bg-[#002147] pl-3.5 sm:pl-6 pr-12 sm:pr-14 gap-3 sm:gap-4 shrink-0 transition-all duration-200"
            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 36px) 100%, 0 100%)' }}
          >
            {/* White Square Menu Button with 2 Horizontal Lines */}
            <button
              type="button"
              onClick={() => {
                if (onOpenAllNav) {
                  onOpenAllNav();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-100 flex flex-col items-center justify-center gap-[4px] cursor-pointer transition-colors shrink-0 shadow-xs rounded-[2px]"
              aria-label="Open Expertise Menu"
              title="Expertise Menu"
            >
              <span className="w-4 h-[2px] bg-[#002147] block" />
              <span className="w-4 h-[2px] bg-[#002147] block" />
            </button>

            {/* Brand Logo & Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center gap-2.5 sm:gap-3 group whitespace-nowrap cursor-pointer select-none"
            >
              {/* 3 Interconnected Triangles Logo (Attard Bros) */}
              <div className="shrink-0 flex items-center">
                <svg 
                  viewBox="0 0 32 30" 
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-none stroke-current" 
                  strokeWidth="2.2" 
                  strokeLinejoin="round" 
                  strokeLinecap="round"
                >
                  <polygon points="16,3 23,15 9,15" />
                  <polygon points="8,17 15,29 1,29" />
                  <polygon points="24,17 31,29 17,29" />
                </svg>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col text-white leading-tight">
                <span className="text-[15px] sm:text-[17px] font-semibold tracking-tight whitespace-nowrap font-sans">
                  Attard Bros
                </span>
                <span className="text-[13px] sm:text-[15px] font-medium tracking-normal whitespace-nowrap font-sans opacity-95">
                  Group
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-7 lg:gap-9 text-[15px] font-medium pr-6 lg:pr-12 ml-auto transition-colors duration-300 ${
            isTransparent ? 'text-white' : 'text-[#002147]'
          }`}>
            {/* 1. The Group ⌵ */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('group')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => {
                  if (activeDropdown === 'group') {
                    handleNavClick('about');
                  } else {
                    setActiveDropdown('group');
                  }
                }}
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  isGroupActive 
                    ? 'text-[#00A3E0] font-semibold' 
                    : isTransparent ? 'text-white hover:text-white/80' : 'text-[#002147] hover:text-[#0055A5]'
                }`}
                aria-expanded={activeDropdown === 'group'}
              >
                <span>The Group</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'group' ? 'rotate-180 text-[#00A3E0]' : (isTransparent ? 'text-white/80' : 'opacity-70')
                  }`} 
                />
              </button>

              {/* Dropdown Menu: The Group */}
              {activeDropdown === 'group' && (
                <div className="absolute top-full left-0 pt-1 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="bg-white text-[#252525] border border-[#E8ECF0] shadow-xl py-2 rounded-xs">
                    <div className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#062746]/70 border-b border-[#E8ECF0] flex items-center justify-between">
                      <span>The Group</span>
                      <span className="text-[10px] text-gray-400 font-mono">3 SECTIONS</span>
                    </div>

                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between text-sm transition-colors cursor-pointer ${
                        currentSection === 'about' ? 'text-[#0055A5] font-semibold bg-gray-50/80' : 'text-[#062746] hover:text-[#0055A5]'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs uppercase tracking-wider">About Us</div>
                        <div className="text-[11px] text-gray-500 font-normal">Building Excellence Through Generations</div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    <button
                      onClick={() => handleNavClick('history')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between text-sm transition-colors cursor-pointer ${
                        currentSection === 'history' ? 'text-[#0055A5] font-semibold bg-gray-50/80' : 'text-[#062746] hover:text-[#0055A5]'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs uppercase tracking-wider">Our History</div>
                        <div className="text-[11px] text-gray-500 font-normal">48-Year Heritage (Est. 1977)</div>
                      </div>
                      <History className="w-3.5 h-3.5 opacity-50" />
                    </button>

                    <button
                      onClick={() => handleNavClick('strategy')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between text-sm transition-colors cursor-pointer ${
                        currentSection === 'strategy' ? 'text-[#0055A5] font-semibold bg-gray-50/80' : 'text-[#062746] hover:text-[#0055A5]'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-xs uppercase tracking-wider">Our Strategy</div>
                        <div className="text-[11px] text-gray-500 font-normal">End-to-End Vertical Self-Sufficiency</div>
                      </div>
                      <Target className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Expertise Navigation Dropdown (Materials, Projects, Properties) */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown('expertise')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => {
                  if (activeDropdown === 'expertise') {
                    handleNavClick('expertise');
                  } else {
                    setActiveDropdown('expertise');
                  }
                }}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isExpertiseActive 
                    ? 'text-[#00A3E0] font-semibold' 
                    : isTransparent ? 'text-white hover:text-white/80' : 'text-[#002147] hover:text-[#0055A5]'
                }`}
                aria-expanded={activeDropdown === 'expertise'}
              >
                <span>Expertise</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'expertise' ? 'rotate-180 text-[#00A3E0]' : (isTransparent ? 'text-white/80' : 'opacity-70')
                  }`} 
                />
              </button>

              {/* Dropdown Menu: Exactly Three Vertically Stacked Links */}
              {activeDropdown === 'expertise' && (
                <div 
                  className="absolute top-full left-0 pt-1 min-w-[260px] animate-in fade-in slide-in-from-top-1 duration-200 z-50"
                  role="menu"
                >
                  <div className="bg-[#FFFFFF] border border-[#E8ECF0] shadow-xl rounded-xs py-2">
                    {/* Link 1: Materials */}
                    <button
                      role="menuitem"
                      onClick={() => handleNavClick('materials')}
                      className={`w-full text-left px-6 py-4 hover:bg-[#F8F9FA] transition-colors cursor-pointer flex items-center justify-between group ${
                        currentSection === 'materials' ? 'bg-[#F8F9FA] text-[#0055A5] font-semibold' : 'text-[#062746]'
                      }`}
                    >
                      <div>
                        <div className="text-[16px] font-medium tracking-tight text-[#062746] group-hover:text-[#0055A5] transition-colors">
                          Materials
                        </div>
                        <div className="text-[12px] text-[#344B62] font-normal mt-0.5">
                          Cement, precast & structural supply
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#547A9B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <div className="h-px bg-[#E8ECF0] mx-4" />

                    {/* Link 2: Projects */}
                    <button
                      role="menuitem"
                      onClick={() => handleNavClick('projects')}
                      className={`w-full text-left px-6 py-4 hover:bg-[#F8F9FA] transition-colors cursor-pointer flex items-center justify-between group ${
                        currentSection === 'projects' ? 'bg-[#F8F9FA] text-[#0055A5] font-semibold' : 'text-[#062746]'
                      }`}
                    >
                      <div>
                        <div className="text-[16px] font-medium tracking-tight text-[#062746] group-hover:text-[#0055A5] transition-colors">
                          Projects
                        </div>
                        <div className="text-[12px] text-[#344B62] font-normal mt-0.5">
                          Commercial, civil & industrial works
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#547A9B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <div className="h-px bg-[#E8ECF0] mx-4" />

                    {/* Link 3: Properties */}
                    <button
                      role="menuitem"
                      onClick={() => handleNavClick('properties')}
                      className={`w-full text-left px-6 py-4 hover:bg-[#F8F9FA] transition-colors cursor-pointer flex items-center justify-between group ${
                        currentSection === 'properties' ? 'bg-[#F8F9FA] text-[#0055A5] font-semibold' : 'text-[#062746]'
                      }`}
                    >
                      <div>
                        <div className="text-[16px] font-medium tracking-tight text-[#062746] group-hover:text-[#0055A5] transition-colors">
                          Properties
                        </div>
                        <div className="text-[12px] text-[#344B62] font-normal mt-0.5">
                          Thoughtful modern developments
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#547A9B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Overview Destination Link */}
                    <div className="pt-2 mt-1 border-t border-[#E8ECF0] px-6 pb-1">
                      <button
                        onClick={() => handleNavClick('expertise')}
                        className="text-[11px] uppercase tracking-wider text-[#547A9B] hover:text-[#062746] font-semibold flex items-center justify-between w-full py-1 cursor-pointer"
                      >
                        <span>Our Expertise Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`transition-colors cursor-pointer py-4 ${
                currentSection === 'careers' 
                  ? 'text-[#00A3E0] font-semibold' 
                  : isTransparent ? 'text-white hover:text-white/80' : 'text-[#002147] hover:text-[#0055A5]'
              }`}
            >
              Careers
            </button>

            {/* 4. Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors cursor-pointer py-4 ${
                currentSection === 'contact' 
                  ? 'text-[#00A3E0] font-semibold' 
                  : isTransparent ? 'text-white hover:text-white/80' : 'text-[#002147] hover:text-[#0055A5]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden pr-4 flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 transition-colors cursor-pointer ${
                isTransparent ? 'text-white hover:text-white/80' : 'text-[#062746] hover:text-[#0055A5]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer with Click-to-Expand Accordion */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white text-[#252525] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto font-sans">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#062746] flex items-center justify-center text-white rounded-[2px]">
                    <svg 
                      viewBox="0 0 32 30" 
                      className="w-5 h-5 text-white fill-none stroke-current" 
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
                    <div className="text-base font-semibold text-[#062746]">
                      Attard Bros Group
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Est. 1977 · Malta
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-left text-base font-medium text-[#062746] hover:text-[#0055A5] py-2 border-b border-gray-100 flex items-center justify-between cursor-pointer"
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>

                {/* Mobile Accordion: The Group */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setMobileGroupOpen(!mobileGroupOpen)}
                    className="text-left text-base font-semibold text-[#062746] py-2 flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>The Group</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGroupOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileGroupOpen && (
                    <div className="pl-3 pb-2 space-y-2 pt-1 animate-in fade-in duration-150">
                      <button
                        onClick={() => handleNavClick('about')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'about' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • About Us (Overview & Leadership)
                      </button>
                      <button
                        onClick={() => handleNavClick('history')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'history' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • Our History (48-Year Heritage)
                      </button>
                      <button
                        onClick={() => handleNavClick('strategy')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'strategy' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • Our Strategy (Integrated Blueprint)
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion: Expertise (Materials, Projects, Properties) */}
                <div className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                    className="text-left text-base font-semibold text-[#062746] py-2 flex items-center justify-between w-full cursor-pointer"
                  >
                    <span>Expertise</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpertiseOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpertiseOpen && (
                    <div className="pl-3 pb-2 space-y-2 pt-1 animate-in fade-in duration-150">
                      <button
                        onClick={() => handleNavClick('expertise')}
                        className={`text-xs font-semibold block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'expertise' ? 'text-[#0055A5]' : 'text-[#062746]'
                        }`}
                      >
                        • Our Expertise Overview
                      </button>
                      <button
                        onClick={() => handleNavClick('materials')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'materials' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • Materials (Concrete, Steel, Supplies)
                      </button>
                      <button
                        onClick={() => handleNavClick('projects')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'projects' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • Projects (Commercial, Civil, Infrastructure)
                      </button>
                      <button
                        onClick={() => handleNavClick('properties')}
                        className={`text-xs block py-1.5 cursor-pointer text-left w-full transition-colors ${
                          currentSection === 'properties' ? 'text-[#0055A5] font-semibold' : 'text-gray-600 hover:text-[#062746]'
                        }`}
                      >
                        • Properties (Residential & Commercial)
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-left text-base font-medium text-[#062746] hover:text-[#0055A5] py-2 border-b border-gray-100 flex items-center justify-between cursor-pointer"
                >
                  <span>Landmark Projects</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>

                <button
                  onClick={() => handleNavClick('careers')}
                  className="text-left text-base font-medium text-[#062746] hover:text-[#0055A5] py-2 border-b border-gray-100 flex items-center justify-between cursor-pointer"
                >
                  <span>Careers</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-left text-base font-medium text-[#062746] hover:text-[#0055A5] py-2 border-b border-gray-100 flex items-center justify-between cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#062746] text-white font-semibold uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#344B62] transition-colors cursor-pointer shadow-md rounded-[2px]"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="mt-4 text-xs text-gray-600 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#062746]" />
                  <span>+356 21 415 332</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#062746]" />
                  <span>info@attardbros.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
