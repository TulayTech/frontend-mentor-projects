export type Course = {
  name: string
  description: string
  icon: string
}

export const courses: Course[] = [
  {
    name: 'Animation',
    description:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    icon: '/assets/icon-animation.svg',
  },
  {
    name: 'Design',
    description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    icon: '/assets/icon-design.svg',
  },
  {
    name: 'Photography',
    description:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    icon: '/assets/icon-photography.svg',
  },
  {
    name: 'Crypto',
    description:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    icon: '/assets/icon-crypto.svg',
  },
  {
    name: 'Business',
    description:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    icon: '/assets/icon-business.svg',
  },
]
