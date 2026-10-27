export interface Division {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  capabilities: string[];
  keyStats: { label: string; value: string }[];
  featuredFacility: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Interior Design';
  location: string;
  year: string;
  area: string;
  client: string;
  heroImage: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  engineeringScope: string[];
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
}

export interface CampusLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  coordinates: { x: number; y: number };
  details: string;
}

export const DIVISIONS: Division[] = [
  {
    id: 'construction-projects',
    name: 'Construction & Projects',
    tagline: 'Tier-1 contracting, monumental structural engineering & EPC delivery',
    description: 'Delivering landmark commercial towers, civil port infrastructure, seismic stabilization, and complex public facilities engineered to Eurocode standards.',
    longDescription: 'With over four decades of verified tier-one contracting leadership, Valmont Construction & Projects undertakes monumental structural frames, deep marine piling, healthcare facilities, and landmark commercial developments. We integrate Building Information Modeling (BIM Level 2), drone-assisted volumetric surveys, and dedicated structural engineers on every active site.',
    image: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Commercial Towers & Structural Framing',
      'Heavy Civil Infrastructure & Marine Works',
      'Structural EPC & Project Management',
      'Healthcare & Institutional Facilities',
      'BIM Level 2 Coordination & 4D Scheduling',
      'Seismic Retrofitting & Ground Stabilization'
    ],
    keyStats: [
      { label: 'Completed Sites', value: '420+' },
      { label: 'Max Project Scale', value: '185,000 m²' },
      { label: 'On-Site Safety Record', value: '99.8%' }
    ],
    featuredFacility: 'Central Engineering & Logistics Center, North Sector'
  },
  {
    id: 'building-materials',
    name: 'Building Materials',
    tagline: 'Architectural precast panels, certified natural stone & geopolymer concrete',
    description: 'Proprietary batching plants fabricating precision architectural precast facade elements, hollowcore floor slabs, low-carbon geopolymer mixes, and dressed stone.',
    longDescription: 'Operating European-standard automated concrete batching plants, Valmont Building Materials supplies architects and contractors with bespoke precast architectural concrete, certified aggregates, natural limestone, and paving solutions. Our laboratory conducts continuous stress tests guaranteeing CE-marked structural integrity.',
    image: 'https://images.unsplash.com/photo-1751054554594-85de2fe63e6b?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Architectural Precast Facade Panels',
      'Prestressed Hollowcore & T-Beams',
      'Low-Carbon GeoCrete Formulations',
      'Travertine & Natural Limestone Masonry',
      'High-Performance Ready-Mix Batching',
      'Accredited Laboratory Batch Verification'
    ],
    keyStats: [
      { label: 'Annual Concrete Output', value: '250,000 m³' },
      { label: 'Embodied Carbon Reduced', value: '-38%' },
      { label: 'Batch Accuracy', value: '99.9%' }
    ],
    featuredFacility: 'Valmont Automated Batching Plant & Aggregates Quarry'
  },
  {
    id: 'interior-fitout',
    name: 'Interior Fit-Out & Joinery',
    tagline: 'Artisanal architectural millwork, bespoke woodwork & turnkey fit-outs',
    description: 'Master woodworkers, 5-axis CNC machining, and turnkey luxury interior execution for international boutique hotels, executive boardrooms, and private residences.',
    longDescription: 'Our 12,000m² dedicated joinery atelier blends heritage European craftsmanship with cutting-edge 5-axis CNC machining. From acoustic timber wall systems and bespoke executive desks to handcrafted cabinetry and certified fire-rated timber door sets, we execute turnkey interior perfection.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Bespoke Architectural Millwork & Joinery',
      'Turnkey Commercial & Hospitality Fit-Out',
      'Acoustic Paneling & Exotic Wood Veneers',
      'Monolithic Stone & Timber Countertops',
      'Certified Fire-Rated Timber Doors (FD30/60)',
      'Turnkey Site Installation & Commissioning'
    ],
    keyStats: [
      { label: 'Atelier Floor Area', value: '12,000 m²' },
      { label: 'Artisans & Machinists', value: '180+' },
      { label: 'Completed Interiors', value: '540+' }
    ],
    featuredFacility: 'Valmont Master Joinery & Surface Engineering Atelier'
  },
  {
    id: 'property-development',
    name: 'Property Development',
    tagline: 'Visionary coastal estates, commercial pavilions & sustainable communities',
    description: 'Conceiving, financing, constructing, and managing architecturally significant residential sanctuaries and ESG-aligned commercial towers.',
    longDescription: 'Valmont Property Development identifies prime locations to develop landmark real estate investments. We champion passive thermal architecture, biophilic garden atriums, smart-building automation, and private sanctuaries that elevate European contemporary living.',
    image: 'https://images.unsplash.com/photo-1511389890279-dea4de10962d?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Master-Planned Residential Sanctuaries',
      'Waterfront & Coastal Luxury Villas',
      'Grade-A Commercial Office Pavilions',
      'Urban Regeneration & Heritage Conservation',
      'Bioclimatic Passive House Architecture',
      'Full Asset Lifecycle Management & Sales'
    ],
    keyStats: [
      { label: 'Capital Portfolio Value', value: '€480M+' },
      { label: 'Residential Units Delivered', value: '1,450+' },
      { label: 'BREEAM / LEED Rating', value: 'Gold/Platinum' }
    ],
    featuredFacility: 'Valmont Development & Architectural Design Studios'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'the-aurelia-cultural-forum',
    title: 'The Aurelia Cultural Forum & Arts Pavilion',
    category: 'Commercial',
    location: 'St. Julian\'s Bay',
    year: '2025',
    area: '52,000 m²',
    client: 'European Foundation for Architecture',
    heroImage: '/images/aurelia-cultural-forum.jpg',
    gallery: [
      '/images/aurelia-cultural-forum.jpg'
    ],
    description: 'A monument to modern public architecture showcasing post-tensioned curved precast panels, a column-free grand auditorium, and panoramic glazed harbor galleries.',
    architecturalHighlights: [
      'Curved 26-meter precast concrete facade ribs cast in our proprietary batching yard',
      'Seawater district geothermal cooling matrix reducing cooling energy by 44%',
      'Cantilevered public reflection deck suspended directly above the coastal rocks'
    ],
    engineeringScope: [
      'Deep marine piling anchored 30 meters beneath the seabed',
      'Post-tensioned concrete structural ribs spanning 22 meters without vertical columns',
      'LEED Platinum and BREEAM Outstanding environmental certification'
    ]
  },
  {
    id: 'kallisto-coastline-residences',
    title: 'Kallisto Coastal Sanctuaries',
    category: 'Residential',
    location: 'Valletta Maritime Enclave',
    year: '2025',
    area: '18,500 m²',
    client: 'Aura Private Capital & Valmont Living',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sixteen ultra-luxury private penthouses and villas combining restored warm limestone with cantilevered bronze-finished terraces and private infinity pools.',
    architecturalHighlights: [
      'Hand-dressed natural limestone masonry paired with minimalist slim-frame bronze glazing',
      'Terraces with integrated glass-bottom plunge pools engineered into post-tensioned slabs',
      'Custom acoustic smoked oak joinery and bookmatched marble finishes throughout'
    ],
    engineeringScope: [
      'Structural micro-pinning of historical bedrock and vaulted foundations',
      'Acoustic isolation between suites exceeding European Class A acoustic criteria',
      'Closed-loop solar thermal system with sub-metered smart battery storage'
    ]
  },
  {
    id: 'novum-financial-tower',
    title: 'Novum Financial Tower & Atrium',
    category: 'Commercial',
    location: 'Central Banking District',
    year: '2024',
    area: '38,000 m²',
    client: 'Novum European Banking Group',
    heroImage: '/images/novum-tower-construction.jpg',
    gallery: [
      '/images/novum-tower-construction.jpg'
    ],
    description: 'A 14-storey headquarters designed around a dramatic 8-storey central light atrium, automated timber sun-shading louvres, and turnkey bespoke millwork.',
    architecturalHighlights: [
      'Central glass atrium with a suspended timber helical staircase manufactured in our atelier',
      'Perforated acoustic timber baffles custom-milled to achieve NC-25 acoustic levels',
      'Automated solar-tracking exterior bronze louvre brise-soleil system'
    ],
    engineeringScope: [
      'Composite structural steel and ultra-high-performance concrete core',
      'WiredScore Platinum and WELL Building Standard Gold certification',
      'Sub-grade robotic vehicle parking vault accommodating 240 executive vehicles'
    ]
  },
  {
    id: 'zephyr-logistics-campus',
    title: 'Zephyr Intermodal Logistics Campus',
    category: 'Industrial',
    location: 'Southern Freight Corridor',
    year: '2024',
    area: '86,000 m²',
    client: 'Continental Logistics Group',
    heroImage: '/images/materials-logistics-warehouse.jpg',
    gallery: [
      '/images/materials-logistics-warehouse.jpg'
    ],
    description: 'High-throughput distribution campus engineered with prestressed 34-meter roof spans, laser-levelled jointless industrial floors, and rooftop solar power.',
    architecturalHighlights: [
      'Clear interior clearance height of 16 meters with 34-meter precast beam spans',
      '4.2 megawatt rooftop photovoltaic system generating 110% of operational demand',
      'Hardened heavy-duty exterior transit apron designed for 120-tonne freight transports'
    ],
    engineeringScope: [
      'Heavy precast columns fabricated off-site in our batching facilities',
      'Jointless steel-fiber concrete floor slabs conforming to FM2 surface tolerance',
      'Stormwater retention system with 22,000 m³ capacity for landscaping reuse'
    ]
  },
  {
    id: 'maison-sylvan-suites',
    title: 'Maison Sylvan Hospitality Complex',
    category: 'Commercial',
    location: 'Old Town Promenade',
    year: '2024',
    area: '9,200 m²',
    client: 'Sylvan Hospitality Collection',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Complete interior architecture, turnkey joinery, custom furniture, and bespoke stone vanities for a 72-room boutique sanctuary.',
    architecturalHighlights: [
      'Fluted walnut wall cladding with integrated warm linear LED lighting channels',
      'Monolithic honed travertine bathroom suites fabricated by our stone masons',
      'Certified soundproof balcony doors delivering pin-drop acoustic calm'
    ],
    engineeringScope: [
      'Concealed fan-coil MEP infrastructure with smart microclimate zone sensors',
      'European Class EI60 fire-rated bespoke entrance doors with magnetic drop seals',
      'Centralized guest room management network (GRMS) controlling custom lighting scenes'
    ]
  },
  {
    id: 'the-belvedere-pavilion',
    title: 'The Belvedere Cliffside Villa',
    category: 'Residential',
    location: 'Coastal Escarpment',
    year: '2023',
    area: '3,800 m²',
    client: 'Private International Commission',
    heroImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1767099490127-6f70b39c14a1?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A private residential pavilion anchored directly into a coastal cliff face with an 8-meter cantilevered terrace and frameless glass facades.',
    architecturalHighlights: [
      'Cantilevered concrete terrace extending 8 meters over coastal rock cliffs',
      'Thermal mass limestone internal walls providing natural passive temperature control',
      'Triple-glazed panoramic structural glass facade with electrochromic solar tinting'
    ],
    engineeringScope: [
      'High-tensile rock anchor tie-back foundation system',
      'Off-grid energy system with lithium storage and greywater bio-filtration',
      'Concealed seismic isolation bearings protecting the upper cantilevered wing'
    ]
  }
];

