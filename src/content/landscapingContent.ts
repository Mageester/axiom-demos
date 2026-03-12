import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const landscapingContent: DemoContent = {
  brand: {
    name: 'Northline Landscaping',
    city: 'Toronto & West GTA',
    logo: {
      src: '/brands/northline-outdoor-mark.svg',
      alt: 'Northline Landscaping logo mark',
    },
    favicon: '/brands/northline-outdoor-favicon.svg',
    browserTitle: 'Northline Landscaping | Landscaping and Outdoor Living',
    metaDescription:
      'Northline Landscaping handles patios, planting, outdoor lighting, front-yard upgrades, and outdoor living projects across Toronto and the West GTA.',
    tagline: 'Landscaping, patios, planting, and outdoor living for Toronto homes',
    phone: '+1 (647) 555-0139',
    phoneHref: 'tel:+16475550139',
    email: 'quotes@northlinelandscaping.ca',
    emailHref: 'mailto:quotes@northlinelandscaping.ca',
    address: '85 Cedarview Avenue, Etobicoke, ON M8X 1A4',
    hours: [
      'Monday to Friday: 7:30 AM to 6:00 PM',
      'Saturday: 8:00 AM to 3:00 PM',
      'Sunday: By appointment only',
    ],
    legalLine: 'Northline Landscaping. All rights reserved.',
  },
  home: {
    hero: {
      eyebrow: 'Residential landscaping | Toronto & West GTA',
      title: 'Landscaping that makes the whole property feel finished.',
      description:
        'Northline handles patios, walkways, front-yard upgrades, planting, lighting, and outdoor living projects for homeowners across Toronto and the west end.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View projects',
      signals: [
        'Patios, planting, lighting, front entries, and outdoor living',
        'Residential projects across Toronto, Etobicoke, Mississauga, and Oakville',
        'Quote review before we book a site visit',
      ],
      image: {
        src: pexelsPhoto('1029599', 1800, 1200),
        alt: 'Premium landscaped backyard with stone patio and layered planting',
        position: 'center',
      },
    },
    highlights: [
      {
        title: 'Residential focus',
        description:
          'Northline is built for homeowners improving the front yard, backyard, or overall outdoor living setup, not commercial grounds contracts.',
      },
      {
        title: 'Planned around the property',
        description:
          'Grade, drainage, access, and day-to-day use of the yard are reviewed before materials and layout are finalized.',
      },
      {
        title: 'Clean site conduct',
        description:
          'Crews protect access points, keep the site orderly, and leave the property looking cared for while the job is underway.',
      },
    ],
    featuredDishes: [
      {
        name: 'Custom Patios & Entertaining Zones',
        course: 'Outdoor living',
        description:
          'Stone and porcelain patio builds planned around seating, circulation, and how the yard will actually be used.',
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
          'Walkways, borders, and planting plans that make the front of the property feel cleaner and more finished.',
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
          'Low-voltage lighting and planting updates that keep the property looking finished after dark and through the busy season.',
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
        'Every Northline project is set up to keep site decisions clear, installation quality visible, and communication straightforward for the homeowner.',
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
      'Northline handles landscaping and outdoor-living work for residential properties across Toronto and the west end.',
    sections: [
      {
        title: 'Planning & Layout',
        note: 'Early clarity on layout, grading, drainage, and material direction before the job is priced or scheduled.',
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
        note: 'Core hardscape and planting work for front yards, backyards, and outdoor spaces that need to look polished and hold up.',
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
        note: 'Property upkeep and targeted refresh work that protects the finish after the main install is complete.',
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
      'Northline is built for homeowners who want a landscaping company that plans well, communicates clearly, and leaves the property looking finished.',
    story: [
      'We treat landscaping as more than a list of install items. The first conversation is about how the property should function, what needs to improve, and what will still make sense a few seasons from now.',
      'Northline is not built around squeezing as many jobs through the calendar as possible. Scope, access, grading, drainage, and finish standards are worked out early so the project stays under control once work starts.',
      'The end result should feel simple: a property that looks sharper, is easier to enjoy, and gives the house a stronger overall first impression.',
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
          'Scope, materials, and milestones are laid out clearly so homeowners know what is happening and when.',
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
        role: 'Owner & Build Lead',
        bio: 'Evan leads site planning, hardscape execution, and final quality review across Northline jobs.',
      },
      {
        name: 'Alana Reyes',
        role: 'Landscape Design Coordinator',
        bio: 'Alana shapes layout direction, planting strategy, and material combinations that suit each property.',
      },
      {
        name: 'Noel Chen',
        role: 'Project Coordinator',
        bio: 'Noel manages schedule communication, supplier coordination, and homeowner handoff from first visit through closeout.',
      },
    ],
  },
  reservations: {
    intro:
      'Tell us what part of the property you want to improve, where you are located, and your timing. We will confirm the service area and let you know the best next step.',
    policies: [
      'Most quote requests are reviewed within one business day.',
      'If the property is in our service area, we confirm the next step before booking a visit.',
      'Quotes are written clearly so homeowners know what is included.',
    ],
    channels: [
      {
        label: 'Call for a quote',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email quote request',
        value: 'quotes@northlinelandscaping.ca',
        href: 'mailto:quotes@northlinelandscaping.ca',
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
      'A selection of residential projects focused on curb appeal, outdoor living, and cleaner day-to-day use of the property.',
    collections: [
      {
        title: 'Backyard Entertaining Terrace',
        subtitle: 'Patio and planting package',
        description:
          'Porcelain patio zone with layered planters and integrated circulation for a cleaner outdoor-living layout.',
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
          'Entry path rebuild with structured planting and elevation transitions for a stronger arrival sequence from the sidewalk in.',
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
          'Terraced retaining walls and defined beds that improve drainage while giving the yard more structure and control.',
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
          'Low-voltage path and feature lighting that supports safety while making the property read better after dark.',
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
          'Integrated hardscape, lawn, and planting work delivered as one coordinated property-wide upgrade.',
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
      'Reach Northline directly to confirm service area, talk through scope, or request a quote.',
    details: [
      {
        label: 'Call for a quote',
        value: '+1 (647) 555-0139',
        href: 'tel:+16475550139',
      },
      {
        label: 'Email quote request',
        value: 'quotes@northlinelandscaping.ca',
        href: 'mailto:quotes@northlinelandscaping.ca',
      },
      {
        label: 'Office and service area',
        value: '85 Cedarview Avenue, Etobicoke, ON',
        href: 'https://maps.google.com/?q=85+Cedarview+Avenue+Etobicoke+ON',
      },
    ],
    notes: [
      'Include the property address and the part of the yard you want to improve so we can confirm the service area quickly.',
      'If you have a target completion window, add it early and we can recommend a realistic next step.',
      'Current photos of the front yard, backyard, or problem area help us prepare for a more useful first call.',
    ],
  },
}
