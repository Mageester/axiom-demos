import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const landscapingContent: DemoContent = {
  brand: {
    name: 'Northline Outdoor Studio',
    city: 'Toronto & West GTA',
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
      eyebrow: 'Design-Build Landscaping | Toronto & West GTA',
      title: 'Outdoor spaces designed to elevate curb appeal and everyday living.',
      description:
        'Northline plans and builds premium residential landscapes with disciplined scope, durable materials, and a clear quote-to-completion process.',
      primaryCta: 'Request a quote',
      secondaryCta: 'Explore services',
      signals: [
        'Licensed and insured project crews',
        'Drainage and grading reviewed before install',
        'Single-point communication from site visit to handoff',
      ],
      image: {
        src: pexelsPhoto('1029599', 1800, 1200),
        alt: 'Premium landscaped backyard with stone patio and layered planting',
        position: 'center',
      },
    },
    highlights: [
      {
        title: 'Scope-first site planning',
        description:
          'Measurements, grade, and drainage are locked before design recommendations so projects avoid avoidable rework.',
      },
      {
        title: 'Craft-grade installation standards',
        description:
          'Hardscape base prep, edge control, and planting depth are executed to hold performance through seasonal cycles.',
      },
      {
        title: 'Tight communication cadence',
        description:
          'Homeowners get transparent scheduling updates, clean job-site expectations, and a structured final walkthrough.',
      },
    ],
    featuredDishes: [
      {
        name: 'Custom Patios & Entertaining Zones',
        course: 'Outdoor living',
        description:
          'Stone and porcelain patio builds designed for hosting flow, furniture layout, and long-term durability.',
        image: {
          src: pexelsPhoto('2132227', 1400, 1000),
          alt: 'Stone patio with seating and layered garden beds',
          position: 'center',
        },
      },
      {
        name: 'Front Entry & Curb Appeal Upgrades',
        course: 'Residential frontage',
        description:
          'Driveway borders, pathways, and planting plans that sharpen first impression and property presence.',
        image: {
          src: pexelsPhoto('2802293', 1400, 1000),
          alt: 'Refined front yard landscaping with walkway lighting and planting',
          position: 'center',
        },
      },
      {
        name: 'Landscape Lighting & Planting Refresh',
        course: 'After-dark ambience',
        description:
          'Low-voltage lighting and seasonal plant strategy to keep the property polished day and night.',
        image: {
          src: pexelsPhoto('1453499', 1400, 1000),
          alt: 'Residential garden with warm pathway lighting at dusk',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'A controlled delivery model for premium outdoor projects',
      description:
        'Every project follows a clear sequence so homeowners can compare options confidently and move from quote to completion without guesswork.',
      points: [
        'On-site discovery visit with constraints, access, and condition review',
        'Material and layout recommendations with staged scope options',
        'Build schedule, milestone check-ins, and final quality walkthrough',
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
      'Service lines are organized to cover planning, installation, and seasonal upkeep for premium residential properties.',
    sections: [
      {
        title: 'Design & Planning',
        note: 'Pre-build clarity to protect budget, timeline, and final finish quality.',
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
        note: 'Core outdoor construction for high-use residential spaces.',
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
        note: 'Ongoing upkeep to preserve curb appeal after installation.',
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
      'Northline was built for homeowners who want premium outdoor spaces without messy communication or uncertain execution.',
    story: [
      'We approach landscaping as design-build work, not one-off labour. Each project starts with goals, constraints, and a clear sequence.',
      'Our crews focus on clean workmanship and controlled site conduct. We protect access points, communicate schedule shifts early, and close each day with a reset standard.',
      'The result is an outdoor space that feels intentional, raises property confidence, and performs season after season.',
    ],
    values: [
      {
        title: 'Craft before speed',
        description:
          'We prioritize proper prep, level accuracy, and detail finish over rushing through visible surfaces.',
      },
      {
        title: 'Transparent project control',
        description:
          'Scope, materials, and milestones are documented clearly so homeowners know exactly what is being delivered.',
      },
      {
        title: 'Respect for the property',
        description:
          'Crew conduct, site cleanliness, and final handoff standards are treated as part of the build quality.',
      },
    ],
    team: [
      {
        name: 'Evan North',
        role: 'Founder & Build Lead',
        bio: 'Evan oversees scope planning and hardscape execution for premium residential installations.',
      },
      {
        name: 'Alana Reyes',
        role: 'Design Coordinator',
        bio: 'Alana guides concept layouts, material direction, and planting strategy aligned to each property.',
      },
      {
        name: 'Noel Chen',
        role: 'Project Operations',
        bio: 'Noel manages schedule communication, supplier coordination, and final walkthrough delivery.',
      },
    ],
  },
  reservations: {
    intro:
      'Share your property goals, service area, and timing. We respond with a clear next step and scope fit guidance.',
    policies: [
      'New inquiries are typically reviewed within one business day.',
      'On-site consultations are booked after scope and area fit are confirmed.',
      'Quotes are staged with clear labour and material visibility before approval.',
    ],
    channels: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email quotes',
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
      'Recent demonstration projects showing patios, curb appeal upgrades, and outdoor living transformations.',
    collections: [
      {
        title: 'Backyard Entertaining Terrace',
        subtitle: 'Patio + planting package',
        description:
          'Porcelain patio zone with layered planters and integrated circulation for hosting flow.',
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
          'Entry path rebuild with structured planting and elevation transitions for stronger first impression.',
        image: {
          src: pexelsPhoto('2662116', 1200, 900),
          alt: 'Front yard pathway redesign with planting and stonework',
          position: 'center',
        },
      },
      {
        title: 'Garden Retaining Wall System',
        subtitle: 'Grade control + visual structure',
        description:
          'Terraced retaining walls and defined beds that improve drainage and property composition.',
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
          'Low-voltage path and feature lighting that supports safety while elevating night presence.',
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
          'Targeted planting updates and mulch detailing to sharpen property appearance through peak season.',
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
          'Integrated hardscape, lawn, and planting program delivered as a single coordinated build.',
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
      'Use direct channels to discuss scope fit, service area, and timeline before scheduling your site consultation.',
    details: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email quotes',
        value: 'quotes@northlineoutdoor.ca',
        href: 'mailto:quotes@northlineoutdoor.ca',
      },
      {
        label: 'Office / service area',
        value: '85 Cedarview Avenue, Etobicoke, ON',
        href: 'https://maps.google.com/?q=85+Cedarview+Avenue+Etobicoke+ON',
      },
    ],
    notes: [
      'Include property address and target service area in your first message for faster scope fit review.',
      'If you have target completion timing, add it upfront so we can recommend practical project sequencing.',
      'Photo references of the current yard help us prepare a more accurate consultation call.',
    ],
  },
}
