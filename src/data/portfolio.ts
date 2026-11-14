// Portfolio Data - Update this file to customize all content
// ============================================================

export const personalInfo = {
  name: "Faizan Ahmed Khan",
  title: "Mobile App Developer",
  tagline: "Building scalable, production-ready mobile applications",
  email: "faizanhmd3@gmail.com",
  phone: "+923312602736",
  location: "Karachi, Pakistan",
  linkedin: "https://linkedin.com/in/phayzee",
  github: "https://github.com/phayzeee",
  resume: "/FaizanKhan_MobileDev.pdf", // Place your resume in the public folder

  // Hero section summary
  heroSummary: "4+ years shipping production mobile apps — native Android with Kotlin and Jetpack Compose, and cross-platform with Flutter. From banking and POS platforms serving 100K+ daily active users to regulated eKYC onboarding and consumer apps, I build reliable, polished mobile experiences end to end.",

  // About section - keep it concise
  about: {
    intro: "I'm a Mobile App Developer specializing in production-grade applications across native Android and Flutter. My focus is on modern architecture patterns, maintainable code, and mobile experiences that feel great on every device.",

    paragraphs: [
      "Over the past four years, I've built and shipped mobile applications across consumer and enterprise products — e-commerce, marketplace, social, real-time tracking, logistics, health monitoring, banking and POS, and most recently regulated eKYC onboarding for Pakistan's capital market. I approach each project with a focus on architectural integrity, ensuring apps remain maintainable as they grow.",

      "Much of that work has been inside UAE-headquartered technology groups — Branex AE in Dubai, then the OMA Emirates Group in Sharjah — including right-to-left and multi-language UI for Gulf markets, and banking apps serving 100K+ daily active users at a sustained sub-1% crash rate.",

      "On the native side, I work Kotlin-first with Jetpack Compose, Hilt and clean, modular architecture. On the cross-platform side, I've delivered Flutter apps to both the Play Store and App Store using BLoC and a structured, testable approach — the right tool for the right product."
    ],

    highlights: [
      "Native Android (Kotlin, Jetpack Compose, Coroutines & Flow, Hilt)",
      "Flutter & Dart (BLoC, shipped to Play Store and App Store)",
      "Modern mobile architecture (MVVM, Clean Architecture, MVI)",
      "RTL and multi-language UI for Gulf markets",
      "Performance profiling and Crashlytics-driven stability",
      "Modular, maintainable mobile codebases"
    ]
  },

  education: [
    {
      degree: "BSc Computer Science",
      school: "Bahria University, Karachi",
      period: "2018 – 2022"
    }
  ],

  certifications: [
    {
      name: "Advanced Android Bootcamp",
      detail: "Jetpack, architecture and modern Android development",
      year: "2023"
    }
  ]
};

