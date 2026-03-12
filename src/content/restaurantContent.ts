import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const restaurantContent: DemoContent = {
  brand: {
    name: 'Atelier Meridian',
    city: 'Harbourfront, Toronto',
    logo: {
      src: '/brands/atelier-meridian-mark.svg',
      alt: 'Atelier Meridian logo mark',
    },
    favicon: '/brands/atelier-meridian-mark.svg',
    browserTitle: 'Atelier Meridian | Harbourfront Restaurant',
    metaDescription:
      'Seasonal coastal dining on the Toronto waterfront with warm evening service, private dining, and reservations available Tuesday to Sunday.',
    tagline: 'Waterside dining room for long dinners by Toronto harbour',
    phone: '+1 (416) 555-0182',
    phoneHref: 'tel:+14165550182',
    email: 'reservations@ateliermeridian.ca',
    emailHref: 'mailto:reservations@ateliermeridian.ca',
    address: '112 Harbour Lane, Toronto, ON M5V 2L6',
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
      eyebrow: 'Toronto Waterfront Dining',
      title: 'An evening by the water, shaped by the season.',
      description:
        'Atelier Meridian is a harbourfront dining room for unhurried dinners, ingredient-led cooking, and service paced for conversation rather than turnover.',
      primaryCta: 'Reserve a table',
      secondaryCta: 'See dinner menu',
      signals: [
        'First seating catches the western harbour light',
        'The Studio private room seats up to 12 guests',
        'Reservations open 30 days ahead',
      ],
      image: {
        src: pexelsPhoto('30323144', 1800, 1200),
        alt: 'Elegant evening dining room set for service',
        position: 'center 54%',
      },
    },
    highlights: [
      {
        title: 'Window tables and harbour light',
        description:
          'Early tables catch the last of the western light before the room settles into evening service.',
      },
      {
        title: 'The Studio for hosted dinners',
        description:
          'A separate 12-seat room for birthdays, client dinners, and quieter hosted tables.',
      },
      {
        title: 'Pairings poured table-side',
        description:
          'A short list of wines, aperitifs, and zero-proof pours shaped around the dinner menu.',
      },
    ],
    featuredDishes: [
      {
        name: 'Scallop Crudo',
        course: 'To begin',
        description:
          'Sliced day-boat scallops with citrus, herbs, and a clean saline finish.',
        image: {
          src: pexelsPhoto('262978', 1400, 1000),
          alt: 'First course plated in a warm restaurant dining room',
          position: 'center 68%',
        },
      },
      {
        name: 'Dry-Aged Duck Breast',
        course: 'Main',
        description:
          'Duck aged in-house and served with sour cherry jus and peak-season vegetables.',
        image: {
          src: pexelsPhoto('32083423', 1400, 1000),
          alt: 'Elegant plated main course in a warm fine dining setting',
          position: 'center 52%',
        },
      },
      {
        name: 'Chocolate Tarte',
        course: 'To finish',
        description:
          'Dark chocolate tart with espresso cream and a lightly salted praline crunch.',
        image: {
          src: pexelsPhoto('34712611', 1400, 1000),
          alt: 'Dark chocolate dessert plated for an evening restaurant service',
          position: 'center 58%',
        },
      },
    ],
    experience: {
      title: 'Service designed for an unhurried evening',
      description:
        'From your welcome pour to the final course, each table is paced for conversation and comfort.',
      points: [
        'Reservations confirmed by our host team ahead of service',
        'Menu guidance for allergies and dietary preferences',
        'Attentive pacing from first plate through dessert',
      ],
      images: [
        {
          src: pexelsPhoto('18272528', 1200, 1400),
          alt: 'Warm restaurant interior with softly lit tables in the evening',
          position: 'center 52%',
        },
        {
          src: pexelsPhoto('4871188', 1200, 900),
          alt: 'Wine being poured into glasses in a softly lit dining room',
          position: 'center 45%',
        },
      ],
    },
  },
  menu: {
    intro:
      'Our menu shifts with the week and the market, guided by seasonal harvests and fishery arrivals.',
    sections: [
      {
        title: 'Raw & First Plates',
        note: 'The opening round for the table, from shellfish and crudo to smaller warm plates.',
        image: {
          src: pexelsPhoto('22711496', 1200, 900),
          alt: 'Small plates set on a warmly lit restaurant table',
          position: 'center 62%',
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
        title: 'Mains From The Pass',
        note: 'Composed plates built around seafood, game, and produce at its best that week.',
        image: {
          src: pexelsPhoto('32083423', 1200, 900),
          alt: 'Main course plated in a refined restaurant dining room',
          position: 'center 52%',
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
        title: 'Dessert & Cheese',
        note: 'Desserts with depth, plus a short Ontario cheese service to close the table.',
        image: {
          src: pexelsPhoto('34712611', 1200, 900),
          alt: 'Dark chocolate dessert plated for an evening restaurant service',
          position: 'center 58%',
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
      'Atelier Meridian is a waterfront dining room built around seasonal cooking, warm service, and evenings that never feel rushed.',
    story: [
      'The menu is written in short seasonal cycles, with dishes moving as produce peaks, shellfish changes, and the kitchen finds a better version of a course.',
      'First seating is quieter and slower, while later tables carry more energy from the bar and the pass, but the room is always paced to leave space for conversation.',
      'Natural wood, low lamps, and softened acoustics keep the dining room warm even on colder waterfront nights.',
    ],
    values: [
      {
        title: 'Short seasonal menu',
        description:
          'We work with growers and fisheries we know, and we adjust the menu when quality tells us to.',
      },
      {
        title: 'Tables paced with care',
        description:
          'Every guest should feel looked after, whether it is a quick dinner for two or a long celebratory table.',
      },
      {
        title: 'Room details',
        description:
          'From glassware to pacing, we care about the small decisions that shape how the night feels.',
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
      'Reservations open 30 days ahead. For larger tables, hosted dinners, or a night in The Studio, contact the dining room directly.',
    policies: [
      'A valid card is required to hold dinner reservations.',
      'Cancellations made within 24 hours may be subject to a per-seat fee.',
      'Please notify us of allergies or dietary requests at least 48 hours before arrival.',
    ],
    channels: [
      {
        label: 'Book online',
        value: 'OpenTable booking',
        href: 'https://www.opentable.com/',
      },
      {
        label: 'Call reservations',
        value: '+1 (416) 555-0182',
        href: 'tel:+14165550182',
      },
      {
        label: 'Email reservations',
        value: 'reservations@ateliermeridian.ca',
        href: 'mailto:reservations@ateliermeridian.ca',
      },
    ],
  },
  gallery: {
    intro:
      'A look at the room, the plates, and the pace of service through the evening.',
    collections: [
      {
        title: 'Window Tables',
        subtitle: 'Early evening in the main room',
        description:
          'Warm light, generous table spacing, and a room set for long conversation.',
        image: {
          src: pexelsPhoto('6314543', 1200, 900),
          alt: 'Warm restaurant dining room with soft evening lighting',
          position: 'center 52%',
        },
      },
      {
        title: 'First Plates',
        subtitle: 'Opening rounds from the kitchen',
        description:
          'Seasonal ingredients plated with clean lines and a focus on flavour first.',
        image: {
          src: pexelsPhoto('33033789', 1200, 900),
          alt: 'Elegantly plated dish served in a fine dining restaurant',
          position: 'center 50%',
        },
      },
      {
        title: 'The Studio',
        subtitle: 'Private room dinners',
        description:
          'A separate room for birthdays, hosted dinners, and private evening gatherings.',
        image: {
          src: pexelsPhoto('28871005', 1200, 900),
          alt: 'Elegant restaurant table set with warm ambient lighting',
          position: 'center 48%',
        },
      },
      {
        title: 'Aperitif & Pairings',
        subtitle: 'Cocktail and wine service',
        description:
          'A concise bar program with signature cocktails, by-the-glass wines, and zero-proof options.',
        image: {
          src: pexelsPhoto('35233348', 1200, 900),
          alt: 'Wine glasses raised in a candlelit restaurant setting',
          position: 'center 46%',
        },
      },
      {
        title: 'At The Pass',
        subtitle: 'Open kitchen view',
        description:
          'A closer view of finishing work and pass service in the heart of the kitchen.',
        image: {
          src: pexelsPhoto('36430091', 1200, 900),
          alt: 'Chef plating a dish in a professional restaurant kitchen',
          position: 'center 48%',
        },
      },
      {
        title: 'Before First Seating',
        subtitle: 'Welcome at the door',
        description:
          'Hosts greet each table at arrival and confirm any notes before seating.',
        image: {
          src: pexelsPhoto('13085892', 1200, 900),
          alt: 'Warm restaurant interior with ambient lighting and polished table settings',
          position: 'center 46%',
        },
      },
      {
        title: 'Second Seating',
        subtitle: 'After-dark dining',
        description:
          'The room settles into a quieter mood as service moves into the late evening.',
        image: {
          src: pexelsPhoto('29819943', 1200, 900),
          alt: 'Warm pendant lighting over a softly lit restaurant interior',
          position: 'center 44%',
        },
      },
      {
        title: 'Line In Motion',
        subtitle: 'On the pass',
        description:
          'The kitchen team on the pass, timing each course for smooth table pacing.',
        image: {
          src: pexelsPhoto('36430089', 1200, 900),
          alt: 'Restaurant kitchen team working on the pass during service',
          position: 'center',
        },
      },
    ],
  },
  contact: {
    intro:
      'Reach the dining room directly for booking changes, hosted tables in The Studio, or accessibility details.',
    details: [
      {
        label: 'Call reservations',
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
        value: '112 Harbour Lane, Toronto, ON M5V 2L6',
        href: 'https://maps.google.com/?q=112+Harbour+Lane+Toronto+ON',
      },
    ],
    notes: [
      'Reservation modifications are best handled by phone for same-day service.',
      'For private dining inquiries, include preferred dates and expected guest count in your message.',
      'If you have dietary needs or accessibility requests, share them when you book so we can prepare in advance.',
    ],
  },
}
