import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Search, 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { Project } from '../data/companyData';
import { NavSection } from './Navbar';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
  onNavigate?: (section: NavSection) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenConsultation,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Curated project gallery with guaranteed unique, high-resolution construction imagery
  const projectsData: (Project & { fullCategory: string })[] = [
    {
      id: 'novum-financial-tower',
      title: 'Novum Commercial Financial Tower',
      category: 'Commercial',
      fullCategory: 'Commercial Construction',
      location: 'Central Banking District, Malta',
      year: '2024',
      area: '38,000 m²',
      client: 'Novum European Banking Group',
      heroImage: '/images/novum-tower-construction.jpg',
      gallery: [
        '/images/novum-tower-construction.jpg'
      ],
      description: 'A 14-storey headquarters designed around a dramatic 8-storey central light atrium, automated timber sun-shading louvres, and turnkey bespoke millwork.',
      architecturalHighlights: [
        'Central glass atrium with suspended helical staircase',
        'Perforated acoustic timber baffles custom-milled in Ta\' Qali',
        'Automated solar-tracking exterior bronze louvre system'
      ],
      engineeringScope: [
        'Composite structural steel and ultra-high-performance concrete core',
        'WiredScore Platinum and WELL Building Standard Gold certification',
        'Sub-grade robotic vehicle parking vault'
      ]
    },
    {
      id: 'kallisto-coastline-residences',
      title: 'Kallisto Residential Sanctuaries',
      category: 'Residential',
      fullCategory: 'Residential Construction',
      location: 'Valletta Maritime Enclave, Malta',
      year: '2025',
      area: '18,500 m²',
      client: 'Aura Private Capital & Attard Bros',
      heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Sixteen ultra-luxury private penthouses and villas combining restored warm limestone with cantilevered bronze-finished terraces and private infinity pools.',
      architecturalHighlights: [
        'Hand-dressed natural limestone masonry paired with slim-frame glazing',
        'Terraces with integrated glass-bottom plunge pools',
        'Custom acoustic smoked oak joinery throughout'
      ],
      engineeringScope: [
        'Structural micro-pinning of historical bedrock',
        'Acoustic isolation exceeding European Class A criteria',
        'Closed-loop solar thermal system with sub-metered smart battery storage'
      ]
    },
    {
      id: 'zephyr-logistics-campus',
      title: 'Zephyr Intermodal Logistics Campus',
      category: 'Industrial',
      fullCategory: 'Industrial Projects',
      location: 'Southern Freight Corridor, Malta',
      year: '2024',
      area: '86,000 m²',
      client: 'Continental Logistics Group',
      heroImage: '/images/materials-logistics-warehouse.jpg',
      gallery: [
        '/images/materials-logistics-warehouse.jpg'
      ],
      description: 'High-throughput distribution campus engineered with prestressed 34-meter roof spans, laser-levelled jointless industrial floors, and rooftop solar power.',
      architecturalHighlights: [
        'Clear interior clearance height of 16 meters with 34m precast beam spans',
        '4.2 megawatt rooftop photovoltaic system generating 110% of operational demand',
        'Hardened heavy-duty exterior transit apron designed for 120-tonne transports'
      ],
      engineeringScope: [
        'Heavy precast columns fabricated off-site in our Ta\' Qali batching facilities',
        'Jointless steel-fiber concrete floor slabs conforming to FM2 surface tolerance',
        'Stormwater retention system with 22,000 m³ capacity'
      ]
    },
    {
      id: 'grand-harbour-marine-pier',
      title: 'Grand Harbour Maritime Quay & Deep Piling',
      category: 'Commercial',
      fullCategory: 'Infrastructure',
      location: 'Grand Harbour Seaport, Valletta',
      year: '2023',
      area: '42,000 m²',
      client: 'Port Authority Infrastructure Directorate',
      heroImage: '/images/harbour-quay-marine-piling.jpg',
      gallery: [
        '/images/harbour-quay-marine-piling.jpg'
      ],
      description: 'Major maritime infrastructure encompassing 450 meters of reinforced concrete deep-water quay wall, heavy gantry crane runways, and seismic seabed grouting.',
      architecturalHighlights: [
        'Heavy maritime precast caissons cast in dry dock',
        'Sulfate-resistant high-durability marine concrete formulation',
        'Integrated shore-to-ship high-voltage electrical substations'
      ],
      engineeringScope: [
        'Drilled shaft foundation piles anchored 28m below mean sea level',
        'Cathodic protection system guaranteeing 100-year design life',
        'Full acoustic bathymetric scanning and sub-sea diver inspection'
      ]
    },
    {
      id: 'aurelia-cultural-forum',
      title: 'The Aurelia Cultural Forum & Arts Pavilion',
      category: 'Commercial',
      fullCategory: 'Completed Developments',
      location: 'St. Julian\'s Bay, Malta',
      year: '2025',
      area: '52,000 m²',
      client: 'European Foundation for Architecture',
      heroImage: '/images/aurelia-cultural-forum.jpg',
      gallery: [
        '/images/aurelia-cultural-forum.jpg'
      ],
      description: 'A monument to modern public architecture showcasing post-tensioned curved precast panels, a column-free grand auditorium, and panoramic glazed harbor galleries.',
      architecturalHighlights: [
        'Curved 26-meter precast concrete facade ribs cast in Ta\' Qali',
        'Seawater district geothermal cooling matrix reducing cooling energy by 44%',
        'Cantilevered public reflection deck suspended directly above coastal rocks'
      ],
      engineeringScope: [
        'Post-tensioned concrete structural ribs spanning 22 meters without vertical columns',
        'Deep rock-anchored foundation grid',
        'LEED Platinum and BREEAM Outstanding environmental certification'
      ]
    },
    {
      id: 'central-interchange-viaduct',
      title: 'Central Highway Viaduct & Flyovers',
      category: 'Commercial',
      fullCategory: 'Infrastructure',
      location: 'Central Arterial Link, Marsa',
      year: '2024',
      area: '64,000 m²',
      client: 'National Infrastructure Agency',
      heroImage: '/images/highway-viaduct-construction.jpg',
      gallery: [
        '/images/highway-viaduct-construction.jpg'
      ],
      description: 'Tier-one structural flyover network featuring prestressed bridge girders, seismic expansion joints, and continuous slipform concrete crash barriers.',
      architecturalHighlights: [
        'Off-site precast prestressed bridge girders up to 40 meters length',
        'Seamless asphalt wear-surface with integrated noise attenuation',
        'LED safety luminaire integration embedded into concrete parapets'
      ],
      engineeringScope: [
        'Large-diameter bored concrete piling into limestone strata',
        'Real-time strain gauge telemetric structural health monitoring',
        'Fast-track delivery minimizing commuter disruption'
      ]
    }
  ];

  const categories = ['All', 'Commercial Construction', 'Residential Construction', 'Industrial Projects', 'Infrastructure', 'Completed Developments'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCategory =
        activeCategory === 'All' || proj.fullCategory === activeCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Landmark Works & Portfolio</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Projects
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            Delivering construction excellence through quality engineering, planning and execution.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-12 border-b border-[#E8ECF0]">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#062746] text-white'
                    : 'bg-[#F8F9FA] text-[#062746] border border-[#E8ECF0] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#547A9B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-2.5 text-xs border border-[#E8ECF0] bg-[#F8F9FA] text-[#062746] placeholder:text-[#344B62]/60 focus:outline-hidden focus:border-[#062746] focus:bg-white"
            />
          </div>
        </div>

        {/* Project Gallery Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#E8ECF0] bg-[#F8F9FA]">
            <p className="text-base text-[#344B62]">
              No works found matching &ldquo;{searchQuery}&rdquo; in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 bg-[#062746] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#344B62] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-28">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-[#FFFFFF] border border-[#E8ECF0] group cursor-pointer flex flex-col justify-between hover:border-[#547A9B] transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F8F9FA]">
                    <ArchitecturalImage
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#062746] text-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider">
                      {project.fullCategory}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 text-[#062746] px-2.5 py-1 text-[11px] font-mono font-medium border border-[#E8ECF0]">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#547A9B] font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-medium text-[#062746] tracking-tight group-hover:text-[#547A9B] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#344B62] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#E8ECF0] mt-4 flex items-center justify-between text-xs font-medium text-[#062746]">
                  <span className="text-[#547A9B]">{project.area}</span>
                  <div className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#547A9B]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="p-10 sm:p-14 bg-[#F8F9FA] border border-[#E8ECF0] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Pre-Construction & Tenders
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#062746]">
              Submit a Project Tender or Engineering Scope
            </h3>
            <p className="text-base text-[#344B62]">
              Our chief civil estimators and BIM modeling directors provide rigorous turnkey project assessments.
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
            {onNavigate && (
              <button
                onClick={() => onNavigate('expertise')}
                className="px-8 py-4 bg-white text-[#062746] border border-[#E8ECF0] font-medium text-sm uppercase tracking-wider hover:bg-[#F8F9FA] transition-colors cursor-pointer"
              >
                All Expertise
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