// Projects - Order: Android projects first, Flutter projects last
export const projects = [
  {
  id: "stockspk",
  name: "StocksPK",
  platform: "android",
  featured: false,
  shortDescription: "Digital brokerage account-opening and KYC app built for CDC Pakistan",

  // Problem → Approach → Outcome
  description: {
    problem: "Opening a brokerage account in Pakistan's capital market meant paperwork and repeating identity checks with each broker. Investors needed one digital profile, verified once, that could open accounts with any broker.",

    approach: "Built the app in Kotlin and Jetpack Compose with feature-based modularisation and a unidirectional MVI state flow: an immutable UiState per screen, typed actions, and a one-shot event channel for navigation and errors, with Hilt for dependency injection. Delivered a 30-step regulated onboarding journey covering CNIC document scanning with ML Kit, liveness capture, FATCA and Zakat declarations, and resumable drafts persisted via DataStore.",

    outcome: "Live on Google Play as a paperless path from signup through identity verification to a live trading account. A shared library of reusable form components reduced build time for each new onboarding step."
  },

  techStack: [
    "Kotlin",
    "Jetpack Compose",
    "MVI",
    "Hilt",
    "ML Kit",
    "DataStore",
    "Clean Architecture",
    "Multi-module"
  ],

  screenshots: [
    "/images/projects/stockspk-logo.png",
    "/images/projects/stockspk-1.jpg",
    "/images/projects/stockspk-2.jpg",
    "/images/projects/stockspk-3.jpg",
    "/images/projects/stockspk-4.jpg",
    "/images/projects/stockspk-5.jpg"
  ],

  links: {
    github: null, // Private client repository
    playStore: "https://play.google.com/store/apps/details?id=com.cdc.asaanconnect"
  },

  highlights: [
    "30-step regulated eKYC onboarding journey",
    "CNIC scanning with ML Kit and liveness capture",
    "Jetpack Compose with unidirectional MVI",
    "Resumable drafts persisted via DataStore"
  ]
},
  {
  id: "hbl-pos",
  name: "Habib Bank Limited POS",
  platform: "android",
  featured: false,
  shortDescription: "Large-scale Android POS application used by merchants nationwide",

  // Problem → Approach → Outcome
  description: {
    problem: "The application required continuous enhancement and stabilization to support real-world merchant workflows, high transaction volume, and evolving business requirements across multiple merchant profiles.",
    
    approach: "Worked on modular Android features using Clean Architecture and MVVM. Focused on improving stability, fixing production issues, optimizing critical flows, and implementing feature-level enhancements in collaboration with backend, QA, and product teams.",
    
    outcome: "Improved overall app stability, reduced production issues, and ensured reliable performance under real transactional load. Contributed to smooth feature rollouts and consistent releases for merchant-facing applications."
  },

  techStack: [
    "Java & Kotlin",
    "XML",
    "Work Manager",
    "Room",
    "Retrofit",
    "Clean Architecture",
    "Multi-module"
  ],

  screenshots: [
    "/images/projects/hbl-1.png",
    "/images/projects/hbl-2.png",
    "/images/projects/hbl-3.png",
    "/images/projects/hbl-4.png",
    "/images/projects/hbl-5.png"
  ],

  links: {
    github: null, // Private enterprise repository
    playStore: null // Enterprise / merchant distribution
  },

  highlights: [
    "Production Android app used by bank merchants",
    "Multi-Modular architecture with feature isolation",
    "Stability-focused development and bug fixing",
    "Collaboration with cross-functional teams"
  ]
},
{
  id: "meezan-pos",
  name: "Meezan Bank POS",
  platform: "android",
  featured: false,
  shortDescription: "Merchant-facing Android POS application for secure payment processing",

  // Problem → Approach → Outcome
  description: {
    problem: "The application required reliable handling of payment flows, merchant-specific configurations, and frequent updates while maintaining stability across diverse devices and usage scenarios.",
    
    approach: "Contributed to Android feature development using MVVM and Clean Architecture. Worked on transaction-related screens, business logic handling, and integration of backend-driven configurations, with a strong focus on stability and maintainability.",
    
    outcome: "Helped improve app reliability and consistency across merchant use cases. Supported ongoing feature updates and production fixes, ensuring smooth operation in real-world merchant environments."
  },

  techStack: [
    "Java & Kotlin",
    "XML",
    "Work Manager",
    "Room",
    "Retrofit",
    "Clean Architecture",
    "Multi-module"
  ],

  screenshots: [
    "/images/projects/meezan-1.png",
    "/images/projects/meezan-2.png",
    "/images/projects/meezan-3.png",
    "/images/projects/meezan-4.png",
    "/images/projects/meezan-5.png"
  ],

  links: {
    github: null, // Private enterprise repository
    playStore: null // Distributed internally to merchants
  },

  highlights: [
    "Android POS application for banking merchants",
    "Transaction and configuration-driven feature development",
    "Stability improvements and production issue handling",
    "Cross-team collaboration with backend and QA"
  ]
},
  {
  id: "boomerang",
  name: "Boomerang",
  platform: "android",
  featured: false,
  shortDescription: "Flight and luggage tracking Android app with real-time updates and social features",

  // Problem → Approach → Outcome
  description: {
    problem: "Travelers often struggle to track flight and luggage status in real time while coordinating with friends or family during trips, leading to poor visibility and fragmented communication.",
    
    approach: "Developed a feature-rich Android application focused on real-time flight and luggage tracking. Implemented live data updates, location-based tracking, and social features such as group creation, chat, posts, and activity feeds, while ensuring lifecycle-aware components and smooth performance.",
    
    outcome: "Delivered a responsive and user-friendly Android app that combined real-time tracking with social interaction. Enabled users to stay informed about flights and luggage status while easily coordinating with friends for luggage pickup and travel-related updates."
  },

  techStack: [
    "Kotlin",
    "MVVM",
    "Android SDK",
    "LiveData",
    "Coroutines",
    "Location Services",
    "REST APIs"
  ],

  screenshots: [
    "/images/projects/boomerang-1.png",
    "/images/projects/boomerang-2.jpeg",
    "/images/projects/boomerang-3.jpeg",
    "/images/projects/boomerang-4.jpeg",
    "/images/projects/boomerang-5.jpeg"
  ],

  links: {
    github: null, // Private repository
    playStore: null
  },

  highlights: [
    "Real-time flight and luggage tracking",
    "Social features: chat, posts, and group activity feeds",
    "Location-based updates with lifecycle-aware components",
    "Performance-focused Android implementation"
  ]
},
  {
  id: "rentez",
  name: "RentEz",
  platform: "android",
  featured: false,
  shortDescription: "Consumer-facing Android app for product rental and booking",

  // Problem → Approach → Outcome
  description: {
    problem: "Users needed a simple and reliable way to browse, rent, and book everyday products through a mobile-first experience, while handling complex business logic such as availability, booking flows, and payments.",
    
    approach: "Built a consumer-facing Android application with clearly separated modules for UI, business logic, and data handling. Designed adaptive UI components and implemented API-driven booking and payment flows using MVVM and Clean Architecture to ensure scalability and maintainability.",
    
    outcome: "Delivered a stable and user-friendly Android application that enabled seamless product browsing, rental, and booking. The modular structure allowed for easier feature expansion and consistent handling of business workflows."
  },

  techStack: [
    "Kotlin",
    "MVVM",
    "Clean Architecture",
    "Android SDK",
    "XML",
    "Retrofit",
    "REST APIs"
  ],

  screenshots: [
    "/images/projects/rent-1.png",
    "/images/projects/rent-2.jpeg",
    "/images/projects/rent-3.jpeg",
    "/images/projects/rent-4.jpeg"
  ],

  links: {
    github: null, // Private repository
    playStore: "https://play.google.com/store/apps/details?id=com.rentez.app"
  },

  highlights: [
    "Consumer-focused Android e-commerce application",
    "Booking and rental workflows with payment integration",
    "Modular architecture using MVVM and Clean Architecture",
    "Adaptive UI for multiple screen sizes"
  ]
},
{
  id: "sellnow",
  name: "SellNow",
  platform: "android",
  featured: false,
  shortDescription: "Award-winning Android marketplace application for local sellers and buyers",

  // Problem → Approach → Outcome
  description: {
    problem: "Local sellers needed a mobile platform to quickly showcase their shops, promote products or services in real time, and reach nearby users, while buyers required an easy way to discover and purchase offerings through a unified marketplace experience.",
    
    approach: "Contributed to a large-scale Android marketplace application by implementing UI components and integrating multiple REST APIs to support shop listings, product discovery, promotions, notifications, and purchase workflows. Focused on usability, responsiveness, and consistency across a wide range of Android devices.",
    
    outcome: "Helped deliver a stable and user-friendly marketplace experience that enabled sellers to promote offerings effectively and buyers to engage with nearby shops. The application received the MENA Digital Award 2022 for Best Mobile Application."
  },

  techStack: [
    "Kotlin",
    "Android SDK",
    "MVVM",
    "XML",
    "Retrofit",
    "REST APIs",
    "Firebase Notifications"
  ],

  screenshots: [
    "/images/projects/sellnow-1.png",
    "/images/projects/sellnow-2.PNG",
    "/images/projects/sellnow-3.PNG",
    "/images/projects/sellnow-4.PNG"
  ],

  links: {
    github: null, // Private repository
    playStore: "https://play.google.com/store/apps/details?id=com.sellnow.app"
  },

  highlights: [
    "MENA Digital Award 2022 – Best Mobile Application",
    "Android marketplace for local shops and promotions",
    "Real-time notifications for offers and updates",
    "UI-focused development for usability and consistency"
  ]
},
 {
  id: "myhomebp-android",
  name: "MyHomeBP (Android)",
  platform: "flutter",
  featured: false,
  shortDescription: "Flutter-based blood pressure monitoring app for patients and doctors",

  // Problem → Approach → Outcome
  description: {
    problem: "Patients under medical care often need a simple and reliable way to track blood pressure at home and share accurate readings with their doctors between clinic visits.",
    
    approach: "Built a Flutter application focused on ease of use and reliability. Implemented structured daily blood pressure tracking with support for multiple readings per session, optional clinical data input, visual graphs for trends, and one-tap report sharing via email to doctors.",
    
    outcome: "Delivered a user-friendly mobile app that encourages consistent blood pressure monitoring and improves communication between patients and doctors, supporting better long-term health management."
  },

  techStack: [
    "Flutter",
    "Dart",
    "Material UI",
    "Charts & Data Visualization",
    "GetIt",
    "Bloc"
  ],

  screenshots: [
    "/images/projects/myhomebp-1.png",
    "/images/projects/myhomebp-2.png",
    "/images/projects/myhomebp-3.png",
    "/images/projects/myhomebp-4.png",
    "/images/projects/myhomebp-5.png",
    "/images/projects/myhomebp-6.png"
  ],

  links: {
    github: null,
    playStore: "https://play.google.com/store/apps/details?id=com.phayzee.my_home_bp"
  },

  highlights: [
    "Flutter-based health monitoring application",
    "Daily blood pressure tracking with multiple readings",
    "Visual graphs for trend analysis",
    "One-tap report sharing with doctors"
  ]
},
  {
  id: "myhomebp-ios",
  name: "MyHomeBP (iOS)",
  platform: "flutter",
  featured: false,
  shortDescription: "Flutter-based blood pressure monitoring app for patients and doctors",

  // Problem → Approach → Outcome
  description: {
    problem: "Patients under medical care often need a simple and reliable way to track blood pressure at home and share accurate readings with their doctors between clinic visits.",
    
    approach: "Built a Flutter application focused on ease of use and reliability. Implemented structured daily blood pressure tracking with support for multiple readings per session, optional clinical data input, visual graphs for trends, and one-tap report sharing via email to doctors.",
    
    outcome: "Delivered a user-friendly mobile app that encourages consistent blood pressure monitoring and improves communication between patients and doctors, supporting better long-term health management."
  },

  techStack: [
    "Flutter",
    "Dart",
    "Material UI",
    "Charts & Data Visualization",
    "GetIt",
    "Bloc"
  ],

  screenshots: [
    "/images/projects/myhomebp-1.png",
    "/images/projects/myhomebp-2.png",
    "/images/projects/myhomebp-3.png",
    "/images/projects/myhomebp-4.png",
    "/images/projects/myhomebp-5.png",
    "/images/projects/myhomebp-6.png"
  ],

  links: {
    github: null,
    playStore: "https://apps.apple.com/us/app/home-bp/id6757713424"
  },

  highlights: [
    "Flutter-based health monitoring application",
    "Daily blood pressure tracking with multiple readings",
    "Visual graphs for trend analysis",
    "One-tap report sharing with doctors"
  ]
}
];

