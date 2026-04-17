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
      { number: '01', label: 'THEMIS', type: 'link' as const, key: null, href: '#themis', children: [] },
      { number: '02', label: 'שירותים', type: 'link' as const, key: null, href: '#services', children: [] },
      { number: '03', label: 'עלינו', type: 'link' as const, key: null, href: '#about', children: [] },
      { number: '04', label: 'דרושים', type: 'link' as const, key: null, href: '#careers', children: [] },
      { number: '05', label: 'צור קשר', type: 'link' as const, key: null, href: '#careers', children: [] }
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
    sectionHeader: 'שירותי הדברה',
    labelTop: 'Overview',
    labelBottom: 'Precision',
    copy: 'חברת "טל שולמרק בע"מ" הינה החברה המובילה בישראל בתחום הדברת מזיקים וטיפול במטרדי בעלי כנף.<br>החברה מציעה מגוון רחב של פתרונות יצירתיים וחוקיים לשוק התעשייתי, המוסדי והפרטי. עבודות ההדברה<br>מתבצעות במקצועיות, אפקטיביות וברמת האיכות הגבוהה ביותר ועפ״י כל הנהלים והדרישות בהתאם לתקן<br>ניהול האיכות <span class="text-blue">9001:2008</span> <span class="text-blue">O.S.I</span> ותקן ניהול סביבתי <span class="text-blue">14001:2004</span> <span class="text-blue">O.S.I.</span> מדבירי החברה מורשים מטעם<br>המשרד לאיכות הסביבה, בעלי רישיונות והיתרים מקצועיים ומצויידים בידע וניסיון רב שנים לאיתור וניטור<br>הדברת מזיקים.',
    rotatingLines: ['enhancing everyday life.', 'advancing human potential.', 'redefining what is possible.'],
    linkLabel: 'Research Insight',
    linkHref: '/updates'
  },

  company: {
    titleLine1: 'At DIN /',
    titleLine2: 'We refine what matters',
    steps: [
      { number: '0.1', title: 'בדיקת האתר', description: 'הצוות יגיע לצורך בדיקה מקיפה של האתר' },
      { number: '0.2', title: 'הקמת מערך הדברה', description: 'בהתאם להערכת המצב יוקם מערך הדברה מותאם אישית ללקוח' },
      { number: '0.3', title: 'ביצוע', description: 'הצוות יגיע לצורך ביצוע העבודה' },
      { number: '0.4', title: 'דוח סיכום עבודה', description: 'לאחר סיום העבודה יופק דוח סיכום עבודה ממוחשב של כלל פעולות ההדברה שבוצעו באתר הלקוח' }
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
    heading: 'קצת עלינו',
    title: 'קצת עלינו – TAL',
    description: 'חברת TAL מעניקה פתרונות הדברה מתקדמים ומקצועיים עם דגש על שקיפות מלאה ושקט נפשי ללקוח. אנו מתמחים בהדברת כל סוגי המזיקים (מכרסמים, זוחלים ומעופפים) תוך שימוש בטכנולוגיות החדישות ביותר.',
    whyTitle: 'למה לבחור בנו?',
    features: [
      {
        title: 'מומחיות מוסדית',
        text: 'ניסיון עשיר בעבודה מול מפעלי מזון, בתי חולים ומוסדות הדורשים עמידה בתקנים מחמירים כמו HACCP, GMP ו-FDA.'
      },
      {
        title: 'שקיפות בזמן אמת',
        text: 'אנו מפעילים את מערכת Themis, המעניקה לכם שליטה מלאה ודו"ח דיגיטלי מפורט (כולל תמונות ווידאו) לאחר כל ביקור.'
      },
      {
        title: 'פתרונות מיוחדים',
        text: 'התמחות ייחודית בטיפול במטרדי בעלי כנף ובתיקן הגרמני בסטנדרטים הגבוהים ביותר.'
      }
    ],
    tagline: 'אצלנו, המקצועיות היא השקט שלכם.'
  },

  evidence: {
    number: '1.0',
    title: 'Scientific Evidence',
    copy: 'Precision wearables and neural insights — science-driven, human-tested.',
    linkLabel: 'Learn How',
    linkHref: '/updates'
  },

  testimonials: {
    sectionLabel: 'Testimonials',
    heading: 'המלצות מלקוחותינו',
    items: [
      { name: 'יוסי כהן', stars: 5, text: 'שירות מקצועי ואמין. הצוות הגיע בזמן, עבד ביסודיות והתוצאות היו מעולות. ממליץ בחום!', date: 'לפני שבוע' },
      { name: 'מיכל לוי', stars: 5, text: 'חברה מסודרת ומקצועית. קיבלנו דו״ח מפורט לאחר כל ביקור. שקיפות מלאה ושירות ברמה גבוהה.', date: 'לפני שבועיים' },
      { name: 'אבי ישראלי', stars: 5, text: 'עובדים עם טל שולמרק כבר שנתיים. מערכת Themis מאפשרת לנו לעקוב אחרי כל פעולה בזמן אמת.', date: 'לפני חודש' },
      { name: 'רונית שמש', stars: 5, text: 'הדברה יסודית ומקצועית. הצוות אדיב, מסביר את התהליך ועונה על כל שאלה. תודה רבה!', date: 'לפני חודש' },
      { name: 'דוד אברהם', stars: 5, text: 'אחרי שניסינו כמה חברות, הגענו לטל שולמרק וההבדל ניכר. עבודה מקצועית ותוצאות מצוינות.', date: 'לפני חודשיים' },
      { name: 'שרה גולדברג', stars: 5, text: 'מערכת הניטור הממוחשבת שלהם פשוט מדהימה. יודעים בדיוק מה נעשה ומתי. שירות יוצא דופן.', date: 'לפני חודשיים' },
      { name: 'עמית פרץ', stars: 5, text: 'חברה רצינית עם גישה מקצועית. הכנו מבדקי HACCP בעזרתם ועברנו בהצלחה. ממליצים!', date: 'לפני 3 חודשים' },
      { name: 'נועה ברק', stars: 5, text: 'שירות הדברה מהשורה הראשונה. מגיעים בזמן, עובדים נקי ומסודר, והתוצאות מדברות בעד עצמן.', date: 'לפני 3 חודשים' },
      { name: 'משה דהן', stars: 5, text: 'הפתרון המושלם לעסק שלנו. מקצועיות, אמינות ומערכת בקרה שנותנת שקט נפשי מלא.', date: 'לפני 4 חודשים' },
      { name: 'לילך עוז', stars: 5, text: 'טיפול במטרדי יונים שעבד מצוין. לאחר חודשים של סבל, סוף סוף יש שקט. תודה לצוות!', date: 'לפני 4 חודשים' },
      { name: 'איתן רוזן', stars: 5, text: 'חברה שאפשר לסמוך עליה. דו״חות דיגיטליים מפורטים אחרי כל ביקור. שירות ברמה הגבוהה ביותר.', date: 'לפני 5 חודשים' },
      { name: 'תמר הלל', stars: 5, text: 'עובדים איתם כבר שלוש שנים ולא מתכוונים להחליף. מקצוענים אמיתיים בתחום ההדברה.', date: 'לפני 6 חודשים' }
    ]
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
      { label: 'תנאי שימוש', href: '#' },
      { label: 'פרטיות', href: '#' },
      { label: 'נגישות', href: '#' }
    ]
  }
}
