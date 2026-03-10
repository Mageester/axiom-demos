import type { DemoContent } from './types'

function pexelsPhoto(id: string, width = 1600, height = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`
}

export const restaurantContent: DemoContent = {
  brand: {
    name: 'Atelier Meridian',
    city: 'Toronto',
    logo: {
      src: '/brands/atelier-meridian-mark.svg',
      alt: 'Atelier Meridian logo mark',
    },
    tagline: 'Seasonal coastal dining by Toronto harbour',
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
      eyebrow: 'Toronto Waterfront Dining',
      title: 'An evening by the water, shaped by the season.',
      description:
        'Atelier Meridian is a dining room for unhurried dinners, thoughtful service, and ingredient-led cooking from Ontario farms and Atlantic waters.',
      primaryCta: 'Reserve a table',
      secondaryCta: 'Explore menu',
      signals: [
        'Dinner service Tuesday to Sunday',
        'Private dining room for up to 12 guests',
        'Dietary requests welcomed with advance notice',
      ],
      image: {
        src: pexelsPhoto('260922', 1800, 1200),
        alt: 'Warmly lit premium dining room prepared for evening service',
        position: 'center 42%',
      },
    },
    highlights: [
      {
        title: 'Kitchen-led tasting flow',
        description:
          'Small and full plates arrive in a considered rhythm so the table never feels rushed.',
      },
      {
        title: 'Wine and zero-proof pairings',
        description:
          'A focused list of low-intervention wines and house zero-proof pairings by course.',
      },
      {
        title: 'Private room occasions',
        description:
          'A 12-seat room for birthdays, business dinners, and hosted celebrations.',
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
        title: 'First Plates',
        note: 'Smaller dishes for the opening rounds at the table.',
        image: {
          src: pexelsPhoto('3645126', 1200, 900),
          alt: 'Seared scallops plated for a first course',
          position: 'center 56%',
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
        note: 'Composed mains built around seafood, game, and peak produce.',
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
        title: 'Dessert',
        note: 'Desserts with depth, texture, and a restrained finish.',
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
      'Atelier Meridian is a waterfront dining room built around seasonal cooking and warm, attentive hospitality.',
    story: [
      'Our menu is written in short seasonal cycles, with dishes changing as produce and seafood quality shifts through the month.',
      'The floor team is trained to read the table, pace service naturally, and keep the evening comfortable without interruption.',
      'Natural wood, soft acoustics, and low evening light were chosen to keep conversation easy from first course to last glass.',
    ],
    values: [
      {
        title: 'Seasonal sourcing',
        description:
          'We work with growers and fisheries we know, and we adjust the menu when quality tells us to.',
      },
      {
        title: 'Warm, attentive service',
        description:
          'Every guest should feel looked after, whether it is a quick dinner for two or a long celebratory table.',
      },
      {
        title: 'Details that matter',
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
      'Reservations open 30 days ahead. For groups of nine or more, please contact our reservations team directly.',
    policies: [
      'A valid card is required to hold dinner reservations.',
      'Cancellations made within 24 hours may be subject to a per-seat fee.',
      'Please notify us of allergies or dietary requests at least 48 hours before arrival.',
    ],
    channels: [
      {
        label: 'Book online',
        value: 'OpenTable reservations',
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
        title: 'Main Dining Room',
        subtitle: 'Evening in the main room',
        description:
          'Warm light, generous table spacing, and a room set for long conversation.',
        image: {
          src: pexelsPhoto('18272528', 1200, 900),
          alt: 'Warmly lit restaurant interior viewed at night through the front window',
          position: 'center 52%',
        },
      },
      {
        title: 'Seasonal Plating',
        subtitle: 'Plating from the kitchen',
        description:
          'Seasonal ingredients plated with clean lines and a focus on flavour first.',
        image: {
          src: pexelsPhoto('33033789', 1200, 900),
          alt: 'Elegantly plated dish served in a fine dining restaurant',
          position: 'center 50%',
        },
      },
      {
        title: 'Private Dining Studio',
        subtitle: 'Hosted dinners',
        description:
          'A separate room for birthdays, hosted dinners, and private evening gatherings.',
        image: {
          src: pexelsPhoto('28871005', 1200, 900),
          alt: 'Elegant restaurant table set with warm ambient lighting',
          position: 'center 48%',
        },
      },
      {
        title: 'Bar & Pairings',
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
        title: 'Chef Counter',
        subtitle: 'Open kitchen view',
        description:
          'A closer view of finishing work and pass service in the heart of the kitchen.',
        image: {
          src: pexelsPhoto('628776', 1200, 900),
          alt: 'Chef plating in an open kitchen counter setting',
          position: 'center 45%',
        },
      },
      {
        title: 'Arrival Experience',
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
        title: 'Late Evening Mood',
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
        title: 'Kitchen Team Flow',
        subtitle: 'On the pass',
        description:
          'The kitchen team on the pass, timing each course for smooth table pacing.',
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
      'Contact our reservations team for booking changes, private dining inquiries, or accessibility details.',
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
        value: '112 Harbor Lane, Toronto, ON M5V 2L6',
        href: 'https://maps.google.com/?q=112+Harbor+Lane+Toronto+ON',
      },
    ],
    notes: [
      'Reservation modifications are best handled by phone for same-day service.',
      'For private dining inquiries, include preferred dates and expected guest count in your message.',
      'If you have dietary needs or accessibility requests, share them when you book so we can prepare in advance.',
    ],
  },
}