// Work Experience
export const experience = [
  {
    id: "tawha",
    company: "Tawha Technologies",
    role: "Senior Software Engineer",
    period: "May 2026 – Present",
    location: "Karachi, Pakistan",
    type: "Full-time",

    description: "Android engineer on StocksPK, a digital brokerage account-opening and KYC application built for CDC Pakistan, taking users from signup through identity verification to a live trading account.",

    responsibilities: [
      "Built the application in Kotlin and Jetpack Compose with feature-based modularisation and Hilt for dependency injection",
      "Implemented a unidirectional MVI state flow: immutable UiState per screen, typed actions, and a one-shot event channel for navigation and errors",
      "Delivered a 30-step regulated onboarding journey covering CNIC document scanning with ML Kit, liveness capture, and FATCA and Zakat declarations",
      "Added resumable onboarding drafts persisted via DataStore",
      "Built a shared library of reusable form components that reduced build time for each new onboarding step"
    ],

    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "MVI",
      "Hilt",
      "ML Kit",
      "DataStore",
      "Clean Architecture",
      "Multi-Modular Architecture"
    ]
  },
  {
    id: "oma-emirates",
    company: "OMA Pakistan (an OMA Emirates Group company)",
    role: "Software Engineer, Mobile",
    period: "June 2024 – May 2026",
    location: "Karachi, Pakistan",
    type: "Full-time",

     description: "OMA Emirates Group is a Sharjah-headquartered payment technology provider serving banks and merchants across the MENA region. Worked on its nationally deployed banking and POS applications.",

  responsibilities: [
    "Delivered end-to-end features for nationally deployed banking and POS applications serving 100K+ daily active users, including the merchant POS platform used by HBL and Meezan Bank, two of Pakistan's largest banks",
    "Integrated QR-based payment SDKs and real-time MQTT messaging pipelines, reducing transaction latency by 30% under heavy production load",
    "Sustained a sub-1% crash rate across high-traffic merchant applications through proactive performance profiling and Crashlytics-driven triage",
    "Architected modular components using Clean Architecture and MVVM, improving feature isolation and long-term maintainability across a large shared codebase",
    "Ran code reviews and mentored junior engineers on SOLID principles and modular design"
  ],

  techStack: [
    "Kotlin",
    "Java",
    "Android SDK",
    "MVVM",
    "Clean Architecture",
    "Multi-Modular Architecture",
    "ISO-8583",
    "Retrofit",
    "Room",
    "MQTT",
    "Firebase Crashlytics"
  ]
  },
  {
    id: "branex",
    company: "Branex Consultancy Services (Branex AE)",
    role: "Associate Software Engineer, Mobile",
    period: "Feb 2022 – June 2024",
    location: "Dubai, UAE · delivered from Karachi",
    type: "Full-time",

      description: "Dubai-based digital product agency building web and mobile applications for UAE and wider GCC clients; part of the Nanosoft Technologies group.",

  responsibilities: [
    "Built Boomerang, a real-time flight and luggage tracking application with live location updates, group chat and social activity feeds, optimised for battery efficiency under continuous location streaming",
    "Built RentEZ, a consumer rental and booking application with payments, catalogue browsing and API-driven business flows, using MVVM and Clean Architecture",
    "Contributed to SellNow, a marketplace platform that won a MENA Digital Award in 2022, integrating multiple REST APIs and business workflows into a large-scale Android codebase",
    "Implemented right-to-left (RTL) layout support and multi-language UI across client applications, handling mirrored layouts, directional assets and locale-aware formatting for Arabic-speaking users",
    "Shipped production applications across native Android (Kotlin) and Flutter (Dart) for UAE-market clients in e-commerce, marketplace, social, logistics and health-monitoring domains",
    "Engineered reusable UI components and shared business-logic modules that improved code maintainability by 40% and accelerated delivery across client projects",
    "Owned full feature lifecycles from requirements and architecture through implementation, testing, Play Store release and post-release support"
  ],

  techStack: [
    "Kotlin",
    "Java",
    "Flutter",
    "Android SDK",
    "MVVM",
    "Clean Architecture",
    "Retrofit",
    "REST APIs",
    "Google Maps API",
    "Firebase",
    "Coroutines"
  ]
  },
  {
    id: "cento-square",
    company: "Centosquare",
    role: "Software Engineering Intern",
    period: "March 2020 – August 2020",
    location: "Karachi, Pakistan",
    type: "Internship",

   description: "Android development internship building applications in Java.",

  responsibilities: [
    "Built Android applications in Java with Retrofit API integration, local persistence and responsive UI implementation"
  ],
  
  techStack: [
    "Java",
    "Android SDK",
    "Retrofit",
    "REST APIs",
    "Local Storage",
    "Android Studio"
  ]
  }
];

