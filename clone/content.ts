export const content = {
  brand: {
    name: 'DIN',
    tagline: 'Precision Beyond Measure.',
    announcement: {
      text: 'Explore precision computing in every update',
      href: '/updates'
    }
  },

  nav: {
    items: [
      {
        number: '01',
        label: 'Wearable',
        type: 'dropdown' as const,
        key: 'wearable',
        children: [
          { label: 'D¹ Sight', href: '/products/a1-sense' },
          { label: 'D¹ Form', href: '/products/b1-eye' }
        ]
      },
      {
        number: '02',
        label: 'Neural',
        type: 'dropdown' as const,
        key: 'neural',
        children: [{ label: 'D¹ Core', href: '/neurals/a1-neuro' }]
      },
      { number: '03', label: 'Programs', type: 'link' as const, key: null, href: '/programs', children: [] },
      { number: '04', label: 'Updates', type: 'link' as const, key: null, href: '/updates', children: [] },
      { number: '05', label: 'Search', type: 'search' as const, key: null, href: null, children: [] }
    ]
  },

  hero: {
    headline: 'Precision Beyond Measure.',
    pills: [
      { label: 'D¹ Sight', href: '/products/a1-sense' },
      { label: 'D¹ Form', href: '/products/b1-eye' },
      { label: 'D¹ Core', href: '/neurals/a1-neuro' }
    ]
  },

  breakthrough: {
    labelTop: 'Overview',
    labelBottom: 'Precision',
    copy: 'DIN is the first to engineer sense-driven, precision computing for the human scale —',
    rotatingLines: ['enhancing everyday life.', 'advancing human potential.', 'redefining what is possible.'],
    linkLabel: 'Research Insight',
    linkHref: '/updates'
  },

  company: {
    titleLine1: 'At DIN /',
    titleLine2: 'We refine what matters',
    items: [
      { number: '0.1', label: 'Our Mission', statement: 'Precision tools for augmented humans' },
      { number: '0.2', label: 'Our Vision', statement: 'Lead the future of Invisible Interfaces' },
      { number: '0.3', label: 'Our Ambition', statement: 'Distill complexity to its pure form' }
    ],
    cells: [
      { label: 'Industries', value: 'Health, Compute, Wearables' },
      { label: 'Core Business', value: 'Edge AI Devices' },
      { label: 'Domain', value: 'Human-Computer Symbiosis' }
    ],
    abbreviations: [
      { label: '[Pha¹]', desc: 'Physiological Augmentation' },
      { label: '[HCI²]', desc: 'Human-Computer Interface' },
      { label: '[EAI³]', desc: 'Edge Artificial Intelligence' }
    ]
  },

  approach: {
    sectionLabel: 'Meet Our',
    headline: 'Refined Approach',
    copy: 'In active R&D. DIN devices sit at the intersection of sensing, computing, and form — tools that disappear into daily life.',
    subCopy: 'Enhance the way you perceive.',
    pills: [
      { label: 'D¹ Sight', href: '/products/a1-sense', filled: true },
      { label: 'D¹ Form', href: '/products/b1-eye', filled: false }
    ]
  },

  about: {
    progress: {
      label: 'Our Progress',
      subtitle: 'The new Method',
      linkLabel: 'Go to Updates',
      linkHref: '/updates',
      heading: 'Where precision shapes tomorrow',
      paragraphs: [
        'The next frontier of personal technology is not louder or brighter — it is quieter, sharper, and closer. DIN devices are built to sense at the edge of human perception.',
        'We are developing a new class of instruments that work in concert with the human body, augmenting capabilities without altering identity.'
      ],
      subCopy: '* Committed to advancing Wearable & Neural Interface Technologies.'
    },
    aim: {
      label: 'Our Aim',
      subtitle: 'A Measured Impact',
      linkLabel: 'Go to Programs',
      linkHref: '/programs',
      heading: 'The future lies in our hands',
      paragraphs: [
        'DIN is designed from first principles — where every gram, every milliwatt, and every interaction is considered. We believe the best technology disappears.',
        'A pro-human approach means building devices that fit the life you already live, not demanding you adapt to them.'
      ],
      subCopy: '* Envisioning the future with a Pro-Human design philosophy.'
    }
  },

  evidence: {
    number: '1.0',
    title: 'Scientific Evidence',
    copy: 'Precision wearables and neural insights — science-driven, human-tested.',
    linkLabel: 'Learn How',
    linkHref: '/updates'
  },

  textBlocks: [
    {
      number: '2.0',
      title: 'Driven by People',
      copy: 'We believe technology is only as powerful as the people behind it. Every DIN device is shaped by thousands of hours of human observation and direct user partnership.',
      linkLabel: 'Power Unified',
      linkHref: '/updates#careers'
    },
    {
      number: '3.0',
      title: 'Get in Touch',
      copy: 'Questions, ideas, or just a hello — we want to hear from the people who care about where computing is headed.',
      linkLabel: 'Say Hello',
      linkHref: '/updates#about'
    }
  ],

  footer: {
    pagesLabel: '1.0 Pages',
    pages: [
      { label: 'D¹ Sight', href: '/products/a1-sense' },
      { label: 'D¹ Form', href: '/products/b1-eye' },
      { label: 'D¹ Core', href: '/neurals/a1-neuro' },
      { label: 'Programs', href: '/programs' },
      { label: 'Updates', href: '/updates' }
    ],
    followLabel: '2.0 Follow',
    social: [
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Cookie Policy', href: '#' }
    ],
    location: 'Switzerland'
  }
}
