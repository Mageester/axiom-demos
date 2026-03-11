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
    browserTitle: 'Blackridge Roofing & Exteriors | Roofing and Exterior Work',
    metaDescription:
      'Premium roofing, siding, eavestroughs, repairs, and inspection-led exterior work for Toronto and Durham Region homes.',
    tagline: 'Roofing and exterior work built for weather protection, clear scope, and clean project control',
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
      eyebrow: 'Roofing & Exterior Protection | Toronto & Durham Region',
      title: 'Roofing and exterior work handled with clearer standards and faster on-site certainty.',
      description:
        'Blackridge handles inspections, repairs, replacements, siding, and eavestrough work for homeowners who want a serious exterior contractor with strong communication and disciplined site execution.',
      primaryCta: 'Request inspection',
      secondaryCta: 'Review services',
      signals: [
        'Roofing, siding, eavestroughs, and inspection-led repair scopes',
        'Photo-backed condition review before major recommendations are made',
        'Scope, materials, and next steps documented clearly after the first visit',
      ],
      image: {
        src: pexelsPhoto('209235', 1800, 1200),
        alt: 'Roofing team working on a steep residential roof under clear daylight',
        position: 'center',
      },
    },
    highlights: [
      {
        title: 'Inspection before assumption',
        description:
          'Blackridge starts with roof condition, flashing details, drainage, and exterior weak points before recommending repair or replacement.',
      },
      {
        title: 'Structured repair and replacement scopes',
        description:
          'Homeowners get a clear breakdown of what needs immediate work, what can be staged, and what is tied to long-term envelope performance.',
      },
      {
        title: 'Site control that protects the property',
        description:
          'Access, cleanup, material staging, and final walkthrough standards are part of the service, not afterthoughts.',
      },
    ],
    featuredDishes: [
      {
        name: 'Roof Replacement & Re-Sheeting',
        course: 'Primary scope',
        description:
          'Full roof replacement work planned around decking condition, ventilation, flashing continuity, and clean perimeter detailing.',
        image: {
          src: pexelsPhoto('2251247', 1400, 1000),
          alt: 'Residential roof replacement in progress with shingles and flashing details visible',
          position: 'center',
        },
      },
      {
        name: 'Leak Investigation & Targeted Repair',
        course: 'Inspection-led repair',
        description:
          'Condition-based repair scopes for leaks, storm damage, and isolated exterior failures where replacement is not the first answer.',
        image: {
          src: pexelsPhoto('280222', 1400, 1000),
          alt: 'Technician inspecting roofline and exterior drainage details',
          position: 'center',
        },
      },
      {
        name: 'Siding, Soffit & Eavestrough Upgrades',
        course: 'Envelope support',
        description:
          'Exterior finishing work that protects the structure, sharpens first impression, and supports better water management.',
        image: {
          src: pexelsPhoto('8134786', 1400, 1000),
          alt: 'Clean residential exterior with siding and roofline detail',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'A more controlled process for high-trust exterior work',
      description:
        'Blackridge is built for homeowners who want a contractor that can inspect properly, explain clearly, and execute without sloppy site management.',
      points: [
        'On-site inspection with photo-backed condition notes and repair or replacement recommendations',
        'Clear quote with staging options when part of the scope can be handled separately',
        'Crew schedule, daily cleanup expectations, and final walkthrough at closeout',
      ],
      images: [
        {
          src: pexelsPhoto('6474475', 1200, 1400),
          alt: 'Exterior contractor reviewing roof and siding details at a residential property',
          position: 'center',
        },
        {
          src: pexelsPhoto('271624', 1200, 900),
          alt: 'Close roofline detail showing shingles, flashing, and gutter edge',
          position: 'center',
        },
      ],
    },
  },
  menu: {
    intro:
      'Blackridge handles repair, replacement, and exterior envelope support work for residential properties that need a stronger standard of planning and execution.',
    sections: [
      {
        title: 'Roof Inspections & Repairs',
        note: 'Condition-led work for leaks, storm response, and targeted roof failures before replacement is recommended.',
        highlights: ['Leak tracing and problem isolation', 'Storm and wind damage review', 'Photo-backed repair scope'],
        image: {
          src: pexelsPhoto('8470794', 1200, 900),
          alt: 'Roof inspection on a residential property with safety equipment in use',
          position: 'center',
        },
        items: [
          {
            name: 'Leak Inspection & Water Entry Review',
            description: 'Tracing visible symptoms back to roof penetration, flashing, or drainage failure points',
            price: 'From 295',
          },
          {
            name: 'Targeted Repair Scope',
            description: 'Shingle, flashing, and roofline repair work for isolated failure zones',
            price: 'Quoted after inspection',
          },
          {
            name: 'Storm Response Assessment',
            description: 'Damage review and immediate stabilization recommendations after weather events',
            price: 'Priority scheduling',
          },
        ],
      },
      {
        title: 'Roof Replacements',
        note: 'Full replacement scopes built around ventilation, flashing continuity, and long-term weather protection.',
        highlights: ['Decking and ventilation review', 'Replacement planning by roof section', 'Clean perimeter detailing'],
        image: {
          src: pexelsPhoto('5978126', 1200, 900),
          alt: 'Roof replacement crew working on a residential exterior',
          position: 'center',
        },
        items: [
          {
            name: 'Asphalt Shingle Replacement',
            description: 'Full tear-off and replacement with underlayment, flashing review, and clean site closeout',
            price: 'From 9,500',
          },
          {
            name: 'Partial Roof Section Rebuild',
            description: 'Staged replacement for additions, lower slopes, and sections with localized failure',
            price: 'From 4,800',
          },
          {
            name: 'Decking & Ventilation Corrections',
            description: 'Underlying structural and airflow improvements recommended during replacement work',
            price: 'As required',
          },
        ],
      },
      {
        title: 'Exterior Envelope Support',
        note: 'Siding, soffit, fascia, and eavestrough work that supports both performance and exterior presentation.',
        highlights: ['Siding repair and replacement', 'Soffit and fascia detail work', 'Eavestrough and drainage improvements'],
        image: {
          src: pexelsPhoto('7319071', 1200, 900),
          alt: 'Residential exterior with siding and eavestrough detail',
          position: 'center',
        },
        items: [
          {
            name: 'Siding Repair & Replacement',
            description: 'Targeted exterior cladding work to correct damage and clean up worn elevations',
            price: 'Quoted by scope',
          },
          {
            name: 'Soffit, Fascia & Flashing Updates',
            description: 'Trim and transition details that support better weather protection at the roof edge',
            price: 'From 1,250',
          },
          {
            name: 'Eavestrough & Downspout Work',
            description: 'Drainage improvements designed to move water off the structure more reliably',
            price: 'From 980',
          },
        ],
      },
    ],
  },
  about: {
    intro:
      'Blackridge was built for homeowners who need a roofing and exterior contractor that can inspect seriously, communicate clearly, and run a disciplined site.',
    story: [
      'We treat roofing as protection work first. That means understanding the failure point, the surrounding roof condition, and the exterior systems tied to water movement before making major recommendations.',
      'Our crews are expected to work with tighter site control than the average trade contractor. Material staging, access protection, cleanup, and homeowner communication are part of the standard.',
      'The result is exterior work that feels more dependable from the first inspection through the final walkthrough, especially on projects where trust matters as much as price.',
    ],
    values: [
      {
        title: 'Condition before sales pressure',
        description:
          'We inspect first, document what we see, and recommend the right scope instead of forcing every issue into a full replacement.',
      },
      {
        title: 'Operational clarity',
        description:
          'Quotes, staging options, and next steps are written so homeowners know what is urgent, what is optional, and what each phase is solving.',
      },
      {
        title: 'Clean execution standards',
        description:
          'Roofing and exterior work still has to respect the property, the schedule, and the final handoff. We treat those as part of the job.',
      },
    ],
    team: [
      {
        name: 'Mason Reid',
        role: 'Founder & Lead Estimator',
        bio: 'Mason leads inspections, repair-versus-replacement planning, and full project scope review across Blackridge jobs.',
      },
      {
        name: 'Tara Owens',
        role: 'Exterior Project Coordinator',
        bio: 'Tara manages schedule communication, materials coordination, and homeowner updates during active work.',
      },
      {
        name: 'Julian Foster',
        role: 'Site Operations Lead',
        bio: 'Julian oversees crew standards, site protection, and final closeout across roofing and exterior scopes.',
      },
    ],
  },
  reservations: {
    intro:
      'Request an inspection with the property address, your concern, and whether the issue is active damage, an aging roof, or part of a broader exterior update.',
    policies: [
      'Inspection requests are usually reviewed within one business day.',
      'Urgent leak issues are prioritized when conditions and crew availability allow.',
      'Replacement recommendations are documented with photos and supporting notes after inspection.',
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
    intro:
      'Representative exterior projects showing repair, replacement, roofline detailing, and full-property envelope improvement work.',
    collections: [
      {
        title: 'Full Roof Replacement with Clean Perimeter Finish',
        subtitle: 'Replacement scope',
        description:
          'A full shingle replacement planned around decking review, flashing continuity, and sharper roof-edge finish details.',
        facts: ['Full roof scope', 'Flashing and ventilation review', 'Clean perimeter detailing'],
        image: {
          src: pexelsPhoto('5978126', 1200, 900),
          alt: 'Residential roof replacement with crew and shingles visible on site',
          position: 'center',
        },
      },
      {
        title: 'Leak Repair and Roofline Correction',
        subtitle: 'Inspection-led repair',
        description:
          'Targeted repair scope tied to flashing failure and drainage issues along a vulnerable roofline transition.',
        facts: ['Inspection first', 'Repair without full replacement', 'Drainage issue corrected'],
        image: {
          src: pexelsPhoto('6474345', 1200, 900),
          alt: 'Technician inspecting and repairing a residential roof section',
          position: 'center',
        },
      },
      {
        title: 'Siding and Soffit Reset',
        subtitle: 'Exterior support work',
        description:
          'Siding and soffit replacement paired with trim cleanup to strengthen the envelope and improve curb impression.',
        facts: ['Siding refresh', 'Soffit replacement', 'Sharper elevation read'],
        image: {
          src: pexelsPhoto('8134991', 1200, 900),
          alt: 'Residential exterior with clean siding and roof edge detail',
          position: 'center',
        },
      },
      {
        title: 'Eavestrough and Drainage Upgrade',
        subtitle: 'Water management focus',
        description:
          'Roof-edge drainage work designed to move water more cleanly off the structure and away from the foundation line.',
        facts: ['Eavestrough replacement', 'Downspout planning', 'Water management'],
        image: {
          src: pexelsPhoto('5691624', 1200, 900),
          alt: 'Roof edge and gutter detail on a residential property',
          position: 'center',
        },
      },
      {
        title: 'Storm Damage Review and Stabilization',
        subtitle: 'Post-weather response',
        description:
          'Condition review, immediate stabilization, and documented next steps following wind-driven roof damage.',
        facts: ['Priority assessment', 'Stabilization first', 'Documented next steps'],
        image: {
          src: pexelsPhoto('5691613', 1200, 900),
          alt: 'Roof inspection after exterior weather damage',
          position: 'center',
        },
      },
      {
        title: 'Roof and Siding Scope for Full Exterior Reset',
        subtitle: 'Combined envelope project',
        description:
          'A broader exterior project coordinating roof replacement, siding updates, and improved drainage detailing as one scope.',
        facts: ['Roof and siding', 'Single coordinated project', 'Exterior reset'],
        image: {
          src: pexelsPhoto('6492403', 1200, 900),
          alt: 'Residential property with renewed roof and exterior cladding',
          position: 'center',
        },
      },
    ],
  },
  contact: {
    intro:
      'Contact Blackridge directly to discuss inspection timing, service-area fit, or current roof and exterior concerns.',
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
      'Include the property address, age of the roof if known, and whether the issue is active water entry or preventative planning.',
      'If you have photos of the problem area or damaged exterior section, send them with your first message for a faster response.',
      'For urgent leak issues, call directly so we can determine whether the request should be prioritized.',
    ],
  },
}
