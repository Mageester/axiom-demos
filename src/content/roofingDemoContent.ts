import type { VisualAssetContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

interface ScopeCard {
  label: string
  title: string
  description: string
  image?: VisualAssetContent
  bullets: string[]
}

export const roofingDemoContent = {
  home: {
    hero: {
      eyebrow: 'Roofing and roofline work',
      title: 'Call the company that can tell you the next right step fast.',
      description:
        'Blackridge is built for homeowners dealing with leaks, aging systems, storm concerns, and roof-edge problems where the real value is clear inspection, clean scope, and dependable follow-through.',
      image: {
        src: pexelsPhoto('31771166', 1800, 1200),
        alt: 'Crew installing shingles on a residential roof',
        position: 'center',
      },
      primaryCta: 'Request inspection',
      secondaryCta: 'Call office',
      signals: [
        'Active leak triage',
        'Repair versus replacement guidance',
        'Photo-backed inspection notes',
      ],
      statusItems: [
        'Toronto and Durham homes',
        'Office response during business hours',
        'Urgent leak calls prioritized first',
      ],
    },
    responseDeck: [
      {
        label: 'Leak or water entry',
        title: 'Inspection first, then targeted repair scope.',
        description:
          'Best when the failure point is not fully confirmed yet and the homeowner needs a fast read on whether this is localized or system-wide.',
        bullets: ['Flashing and penetration review', 'Photo-backed notes', 'Repair recommendation if the roof still has life'],
      },
      {
        label: 'Aging roof',
        title: 'Replacement planning with the full roof system in view.',
        description:
          'Best when patching is no longer enough and the roof needs a cleaner replacement decision, not more guesswork.',
        bullets: ['Decking and ventilation review', 'Replacement scope clarity', 'Cleanup and perimeter details defined early'],
      },
      {
        label: 'Roof edge and drainage',
        title: 'Support work that protects the structure and closes the job properly.',
        description:
          'Best when fascia, soffit, siding, or water direction issues are part of the real problem instead of just cosmetic extras.',
        bullets: ['Roofline detailing', 'Gutter and downspout corrections', 'Exterior support scopes handled cleanly'],
      },
    ] as ScopeCard[],
    standards: [
      {
        title: 'Inspection before upsell',
        description: 'The goal is to identify the failure point first, not to default every call into a full replacement.',
      },
      {
        title: 'Property protection and cleanup',
        description: 'Roof work is invasive enough already. Site control, debris handling, and closeout standards are part of the sell.',
      },
      {
        title: 'Clear homeowner communication',
        description: 'Scope, timing, and what happens next should feel obvious after the first conversation.',
      },
    ],
    caseFile: {
      label: 'Recent case file',
      title: 'Front slope replacement with cleaner flashing, stronger roof edge, and a more controlled closeout.',
      description:
        'The homeowner needed a dependable answer, not a dramatic sales pitch. The work focused on the worn slope, flashing continuity, and the roofline details that would keep the elevation from looking half-fixed.',
      image: {
        src: pexelsPhoto('18098286', 1500, 1050),
        alt: 'Finished residential roof replacement on a two-storey home',
        position: 'center',
      },
      outcomes: [
        'Architectural shingle replacement',
        'Flashing review and transition cleanup',
        'Soffit, fascia, and drainage alignment',
      ],
    },
    ctaBand: {
      title: 'Send the address, issue, and any photos first.',
      description:
        'Blackridge uses the first review to confirm whether you need an inspection visit, a direct repair conversation, or urgent triage.',
    },
  },
  services: {
    hero: {
      eyebrow: 'Services',
      title: 'Roofing service lanes organized around the actual problem.',
      description:
        'The page should make it easy to sort where your issue belongs: leak repair, storm response, full replacement, or roof-edge support work.',
    },
    lanes: [
      {
        label: 'Leak repair',
        title: 'Inspections and repair scopes for active failure points.',
        description:
          'Use this when water is getting in or the issue appears localized enough that a targeted repair may still be the right answer.',
        image: {
          src: pexelsPhoto('33404248', 1450, 1020),
          alt: 'Roofer inspecting residential roof edge and condition details',
          position: 'center',
        },
        bullets: ['Condition review on site', 'Leak tracing and photo notes', 'Repair scope without forcing replacement'],
      },
      {
        label: 'Replacement',
        title: 'Full-system review when patching no longer makes sense.',
        description:
          'Use this when the roof is broadly worn, nearing end of life, or showing enough issues that repairs would only delay the inevitable.',
        image: {
          src: pexelsPhoto('31771166', 1450, 1020),
          alt: 'Crew replacing shingles on a residential roof',
          position: 'center',
        },
        bullets: ['Tear-off replacement planning', 'Decking and ventilation corrections', 'Perimeter and closeout standards'],
      },
      {
        label: 'Storm response',
        title: 'Priority review for recent wind or weather damage.',
        description:
          'Use this when the concern is recent, visible, and time-sensitive enough that stabilizing the roof or documenting the issue is the first step.',
        image: {
          src: pexelsPhoto('10025299', 1450, 1020),
          alt: 'Close roof detail showing shingles and roof surface condition',
          position: 'center',
        },
        bullets: ['Priority triage', 'Damage documentation', 'Short-term stabilization guidance'],
      },
      {
        label: 'Roofline support',
        title: 'Soffit, fascia, siding, and drainage work tied back to the roof.',
        description:
          'Use this when the real problem lives around the edge of the roof system and the exterior support work has to be handled with it.',
        image: {
          src: pexelsPhoto('34006744', 1450, 1020),
          alt: 'Technician working on gutter and roof edge detail',
          position: 'center',
        },
        bullets: ['Soffit and fascia corrections', 'Gutter and downspout work', 'Transition details that support weather protection'],
      },
    ] as ScopeCard[],
    decisionGuide: [
      'Repair when the issue is isolated and the rest of the roof still has service life.',
      'Replace when the wear is broad and the roof system is already beyond clean repair economics.',
      'Treat roof-edge and drainage scopes as part of water management, not as decorative extras.',
    ],
  },
  projects: {
    hero: {
      eyebrow: 'Projects',
      title: 'References organized like issue files, not portfolio wallpaper.',
      description:
        'Roofing proof should be specific enough to tell a homeowner what kind of problem was solved and how confidently it was handled.',
    },
    files: [
      {
        label: 'Replacement file',
        title: 'Full roof replacement after wear spread beyond repair value.',
        description:
          'A steep-slope replacement where the core credibility point was not the shingle brand. It was the clarity around scope, ventilation, cleanup, and how the roof edge finished.',
        image: {
          src: pexelsPhoto('18098286', 1500, 1050),
          alt: 'Finished residential roof replacement',
          position: 'center',
        },
        bullets: ['Full tear-off', 'Ventilation review', 'Roof edge cleaned up properly'],
      },
      {
        label: 'Leak file',
        title: 'Inspection-led repair tied to the actual failure point.',
        description:
          'A homeowner with a water-entry concern needed an answer before they needed a big scope. The inspection narrowed the issue, documented it, and kept the repair targeted.',
        image: {
          src: pexelsPhoto('33404248', 1500, 1050),
          alt: 'Roofer inspecting a residential roof',
          position: 'center',
        },
        bullets: ['Penetration and flashing review', 'Photo-backed recommendation', 'Repair without overselling'],
      },
      {
        label: 'Roofline file',
        title: 'Soffit, fascia, and drainage cleanup that finished the exterior properly.',
        description:
          'The roofline support work mattered because water handling and edge finish were both part of the homeowner’s confidence problem.',
        image: {
          src: pexelsPhoto('34006744', 1500, 1050),
          alt: 'Gutter and roof edge installation detail',
          position: 'center',
        },
        bullets: ['Roof-edge support work', 'Drainage corrections', 'Cleaner elevation finish'],
      },
    ] as ScopeCard[],
  },
  about: {
    hero: {
      eyebrow: 'About Blackridge',
      title: 'Operational credibility first: inspect well, write scope clearly, protect the property.',
      description:
        'Blackridge is not selling personality. It is selling confidence that the inspection, the work, and the site handling will all feel controlled from the first call onward.',
    },
    pillars: [
      {
        title: 'Inspect before recommending',
        description: 'The company should look most credible when it explains what it found before it suggests what to buy.',
      },
      {
        title: 'Keep scope legible',
        description: 'Homeowners should understand what is getting repaired, replaced, or left alone after the first review.',
      },
      {
        title: 'Treat cleanup as part of the work',
        description: 'Roofing credibility drops fast when the site looks sloppy. Cleanup and closeout are part of the standard.',
      },
    ],
    operations: [
      'First call and triage: understand whether this is urgent, aging, storm-related, or roof-edge support.',
      'Inspection and notes: document the condition and explain the right scope.',
      'Scheduling and execution: confirm protection, access, cleanup, and final handoff before the job starts.',
    ],
    team: [
      {
        name: 'Mason Reid',
        role: 'Founder and lead estimator',
        description: 'Handles inspection strategy, repair-versus-replacement logic, and scope review.',
      },
      {
        name: 'Tara Owens',
        role: 'Exterior project coordinator',
        description: 'Owns homeowner updates, scheduling, and materials coordination.',
      },
      {
        name: 'Julian Foster',
        role: 'Site operations lead',
        description: 'Oversees crew standards, property protection, cleanup, and closeout.',
      },
    ],
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Use contact when you need service-area fit, first guidance, or a general roofing conversation.',
      description:
        'If the issue is urgent, call. If it needs context, include photos and the address so the office can triage before the response gets slowed down.',
    },
    guidance: [
      {
        title: 'Call for urgent leaks',
        description: 'Phone is the fastest route when water entry or recent storm damage is active now.',
      },
      {
        title: 'Email for photo triage',
        description: 'Email works best when you can send images and the office needs to sort the likely scope first.',
      },
      {
        title: 'Use inspection for booking',
        description: 'If you already know you want an inspection request started, go directly to the inspection page.',
      },
    ],
    checklist: [
      'Property address',
      'Whether the issue is active water entry, visible wear, or storm damage',
      'Approximate age of the roof if known',
      'Photos of the problem area or roofline',
    ],
  },
  inspection: {
    hero: {
      eyebrow: 'Inspection request',
      title: 'Use this page when you are ready to send the property details and get triaged properly.',
      description:
        'The inspection request is the strongest conversion path in the roofing demo because it mirrors how a serious homeowner actually gets help: address, issue, timing, then clear next step.',
    },
    urgencyPanel: {
      title: 'Urgent issue?',
      description:
        'If water is actively entering the home or the concern is tied to recent storm damage, call the office first so the request can be triaged before the form queue.',
      bullets: ['Active leak', 'Recent storm damage', 'Immediate stabilization concern'],
    },
    prep: [
      'Use the property address, not just the city.',
      'Pick the issue type that is closest to the real problem.',
      'Use notes for context the photos do not explain on their own.',
    ],
  },
}
