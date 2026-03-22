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
      'Northline Landscaping builds patios, planting, lighting, curb appeal, and outdoor-living upgrades for Toronto and West GTA homes.',
    tagline: 'Residential landscaping for patios, planting, lighting, and curb appeal',
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
      eyebrow: 'Toronto landscaping and outdoor living',
      title: 'Patios, planting, and front-entry work that make the house feel cared for.',
      description:
        'Northline handles patios, walkways, planting, lighting, curb appeal, and backyard upgrades across Toronto and the west end.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View projects',
      signals: [
        'Patios, planting, lighting, curb appeal',
        'Photos reviewed before a site visit',
        'Toronto, Etobicoke, Mississauga, and Oakville',
      ],
      image: {
        src: pexelsPhoto('17240696', 1800, 1200),
        alt: 'Landscaped backyard with patio seating, lawn, and finished planting',
        position: 'center 56%',
      },
    },
    highlights: [
      {
        title: 'Backyards that actually get used',
        description: 'Patios planned around furniture, access, and circulation.',
      },
      {
        title: 'Front entries with better curb appeal',
        description: 'Walkways and planting that sharpen the front of the house.',
      },
    ],
    featuredDishes: [
      {
        name: 'Patios and seating areas',
        course: 'Outdoor living',
        description: 'Patio builds planned around seating, circulation, and everyday use.',
        image: {
          src: pexelsPhoto('34037980', 1400, 1000),
          alt: 'Residential backyard patio with seating and layered greenery',
          position: 'center 54%',
        },
      },
      {
        name: 'Front entry and curb appeal',
        course: 'Arrival and frontage',
        description: 'Walkways, borders, and planting plans that make the front of the property feel finished.',
        image: {
          src: pexelsPhoto('30196217', 1400, 1000),
          alt: 'Front garden pathway with planting and lamp posts',
          position: 'center',
        },
      },
      {
        name: 'Lighting and planting refresh',
        course: 'Evening presence',
        description: 'Low-voltage lighting and planting updates that keep the property looking finished after dark.',
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
        'The first conversation covers the property, the area that needs attention, and whether the scope fits.',
      points: [
        'Start with the address, current photos, and the area you want priced.',
        'If it fits, we book a site visit to review access, grade, drainage, and finish level.',
        'You get a clear quote and next step before anything is scheduled.',
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
    extras: {
      projectGallery: [
        {
          title: 'Back patio and seating area',
          subtitle: 'Patios',
          description: 'Stone and porcelain patio work planned around seating and circulation.',
          facts: ['Backyard patio', 'Entertaining layout', 'Clean edges'],
          image: {
            src: pexelsPhoto('34037980', 1200, 900),
            alt: 'Backyard patio with seating and layered planting',
            position: 'center 54%',
          },
        },
        {
          title: 'Garden walk and side-yard path',
          subtitle: 'Walkways',
          description: 'A cleaner route through the property with better footing and sharper borders.',
          facts: ['Stone path', 'Border definition', 'Cleaner circulation'],
          image: {
            src: pexelsPhoto('30278085', 1200, 900),
            alt: 'Structured residential garden walkway with stone paving',
            position: 'center',
          },
        },
        {
          title: 'Front entry and arrival refresh',
          subtitle: 'Front entries',
          description: 'Planting, edging, and walkway updates that clean up the front of the home.',
          facts: ['Street-facing work', 'Front bed refresh', 'Entry cleanup'],
          image: {
            src: pexelsPhoto('30196217', 1200, 900),
            alt: 'Front garden pathway with planting and lamp posts',
            position: 'center',
          },
        },
        {
          title: 'After-dark garden lighting',
          subtitle: 'Outdoor lighting',
          description: 'Low-voltage lighting that keeps paths readable and the property looking finished after dark.',
          facts: ['Path lighting', 'Night visibility', 'Landscape polish'],
          image: {
            src: pexelsPhoto('35828688', 1200, 900),
            alt: 'Landscape lighting illuminating planting and a garden path at dusk',
            position: 'center',
          },
        },
      ],
      beforeAfter: {
        title: 'Plain lawn to usable outdoor living space',
        summary: 'An open yard turned into a patio, planting, lighting, and circulation that feel tied to the house.',
        bullets: ['Patio and seating zone', 'Planting layers', 'Low-voltage lighting', 'Cleaner circulation'],
        before: {
          src: '/images/landscaping/land1.png',
          alt: 'Open backyard before patio, planting, and lighting work',
          position: 'center 56%',
        },
        after: {
          src: '/images/landscaping/land2.png',
          alt: 'Finished backyard with patio, planting, seating, and lighting',
          position: 'center 56%',
        },
      },
    },
  },
  menu: {
    intro:
      'Residential landscaping and outdoor-living work across Toronto and the west end.',
    sections: [
      {
        title: 'Patios, Walkways & Front Entries',
        note: 'Hardscape work that sharpens access and curb appeal.',
        highlights: ['Interlock and natural-stone patios', 'Front entry and step work', 'Backyard circulation and edging'],
        image: {
          src: pexelsPhoto('17240696', 1200, 900),
          alt: 'Residential backyard patio with paving and seating area',
          position: 'center 56%',
        },
        items: [
          {
            name: 'Interlock Patios & Seating Areas',
            description: 'Base prep and finish work sized for real furniture layouts.',
            price: 'From 6,500',
          },
          {
            name: 'Front Walkways & Entry Steps',
            description: 'Entry upgrades that make the house read better from the street.',
            price: 'From 4,800',
          },
          {
            name: 'Side-Yard Paths & Garden Connections',
            description: 'Stone connections that keep access clean between gate, yard, and patio.',
            price: 'From 3,900',
          },
        ],
      },
      {
        title: 'Planting, Sod & Yard Upgrades',
        note: 'Softscape work that adds structure and cleaner beds.',
        highlights: ['Front-bed planting', 'Sod and grading touchups', 'Shrub and border cleanup'],
        image: {
          src: pexelsPhoto('33798594', 1200, 900),
          alt: 'Residential garden path with planting and a well-kept backyard setting',
          position: 'center',
        },
        items: [
          {
            name: 'Planting Plans & Bed Installation',
            description: 'Layered shrubs, perennials, and bed shaping matched to the property.',
            price: 'From 2,400',
          },
          {
            name: 'Sod & Lawn Refresh',
            description: 'Grading touchups, fresh sod, and cleaner lawn edges where the yard needs a reset.',
            price: 'From 2,900',
          },
          {
            name: 'Front-Yard Curb Appeal Refresh',
            description: 'Focused upgrades around the porch, walk, and street-facing beds.',
            price: 'From 3,600',
          },
        ],
      },
      {
        title: 'Lighting, Drainage & Seasonal Care',
        note: 'Supporting work that protects the finish and keeps the property looking cared for.',
        highlights: ['Low-voltage lighting', 'Drainage corrections', 'Seasonal cleanup'],
        image: {
          src: pexelsPhoto('35828688', 1200, 900),
          alt: 'Illuminated landscape path and garden lighting at dusk',
          position: 'center',
        },
        items: [
          {
            name: 'Low-Voltage Landscape Lighting',
            description: 'Path, step, and feature lighting that adds visibility after dark.',
            price: 'From 2,200',
          },
          {
            name: 'Drainage & Water Direction Fixes',
            description: 'Targeted corrections where runoff, pooling, or grade issues are hurting the yard.',
            price: 'Quoted after review',
          },
          {
            name: 'Spring / Fall Property Refresh',
            description: 'Bed cleanup, edging, pruning, and seasonal reset work for properties that need a polish visit.',
            price: 'From 650',
          },
        ],
      },
    ],
  },
  about: {
    intro:
      'Northline is for homeowners who want a landscaping company that plans well and leaves the property looking finished.',
    story: [
      'We start with how the property should function, what needs to improve, and what still makes sense a few seasons from now.',
      'Scope, access, grading, drainage, and finish standards are worked out early so the project stays under control once work starts.',
      'The goal is simple: a property that looks sharper, is easier to use, and gives the house a stronger first impression.',
    ],
    values: [
      {
        title: 'Craft before speed',
        description: 'Prep, level accuracy, and finish detailing come before rushed installs or shortcuts.',
      },
      {
        title: 'Clear project control',
        description: 'Scope, materials, and milestones are laid out clearly so homeowners know what is happening and when.',
      },
      {
        title: 'Respect for the property',
        description: 'Clean site conduct, careful access management, and a proper handoff are part of the job.',
      },
    ],
    team: [
      {
        name: 'Evan North',
        role: 'Owner & Build Lead',
        bio: 'Evan leads site planning, hardscape execution, and final quality review.',
      },
      {
        name: 'Alana Reyes',
        role: 'Landscape Design Coordinator',
        bio: 'Alana shapes layout direction, planting strategy, and material combinations.',
      },
      {
        name: 'Noel Chen',
        role: 'Project Coordinator',
        bio: 'Noel manages schedule communication, supplier coordination, and homeowner handoff.',
      },
    ],
  },
  reservations: {
    intro:
      'Tell us what part of the property needs work, where you are, and your timing.',
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
      'Residential projects focused on curb appeal, outdoor living, and cleaner day-to-day use.',
    collections: [
      {
        title: 'Back Patio & Seating Area',
        subtitle: 'Backyard entertaining zone',
        description: 'Backyard patio build with seating, clean circulation, and planting.',
        facts: ['Rear-yard focus', 'Porcelain paving', 'Planting and circulation'],
        image: {
          src: pexelsPhoto('17240696', 1200, 900),
          alt: 'Residential backyard patio with lawn, paving, and an outdoor seating area',
          position: 'center 54%',
        },
      },
      {
        title: 'Front Walk & Planting Refresh',
        subtitle: 'Front-of-house curb appeal',
        description: 'New path and planting around the front of the home.',
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
        description: 'Stone retaining work that handles elevation cleanly and gives the yard structure.',
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
        description: 'Low-voltage path and feature lighting that improves night-time visibility.',
        facts: ['Low-voltage lighting', 'Path and feature layers', 'Night presence'],
        image: {
          src: pexelsPhoto('35828688', 1200, 900),
          alt: 'Landscape lighting along a planted path at dusk',
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
      'Include the property address and the part of the yard you want to improve.',
      'If you have a target completion window, add it early.',
      'Current photos of the front yard, backyard, or problem area help us prepare for the first call.',
    ],
  },
}