// Skills - Organized by platform
export const skills = {
  primary: {
    title: "Native Android",
    description: "Production-grade native development for large-scale apps",
    skills: [
      { name: "Kotlin", level: "Expert" },
      { name: "Jetpack Compose", level: "Intermediate" },
      { name: "ViewModel, LiveData & StateFlow", level: "Expert" },
      { name: "Coroutines & Flow", level: "Expert" },
      { name: "Hilt (DI)", level: "Advanced" },
      { name: "Navigation & Paging", level: "Advanced" },
      { name: "Room & DataStore", level: "Advanced" },
      { name: "MQTT & WebSockets", level: "Advanced" },
      { name: "ML Kit", level: "Intermediate" },
      { name: "Offline-first Architecture", level: "Advanced" },
      { name: "WorkManager", level: "Advanced" },
      { name: "Modular Architecture", level: "Advanced" },
      { name: "CI/CD", level: "Basic" }
    ]
  },
  
  secondary: {
    title: "Flutter & Cross-Platform",
    description: "Production Flutter apps shipped to Play Store and App Store",
    skills: [
      { name: "Flutter", level: "Advanced" },
      { name: "Dart", level: "Advanced" },
      { name: "State Management (BLoC)", level: "Intermediate" },
      { name: "GetIt", level: "Intermediate" },
      { name: "Platform Channels", level: "Basic" },
      { name: "Charts & Data Visualization", level: "Intermediate" }
    ]
  },
  
  architecture: {
    title: "Architecture & Patterns",
    description: "Scalable, maintainable application design",
    skills: [
      { name: "Clean Architecture", level: "Expert" },
      { name: "MVVM", level: "Expert" },
      { name: "MVI", level: "Advanced" },
      { name: "Modular & Multi-Module Architecture", level: "Advanced" },
      { name: "Repository Pattern", level: "Advanced" },
      { name: "SOLID Principles", level: "Advanced" },
      { name: "Dependency Injection", level: "Advanced" }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    description: "Development ecosystem",
    skills: [
      { name: "Android Studio", level: "Expert" },
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Firebase (FCM, Crashlytics, Analytics)", level: "Advanced" },
      { name: "CI/CD (GitHub Actions)", level: "Intermediate" },
      { name: "Gradle", level: "Advanced" },
      { name: "Play Console", level: "Advanced" },
      { name: "App Store Connect", level: "Intermediate" },
      { name: "Unit Testing (JUnit, Mockito)", level: "Intermediate" }
    ]
  },
  
  domain: {
  title: "Domain & Systems Experience",
  description: "Real-world production systems",
  skills: [
    { name: "Banking & Payment Systems", level: "Advanced" },
    { name: "E-Commerce Platforms", level: "Advanced" },
    { name: "Transaction Processing", level: "Advanced" },
    { name: "Regulated eKYC Onboarding", level: "Advanced" },
    { name: "RTL & Multi-language UI", level: "Advanced" },
    { name: "Offline & Low-Connectivity Systems", level: "Advanced" }
  ]
}
};

// Navigation items
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
