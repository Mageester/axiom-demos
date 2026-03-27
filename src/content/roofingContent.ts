import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const roofingContent: DemoContent = {
  brand: {
    name: 'Blackridge Roofing & Exteriors',
    city: 'Toronto & Durham Region',
    logo: {
      src: '/brands/blackridge-roofing-mark.svg',
      alt: 'Blackridge Roofing & Exteriors logo mark',
    },
    favicon: '/brands/blackridge-roofing-favicon.svg',
    browserTitle: 'Blackridge Roofing & Exteriors | Roofing inspections and replacements',
    metaDescription:
      'Residential roofing inspections, leak repair, replacements, siding, soffit, fascia, and eavestrough work for Toronto and Durham Region homes.',
    tagline: 'Roof inspections, repairs, replacements, and roof-edge exterior work for east Toronto and Durham homes',
    phone: '+1 (647) 555-0164',
    phoneHref: 'tel:+16475550164',
    email: 'inspections@blackridgeroofing.ca',
    emailHref: 'mailto:inspections@blackridgeroofing.ca',
    address: '214 Industrial Road, Scarborough, ON M1L 2T4',
    hours: [
      'Monday to Friday: 7:00 AM to 6:00 PM',
      'Saturday: 8:00 AM to 2:00 PM',
      'Emergency leak response: limited after-hours availability',
    ],
    legalLine: 'Blackridge Roofing & Exteriors. All rights reserved.',
  },
  home: {
    hero: {
      eyebrow: 'Roofing & exterior work',
      title: 'Roof repairs and replacements with clear scope.',
      description:
        'Blackridge helps homeowners find the failure point, confirm the right scope, and keep the job organized from inspection to closeout.',
      primaryCta: 'Request inspection',
      secondaryCta: 'View services',
      signals: [
        'Active leaks and storm damage',
        'Repair vs replacement guidance',
        'Scheduling and cleanup confirmed',
      ],
      image: {
        src: pexelsPhoto('31771166', 1800, 1200),
        alt: 'Roofer installing shingles on a residential roof under daylight',
        position: 'center',
      },
    },
    highlights: [
      {
        title: 'Leak tracing',
        description: 'Find the failure point before recommending a larger scope.',
      },
      {
        title: 'Replacement planning',
        description: 'Review condition, ventilation, and the path to a proper reset.',
      },
      {
        title: 'Roof-edge cleanup',
        description: 'Soffit, fascia, and drainage work that finishes the exterior cleanly.',
      },
    ],
    featuredDishes: [
      {
        name: 'Roof replacement',
        course: 'Replacement scope',
        description: 'Full tear-off replacement planned around decking, ventilation, and flashing.',
        image: {
          src: pexelsPhoto('18098286', 1400, 1000),
          alt: 'Two-storey house with a steep finished shingle roof under daylight',
          position: 'center',
        },
      },
      {
        name: 'Leak repair',
        course: 'Inspection-led repair',
        description: 'Condition-based repairs for leaks and isolated failure points.',
        image: {
          src: pexelsPhoto('33404248', 1400, 1000),
          alt: 'Roofer inspecting a residential roof edge while checking condition details',
          position: 'center',
        },
      },
      {
        name: 'Roofline repair',
        course: 'Roofline support',
        description: 'Roof-edge work that protects the structure and improves drainage.',
        image: {
          src: pexelsPhoto('34006744', 1400, 1000),
          alt: 'Worker installing gutter detail beneath a residential roof edge',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'What the inspection checks',
      description: 'The first visit stays focused on the part of the roof that is actually failing.',
      points: [
        'Roof condition, flashing, and penetrations are reviewed on site.',
        'Photos and notes come back with repair-versus-replacement guidance.',
        'Scheduling, protection, and cleanup are confirmed before booking.',
      ],
      images: [
        {
          src: pexelsPhoto('10025299', 1200, 1400),
          alt: 'Close roof detail showing shingles, edge lines, and exterior condition',
          position: 'center',
        },
        {
          src: pexelsPhoto('34006744', 1200, 900),
          alt: 'Installer working on gutter and roof edge detail at a residential property',
          position: 'center',
        },
      ],
    },
    extras: {
      beforeAfter: {
        title: 'A tired roofline cleaned up into a sharper finish',
        summary:
          'The worn front slope and weak flashing were replaced with a cleaner roofline and clearer perimeter details.',
        bullets: ['Architectural shingles', 'New flashing and vent review', 'Soffit, fascia, and gutter cleanup'],
        before: {
          src: pexelsPhoto('36237047', 1200, 900),
          alt: 'Damaged house exterior before roofing and exterior repair work',
          position: 'center',
        },
        after: {
          src: pexelsPhoto('18098286', 1200, 900),
          alt: 'Finished residential roof after replacement and roofline cleanup',
          position: 'center',
        },
      },
    },
  },
  menu: {
    intro: 'Roofing scopes grouped around leaks, aging systems, and the roof edge.',
    sections: [
      {
        title: 'Inspections and leak repairs',
        note: 'Best for active leaks and isolated failure points.',
        highlights: ['Leak tracing', 'Storm damage', 'Photo-backed scope'],
        image: {
          src: pexelsPhoto('33404248', 1200, 900),
          alt: 'Roofer inspecting a residential roof edge while checking condition details',
          position: 'center',
        },
        items: [
          {
            name: 'Inspection & Condition Report',
            description: 'On-site review of the roof, flashing, penetrations, and drainage.',
            price: 'From 295',
          },
          {
            name: 'Leak Tracing & Repair Scope',
            description: 'Targeted repairs for the section actually causing the issue.',
            price: 'Quoted after inspection',
          },
          {
            name: 'Storm Response Review',
            description: 'Wind and storm damage checks with stabilization guidance.',
            price: 'Priority scheduling',
          },
        ],
      },
      {
        title: 'Roof replacements',
        note: 'Best when wear is broad or the roof is near the end of service life.',
        highlights: ['Decking review', 'Ventilation corrections', 'Clean perimeter detailing'],
        image: {
          src: pexelsPhoto('31771166', 1200, 900),
          alt: 'Roofer installing shingles on a residential roof during a replacement',
          position: 'center',
        },
        items: [
          {
            name: 'Asphalt Shingle Replacement',
            description: 'Full tear-off and replacement with underlayment, flashing review, and clean closeout standards.',
            price: 'From 9,500',
          },
          {
            name: 'Sectional Replacement or Staged Rebuild',
            description: 'Replacement planning for additions, lower slopes, or phased work.',
            price: 'From 4,900',
          },
          {
            name: 'Decking & Ventilation Corrections',
            description: 'Structural and airflow corrections identified during replacement planning.',
            price: 'As required',
          },
        ],
      },
      {
        title: 'Roof-edge and drainage work',
        note: 'Best when the roofline needs a cleaner closeout.',
        highlights: ['Siding repair', 'Roof edge details', 'Drainage fixes'],
        image: {
          src: pexelsPhoto('18350737', 1200, 900),
          alt: 'Residential house exterior showing clean siding and roofline details',
          position: 'center',
        },
        items: [
          {
            name: 'Siding Repair & Replacement',
            description: 'Targeted cladding work to correct damage and finish worn elevations.',
            price: 'Quoted by scope',
          },
          {
            name: 'Soffit, Fascia & Flashing',
            description: 'Roof-edge trim and transition work that supports weather protection.',
            price: 'From 1,250',
          },
          {
            name: 'Eavestrough & Downspout Work',
            description: 'Drainage upgrades designed to move water away from the structure.',
            price: 'From 980',
          },
        ],
      },
    ],
  },
  about: {
    intro:
      'Blackridge is built for homeowners who want a roofing contractor that inspects carefully and explains the scope clearly.',
    story: [
      'Roofing is treated as protection work first, so the failure point is understood before a scope is recommended.',
      'Property protection, cleanup, and homeowner communication are part of the standard.',
      'The result is exterior work that feels dependable from the first inspection through the final walkthrough.',
    ],
    values: [
      {
        title: 'Inspect before recommending',
        description: 'Document the condition before pushing a bigger scope.',
      },
      {
        title: 'Keep the scope clear',
        description: 'Write the next step without the usual contractor fog.',
      },
      {
        title: 'Finish the details',
        description: 'Protect the property, clean the site, and hand off the work properly.',
      },
    ],
    team: [
      {
        name: 'Mason Reid',
        role: 'Founder & Lead Estimator',
        bio: 'Mason leads inspections, repair-versus-replacement planning, and scope review.',
      },
      {
        name: 'Tara Owens',
        role: 'Exterior Project Coordinator',
        bio: 'Tara manages schedule communication, materials, and homeowner updates.',
      },
      {
        name: 'Julian Foster',
        role: 'Site Operations Lead',
        bio: 'Julian oversees crew standards, site protection, and final closeout.',
      },
    ],
  },
  reservations: {
    intro:
      'Use this form when you have the address, the issue, and a rough sense of timing.',
    policies: [
      'Inspection requests are usually reviewed within one business day.',
      'Urgent leak issues are prioritized when conditions and crew availability allow.',
      'Repair-versus-replacement recommendations are documented with photos and notes after inspection.',
    ],
    channels: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0164',
        href: 'tel:+16475550164',
      },
      {
        label: 'Email inspection request',
        value: 'inspections@blackridgeroofing.ca',
        href: 'mailto:inspections@blackridgeroofing.ca',
      },
      {
        label: 'Service area map',
        value: 'Toronto, Scarborough, Pickering, Ajax, Whitby',
        href: 'https://maps.google.com/?q=Scarborough+Ontario',
      },
    ],
  },
  gallery: {
    intro: 'Roofing references grouped by issue type, not padded out to look bigger than they are.',
    collections: [
      {
        title: 'Full Roof Replacement',
        subtitle: 'Replacement scope',
        description: 'A full shingle replacement planned around decking review, flashing continuity, and a cleaner roof-edge finish.',
        facts: ['Full roof scope', 'Ventilation review', 'Clean perimeter detailing'],
        image: {
          src: pexelsPhoto('18098286', 1200, 900),
          alt: 'Two-storey house with a steep finished shingle roof',
          position: 'center',
        },
      },
      {
        title: 'Leak Investigation',
        subtitle: 'Inspection-led repair',
        description: 'Targeted repair scope tied to flashing failure and drainage issues.',
        facts: ['Inspection first', 'Repair without full replacement', 'Photo-backed scope'],
        image: {
          src: pexelsPhoto('33404248', 1200, 900),
          alt: 'Roofer inspecting a residential roof edge during a condition review',
          position: 'center',
        },
      },
      {
        title: 'Soffit, Fascia, and Gutter Reset',
        subtitle: 'Exterior support work',
        description: 'Roofline support work pairing soffit, fascia, and drainage details.',
        facts: ['Roof-edge cleanup', 'Drainage support', 'Sharper exterior finish'],
        image: {
          src: pexelsPhoto('34006744', 1200, 900),
          alt: 'Worker installing gutter detail beneath a roof edge',
          position: 'center',
        },
      },
      {
        title: 'Front-Elevation Siding Cleanup',
        subtitle: 'Water management focus',
        description: 'Siding work designed to tighten the elevation and improve curb impression.',
        facts: ['Siding refresh', 'Front-elevation cleanup', 'Better first impression'],
        image: {
          src: pexelsPhoto('18350737', 1200, 900),
          alt: 'Residential exterior showing clean siding and trim detail',
          position: 'center',
        },
      },
    ],
  },
  contact: {
    intro:
      'Use this page for general questions, service-area fit, or the first message about a roof issue.',
    details: [
      {
        label: 'Call office',
        value: '+1 (647) 555-0164',
        href: 'tel:+16475550164',
      },
      {
        label: 'Email inspection request',
        value: 'inspections@blackridgeroofing.ca',
        href: 'mailto:inspections@blackridgeroofing.ca',
      },
      {
        label: 'Office and service area',
        value: '214 Industrial Road, Scarborough, ON',
        href: 'https://maps.google.com/?q=214+Industrial+Road+Scarborough+ON',
      },
    ],
    notes: [
      'Include the property address, age of the roof if known, and whether the issue is active water entry, visible wear, or preventative planning.',
      'If you have photos of the problem area or damaged exterior section, send them with the first message.',
      'For urgent leak issues, call directly so the request can be triaged first.',
    ],
  },
}
