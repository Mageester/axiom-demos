import type { VisualAssetContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

interface StoryCard {
  label: string
  title: string
  description: string
  image: VisualAssetContent
  details: string[]
}

export const landscapingDemoContent = {
  home: {
    hero: {
      eyebrow: 'Design-build landscaping',
      title: 'Outdoor spaces that read like a finished part of the home.',
      description:
        'Northline rebuilds patios, front approaches, planting, and lighting for homeowners who care how the property feels at first glance and in daily use.',
      primaryCta: 'Request a quote',
      secondaryCta: 'View projects',
      image: {
        src: pexelsPhoto('17240696', 1900, 1260),
        alt: 'Refined backyard with a finished patio, lawn, and layered planting',
        position: 'center 56%',
      },
      notes: [
        'Patios, front entries, and backyard composition',
        'Toronto west-end homes and outdoor-living upgrades',
        'Quotes shaped around finish level, not generic packages',
      ],
      trust: [
        'Etobicoke-led projects',
        'Material palettes reviewed early',
        'Photo-first quote intake',
      ],
    },
    signatureProject: {
      label: 'Featured transformation',
      title: 'From open yard to an outdoor room with structure, light, and circulation.',
      description:
        'This is the kind of job Northline is strongest at: a property that needs more than cleanup and ends with a patio, planting, and a cleaner relationship to the house.',
      image: {
        src: pexelsPhoto('34037980', 1500, 1100),
        alt: 'Backyard patio and lounge zone framed by greenery',
        position: 'center 54%',
      },
      projectMeta: ['Etobicoke', 'Porcelain patio + layered planting', 'Planned for daily use and evening hosting'],
      outcomes: [
        'Anchored seating zone tied to the back door',
        'Planting and lighting that soften the hardscape instead of crowding it',
        'Clear movement through the yard without dead space',
      ],
    },
    transformation: {
      title: 'The strongest proof is a finished property, not a feature list.',
      summary:
        'Northline is selling the after, not the task list. The work reads better when the project shows sequence, materials, and how the yard changed once it was actually built.',
      before: {
        src: '/images/landscaping/land1.png',
        alt: 'Backyard before landscaping buildout and patio installation',
        position: 'center 54%',
      },
      after: {
        src: '/images/landscaping/land2.png',
        alt: 'Backyard after patio, planting, and outdoor-living improvements',
        position: 'center 54%',
      },
      bullets: [
        'Patio + seating zone',
        'Bed framing and layered planting',
        'Lighting for paths and evening presence',
        'Cleaner access across the yard',
      ],
    },
    stories: [
      {
        label: 'Outdoor living',
        title: 'Backyard layouts that feel planned, not pieced together.',
        description:
          'Patios, edges, planting, and furniture zones are handled as one composition so the space feels intentional once the build is done.',
        image: {
          src: pexelsPhoto('33838596', 1300, 980),
          alt: 'Outdoor living space with built seating and layered planting',
          position: 'center 56%',
        },
        details: ['Furniture-aware layout', 'Hardscape and planting working together', 'Built for evening use'],
      },
      {
        label: 'Street presence',
        title: 'Front entries that sharpen curb appeal without looking overdesigned.',
        description:
          'The goal is a cleaner arrival sequence: better grading, stronger bed definition, and a front walk that makes the home look cared for.',
        image: {
          src: pexelsPhoto('30196217', 1300, 980),
          alt: 'Front garden walkway with planting and formal edges',
          position: 'center',
        },
        details: ['Walkway and step cleanup', 'Street-facing bed refresh', 'Better first impression'],
      },
      {
        label: 'After dark',
        title: 'Lighting and finishing work that keeps the property legible at night.',
        description:
          'Good landscape lighting should make steps, paths, and garden structure readable after dark without turning the yard into a light show.',
        image: {
          src: pexelsPhoto('35828688', 1300, 980),
          alt: 'Landscape path and planting illuminated at dusk',
          position: 'center',
        },
        details: ['Low-voltage path lighting', 'Feature lighting at key moments', 'More finished night presence'],
      },
    ] as StoryCard[],
    serviceLens: [
      {
        title: 'Patios and outdoor rooms',
        description: 'Projects shaped around furniture, grade changes, access, and how the yard will actually get used.',
      },
      {
        title: 'Front-approach upgrades',
        description: 'Walkways, steps, and planting that make the house read better from the street.',
      },
      {
        title: 'Planting, lighting, and support work',
        description: 'The finishing layers that stop the project from feeling incomplete once the hardscape is in.',
      },
    ],
    quoteBand: {
      title: 'Send the address, current photos, and the part of the property you want improved.',
      description:
        'Northline reviews service-area fit, project type, and finish expectations before any site visit is booked.',
    },
  },
  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Landscape scopes built around what the property needs to become.',
      description:
        'These are not menu items. They are the main ways Northline reshapes front yards, backyards, and outdoor-living areas for residential properties.',
      image: {
        src: pexelsPhoto('33798594', 1700, 1100),
        alt: 'Garden path and structured residential planting',
        position: 'center',
      },
      rail: ['Hardscape + softscape coordination', 'Material-driven quoting', 'Residential projects only'],
    },
    scopes: [
      {
        label: 'Backyard living',
        title: 'Patios, lounge zones, and layout work that make the yard usable.',
        description:
          'Best for homeowners turning open lawn or awkward hardscape into a finished outdoor room tied back to the house.',
        image: {
          src: pexelsPhoto('34037980', 1400, 1000),
          alt: 'Backyard patio with seating area and lush planting',
          position: 'center 54%',
        },
        outcomes: ['Patios and paving', 'Retaining and grade transitions', 'Integrated planting and lighting'],
        inclusions: ['Furniture-aware layout planning', 'Drainage and edge condition review', 'Finish detailing around thresholds and access points'],
      },
      {
        label: 'Front-of-house',
        title: 'Entries and curb-appeal work that clean up the first impression.',
        description:
          'Best when the front walk, planting, and arrival sequence are undermining how the home reads from the street.',
        image: {
          src: pexelsPhoto('30196217', 1400, 1000),
          alt: 'Front entrance landscaping with walkway and lighting',
          position: 'center',
        },
        outcomes: ['Walks, steps, and porch approach', 'Street-facing planting', 'Bed framing and edge control'],
        inclusions: ['Arrival-sequence planning', 'Material selection matched to the house', 'Street-view finish review'],
      },
      {
        label: 'Finishing systems',
        title: 'Planting, lighting, and support work that keep the build from feeling incomplete.',
        description:
          'Best when the property needs the final layers that make the yard look settled instead of recently patched.',
        image: {
          src: pexelsPhoto('35828688', 1400, 1000),
          alt: 'Landscape lighting in a residential garden at dusk',
          position: 'center',
        },
        outcomes: ['Planting and bed refresh', 'Low-voltage lighting', 'Drainage and seasonal reset work'],
        inclusions: ['Night-readability planning', 'Targeted water-direction fixes', 'Softscape finish review after hardscape work'],
      },
    ],
    guidance: [
      'Northline fits best when the homeowner cares about composition, finish quality, and how the job is handled on site.',
      'If the project is only a quick patch or one-off maintenance item, it is usually not the right fit.',
      'Quotes start with the property address, current photos, and the area you want reviewed.',
    ],
  },
  projects: {
    hero: {
      eyebrow: 'Projects',
      title: 'Recent work built to improve how the property lives and how it reads.',
      description:
        'Northline should look strongest in the work itself. These references are organized like project stories, not generic gallery filler.',
    },
    featuredCase: {
      label: 'Case study',
      title: 'A rear-yard rebuild planned around evening use, circulation, and clean edges.',
      description:
        'The original yard had space but no structure. The finished layout created a main entertaining surface, controlled movement, and used planting to make the yard feel anchored instead of exposed.',
      image: {
        src: pexelsPhoto('17240696', 1600, 1100),
        alt: 'Large landscaped backyard with patio, lawn, and seating',
        position: 'center 56%',
      },
      facts: ['Rear-yard redesign', 'Porcelain + softscape balance', 'Entertaining-led layout'],
      notes: [
        'The hardscape was set around furniture spacing first.',
        'Planting was used to soften the boundary lines and create privacy.',
        'Lighting was added only where it improved movement and atmosphere.',
      ],
    },
    cases: [
      {
        label: 'Front entry reset',
        title: 'Sharper approach, cleaner planting, stronger street read.',
        description:
          'A front-of-house refresh where the win came from restraint: better edges, cleaner path geometry, and planting that fits the home instead of fighting it.',
        image: {
          src: pexelsPhoto('30278085', 1400, 1000),
          alt: 'Stone garden path with precise edges and residential planting',
          position: 'center',
        },
        details: ['Entry sequence', 'Stone path', 'Bed definition'],
      },
      {
        label: 'Grade and stonework',
        title: 'Retaining and elevation work handled without making the yard feel heavy.',
        description:
          'Where grade control matters, the right answer is structural and visual. The work should hold the site together without making it read like an engineering patch.',
        image: {
          src: pexelsPhoto('33589324', 1400, 1000),
          alt: 'Stone retaining and garden step detail in a landscaped yard',
          position: 'center',
        },
        details: ['Retaining strategy', 'Drainage-aware planning', 'Landscape integration'],
      },
      {
        label: 'Lighting pass',
        title: 'After-dark visibility that makes the yard feel finished instead of theatrical.',
        description:
          'Lighting should reinforce movement, planting shape, and entry points. The strongest projects use it as a finishing layer, not a gimmick.',
        image: {
          src: pexelsPhoto('35828688', 1400, 1000),
          alt: 'Landscape lighting framing a residential path and planting bed',
          position: 'center',
        },
        details: ['Night readability', 'Feature moments', 'Low-voltage system'],
      },
    ] as StoryCard[],
  },
  about: {
    hero: {
      eyebrow: 'About Northline',
      title: 'A landscaping company built around finish quality, composition, and controlled site work.',
      description:
        'Northline is not trying to be everything. It is built for homeowners who want the finished property to feel considered and the project process to stay organized from first review to handoff.',
    },
    principles: [
      {
        title: 'Design sense before install speed',
        description: 'The property has to read well when the job is done, so layout, grade, and material choices get solved before production takes over.',
      },
      {
        title: 'Clear quoting and scope fit',
        description: 'Quotes are strongest when the finish level, service area, and type of project are defined early instead of guessed at after the visit.',
      },
      {
        title: 'Site conduct matters',
        description: 'Access, cleanup, protection, and handoff are part of the value. A good project should not feel chaotic while it is being built.',
      },
    ],
    process: [
      'First review: address, photos, and the part of the property that needs work.',
      'Site walk: confirm grade, access, materials, and where the project should focus.',
      'Quote and schedule: define scope clearly before the work calendar is locked.',
    ],
    team: [
      {
        name: 'Evan North',
        role: 'Owner and build lead',
        description: 'Leads site planning, hardscape execution, and final finish review.',
      },
      {
        name: 'Alana Reyes',
        role: 'Landscape design coordinator',
        description: 'Shapes layout direction, planting rhythm, and material pairing.',
      },
      {
        name: 'Noel Chen',
        role: 'Project coordinator',
        description: 'Owns homeowner communication, supplier timing, and handoff details.',
      },
    ],
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Reach the quote desk with enough context to make the next step obvious.',
      description:
        'The best first message includes the address, current photos, and which part of the property is not working yet.',
      image: {
        src: pexelsPhoto('30278085', 1500, 1000),
        alt: 'Residential landscape path with layered greenery',
        position: 'center',
      },
    },
    responseCards: [
      {
        title: 'Fastest route',
        description: 'Call or email when you already know the address and the rough scope.',
      },
      {
        title: 'Best message',
        description: 'Front yard, backyard, or entry sequence plus current photos and timing.',
      },
      {
        title: 'Best-fit projects',
        description: 'Residential upgrades where finish quality matters more than a cheap patch.',
      },
    ],
    checklist: [
      'Property address and neighborhood',
      'Which area needs attention',
      'Any timing or event deadlines',
      'Current photos of the yard or problem area',
    ],
  },
  quote: {
    hero: {
      eyebrow: 'Quote request',
      title: 'Start the quote with the property, not a vague service label.',
      description:
        'Northline can price faster when the address, photos, and design intent come first. The quote flow is built around that reality.',
    },
    channelsHeading: 'Use phone or email if the project is already clear enough to discuss directly.',
    intakePrompts: [
      'Tell us which part of the property you want transformed.',
      'Add the timeline only if it is real, not aspirational.',
      'Use the notes field to explain how you want the space to feel when it is done.',
    ],
    asideTitle: 'What happens before a site visit',
    asidePoints: [
      'Most quote requests are reviewed within one business day.',
      'Service-area fit is confirmed before time is booked on site.',
      'Written quotes are used to define scope before scheduling.',
    ],
  },
}
