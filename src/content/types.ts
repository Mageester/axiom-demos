export interface FeatureCardContent {
  title: string
  description: string
}

export interface HeroContent {
  eyebrow?: string
  title: string
  description: string
  primaryCta: string
  secondaryCta?: string
}

export interface MenuItemContent {
  name: string
  description: string
  price: string
}

export interface MenuSectionContent {
  title: string
  note: string
  items: MenuItemContent[]
}

export interface ContactChannelContent {
  label: string
  value: string
  href: string
}

export interface TeamMemberContent {
  name: string
  role: string
  bio: string
}

export interface GalleryItemContent {
  title: string
  subtitle: string
  description: string
}

export interface ContactDetailContent {
  label: string
  value: string
  href?: string
}

export interface DemoContent {
  brand: {
    name: string
    city: string
    tagline: string
    phone: string
    phoneHref: string
    email: string
    emailHref: string
    address: string
    hours: string[]
    legalLine: string
  }
  home: {
    hero: HeroContent
    highlights: FeatureCardContent[]
    experience: {
      title: string
      description: string
      points: string[]
    }
  }
  menu: {
    intro: string
    sections: MenuSectionContent[]
  }
  about: {
    intro: string
    story: string[]
    values: FeatureCardContent[]
    team: TeamMemberContent[]
  }
  reservations: {
    intro: string
    policies: string[]
    channels: ContactChannelContent[]
  }
  gallery: {
    intro: string
    collections: GalleryItemContent[]
  }
  contact: {
    intro: string
    details: ContactDetailContent[]
    notes: string[]
  }
}
