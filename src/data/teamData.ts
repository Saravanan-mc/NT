export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string;
}

export const studioInfo = {
  name: 'NEDUNTHATCHAN ARCHITECTS',
  shortName: 'Nedunthatchan',
  tagline: 'Bridging Dream & Reality',
  heroHeadline: 'Designing the Future of Our Era',
  founder: 'Ar. Karthikraja G',
  degree: 'B.Arch',
  founderTitle: 'Founder & Principal Architect',
  coaRegistration: 'CA/2022/149864',
  phone: '+91 9500975083',
  phoneRaw: '+919500975083',
  website: 'https://nedunthatchan.com',
  googleReviewRating: '5.0 ★',
  yearsInBusiness: '7 Years in Practice',
  operatingHours: 'Open 24 Hrs · Direct Client Access',
  whatsappUrl: 'https://wa.me/919500975083?text=Hello%20Ar.%20Karthikraja%2C%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20design%20consultation%20with%20Nedunthatchan%20Architects.',
  tamilMotto: 'கண்டதும் இனித்திடும் நற்குடிலொன்று செய்வோம்!',
  disciplines: ['ARCHITECTURE', 'INTERIORS', 'CONSTRUCTION', 'PMC'],
  categories: ['Architects', 'Interior Designers', 'Interior Decorators', 'PMC Consultants'],
  welcomeText: "Welcome to our Architectural firm in Erode, where we specialize in creating innovative and unique designs that stand out. Our team of experienced architects is dedicated to bringing your vision to life with creativity and precision. Whether you're looking for residential or commercial solutions, we pride on delivering exceptional quality and service. Let us transform your space into something extraordinary!",
  ethos: 'EVERY LIFE FORM HAS A REASON FOR ITS EXISTENCE., AND SO, WE ARE HERE TO DESIGN THE FUTURE OF OUR ERA!',
  foundedYear: '2017',
  associateName: 'Supreme Techno Associates',
  associateFoundedYear: '1979',
  stats: [
    { value: '5.0★', label: 'Google Verified Rating' },
    { value: '7+', label: 'Years Architectural Excellence' },
    { value: '120+', label: 'Built Luxury Projects' },
    { value: '100%', label: 'Turnkey On-Site Stewardship' },
  ],
  methodology: [
    {
      step: '01',
      title: 'Solar & Wind Climatology',
      desc: 'Detailed analysis of local Tamil Nadu sun-path trajectories, thermal gradients, and southwest monsoon wind tunnels before drafting initial concepts.'
    },
    {
      step: '02',
      title: 'Generative 3D & VR Modeling',
      desc: 'Crafting spatial proportions through physical massing studies, realistic 3D renderings, and virtual reality client walkthroughs.'
    },
    {
      step: '03',
      title: 'Biophilic Integration',
      desc: 'Embedding indoor water bodies, central double-height courtyards, teak louvers, and perforated terracotta jalis for natural passive cooling.'
    },
    {
      step: '04',
      title: 'Turnkey Stewardship',
      desc: 'Meticulous on-site execution, material procurement, timeline adherence, and finishing craftsmanship until the final key handover.'
    }
  ],
  offices: [
    {
      city: 'Erode',
      role: 'Head Atelier & Architectural Studio',
      address: '193A, Valayakara Street, Near Lakshmi Nei Store, Kasipalayam, Erode - 638009, Tamil Nadu, India',
      doorNo: '193A',
      landmark: 'Near Lakshmi Nei Store',
      street: 'Valayakara Street',
      area: 'Kasipalayam',
      pincode: '638009',
      state: 'Tamil Nadu',
      country: 'India',
      phone: '+91 9500975083',
      phoneRaw: '+919500975083',
      hours: 'Open 24 Hrs · Direct Client Access',
      coordinates: '11.3209° N, 77.7073° E',
      latitude: 11.3209417,
      longitude: 77.7072597,
      googleMapsEmbed: 'https://maps.google.com/maps?q=11.3209417,77.7072597+(Nedunthatchan+Architects)&t=&z=17&ie=UTF8&iwloc=&output=embed',
      googleMapsDirections: 'https://www.google.com/maps/place/Nedunthatchan+Architects/@11.3209417,77.7072597,17z/data=!4m14!1m7!3m6!1s0x3ba96fd7dbba4535:0xa85e254994acfee5!2sNedunthatchan+Architects!8m2!3d11.3209417!4d77.7072597!16s%2Fg%2F11v_05v9kn!3m5!1s0x3ba96fd7dbba4535:0xa85e254994acfee5!8m2!3d11.3209417!4d77.7072597!16s%2Fg%2F11v_05v9kn'
    }
  ],
  socials: [
    { name: 'YouTube', url: 'https://youtube.com/@karthickraja583?si=j-iuMlALTFUs_qeB', handle: '@karthickraja583' },
    { name: 'Instagram', url: 'https://www.instagram.com/nt__architects/', handle: '@nt__architects' },
    { name: 'Threads', url: 'https://www.threads.com/@nt__architects', handle: '@nt__architects' },
    { name: 'Facebook', url: 'https://www.facebook.com/p/Nedunthatchan-Architects-61564874193582/', handle: 'Nedunthatchan Architects' }
  ]
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Ar. Karthikraja G',
    role: 'Founder & Principal Architect',
    credentials: 'B.Arch · Council of Architecture (CA/2022/149864)',
    bio: 'Founder and Principal of Nedunthatchan Architects. Guided by the conviction that every life form has a reason for its existence, crafting enduring residences with climatically intelligent and sculpturally profound permanence.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Ananya Somasundaram',
    role: 'Head of Interior Architecture',
    credentials: 'M.Des (Interior & Spatial Design, Milan)',
    bio: 'Curator of tactile luxury, bespoke millwork, and atmospheric illumination. Believes true luxury is felt before it is seen.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Er. R. Sundaralingam',
    role: 'Principal Structural Director (Supreme Techno Associates)',
    credentials: 'M.E. (Structures), F.I.E., 45+ Yrs Practice',
    bio: 'Pioneering structural integrity since 1979. Directs complex post-tensioned cantilevers and monolithic concrete frameworks for Nedunthatchan Architects projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Kavitha Ramakrishnan',
    role: 'Lead Architect & Sustainability Specialist',
    credentials: 'B.Arch, IGBC AP',
    bio: 'Specialist in biophilic design, micro-climate cross-ventilation, and indigenous South Indian masonry integration.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  }
];

