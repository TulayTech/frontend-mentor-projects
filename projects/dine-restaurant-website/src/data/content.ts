export type EventKey = 'family' | 'special' | 'social'

export type EventExperience = {
  id: EventKey
  tabLabel: string
  heading: string
  description: string
  imageName: string
  imageAlt: string
}

export type MenuHighlight = {
  name: string
  description: string
  imageName: string
}

export const events: EventExperience[] = [
  {
    id: 'family',
    tabLabel: 'Family Gathering',
    heading: 'Family Gathering',
    description:
      'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    imageName: 'family-gathering',
    imageAlt: 'A family sharing food around a dining table',
  },
  {
    id: 'special',
    tabLabel: 'Special Events',
    heading: 'Special Events',
    description:
      'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    imageName: 'special-events',
    imageAlt: 'Friends celebrating together over dinner',
  },
  {
    id: 'social',
    tabLabel: 'Social Events',
    heading: 'Social Events',
    description:
      'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    imageName: 'social-events',
    imageAlt: 'A lively social dinner with friends',
  },
]

export const menuHighlights: MenuHighlight[] = [
  {
    name: 'Seared Salmon Fillet',
    description:
      'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    imageName: 'salmon',
  },
  {
    name: 'Rosemary Filet Mignon',
    description:
      'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    imageName: 'beef',
  },
  {
    name: 'Summer Fruit Chocolate Mousse',
    description:
      'Creamy mousse combined with summer fruits and dark chocolate shavings.',
    imageName: 'chocolate',
  },
]
