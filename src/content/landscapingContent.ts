import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const landscapingContent: DemoContent = {
  brand: {
    name: 'Northline Outdoor Studio',
    city: 'Toronto & West GTA',
    logo: {
      src: '/brands/northline-outdoor-mark.svg',
      alt: 'Northline Outdoor Studio logo mark',
    },
    favicon: '/brands/northline-outdoor-favicon.svg',
    browserTitle: 'Northline Outdoor Studio | Premium Landscaping',
    metaDescription:
      'Premium residential landscaping and outdoor living for Toronto and the West GTA. Patios, planting, lighting, and curb appeal upgrades with clear project planning.',
    tagline: 'Premium residential landscaping and outdoor living builds',
    phone: '+1 (647) 555-0139',
    phoneHref: 'tel:+16475550139',
    email: 'quotes@northlineoutdoor.ca',
    emailHref: 'mailto:quotes@northlineoutdoor.ca',
    address: '85 Cedarview Avenue, Etobicoke, ON M8X 1A4',
    hours: [
      'Monday to Friday: 7:30 AM to 6:00 PM',
      'Saturday: 8:00 AM to 3:00 PM',
      'Sunday: By appointment only',
    ],
    legalLine: 'Northline Outdoor Studio. All rights reserved.',
  },
  home: {
    hero: {
      eyebrow: 'Premium Landscaping | Toronto & West GTA',
      title: 'Outdoor spaces that look sharper, live better, and hold up season after season.',
      description:
        'Northline designs and builds refined patios, front entries, planting plans, and lighting upgrades for homeowners who want stronger curb appeal and a better way to use the property.',
      primaryCta: 'Request estimate',
      secondaryCta: 'Explore services',
      signals: [
        'Patios, planting, lighting, and curb appeal upgrades',
        'Projects planned around property conditions before materials are chosen',
        'Service area fit confirmed before on-site consultations are booked',
      ],
      image: {
        src: pexelsPhoto('1029599', 1800, 1200),
        alt: 'Premium landscaped backyard with stone patio and layered planting',
        position: 'center',
      },
    },
    highlights: [
      {
        title: 'Design-build planning',
        description:
          'Layouts, drainage, and material direction are resolved before installation starts, so the finished work feels intentional from every angle.',
      },
      {
        title: 'Clean, controlled installs',
        description:
          'Crews protect access points, keep the site orderly, and close each phase with the same care visible in the final result.',
      },
      {
        title: 'Built for Ontario seasons',
        description:
          'Base prep, edge restraint, lighting, and planting choices are made to keep the property performing through real seasonal cycles.',
      },
    ],
    featuredDishes: [
      {
        name: 'Custom Patios & Entertaining Zones',
        course: 'Outdoor living',
        description:
          'Stone and porcelain patio builds planned around furniture layout, circulation, and a cleaner hosting experience.',
        image: {
          src: pexelsPhoto('2132227', 1400, 1000),
          alt: 'Stone patio with seating and layered garden beds',
          position: 'center',
        },
      },
      {
        name: 'Front Entry & Curb Appeal Upgrades',
        course: 'Arrival and frontage',
        description:
          'Walkways, borders, and planting plans that give the property a stronger first read before anyone reaches the door.',
        image: {
          src: pexelsPhoto('2802293', 1400, 1000),
          alt: 'Refined front yard landscaping with walkway lighting and planting',
          position: 'center',
        },
      },
      {
        name: 'Landscape Lighting & Planting Refresh',
        course: 'Evening presence',
        description:
          'Low-voltage lighting and seasonal planting updates that keep the yard polished after dark and through peak season.',
        image: {
          src: pexelsPhoto('1453499', 1400, 1000),
          alt: 'Residential garden with warm pathway lighting at dusk',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'A disciplined project path from first walk-through to final handoff',
      description:
        'Every Northline project is structured to keep site decisions clear, installation quality visible, and communication easy for the homeowner.',
      points: [
        'Property walk-through with constraints, access, drainage, and grading reviewed on site',
        'Layout and material recommendations shaped around how the yard will actually be used',
        'Build schedule, site updates, and a final quality walkthrough before closeout',
      ],
      images: [
        {
          src: pexelsPhoto('280222', 1200, 1400),
          alt: 'Outdoor living space with layered hardscape and planters',
          position: 'center',
        },
        {
          src: pexelsPhoto('552784', 1200, 900),
          alt: 'Residential path and lawn detail with stone edging',
          position: 'center',
        },
      ],
    },
  },
  menu: {
    intro:
      'Northline handles planning, installation, and seasonal refinement for premium residential properties across Toronto and the west end.',
    sections: [
      {
        title: 'Design & Planning',
        note: 'Early clarity on layout, grade, drainage, and material direction before any build decisions are locked.',
        highlights: ['Best for full-property planning', 'Site-led layout decisions', 'Material direction before install'],
        image: {
          src: pexelsPhoto('2739666', 1200, 900),
          alt: 'Landscape planning table with material samples and drawings',
          position: 'center',
        },
        items: [
          {
            name: 'Site Assessment & Grading Review',
            description: 'Property measurements, drainage observations, and opportunity mapping',
            price: 'Included in proposal',
          },
          {
            name: 'Concept Layout Planning',
            description: 'Circulation, patio zones, planting beds, and feature placement',
            price: 'From 750',
          },
          {
            name: 'Material Direction Package',
            description: 'Stone, edging, and planting combinations matched to home architecture',
            price: 'From 450',
          },
        ],
      },
      {
        title: 'Build & Installation',
        note: 'Core hardscape and planting work for outdoor spaces that need to look polished and perform reliably.',
        highlights: ['Patios and walkways', 'Walls, steps, and grade transitions', 'Softscape finishing and lawn reset'],
        image: {
          src: pexelsPhoto('1028599', 1200, 900),
          alt: 'Completed backyard hardscape with patio and retaining wall',
          position: 'center',
        },
        items: [
          {
            name: 'Interlock Patios & Walkways',
            description: 'Base prep, edge restraint, and finish compaction for long-term stability',
            price: 'From 5,500',
          },
          {
            name: 'Retaining Walls & Steps',
            description: 'Grade management and elevation transitions with clean visual lines',
            price: 'From 6,800',
          },
          {
            name: 'Sod, Planting, and Bed Installation',
            description: 'Fresh turf, structured planting, and mulch detailing for complete transformation',
            price: 'From 3,900',
          },
        ],
      },
      {
        title: 'Seasonal Care & Refresh',
        note: 'Property upkeep and targeted refresh work that protects the finish after the major install is complete.',
        highlights: ['Spring reset', 'Peak-season polish visits', 'Autumn protection and cleanup'],
        image: {
          src: pexelsPhoto('2132171', 1200, 900),
          alt: 'Maintained garden bed and lawn at a residential property',
          position: 'center',
        },
        items: [
          {
            name: 'Spring Property Reset',
            description: 'Debris clearing, edging, bed refresh, and lawn wake-up service',
            price: 'From 650',
          },
          {
            name: 'Summer Maintenance Plans',
            description: 'Plant health checks, pruning strategy, and polish visits',
            price: 'Monthly plans',
          },
          {
            name: 'Autumn Cutback & Winter Prep',
            description: 'Clean transitions to protect hardscape, planting, and drainage paths',
            price: 'From 750',
          },
        ],
      },
    ],
  },
  about: {
    intro:
      'Northline was built for homeowners who want premium outdoor work delivered with cleaner planning, calmer communication, and stronger finish quality.',
    story: [
      'We approach landscaping as design-build work. The first decisions are about how the property should function, where the constraints are, and what will still look right years from now.',
      'Our crews are measured by more than the visible surface. Site conduct, access protection, tidy handoff between phases, and clear homeowner communication are part of the finished product.',
      'The goal is simple: an exterior that feels more composed, is easier to live with, and gives the property a stronger presence from the street to the back fence.',
    ],
    values: [
      {
        title: 'Craft before speed',
        description:
          'Prep, level accuracy, and finish detailing come before rushed installs or shortcuts that only look good on day one.',
      },
      {
        title: 'Clear project control',
        description:
          'Scope, materials, and milestones are documented clearly so homeowners know what is being delivered and when.',
      },
      {
        title: 'Respect for the property',
        description:
          'Clean site conduct, careful access management, and a proper handoff are treated as part of the job, not extras.',
      },
    ],
    team: [
      {
        name: 'Evan North',
        role: 'Founder & Build Lead',
        bio: 'Evan leads site planning, hardscape execution, and final quality review across Northline projects.',
      },
      {
        name: 'Alana Reyes',
        role: 'Design Coordinator',
        bio: 'Alana shapes layout direction, planting strategy, and material combinations that suit each property.',
      },
      {
        name: 'Noel Chen',
        role: 'Project Operations',
        bio: 'Noel manages schedule communication, supplier coordination, and homeowner handoff from first visit through closeout.',
      },
    ],
  },
  reservations: {
    intro:
      'Tell us what part of the property you want to improve, where you are located, and your timing. We will confirm service-area fit and recommend the right next step.',
    policies: [
      'New quote requests are usually reviewed within one business day.',
      'On-site consultations are scheduled after scope fit and service area are confirmed.',
      'Quotes are staged with clear labour and material visibility before approval.',
    ],
    channels: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email estimate request',
        value: 'quotes@northlineoutdoor.ca',
        href: 'mailto:quotes@northlineoutdoor.ca',
      },
      {
        label: 'Service area map',
        value: 'Toronto, Etobicoke, Mississauga, Oakville',
        href: 'https://maps.google.com/?q=Etobicoke+Ontario',
      },
    ],
  },
  gallery: {
    intro:
      'A selection of residential projects focused on curb appeal, outdoor living, and stronger day-to-day use of the property.',
    collections: [
      {
        title: 'Backyard Entertaining Terrace',
        subtitle: 'Patio and planting package',
        description:
          'Porcelain patio zone with layered planters and integrated circulation for a cleaner hosting layout.',
        facts: ['Rear-yard focus', 'Porcelain paving', 'Planting and circulation'],
        image: {
          src: pexelsPhoto('280215', 1200, 900),
          alt: 'Backyard patio with clean paving and modern landscaping',
          position: 'center',
        },
      },
      {
        title: 'Front Approach Refresh',
        subtitle: 'Curb appeal upgrade',
        description:
          'Entry path rebuild with structured planting and elevation transitions for a stronger arrival sequence.',
        facts: ['Walkway rebuild', 'Front-bed framing', 'Improved first impression'],
        image: {
          src: pexelsPhoto('2662116', 1200, 900),
          alt: 'Front yard pathway redesign with planting and stonework',
          position: 'center',
        },
      },
      {
        title: 'Garden Retaining Wall System',
        subtitle: 'Grade control and visual structure',
        description:
          'Terraced retaining walls and defined beds that improve drainage while giving the yard stronger composition.',
        facts: ['Retaining wall system', 'Drainage-aware planning', 'Layered garden beds'],
        image: {
          src: pexelsPhoto('1402787', 1200, 900),
          alt: 'Residential retaining wall and layered garden beds',
          position: 'center',
        },
      },
      {
        title: 'Outdoor Lounge Lighting',
        subtitle: 'Evening-ready ambience',
        description:
          'Low-voltage path and feature lighting that supports safety while elevating the property after dark.',
        facts: ['Low-voltage lighting', 'Path and feature layers', 'Night presence'],
        image: {
          src: pexelsPhoto('2906509', 1200, 900),
          alt: 'Landscape lighting around a patio and garden at dusk',
          position: 'center',
        },
      },
      {
        title: 'Seasonal Planting Refresh',
        subtitle: 'Colour and texture reset',
        description:
          'Targeted planting updates and mulch detailing to sharpen the property through peak season.',
        facts: ['Softscape refresh', 'Mulch detailing', 'Peak-season polish'],
        image: {
          src: pexelsPhoto('1903964', 1200, 900),
          alt: 'Fresh seasonal planting with flowers and clean mulch beds',
          position: 'center',
        },
      },
      {
        title: 'Complete Front-to-Back Upgrade',
        subtitle: 'Design-build transformation',
        description:
          'Integrated hardscape, lawn, and planting work delivered as one coordinated property-wide build.',
        facts: ['Full property scope', 'Hardscape and softscape', 'Single coordinated install'],
        image: {
          src: pexelsPhoto('1591447', 1200, 900),
          alt: 'Residential property with completed front and backyard landscaping',
          position: 'center',
        },
      },
    ],
  },
  contact: {
    intro:
      'Reach Northline directly to confirm service area, discuss scope, or plan a site visit.',
    details: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email estimate request',
        value: 'quotes@northlineoutdoor.ca',
        href: 'mailto:quotes@northlineoutdoor.ca',
      },
      {
        label: 'Office and service area',
        value: '85 Cedarview Avenue, Etobicoke, ON',
        href: 'https://maps.google.com/?q=85+Cedarview+Avenue+Etobicoke+ON',
      },
    ],
    notes: [
      'Include the property address and target scope in your first message so we can confirm fit quickly.',
      'If you have a target completion window, add it early and we can recommend a realistic project sequence.',
      'Current photos of the yard or frontage help us prepare for a more useful first call.',
    ],
  },
}
