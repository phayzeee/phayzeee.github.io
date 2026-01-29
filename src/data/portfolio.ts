// Portfolio Data - Update this file to customize all content
// ============================================================

export const personalInfo = {
  name: "Faizan Ahmed Khan",
  title: "Senior Android Developer",
  tagline: "Building scalable, production-ready Android applications",
  email: "faizanhmd3@gmail.com",
  phone: "+923312602736",
  location: "Karachi, Pakistan",
  linkedin: "https://linkedin.com/in/phayzee",
  github: "https://github.com/phayzeee",
  resume: "/FaizanKhan_AndroidResume.pdf", // Place your resume in the public folder
  
  // Hero section summary
  heroSummary: "4+ years crafting robust Android applications with modern architecture patterns. Passionate about clean code, performance optimization, and delivering exceptional user experiences.",
  
  // About section - keep it concise
  about: {
    intro: "I'm a Senior Android Developer specializing in building production-grade mobile applications that scale. My focus is on implementing modern Android architecture patterns and writing maintainable, testable code.",
    
    paragraphs: [
      "Over the past four years, I've led the development of Android applications across diverse domains—from real-time payment systems to large-scale e-commerce platforms. I approach each project with a focus on architectural integrity, ensuring apps remain maintainable as they grow.",
      
      "My expertise lies in Kotlin-first development, leveraging Jetpack Compose for modern UI, and implementing clean architecture with proper separation of concerns. I'm particularly passionate about optimizing app performance and creating smooth, responsive user experiences.",
      
      "Beyond native Android, I have hands-on production experience with Flutter for cross-platform projects, giving me a broader perspective on mobile development paradigms."
    ],
    
    highlights: [
      "Modern Android architecture (MVVM, Clean Architecture, MVI)",
      "Kotlin Coroutines & Flow",
      "Jetpack Compose and XML",
      "Performance optimization and memory management",
      "Modular, maintainable Android codebases"
    ]
  }
};

// Projects - Order: Android projects first, Flutter projects last
export const projects = [
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
    "/images/projects/myhomebp-2.jpeg",
    "/images/projects/myhomebp-3.jpeg",
    "/images/projects/myhomebp-4.jpeg",
    "/images/projects/myhomebp-5.jpeg"
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
    "/images/projects/myhomebpios-2.jpeg",
    "/images/projects/myhomebpios-3.jpeg",
    "/images/projects/myhomebpios-4.jpeg",
    "/images/projects/myhomebpios-5.jpeg"
  ],

  links: {
    github: null,
    playStore: null
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
    id: "oma-emirates",
    company: "OMA Emirates",
    role: "Senior Software Engineer",
    period: "June 2024 – Present",
    location: "Karachi, Pakistan",
    type: "Full-time",
    
     description: "Core Android contributor on large-scale banking and merchant applications, focusing on stability, modular architecture, and real-world transactional workflows.",
  
  responsibilities: [
    "Developing and maintaining complex Android applications used in banking and merchant environments at national scale",
    "Building and enhancing modular Android components using Clean Architecture and MVVM for better maintainability and feature isolation",
    "Implementing and improving transaction-related features, including QR-based payment flows and real-time processing",
    "Working on offline-capable features with reliable data synchronization and failure recovery",
    "Collaborating closely with backend, QA, and product teams to analyze requirements and deliver technically feasible solutions",
    "Handling production issues, bug fixes, and performance optimizations to ensure high stability under real-world usage",
    "Participating in code reviews and contributing to engineering best practices across the Android team"
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
    "MQTT"
  ]
  },
  {
    id: "nanosoft",
    company: "Nanosoft Technologies",
    role: "Associate Software Engineer",
    period: "Feb 2022 – June 2024",
    location: "Karachi, Pakistan",
    type: "Full-time",
    
      description: "Android developer working on multiple full-scale applications across e-commerce, logistics, and social platforms, with a focus on clean architecture and reusable components.",
  
  responsibilities: [
    "Developed and maintained multiple Android applications using Kotlin, MVVM, and Clean Architecture",
    "Translated business requirements into well-structured, scalable, and maintainable Android codebases",
    "Built reusable UI and domain components to accelerate development across different projects",
    "Implemented location-based features using Google Maps and QR-based workflows",
    "Integrated third-party SDKs and REST APIs using Retrofit and asynchronous programming patterns",
    "Worked on user-facing and vendor-facing applications with distinct roles and feature sets",
    "Focused on UI responsiveness, performance optimization, and clean code practices"
  ],
  
  techStack: [
    "Kotlin",
    "Java",
    "Android SDK",
    "MVVM",
    "Clean Architecture",
    "Retrofit",
    "REST APIs",
    "Google Maps API",
    "Coroutines"
  ]
  },
  {
    id: "cento-square",
    company: "CentoSquare",
    role: "Intern",
    period: "2021",
    location: "Karachi, Pakistan",
    type: "Full-time",
    
   description: "Android development internship focused on learning core platform concepts through hands-on practice and demo applications.",
  
  responsibilities: [
    "Built demo Android applications to learn core Android development concepts using Java",
    "Practiced integrating REST APIs using Retrofit for network communication",
    "Worked with local storage solutions for persisting application data",
    "Implemented basic UI screens and layouts following Android UI guidelines",
    "Gained hands-on experience with Android Studio and debugging tools"
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

// Skills - Organized by priority
export const skills = {
  primary: {
    title: "Android Development",
    description: "Production-grade native Android development for large-scale apps",
    skills: [
      { name: "Kotlin", level: "Expert" },
      { name: "Jetpack Compose", level: "Intermediate" },
      { name: "ViewModel, LiveData & StateFlow", level: "Expert" },
      { name: "Coroutines & Flow", level: "Expert" },
      { name: "Offline-first Architecture", level: "Advanced" },
      { name: "WorkManager", level: "Advanced" },
      { name: "Modular Architecture", level: "Advanced" },
      { name: "CI/CD", level: "Basic" }
    ]
  },
  
  secondary: {
    title: "Cross-Platform",
    description: "Hands-on exposure in production contexts",
    skills: [
      { name: "Flutter", level: "Intermediate" },
      { name: "Dart", level: "Intermediate" },
      { name: "State Management (BLoC)", level: "Intermediate" },
      { name: "GetIt", level: "Basic" },
      { name: "Platform Channels", level: "Basic" }
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
      { name: "Play Console", level: "Advanced" }
    ]
  },
  
  domain: {
  title: "Domain & Systems Experience",
  description: "Real-world production systems",
  skills: [
    { name: "Banking & Payment Systems", level: "Advanced" },
    { name: "E-Commerce Platforms", level: "Advanced" },
    { name: "Transaction Processing", level: "Advanced" },
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
