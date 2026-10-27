import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Truck, 
  Factory, 
  Sparkles 
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { NavSection } from './Navbar';

interface MaterialsSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const materialCategories = [
    {
      id: 'cement-concrete',
      title: 'Cement & Concrete',
      subtitle: 'Ready-Mix, Precast & High-Performance Formulations',
      description: 'Computer-automated batching plants delivering certified ready-mix concrete formulations, low-carbon GeoCrete mixes, prestressed beams, and architectural precast facade elements engineered for maximum structural durability.',
      image: '/images/cement-batching-plant.jpg',
      specs: [
        'C20/25 to C60/75 High-Strength Mixes',
        'Prestressed Hollowcore Slabs & T-Beams',
        'Self-Compacting & Sulfate-Resistant Concrete',
        'Continuous Computerized Slump & Temperature Control'
      ]
    },
    {
      id: 'steel-structural',
      title: 'Steel & Structural Materials',
      subtitle: 'Reinforcement Mesh, Rebar & Structural Fabrication',
      description: 'Complete inventory of certified structural steel, cut-and-bent rebar cages, high-tensile reinforcement meshes, and prefabricated structural steel frames fabricated to exact Eurocode 2 & 3 tolerances.',
      image: '/images/structural-steel-rebar.jpg',
      specs: [
        'B500B & B500C Certified High-Tensile Rebar',
        'Automated CNC Bar Bending & Shearing Lines',
        'Custom Welded Heavy Reinforcement Cages',
        'Galvanized & Epoxy-Coated Options for Marine Works'
      ]
    },
    {
      id: 'tiles-flooring',
      title: 'Tiles & Flooring',
      subtitle: 'Architectural Natural Stone, Terrazzo & Paving',
      description: 'From precision-honed local Maltese limestone and Italian porcelain pavers to durable industrial terrazzo tiles, our flooring solutions combine enduring resilience with timeless architectural aesthetics.',
      image: '/images/tiles-flooring-warehouse.jpg',
      specs: [
        'Diamond-Gang-Sawed Natural Limestone',
        'High-Traffic Exterior Interlocking Concrete Pavers',
        'Vitrified Ceramic & Large-Format Porcelain',
        'Slip-Resistant R11/R12 Certified Finishes'
      ]
    },
    {
      id: 'building-supplies',
      title: 'Building Supplies & Masonry',
      subtitle: 'Certified Blocks, Aggregates & Specialty Mortars',
      description: 'Comprehensive wholesale supply of hollow concrete blocks, lightweight acoustic masonry units, washed aggregates, pozzolanic cement binders, and technical waterproofing mortars.',
      image: '/images/precast-concrete-plant.jpg',
      specs: [
        'Hollow Concrete Blocks in Standard & Dense Formats',
        'Graded Limestone Aggregates (0-4mm up to 20-32mm)',
        'Polymer-Modified Tile Adhesives & Grouts',
        'Thermal & Acoustic Insulating Sub-Base Screeds'
      ]
    },
    {
      id: 'production-distribution',
      title: 'Material Production & Distribution',
      subtitle: 'Ta\' Qali Industrial Campus & Modern Delivery Fleet',
      description: 'Our centralized production campus in Ta\' Qali combines automated manufacturing bays with a dedicated fleet of transit mixers, mobile concrete pumps, and heavy crane trucks guaranteeing on-time island-wide site dispatch.',
      image: '/images/materials-logistics-warehouse.jpg',
      specs: [
        'Dedicated Fleet of 35+ Transit Concrete Mixers',
        'Boom Pumps with Reaches up to 48 Meters',
        'GPS-Monitored Just-In-Time Dispatch Scheduling',
        'Direct Bulk Cement Silo Storage Facilities'
      ]
    }
  ];

  return (
    <section id="materials" className="bg-[#FFFFFF] text-[#062746] font-sans pt-32 pb-24 border-t border-[#E8ECF0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#547A9B] mb-5">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Manufacturing & Supplies</span>
          </div>

          <h1 className="text-display-large font-medium text-[#062746] tracking-tight leading-[1.08] mb-6">
            Materials
          </h1>

          <p className="text-editorial-body text-[#344B62] leading-relaxed">
            Delivering dependable building materials and quality products that support every stage of construction.
          </p>
        </div>

        {/* Operational Capabilities Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#F8F9FA] border border-[#E8ECF0] mb-24">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">250k m³</div>
            <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">Annual Concrete Output</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">CE Marked Products</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">ISO 9001</div>
            <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">Laboratory Certified</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-[#062746]">35+</div>
            <div className="text-xs uppercase tracking-wider text-[#344B62] mt-2 font-medium">Mixers & Pump Fleet</div>
          </div>
        </div>

        {/* Detailed Material Product Categories */}
        <div className="space-y-24 mb-28">
          {materialCategories.map((category, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#547A9B]">
                    Product Discipline 0{index + 1}
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-medium text-[#062746] tracking-tight">
                    {category.title}
                  </h2>

                  <div className="text-sm font-semibold uppercase tracking-wider text-[#547A9B]">
                    {category.subtitle}
                  </div>

                  <p className="text-base sm:text-lg text-[#344B62] leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#E8ECF0]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#062746]">
                      Key Technical Specifications
                    </div>
                    {category.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344B62]">
                        <CheckCircle2 className="w-4 h-4 text-[#547A9B] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenConsultation}
                      className="px-6 py-3 bg-[#062746] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>Inquire / Request Material Spec Sheet</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rectangular Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] overflow-hidden border border-[#E8ECF0] bg-[#F8F9FA]">
                    <ArchitecturalImage
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Standards & Accreditation Banner */}
        <div className="p-10 sm:p-14 bg-[#F8F9FA] border border-[#E8ECF0] mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#547A9B] font-semibold">
                Quality Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#062746]">
                Certified In-House Concrete & Structural Testing Laboratories
              </h3>
              <p className="text-base text-[#344B62] leading-relaxed">
                Every batch of ready-mix concrete and precast element manufactured at our Ta&rsquo; Qali facility undergoes rigorous compression, slump, and curing tests. We ensure full conformity with European EN 206 standards and verified CE markings.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 bg-white border border-[#E8ECF0] text-xs font-medium text-[#062746] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#547A9B] shrink-0" />
                <span>ISO 9001:2015 Quality Management</span>
              </div>
              <div className="p-4 bg-white border border-[#E8ECF0] text-xs font-medium text-[#062746] flex items-center gap-3">
                <Award className="w-5 h-5 text-[#547A9B] shrink-0" />
                <span>EN 206 & European CE Certification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-[#E8ECF0]">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#547A9B] font-medium">Continue Exploring</div>
            <div className="text-lg font-medium text-[#062746]">Next Division: Construction Projects</div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-7 py-3.5 bg-[#062746] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#344B62] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('expertise')}
              className="px-7 py-3.5 bg-white text-[#062746] border border-[#E8ECF0] font-medium text-xs uppercase tracking-wider hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              All Expertise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
