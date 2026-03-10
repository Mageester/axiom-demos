import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const restaurantContent: DemoContent = {
  brand: {
    name: 'Atelier Meridian',
    city: 'Toronto',
    tagline: 'Seasonal tasting house with coastal influence',
    phone: '+1 (416) 555-0182',
    phoneHref: 'tel:+14165550182',
    email: 'reservations@ateliermeridian.ca',
    emailHref: 'mailto:reservations@ateliermeridian.ca',
    address: '112 Harbor Lane, Toronto, ON M5V 2L6',
    hours: [
      'Tuesday to Thursday: 5:00 PM to 10:00 PM',
      'Friday to Saturday: 5:00 PM to 11:00 PM',
      'Sunday: 4:30 PM to 9:30 PM',
      'Monday: Closed',
    ],
    legalLine: 'Atelier Meridian. All rights reserved.',
  },
  home: {
    hero: {
      eyebrow: 'Waterfront Dining - Toronto',
      title: 'A reservation-first dining experience built for modern hospitality.',
      description:
        'Atelier Meridian delivers a premium evening of precise plating, focused service, and ingredient-led menus designed around Ontario seasonality.',
      primaryCta: 'Reserve a table',
      secondaryCta: 'Explore menu',
      signals: [
        'Dinner service Tuesday-Sunday',
        'Private dining studio up to 12 guests',
        'Dietary and accessibility requests reviewed pre-arrival',
      ],
      image: {
        src: pexelsPhoto('260922', 1800, 1200),
        alt: 'Warmly lit premium dining room prepared for evening service',
        position: 'center 42%',
      },
    },
    highlights: [
      {
        title: 'Chef-led tasting cadence',
        description:
          'A rotating progression of small and full plates coordinated to your table pace.',
      },
      {
        title: 'Curated beverage pairing',
        description:
          'Low-intervention wines, signature zero-proof options, and guided pairings by course.',
      },
      {
        title: 'Private dining studio',
        description:
          'An intimate 12-seat room for celebrations, team dinners, and host-led experiences.',
      },
    ],
    featuredDishes: [
      {
        name: 'Scallop Crudo',
        course: 'First plate',
        description:
          'Citrus-bright opener plated for shareable visual impact and light pacing.',
        image: {
          src: pexelsPhoto('262978', 1400, 1000),
          alt: 'First course plated in a premium dining setting with refined garnish',
          position: 'center 72%',
        },
      },
      {
        name: 'Dry-Aged Duck Breast',
        course: 'Main course',
        description:
          'Signature composed plate balancing richness, acidity, and seasonal produce.',
        image: {
          src: pexelsPhoto('3298637', 1400, 1000),
          alt: 'Elegant duck breast plate with reduction and vegetables',
          position: 'center',
        },
      },
      {
        name: 'Chocolate Tarte',
        course: 'Dessert',
        description:
          'Final course designed with restrained sweetness and high visual finish.',
        image: {
          src: pexelsPhoto('291528', 1400, 1000),
          alt: 'Chocolate dessert plated with modern presentation',
          position: 'center',
        },
      },
    ],
    experience: {
      title: 'Designed for seamless booking and confident planning',
      description:
        'The experience begins before arrival with clear reservation windows, party-size guidance, and direct contact channels.',
      points: [
        'Real-time reservation intake for dinner service',
        'Dedicated concierge response for dietary and accessibility needs',
        'Transparent pricing and cancellation guidance before booking',
      ],
      images: [
        {
          src: pexelsPhoto('941861', 1200, 1400),
          alt: 'Evening dining room scene with candlelight and refined table settings',
          position: 'center 40%',
        },
        {
          src: pexelsPhoto('1267320', 1200, 900),
          alt: 'Bar station with premium cocktails ready for service',
          position: 'center 58%',
        },
      ],
    },
  },
  menu: {
    intro:
      'Our menu is updated weekly based on regional harvests and fishery availability.',
    sections: [
      {
        title: 'First Plates',
        note: 'Small-format dishes to open the evening.',
        image: {
          src: pexelsPhoto('2741458', 1200, 900),
          alt: 'Savory first course plated with premium garnish detail',
          position: 'center',
        },
        items: [
          {
            name: 'East Coast Oysters',
            description: 'Preserved lemon mignonette, kelp oil',
            price: '24',
          },
          {
            name: 'Smoked Beet Tartare',
            description: 'Black garlic aioli, toasted rye crumble',
            price: '19',
          },
          {
            name: 'Scallop Crudo',
            description: 'Green strawberry, fennel pollen, sea herbs',
            price: '26',
          },
        ],
      },
      {
        title: 'Main Courses',
        note: 'Composed plates built around local proteins and produce.',
        image: {
          src: pexelsPhoto('3298637', 1200, 900),
          alt: 'Main entree plate with seared protein and vegetables',
          position: 'center 44%',
        },
        items: [
          {
            name: 'Dry-Aged Duck Breast',
            description: 'Sour cherry jus, charred leek, confit potato',
            price: '46',
          },
          {
            name: 'Arctic Char',
            description: 'Brown butter emulsion, snap peas, dill ash',
            price: '42',
          },
          {
            name: 'Forest Mushroom Pithivier',
            description: 'Truffle broth, crispy shallots, herb salad',
            price: '38',
          },
        ],
      },
      {
        title: 'Dessert',
        note: 'Final courses with restrained sweetness.',
        image: {
          src: pexelsPhoto('291528', 1200, 900),
          alt: 'Fine dining dessert with berries and cream',
          position: 'center 55%',
        },
        items: [
          {
            name: 'Chocolate Tarte',
            description: 'Salted buckwheat praline, espresso cream',
            price: '16',
          },
          {
            name: 'Citrus Pavlova',
            description: 'Mandarin curd, basil meringue, candied peel',
            price: '15',
          },
          {
            name: 'Ontario Cheese Service',
            description: 'Three selections, honeycomb, seed crisps',
            price: '18',
          },
        ],
      },
    ],
  },
  about: {
    intro:
      'Atelier Meridian was established to combine meticulous cuisine with calm, human hospitality.',
    story: [
      'Our kitchen works in short seasonal cycles. Menus are tested daily and adjusted to match the quality of incoming ingredients.',
      'Service is paced to feel unhurried. We focus on host awareness, clear communication, and guest comfort over scripted formality.',
      'The room was designed around natural textures and soft acoustics, creating an atmosphere that supports conversation and occasion.',
    ],
    values: [
      {
        title: 'Ingredient transparency',
        description:
          'We source from partner farms and fisheries with direct visibility into origin and harvest timing.',
      },
      {
        title: 'Accessible premium dining',
        description:
          'Every guest receives clear options for dietary accommodations and table accessibility.',
      },
      {
        title: 'Operational consistency',
        description:
          'From booking confirmations to final course delivery, we design each touchpoint for reliability.',
      },
    ],
    team: [
      {
        name: 'Camille Hart',
        role: 'Executive Chef',
        bio: 'Camille leads menu development with a focus on coastal techniques and regional produce.',
      },
      {
        name: 'Noah Pereira',
        role: 'Restaurant Director',
        bio: 'Noah oversees front-of-house operations and guest experience delivery.',
      },
      {
        name: 'Sora Kim',
        role: 'Pastry Chef',
        bio: 'Sora creates seasonal desserts centered on texture, restraint, and balance.',
      },
    ],
  },
  reservations: {
    intro:
      'Reservations open 30 days in advance. For parties above eight guests, contact our concierge directly.',
    policies: [
      'A valid card is required to hold dinner reservations.',
      'Cancellations made within 24 hours may be subject to a per-seat fee.',
      'Please notify us of allergies or dietary requests at least 48 hours before arrival.',
    ],
    channels: [
      {
        label: 'Book online',
        value: 'Open OpenTable profile',
        href: 'https://www.opentable.com/',
      },
      {
        label: 'Call reservations',
        value: '+1 (416) 555-0182',
        href: 'tel:+14165550182',
      },
      {
        label: 'Email concierge',
        value: 'reservations@ateliermeridian.ca',
        href: 'mailto:reservations@ateliermeridian.ca',
      },
    ],
  },
  gallery: {
    intro:
      'A visual preview of dining atmosphere, plating detail, and service moments before guests reserve.',
    collections: [
      {
        title: 'Main Dining Room',
        subtitle: 'Ambient evening service',
        description:
          'Natural wood surfaces, low-glare lighting, and table spacing designed for relaxed conversation.',
        image: {
          src: pexelsPhoto('260922', 1200, 900),
          alt: 'Main dining room set for evening service with warm ambient light',
          position: 'center 46%',
        },
      },
      {
        title: 'Seasonal Plating',
        subtitle: 'Chef-led progression',
        description:
          'Course presentation focused on texture contrast, ingredient clarity, and measured pacing.',
        image: {
          src: pexelsPhoto('262978', 1200, 900),
          alt: 'Close-up of plated seasonal course with refined garnish',
          position: 'center',
        },
      },
      {
        title: 'Private Dining Studio',
        subtitle: 'Up to 12 guests',
        description:
          'A separate room for hosted dinners, milestone events, and executive team gatherings.',
        image: {
          src: pexelsPhoto('1581384', 1200, 900),
          alt: 'Private dining room with warm materials and premium table setting',
          position: 'center 55%',
        },
      },
      {
        title: 'Bar & Pairings',
        subtitle: 'Wine and zero-proof',
        description:
          'Curated bottles and non-alcoholic pairings selected to support each weekly menu cycle.',
        image: {
          src: pexelsPhoto('3171837', 1200, 900),
          alt: 'Guests toasting with cocktail glasses in a warm restaurant setting',
          position: 'center 58%',
        },
      },
      {
        title: 'Chef Counter',
        subtitle: 'Interactive service',
        description:
          'Limited counter seats with direct view of finishing techniques and final plating.',
        image: {
          src: pexelsPhoto('628776', 1200, 900),
          alt: 'Chef plating in an open kitchen counter setting',
          position: 'center 45%',
        },
      },
      {
        title: 'Arrival Experience',
        subtitle: 'Guest check-in flow',
        description:
          'Hosted arrival with clear reservation validation and dietary notes confirmed at entry.',
        image: {
          src: pexelsPhoto('67468', 1200, 900),
          alt: 'Front dining view prepared for guest arrival and table greeting',
          position: 'center 58%',
        },
      },
      {
        title: 'Late Evening Mood',
        subtitle: 'After-dark atmosphere',
        description:
          'Lighting and room pacing tuned for quieter conversation as evening service continues.',
        image: {
          src: pexelsPhoto('776538', 1200, 900),
          alt: 'Warm pendant lights over a moody restaurant interior at night',
          position: 'center',
        },
      },
      {
        title: 'Kitchen Team Flow',
        subtitle: 'Coordinated pass service',
        description:
          'Kitchen choreography focused on timing, consistency, and smooth course release.',
        image: {
          src: pexelsPhoto('3217156', 1200, 900),
          alt: 'Chef team preparing dishes in a professional kitchen setting',
          position: 'center',
        },
      },
    ],
  },
  contact: {
    intro:
      'Contact the concierge team for reservation changes, private event planning, or accessibility accommodations.',
    details: [
      {
        label: 'Call concierge',
        value: '+1 (416) 555-0182',
        href: 'tel:+14165550182',
      },
      {
        label: 'Email reservations',
        value: 'reservations@ateliermeridian.ca',
        href: 'mailto:reservations@ateliermeridian.ca',
      },
      {
        label: 'Visit',
        value: '112 Harbor Lane, Toronto, ON M5V 2L6',
        href: 'https://maps.google.com/?q=112+Harbor+Lane+Toronto+ON',
      },
    ],
    notes: [
      'Reservation modifications are best handled by phone for same-day service.',
      'For private events over eight guests, include preferred date range and guest count in your email.',
      'Dietary and accessibility accommodations are reviewed by the concierge before confirmation.',
    ],
  },
}
