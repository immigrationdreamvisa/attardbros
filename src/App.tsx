import React, { useState, useEffect } from 'react';
import { Navbar, NavSection } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { HistorySection } from './components/HistorySection';
import { StrategySection } from './components/StrategySection';
import { DivisionsSection } from './components/DivisionsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { MaterialsSection } from './components/MaterialsSection';
import { PropertiesSection } from './components/PropertiesSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AwardsSection } from './components/AwardsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { ProjectModal } from './components/modals/ProjectModal';
import { DivisionModal } from './components/modals/DivisionModal';
import { CareerModal } from './components/modals/CareerModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { HeritageModal } from './components/modals/HeritageModal';
import { LegalModal } from './components/modals/LegalModal';
import { AllNavModal } from './components/modals/AllNavModal';

import { Project, Division, CareerOpportunity } from './data/companyData';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerOpportunity | null>(null);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [heritageOpen, setHeritageOpen] = useState(false);
  const [allNavOpen, setAllNavOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Synchronize active section with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      const validSections: NavSection[] = [
        'home', 
        'about', 
        'history',
        'strategy',
        'divisions',
        'expertise', 
        'materials',
        'projects', 
        'properties',
        'careers', 
        'contact'
      ];
      if (validSections.includes(hash)) {
        setCurrentSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleApplyJob = (job: CareerOpportunity) => {
    setSelectedCareer(job);
    setCareerModalOpen(true);
  };

  const handleGeneralCareer = () => {
    setSelectedCareer(null);
    setCareerModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EC] text-[#252525] font-sans selection:bg-[#243B32] selection:text-white">
      {/* 1. Fixed Luxury Architectural Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
        onSelectDivision={(div) => setSelectedDivision(div)}
        onOpenAllNav={() => setAllNavOpen(true)}
        onOpenHeritage={() => setHeritageOpen(true)}
      />

      {/* Main Content Area - Discrete Dedicated Section for each Nav Button */}
      <main className="flex-1">
        {/* SECTION 1: HOME (Rich Landing with Pillars, Featured Projects, Rigor & Consultation) */}
        {currentSection === 'home' && (
          <div className="animate-in fade-in duration-300">
            <HomeSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
              onSelectProject={(proj) => setSelectedProject(proj)}
              onSelectDivision={(div) => setSelectedDivision(div)}
            />
          </div>
        )}

        {/* SECTION 2: ABOUT (Corporate Heritage, Leadership, Scale & Awards) */}
        {/* SECTION 2A: ABOUT (Corporate Profile, Leadership & Commitments) */}
        {currentSection === 'about' && (
          <div className="pt-20 bg-[#F8F9FA] animate-in fade-in duration-300">
            <AboutSection
              onOpenHeritage={() => handleNavigate('history')}
              onOpenConsultation={() => setConsultationOpen(true)}
              onNavigate={handleNavigate}
            />
            <StatsSection />
            <AwardsSection />
          </div>
        )}

        {/* SECTION 2B: HISTORY (48-Year Heritage & Chronological Milestones) */}
        {currentSection === 'history' && (
          <div className="pt-20 bg-[#F8F9FA] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <HistorySection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {/* SECTION 2C: STRATEGY (Corporate Integrated Blueprint & Growth Pillars) */}
        {currentSection === 'strategy' && (
          <div className="pt-20 bg-[#F8F9FA] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <StrategySection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {/* SECTION 3A: EXPERTISE LANDING (Expertise That Builds the Future) */}
        {currentSection === 'expertise' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <ExpertiseSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {/* SECTION 3B: MATERIALS DIVISION (Cement, Concrete, Steel & Supplies) */}
        {currentSection === 'materials' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <MaterialsSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {/* SECTION 3C: PROJECTS DIVISION (Commercial, Residential, Civil & Infrastructure) */}
        {currentSection === 'projects' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <ProjectsSection
              onSelectProject={(proj) => setSelectedProject(proj)}
              onOpenConsultation={() => setConsultationOpen(true)}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* SECTION 3D: PROPERTIES DIVISION (Modern Spaces & Property Development) */}
        {currentSection === 'properties' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <PropertiesSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}

        {/* SECTION 3E: LEGACY DIVISIONS OVERVIEW (When accessed via divisions) */}
        {currentSection === 'divisions' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <DivisionsSection
              onSelectDivision={(div) => setSelectedDivision(div)}
              onOpenConsultation={() => setConsultationOpen(true)}
            />
          </div>
        )}


        {/* SECTION 6: CAREERS (Talent, Culture & Active Openings) */}
        {currentSection === 'careers' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <CareersSection
              onApplyJob={handleApplyJob}
              onOpenGeneralApplication={handleGeneralCareer}
            />
          </div>
        )}

        {/* SECTION 7: CONTACT (Corporate Headquarters, Campus & Tenders) */}
        {currentSection === 'contact' && (
          <div className="pt-20 bg-[#FFFFFF] animate-in fade-in duration-300 min-h-[calc(100vh-80px)]">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer across all sections */}
      <Footer
        onNavigate={handleNavigate}
        onSelectDivision={(div) => setSelectedDivision(div)}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Detail Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <DivisionModal
        division={selectedDivision}
        onClose={() => setSelectedDivision(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {careerModalOpen && (
        <CareerModal
          job={selectedCareer}
          onClose={() => {
            setCareerModalOpen(false);
            setSelectedCareer(null);
          }}
        />
      )}

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <HeritageModal
        isOpen={heritageOpen}
        onClose={() => setHeritageOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <AllNavModal
        isOpen={allNavOpen}
        onClose={() => setAllNavOpen(false)}
        onNavigate={handleNavigate}
        onSelectDivision={(div) => setSelectedDivision(div)}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenHeritage={() => setHeritageOpen(true)}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />
    </div>
  );
}
