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
      { number: '05', label: 'צור קשר', type: 'link' as const, key: null, href: '#careers', children: [] },
      { number: '06', label: 'יונים / בעלי כנף', type: 'link' as const, key: null, href: '/birds', children: [] }
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
    paragraphs: [
      'חברת "טל שולמרק בע"מ" הינה החברה המובילה בישראל בתחום הדברת מזיקים וטיפול במטרדי בעלי כנף מסוגים שונים ובהתאמה לרשויות החוק בישראל. החברה מעניקה מענה מקצועי בפריסה ארצית רחבה ובעלת ידע נרחב בתחומים.',
      'החברה מציעה מגוון רחב של פתרונות יצירתיים וחוקיים לשוק התעשייתי, המוסדי והפרטי. עבודות ההדברה מתבצעות במקצועיות, אפקטיביות וברמת בטיחות ואיכות גבוהה ביותר, עפ״י כל הנהלים והדרישות בהתאם לתקן ניהול האיכות <span class="text-blue">ISO 9001:2015</span> ותקן ניהול סביבתי <span class="text-blue">ISO 14001:2015</span>.',
      'מדבירי החברה מורשים מטעם המשרד להגנת הסביבה, בעלי רישיונות והיתרים מקצועיים, ומצוידים בידע וניסיון רב שנים לאיתור, ניטור והדברת מזיקים בכל רחבי הארץ.'
    ],
    rotatingLines: ['enhancing everyday life.', 'advancing human potential.', 'redefining what is possible.'],
    linkLabel: 'Research Insight',
    linkHref: '/updates'
  },

  company: {
    titleLine1: 'At DIN /',
    titleLine2: 'We refine what matters',
    processHeader: 'כיצד השירות מתבצע',
    steps: [
      {
        number: '01',
        title: 'ייעוץ ראשוני ואבחון הבעיה',
        description: 'הכל מתחיל בהקשבה. אנו מנתחים את סוג המטרד דרך הטלפון או באמצעים דיגיטליים כדי להבין את חומרת המצב ולתת מענה ראשוני מהיר.'
      },
      {
        number: '02',
        title: 'הגעה לשטח, ניטור ואיתור',
        description: 'המומחים שלנו מגיעים לאתר לביצוע סריקה יסודית. אנו מאתרים את מקור הבעיה (קינים, פתחי כניסה, מוקדי דגירה) כדי לוודא שהטיפול יהיה שורשי ולא רק שטחי.'
      },
      {
        number: '03',
        title: 'התאמת פתרון ואישור תוכנית עבודה',
        description: 'לכל לקוח ולכל מטרד יש פתרון ייחודי. אנו מציגים ללקוח את שיטת הטיפול הנבחרת (הדברה ייעודית ומותאמת, הרחקת בעלי כנף, פתרונות טכנולוגיים) בהתאם לרשויות החוק ולתקנים הנדרשים.'
      },
      {
        number: '04',
        title: 'ביצוע מקצועי ובטוח',
        description: 'שלב היישום. המדבירים המורשים שלנו מבצעים את העבודה תוך שימוש בציוד מתקדם ובחומרים המאושרים על ידי המשרד להגנת הסביבה, תוך שמירה מקסימלית על בטיחות האנשים והסביבה.'
      },
      {
        number: '05',
        title: 'סיכום פעילות',
        description: 'אנחנו לא נעלמים. בסיום העבודה אנו מוודאים את אפקטיביות הטיפול, מספקים דוח עבודה ממוחשב ומפורט על ידי מערכת הבקרה הייחודית לנו.'
      }
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
    sectionLabel: 'הכירו את',
    headline: 'Themis: המהפכה הדיגיטלית בשקיפות ובבקרת איכות',
    intro: 'בעולם שבו איכות השירות והעמידה בתקנים הם קריטיים, חברת "טל שולמרק בע"מ" מעמידה לרשות לקוחותיה את מערכת <span class="themis-brand">Themis</span> – המערכת המתקדמת ביותר לניהול, ניטור ובקרה בזמן אמת. המערכת הופכת כל ביקור של מדביר לתהליך שקוף, מתועד ומדויק, המעניק ללקוח ביטחון מלא ושקט נפשי.',
    pillarsTitle: 'מה הופך את מערכת Themis לסטנדרט החדש בשוק?',
    pillars: [
      {
        number: '01',
        title: 'שקיפות מלאה בזמן אמת',
        body: 'המערכת מאפשרת לכם לדעת בדיוק מה קורה באתר שלכם, ברגע שזה קורה. אין יותר "סימני שאלה" – כל פעולה של המדביר נרשמת ומדווחת מיד, כולל מיקום (GPS), שעות כניסה ויציאה, וזהות המבצע.'
      },
      {
        number: '02',
        title: 'תיעוד מולטימדיה מקיף',
        body: 'אנחנו מאמינים ש"תמונה אחת שווה אלף מילים", וסרטון שווה אפילו יותר. הדוחות המופקים דרך <span class="themis-brand">Themis</span> כוללים:',
        bullets: [
          'תיאור מפורט של הפעולות שבוצעו וחומרים שנעשה בהם שימוש.',
          'הוכחות מהשטח – צילומי סטילס וסרטוני וידאו של מוקדי המטרד והטיפול.',
          'חתימה דיגיטלית של המבצע והלקוח בסיום כל משימה.'
        ]
      },
      {
        number: '03',
        title: 'עמידה בתקני איכות מחמירים',
        body: 'כחברה הפועלת תחת תקני ISO 9001 ו-ISO 14001, מערכת <span class="themis-brand">Themis</span> היא הכלי המרכזי להבטחת האיכות – הפקת דוחות היסטוריים לביקורת, מעקב אחר מגמות מזיקים, ווידוא שכל עבודה מתבצעת לפי הפרוטוקולים המחמירים ביותר.'
      },
      {
        number: '04',
        title: 'התאמה אישית',
        body: '<span class="themis-brand">Themis</span> היא מערכת גמישה ודינמית. אנו מתאימים את מבנה הדוחות והדגשים לצרכים הספציפיים שלכם – מפעל תעשייתי, מוסד ציבורי או לקוח פרטי.'
      }
    ],
    valueTitle: 'הערך המוסף עבורכם',
    values: [
      { title: 'ניהול חכם', body: 'כל המידע וההיסטוריה של ההדברות באתר במקום אחד נגיש.' },
      { title: 'ביטחון ובטיחות', body: 'ידיעה ודאית שהעבודה בוצעה לפי הנהלים, ללא קיצורי דרך.' },
      { title: 'חיסכון בזמן', body: 'דוחות אוטומטיים שנשלחים ישירות למייל, ללא ניירת מיותרת.' }
    ],
    closing: 'השילוב בין הניסיון המקצועי של המדבירים שלנו לבין הטכנולוגיה של <span class="themis-brand">Themis</span> מבטיח לכם את המענה המקצועי, האמין והמתקדם ביותר בישראל.',
    pills: [
      { label: 'D¹ Sight', href: '/products/a1-sense', filled: true },
      { label: 'D¹ Form', href: '/products/b1-eye', filled: false }
    ]
  },

  about: {
    heading: 'קצת עלינו',
    title: 'הסיפור שמאחורי המותג: כשהתשוקה לטבע הופכת לשליחות',
    intro: 'עבור רוב האנשים, מפגש עם מזיק או מטרד של בעלי כנף הוא רגע של רתיעה. עבור טל שולמרק, זה היה תמיד רגע של סקרנות.',
    lead: 'הסיפור של חברת "טל שולמרק בע"מ" לא התחיל במשרדים מפוארים או בתוכניות עסקיות, אלא הרבה שנים קודם לכן – בילד שהוקסם מעולם החרקים, מהתנהגות בעלי החיים ומהאיזון העדין של הטבע. אותה תשוקה ילדותית לא נעלמה עם השנים; היא הפכה למנוע הצמיחה של חברה שחורטת על דגלה מקצוענות ללא פשרות.',
    sections: [
      {
        title: 'מהילד עם זכוכית הרוגטקה – לחברה המובילה בישראל',
        paragraphs: [
          'הקמתי את "טל שולמרק בע"מ" מתוך חזון אחד ברור: להביא את עולם ההדברה וניהול המטרדים לרמה של אומנות ומדע. לא עוד פתרונות זמניים, אלא הבנה עמוקה של שורש הבעיה, תוך כבוד לסביבה וציות מדויק לחוקי המדינה.',
          'מה שהתחיל כעסק שנבנה בשתי ידיים מתוך אהבה אמיתית לתחום, צמח והפך לאחת החברות המובילות בישראל. היום, כשאנו מעניקים מענה בפריסה ארצית רחבה לשוק התעשייתי, המוסדי והפרטי, הלב של החברה נשאר אותו לב: הירידה לפרטים הקטנים ביותר והמחויבות האישית לכל לקוח.'
        ]
      },
      {
        title: 'המחויבות שלנו אליכם',
        paragraphs: [
          'ב"טל שולמרק בע"מ", אנחנו לא רק מרחיקים מזיקים – אנחנו מחזירים לכם את תחושת הביטחון במרחב האישי והעסקי שלכם. הניסיון שצברנו לאורך השנים, יחד עם הציוד המתקדם וההון האנושי המעולה שלנו, מאפשרים לנו להגיד בביטחון: אנחנו כאן כדי לפתור לכם את הבעיה, מהשורש.'
        ]
      }
    ],
    closing: 'כי עבורנו, כל לקוח הוא חלק מהסיפור שלנו.'
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
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'Instagram', href: 'https://www.instagram.com/shulmark.pestcontrol', icon: 'instagram' }
    ],
    legal: [
      { label: 'תנאי שימוש', href: '/terms' },
      { label: 'פרטיות', href: '/privacy' },
      { label: 'נגישות', href: '/accessibility' }
    ]
  },

  birds: {
    navLabel: 'יונים / בעלי כנף',
    title: 'אנחנו הקו האחרון לתת מענה לבעיית היונים בהתאמה ייעודית ונכונה',
    sections: [
      {
        number: '01',
        title: 'מערכות לכידה ייחודיות בפיתוח בלעדי',
        body: 'השילוב בין הבנת התנהגות בעלי הכנף לבין הנדסה מתקדמת הוביל אותנו לפיתוח מערך מלכודות ייחודי ובלעדי לחברה. המלכודות שלנו מתוכננות ליעילות מקסימלית, בקיצור זמני העבודה והשגת תוצאות מוכחות גם באתרים מאתגרים: מפעלים, מוסדות, מחסנים לוגיסטיים, שטחים פתוחים ועוד רבים. תפקיד המערכות הוא ליצור מצב של טורף נטרף.'
      },
      {
        number: '02',
        title: 'ירי כירורגי וממוקד ל-100% פגיעה',
        body: 'במקרים בהם פתרונות ההרחקה הרגילים אינם נותנים מענה מלא, אנו מחזיקים במומחיות ייחודית לביצוע ירי מדויק וכירורגי אשר מבוסס על ניסיון של 3 דורות בתחום הציד המקצועי לדילול מטרדים. הפעילות מתבצעת על ידי עובדים שעברו התאמות לביצוע, תחת רישיונות מתאימים ובכפוף לכל נהלי הבטיחות והוראות החוק המחמירות ביותר.'
      }
    ],
    ownersWord: {
      label: 'דבר הבעלים והמנכ"ל',
      quote: 'אנחנו מבטחים ומקיימים'
    }
  }
}
