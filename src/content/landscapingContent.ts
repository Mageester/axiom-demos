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
        'Northline handles patios, walkways, front-entry upgrades, planting, lighting, and backyard outdoor-living work for homeowners across Toronto and the west end.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View projects',
      signals: [
        'Patios, planting, lighting, front entries, and backyard upgrades',
        'Residential projects across Toronto, Etobicoke, Mississauga, and Oakville',
        'Address and photos reviewed before we book a site visit',
      ],
      image: {
        src: pexelsPhoto('17240696', 1800, 1200),
        alt: 'Landscaped backyard with patio seating, lawn, and finished planting',
        position: 'center 56%',
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
          src: pexelsPhoto('34037980', 1400, 1000),
          alt: 'Residential backyard patio with seating and layered greenery',
          position: 'center 54%',
        },
      },
      {
        name: 'Front Entry & Curb Appeal Upgrades',
        course: 'Arrival and frontage',
        description:
          'Walkways, borders, and planting plans that make the front of the property feel cleaner and more finished.',
        image: {
          src: pexelsPhoto('30196217', 1400, 1000),
          alt: 'Front garden pathway with planting and lamp posts',
          position: 'center',
        },
      },
      {
        name: 'Landscape Lighting & Planting Refresh',
        course: 'Evening presence',
        description:
          'Low-voltage lighting and planting updates that keep the property looking finished after dark and through the busy season.',
        image: {
          src: pexelsPhoto('35828688', 1400, 1000),
          alt: 'Landscape lighting illuminating a planted garden path in the evening',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'What the first steps usually look like',
      description:
        'The first conversation is about the property, the part of the yard you want to improve, and whether the scope fits how Northline works best.',
      points: [
        'We start with the address, current photos, and the part of the property that needs attention',
        'If the scope fits, we book a site visit to review grade, access, drainage, and material direction',
        'You get a clear quote and next-step recommendation before any work is scheduled',
      ],
      images: [
        {
          src: pexelsPhoto('33838596', 1200, 1400),
          alt: 'Backyard outdoor living space with seating, lawn, and planting',
          position: 'center 56%',
        },
        {
          src: pexelsPhoto('30278085', 1200, 900),
          alt: 'Residential garden pathway with structured greenery and stone paving',
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
        title: 'Patios, Walkways & Front Entries',
        note: 'Hardscape work that sharpens access, seating, and the first impression of the home.',
        highlights: ['Interlock and natural-stone patios', 'Front steps and entry walks', 'Backyard circulation and edging'],
        image: {
          src: pexelsPhoto('17240696', 1200, 900),
          alt: 'Residential backyard patio with paving and seating area',
          position: 'center 56%',
        },
        items: [
          {
            name: 'Interlock Patios & Seating Areas',
            description: 'Base prep, edge restraint, and finish work sized for real furniture layouts and day-to-day use',
            price: 'From 6,500',
          },
          {
            name: 'Front Walkways & Entry Steps',
            description: 'Approach paths, front steps, and entry upgrades that make the house read better from the street',
            price: 'From 4,800',
          },
          {
            name: 'Side-Yard Paths & Garden Connections',
            description: 'Stone or paver connections that keep access clean between gate, yard, and patio',
            price: 'From 3,900',
          },
        ],
      },
      {
        title: 'Planting, Sod & Yard Upgrades',
        note: 'Softscape work that gives the property more structure, cleaner beds, and a stronger overall finish.',
        highlights: ['Front-bed planting', 'Sod and grading touchups', 'Shrub, mulch, and border cleanup'],
        image: {
          src: pexelsPhoto('33798594', 1200, 900),
          alt: 'Residential garden path with planting and a well-kept backyard setting',
          position: 'center',
        },
        items: [
          {
            name: 'Planting Plans & Bed Installation',
            description: 'Layered shrubs, perennials, and bed shaping matched to the property and maintenance expectations',
            price: 'From 2,400',
          },
          {
            name: 'Sod & Lawn Refresh',
            description: 'Grading touchups, fresh sod, and cleaner lawn edges where the yard needs a reset',
            price: 'From 2,900',
          },
          {
            name: 'Front-Yard Curb Appeal Refresh',
            description: 'Focused upgrades around the porch, walk, and street-facing beds for a stronger first impression',
            price: 'From 3,600',
          },
        ],
      },
      {
        title: 'Lighting, Drainage & Seasonal Care',
        note: 'Supporting work that protects the finish and keeps the property looking looked-after through the season.',
        highlights: ['Low-voltage lighting', 'Drainage corrections', 'Spring and fall cleanup'],
        image: {
          src: pexelsPhoto('35828688', 1200, 900),
          alt: 'Illuminated landscape path and garden lighting at dusk',
          position: 'center',
        },
        items: [
          {
            name: 'Low-Voltage Landscape Lighting',
            description: 'Path, step, and feature lighting that adds visibility and keeps the yard looking finished after dark',
            price: 'From 2,200',
          },
          {
            name: 'Drainage & Water Direction Fixes',
            description: 'Targeted corrections where runoff, pooling, or grade issues are hurting the yard or hardscape',
            price: 'Quoted after review',
          },
          {
            name: 'Spring / Fall Property Refresh',
            description: 'Bed cleanup, edging, pruning, and seasonal reset work for properties that need a polish visit',
            price: 'From 650',
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
        title: 'Back Patio & Seating Area',
        subtitle: 'Backyard entertaining zone',
        description:
          'Backyard patio build with seating, clean circulation, and planting that helps the whole yard feel more complete.',
        facts: ['Rear-yard focus', 'Porcelain paving', 'Planting and circulation'],
        image: {
          src: pexelsPhoto('34037980', 1200, 900),
          alt: 'Residential backyard patio with benches and mature greenery',
          position: 'center 54%',
        },
      },
      {
        title: 'Front Walk & Planting Refresh',
        subtitle: 'Front-of-house curb appeal',
        description:
          'New path and planting around the front of the home to make the entry feel cleaner, brighter, and more finished.',
        facts: ['Walkway rebuild', 'Front-bed framing', 'Improved first impression'],
        image: {
          src: pexelsPhoto('30196217', 1200, 900),
          alt: 'Front garden pathway with lamp posts and structured greenery',
          position: 'center',
        },
      },
      {
        title: 'Retaining Wall & Grade Control',
        subtitle: 'Stonework and elevation management',
        description:
          'Stone retaining work that handles elevation more cleanly while giving the yard structure and a tidier finish.',
        facts: ['Retaining wall system', 'Drainage-aware planning', 'Layered garden beds'],
        image: {
          src: pexelsPhoto('33589324', 1200, 900),
          alt: 'Stone steps and retaining wall detail in a landscaped garden',
          position: 'center',
        },
      },
      {
        title: 'Landscape Lighting Upgrade',
        subtitle: 'After-dark visibility and polish',
        description:
          'Low-voltage path and feature lighting that improves night-time visibility and makes the property look more finished after dark.',
        facts: ['Low-voltage lighting', 'Path and feature layers', 'Night presence'],
        image: {
          src: pexelsPhoto('35828688', 1200, 900),
          alt: 'Landscape lighting along a planted path at dusk',
          position: 'center',
        },
      },
      {
        title: 'Seasonal Bed Refresh',
        subtitle: 'Mid-season planting cleanup',
        description:
          'Planting cleanup and bed detailing that sharpen the property through the main growing season.',
        facts: ['Softscape refresh', 'Mulch detailing', 'Peak-season polish'],
        image: {
          src: pexelsPhoto('33798594', 1200, 900),
          alt: 'Maintained residential garden with pathway and layered greenery',
          position: 'center',
        },
      },
      {
        title: 'Full Property Upgrade',
        subtitle: 'Front-to-back scope',
        description:
          'Combined patio, lawn, and planting work delivered as one coordinated property-wide upgrade.',
        facts: ['Full property scope', 'Hardscape and softscape', 'Single coordinated install'],
        image: {
          src: pexelsPhoto('17240696', 1200, 900),
          alt: 'Completed residential backyard with patio, lawn, and finished landscaping',
          position: 'center 56%',
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
