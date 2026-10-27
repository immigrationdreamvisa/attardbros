import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Maximize2,
  Sparkles,
  Layers
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { NavSection } from './Navbar';

interface PropertiesSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

interface PropertyItem {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Apartment Buildings' | 'Development Projects';
  location: string;
  status: 'Completed' | 'Under Construction' | 'Upcoming';
  year: string;
  area: string;
  description: string;
  image: string;
  highlights: string[];
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const properties: PropertyItem[] = [
    {
      id: 'villa-solaria',
      name: 'Villa Solaria Private Enclave',
      category: 'Residential',
      location: 'Madliena Ridge, Malta',
      status: 'Completed',
      year: '2025',
      area: '14,200 m²',
      description: 'An exclusive collection of eight bioclimatic luxury villas embedded into the natural terraced topography, featuring infinity pools, cantilevered stone terraces, and zero-emission solar systems.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Passive Solar Bioclimatic Orientation',
        'Private Sub-Level Wine Cellars & Spa Suites',
        'Floor-to-Ceiling Thermal Bronze Glazing'
      ]
    },
    {
      id: 'grand-central-pavilion',
      name: 'Grand Central Corporate Pavilion',
      category: 'Commercial',
      location: 'Central Business District, Mrieħel',
      status: 'Completed',
      year: '2024',
      area: '32,500 m²',
      description: 'A nine-storey Grade-A commercial office landmark featuring column-free floorplates, an 8-storey biophilic interior atrium, and LEED Gold sustainable environmental engineering.',
      image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'LEED Gold Environmental Certification',
        'Touchless Destination-Dispatch Elevators',
        'Integrated Rooftop Executive Terrace & Solar Canopy'
      ]
    },
    {
      id: 'horizon-waterfront',
      name: 'Horizon Waterfront Residences',
      category: 'Apartment Buildings',
      location: 'Tower Road Promenade, Sliema',
      status: 'Completed',
      year: '2025',
      area: '21,000 m²',
      description: 'Fourteen bespoke sea-facing apartments and two duplex penthouses built with acoustic post-tensioned floor systems, automated shading louvres, and master joinery finishes.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Unobstructed Panoramic Mediterranean Views',
        'Acoustically Isolated Slabs (Class A Standard)',
        'Private Sub-Grade Concierge Parking'
      ]
    },
    {
      id: 'ta-qali-business-park',
      name: 'Ta\' Qali Innovation Business Park',
      category: 'Development Projects',
      location: 'Ta\' Qali Tech Zone',
      status: 'Under Construction',
      year: '2026',
      area: '48,000 m²',
      description: 'A master-planned sustainable business campus combining high-tech R&D facilities, logistics automation hubs, and landscaped green courtyard zones for international enterprises.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Proprietary Low-Carbon Precast Concrete Frames',
        '100% On-Site Geothermal & Solar Micro-Grid',
        'Direct Link to Major Transit Arteries'
      ]
    },
    {
      id: 'azure-cliff-terraces',
      name: 'Azure Cliff Coastal Sanctuary',
      category: 'Residential',
      location: 'Għajn Tuffieħa Coast, Mellieħa',
      status: 'Completed',
      year: '2024',
      area: '16,800 m²',
      description: 'Twelve panoramic clifftop residences sculpted from warm local coralline limestone and weathered architectural zinc, celebrating Mediterranean natural light and sea breezes.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Traditional Dressed Limestone Facade Walls',
        'Natural Cross-Ventilation Wind Corridors',
        'Private Infinity Edge Plunge Pools'
      ]
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Apartment Buildings', 'Development Projects'];

  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(p => p.category === activeFilter);

  return (
    <section id="properties" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <Home className="w-3.5 h-3.5" />
            <span>Development & Real Estate</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Properties
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            Creating modern spaces through thoughtful property development and construction.
          </p>
        </div>

        {/* Development Philosophy Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 bg-[#F8F9FA] border border-[#E8ECF0] mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
              Our Development Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#062746]">
              Enduring Generational Value Engineered from Within
            </h2>
            <p className="text-base text-[#344B62] leading-relaxed">
              Unlike purely speculative property developers, Attard Bros designs, engineers, and builds every asset with the backing of our own batching plants and master joinery workshops. This ensures lifetime durability, energy self-sufficiency, and timeless aesthetic prestige.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#062746] text-white p-6 sm:p-8 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#547A9B] font-semibold">
              Portfolio Overview
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">€480M+</div>
              <div className="text-xs text-white/70 mt-0.5">Asset Pipeline Managed</div>
            </div>
            <div className="border-t border-white/10 pt-3">
              <div className="text-3xl font-semibold text-white">1,450+</div>
              <div className="text-xs text-white/70 mt-0.5">Delivered Residential & Commercial Units</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-16 border-b border-[#E8ECF0]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#062746] text-white'
                  : 'bg-[#F8F9FA] text-[#062746] border border-[#E8ECF0] hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#547A9B] font-medium hidden sm:inline">
            Showing {filteredProperties.length} Properties
          </span>
        </div>

        {/* Property Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-28">
          {filteredProperties.map((property) => (
            <div 
              key={property.id}
              className="bg-[#FFFFFF] border border-[#E8ECF0] overflow-hidden flex flex-col justify-between hover:border-[#547A9B] transition-colors"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F9FA]">
                  <ArchitecturalImage
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#062746] text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
                    {property.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 text-[#062746] px-3 py-1 text-xs font-medium uppercase tracking-wider border border-[#E8ECF0]">
                    {property.category}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#547A9B] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.location}</span>
                    <span className="text-[#E8ECF0]">·</span>
                    <span>{property.area}</span>
                  </div>

                  <h3 className="text-2xl font-medium text-[#062746] tracking-tight">
                    {property.name}
                  </h3>

                  <p className="text-base text-[#344B62] leading-relaxed">
                    {property.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E8ECF0]">
                    {property.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#344B62]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#547A9B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-[#F8F9FA] text-[#062746] border border-[#E8ECF0] hover:bg-[#062746] hover:text-white transition-colors text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire / Investment Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-[#E8ECF0]">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#547A9B] font-medium">Explore All Divisions</div>
            <div className="text-lg font-medium text-[#062746]">Our Complete Expertise Overview</div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('expertise')}
              className="px-7 py-3.5 bg-[#062746] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Back to Expertise</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('materials')}
              className="px-7 py-3.5 bg-white text-[#062746] border border-[#E8ECF0] font-medium text-xs uppercase tracking-wider hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              View Materials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