export const COMPANY_STATS = [
  { label: 'Years of Experience', value: 48, prefix: '', suffix: '+', note: 'Established 1978' },
  { label: 'Landmark Projects', value: 650, prefix: '', suffix: '+', note: 'Commercial, Residential & Civil' },
  { label: 'Multidisciplinary Team', value: 1200, prefix: '', suffix: '+', note: 'Engineers, Architects & Artisans' },
  { label: 'Integrated Divisions', value: 4, prefix: '', suffix: '', note: 'Synergistic Group Operations' }
];

export const AWARDS: Award[] = [
  {
    year: '2025',
    title: 'European Architectural Honor: Best Mixed-Use Development',
    organization: 'European Architectural Forum, London',
    category: 'Commercial & Urban Regeneration',
    description: 'Recognizing The Aurelia Cultural Forum for revolutionary precast concrete geometry and seawater-driven cooling.'
  },
  {
    year: '2024',
    title: 'Civil Infrastructure Engineering Trophy',
    organization: 'Chamber of Civil Engineers & Architects',
    category: 'Engineering Excellence',
    description: 'Honoring deep marine piling engineering and structural resilience in challenging Mediterranean coastal environments.'
  },
  {
    year: '2023',
    title: 'Net-Zero Sustainable Materials Innovation Award',
    organization: 'European Green Building Council',
    category: 'Environmental Stewardship',
    description: 'Honoring the 38% embodied carbon reduction achieved by our proprietary GeoCrete precast concrete formulation.'
  },
  {
    year: '2022',
    title: 'Master Builders Contractor of the Year',
    organization: 'Building & Construction Federation',
    category: 'Corporate Excellence',
    description: 'Recognizing over 4.8 million consecutive site hours without a lost-time incident and flawless on-schedule handovers.'
  }
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: 'senior-structural-engineer',
    title: 'Senior Structural Civil Engineer (PE)',
    department: 'Civil Engineering & Construction',
    location: 'Headquarters Campus, Executive Hub',
    type: 'Full-Time, Permanent',
    experience: '8+ Years',
    overview: 'Lead structural modeling, BIM coordination, and on-site engineering supervision for multi-million euro commercial and coastal infrastructure works.',
    responsibilities: [
      'Direct structural modeling in Revit, ETABS, and Tekla for precast and post-tensioned structures',
      'Collaborate directly with project directors and external architectural teams to optimize structural efficiency',
      'Review offsite fabrication drawings for precast panels, hollowcore systems, and steel trusses',
      'Supervise on-site structural stress testing and ensure compliance with Eurocodes and EN standards'
    ],
    requirements: [
      'B.Sc. or M.Sc. in Civil / Structural Engineering with chartered or professional license (PE / Warrant)',
      'Demonstrated experience leading design of reinforced concrete, precast, or heavy civil structures',
      'Fluency in English; strong technical writing and presentation skills',
      'Passionate about construction safety, structural innovation, and zero-defect delivery'
    ]
  },
  {
    id: 'bim-project-coordinator',
    title: 'BIM & Digital Construction Coordinator',
    department: 'Digital Design & Planning',
    location: 'Valmont Design Studios',
    type: 'Full-Time, Permanent',
    experience: '4+ Years',
    overview: 'Manage 3D federated BIM models, clash detection pipelines, and digital twin handovers connecting our construction sites to our precast batching plants.',
    responsibilities: [
      'Manage BIM Level 2 execution plans across all disciplines (Structural, Architectural, MEP)',
      'Conduct automated clash detection in Navisworks and chair weekly coordination workshops',
      'Liaise with our Joinery CNC machining team to export parametric millwork fabrication files',
      'Deploy on-site tablet BIM tools to site foremen and quality control inspectors'
    ],
    requirements: [
      'Degree in Architecture, Architectural Technology, or Construction Management',
      'Advanced proficiency in Autodesk Revit, Navisworks, BIM 360, and Dynamo/parametric scripting',
      'Experience with precast concrete manufacturing or modular construction workflows',
      'Strong organizational skills and ability to lead interdisciplinary digital reviews'
    ]
  },
  {
    id: 'master-joinery-craftsman',
    title: 'Senior Architectural Joinery Craftsman / Foreman',
    department: 'Interior Fit-Out & Joinery',
    location: 'Valmont Joinery Atelier',
    type: 'Full-Time, Permanent',
    experience: '6+ Years',
    overview: 'Supervise artisanal woodworking, high-end veneer pressing, and custom furniture construction for five-star hospitality and luxury residential projects.',
    responsibilities: [
      'Translate architectural millwork shop drawings into precision fabrication sequences',
      'Operate and oversee 5-axis CNC machining centers, edge banders, and veneer vacuum presses',
      'Enforce rigorous quality finishes on exotic hardwoods, custom stains, and polyurethane coatings',
      'Mentor apprentice carpenters and lead the atelier assembly team'
    ],
    requirements: [
      'Certified Master Carpenter or proven vocational joinery qualifications',
      'Deep mastery of timber properties, veneering, joinery hardware, and precision tolerances',
      'Pride in museum-grade finishing and meticulous attention to tactile details',
      'Commitment to rigorous workshop safety standards'
    ]
  },
  {
    id: 'property-development-manager',
    title: 'Commercial Property Development Manager',
    department: 'Property Development & Asset Management',
    location: 'Valmont Corporate Center',
    type: 'Full-Time, Permanent',
    experience: '7+ Years',
    overview: 'Drive project feasibility studies, zoning approvals, architectural design briefs, and financial modeling for flagship residential and commercial developments.',
    responsibilities: [
      'Evaluate land acquisition opportunities and lead due diligence and financial sensitivity models',
      'Coordinate external architectural masterplanners, environmental consultants, and municipal authorities',
      'Manage development budgets, project milestones, and project ROI tracking',
      'Collaborate with our marketing and sales teams on luxury brand positioning and customer journey'
    ],
    requirements: [
      'Degree in Real Estate Development, Architecture, Urban Planning, or Finance',
      'Proven track record delivering major residential or mixed-use development schemes',
      'Outstanding negotiation, commercial acumen, and stakeholder presentation capabilities',
      'Thorough understanding of regional planning policies, ESG standards, and real estate finance'
    ]
  }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: 'headquarters',
    name: 'Attard Bros Group Corporate Headquarters',
    type: 'Executive Offices & Directorate',
    address: 'Ta\' Qali Industrial Zone, Attard, ATD 4000, Malta',
    phone: '+356 21 415 332',
    coordinates: { x: 42, y: 38 },
    details: 'Houses executive leadership, engineering offices, technical estimating directors, BIM labs, and client consultation boardrooms.'
  },
  {
    id: 'batching-plant',
    name: 'Attard Materials & Precast Concrete Complex',
    type: 'Industrial Production & Testing Labs',
    address: 'Ta\' Qali Industrial Complex, Precast Works, Malta',
    phone: '+356 21 415 332',
    coordinates: { x: 70, y: 72 },
    details: 'Automated concrete batching facility, precast beam curing beds, aggregate stone processing, and accredited material testing laboratories.'
  },
  {
    id: 'joinery-atelier',
    name: 'Attard Joinery & Fit-Out Manufacturing Facility',
    type: 'Manufacturing & Custom Craftsmanship',
    address: 'Ta\' Qali Industrial Zone, Joinery Division, Malta',
    phone: '+356 21 415 332',
    coordinates: { x: 34, y: 24 },
    details: 'Modern manufacturing facility equipped with multi-axis CNC woodworking machinery, finishing booths, veneer pressing, and bespoke mockup suites.'
  },
  {
    id: 'development-studio',
    name: 'Attard Properties & Real Estate Studio',
    type: 'Design Gallery & Residential Showcase',
    address: 'Ta\' Qali Executive Complex, Attard, Malta',
    phone: '+356 21 415 332',
    coordinates: { x: 62, y: 28 },
    details: 'Dedicated property showroom featuring architectural models, interior finish selections, residential floor plans, and client consultation suites.'
  }
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'ISO 9001:2015 Quality Management',
    code: 'Quality Assurance',
    badge: 'Certified Excellence',
    description: 'Every phase from initial structural drafting to final batch concrete pouring undergoes documented quality assurance and third-party laboratory verification.',
    points: [
      'Batch-by-batch compressive strength and slump testing',
      'Full digital traceability of all reinforcing steel and aggregates',
      'Comprehensive pre-handover snagging with thermal imaging audits'
    ]
  },
  {
    title: 'ISO 45001:2018 Health & Safety',
    code: 'Zero-Harm Vision',
    badge: 'Safety First',
    description: 'Our unyielding commitment to occupational health ensures every operative, sub-contractor, and site visitor returns home safely each day.',
    points: [
      'Over 4.8 million consecutive site hours without a lost-time incident',
      'Mandatory daily site toolbox briefings and continuous safety training',
      'Real-time automated environmental and atmospheric monitoring on deep civil sites'
    ]
  },
  {
    title: 'ISO 14001 & BREEAM Environmental Standard',
    code: 'Ecological Responsibility',
    badge: 'Circular Construction',
    description: 'Pioneering circular economy principles across building materials, onsite waste sorting, and renewable solar energy integration.',
    points: [
      '100% closed-loop process water recycling at our concrete batching plant',
      'Low-carbon GeoCrete formulations reducing embodied carbon by 38%',
      'Site demolition aggregate crushing and reuse in certified sub-base layers'
    ]
  }
];
