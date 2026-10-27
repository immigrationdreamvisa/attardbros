import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Briefcase,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CAREER_OPPORTUNITIES, CareerOpportunity } from '../data/companyData';

interface CareersSectionProps {
  onApplyJob: (job: CareerOpportunity) => void;
  onOpenGeneralApplication: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  onApplyJob,
  onOpenGeneralApplication,
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const scrollToOpportunities = () => {
    const el = document.getElementById('opportunities');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const culturePillars = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#547A9B]" />,
      title: 'Chartered Mentorship',
      desc: 'Sponsored Eurocode certifications, chartered engineer warrant programs, and lifelong career pathways.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#547A9B]" />,
      title: 'Zero-Harm Safety Culture',
      desc: 'ISO 45001 certified protocols, top-tier safety equipment, and modern ergonomic facilities.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#547A9B]" />,
      title: 'Interdisciplinary Peers',
      desc: 'Collaborate daily with civil engineers, precast production directors, and master tradespeople.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#547A9B]" />,
      title: 'Competitive Package',
      desc: 'Market-leading compensation, private health coverage, performance incentives, and family support.'
    }
  ];

  const departments = ['all', 'Civil Engineering & Construction', 'Digital Design & Planning', 'Interior Fit-Out & Joinery', 'Property Development & Asset Management'];

  const filteredJobs = selectedDepartment === 'all'
    ? CAREER_OPPORTUNITIES
    : CAREER_OPPORTUNITIES.filter(j => j.department === selectedDepartment);

  return (
    <div id="careers" className="bg-[#FFFFFF] font-sans text-[#062746]">
      {/* 1. Hero Section - Exact Match to Reference Screenshot */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 border-b border-[#E8ECF0]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6 sm:space-y-8">
          
          {/* Main Title: Working As One */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-normal text-[#062746] tracking-tight leading-[1.08]">
            Working As One
          </h1>

          {/* Subtitle Paragraph */}
          <p className="max-w-2xl mx-auto text-[17px] sm:text-[19px] text-[#344B62] leading-relaxed font-light">
            Our focus at Attard Bros is to find the right people, nurture their growth, and create an environment where everyone feels valued and supported.
          </p>

          {/* CTA Button: See opportunities > */}
          <div className="pt-2">
            <button
              onClick={scrollToOpportunities}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#002147] hover:bg-[#062746] text-white text-[15px] font-medium tracking-normal transition-all cursor-pointer rounded-[2px] shadow-sm group"
            >
              <span>See opportunities</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Large Hero Image Matching the Collaborative Office Photo */}
          <div className="pt-8 sm:pt-12">
            <div className="relative overflow-hidden rounded-[2px] border border-[#E8ECF0] shadow-sm aspect-[16/9] sm:aspect-[16/8.5] bg-[#F8F9FA]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
                alt="Attard Bros engineering team collaborating together around an office conference table with project designs"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Core Pillars of Employment */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-[#E8ECF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#062746] tracking-tight">
              Life at Attard Bros Group
            </h2>
            <p className="text-base text-[#344B62] mt-3 leading-relaxed">
              We empower our people with the resources, autonomy, and modern manufacturing technology needed to execute landmark Mediterranean developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {culturePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8ECF0] p-7 space-y-3 shadow-2xs hover:shadow-xs transition-shadow rounded-[2px]"
              >
                <div className="w-10 h-10 rounded-xs bg-[#F0F4F8] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-medium text-[#062746] pt-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#344B62] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Opportunities Section */}
      <section id="opportunities" className="py-20 lg:py-28 bg-[#FFFFFF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#547A9B] font-semibold block mb-2">
                Open Vacancies
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#062746] tracking-tight">
                Current Opportunities
              </h2>
              <p className="text-base text-[#344B62] mt-2 max-w-xl">
                Join our interdisciplinary team in Ta&rsquo; Qali. Explore active vacancies across engineering, project management, and specialized manufacturing.
              </p>
            </div>

            <div className="text-sm text-[#547A9B] font-medium">
              Showing {filteredJobs.length} active roles
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E8ECF0]">
            <button
              onClick={() => setSelectedDepartment('all')}
              className={`px-4 py-2 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                selectedDepartment === 'all'
                  ? 'bg-[#002147] text-white'
                  : 'bg-[#F8F9FA] text-[#344B62] hover:bg-[#E8ECF0]'
              }`}
            >
              All Divisions
            </button>
            {departments.filter(d => d !== 'all').map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                  selectedDepartment === dept
                    ? 'bg-[#002147] text-white'
                    : 'bg-[#F8F9FA] text-[#344B62] hover:bg-[#E8ECF0]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#FFFFFF] border border-[#E8ECF0] hover:border-[#547A9B] p-6 sm:p-8 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group shadow-2xs hover:shadow-xs rounded-[2px]"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#547A9B] font-medium">
                    <span className="px-2.5 py-1 bg-[#F0F4F8] text-[#002147] rounded-xs font-semibold">
                      {job.department}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#344B62]">
                      <MapPin className="w-3.5 h-3.5 text-[#547A9B]" />
                      Ta&rsquo; Qali Campus, Malta
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#344B62]">
                      <Clock className="w-3.5 h-3.5 text-[#547A9B]" />
                      {job.type}
                    </span>
                    <span>·</span>
                    <span className="text-[#344B62]">
                      Experience: {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-[#062746] group-hover:text-[#0055A5] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-sm text-[#344B62] leading-relaxed line-clamp-2">
                    {job.overview}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => onApplyJob(job)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#002147] hover:bg-[#062746] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer rounded-[2px] flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Spontaneous Application Dossier */}
          <div className="mt-14 p-8 sm:p-10 bg-[#002147] text-white rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00A3E0]">
                Spontaneous Candidate Roster
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight">
                Don&rsquo;t see your exact role listed?
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                We are always eager to connect with chartered civil engineers, BIM specialists, heavy plant operators, and experienced estimators who share our commitment to craftsmanship.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenGeneralApplication}
                className="px-7 py-3.5 bg-white text-[#002147] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-[2px] flex items-center gap-2 shadow-md"
              >
                <span>Submit General Application</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
