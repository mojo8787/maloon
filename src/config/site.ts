export const siteConfig = {
  hero: {
    heading: "Smart Buildings, Seamless Living",
    subheading: "Experience the future of property management and building automation with SpaceGate",
    ctaText: "Contact Us"
  },
  services: [
    {
      title: "Building Management Systems",
      icon: "building",
      description: "Intelligent control systems that optimize energy efficiency, comfort, and safety for all building occupants."
    },
    {
      title: "Property Management Systems",
      icon: "property",
      description: "Streamline operations, boost tenant satisfaction, and maximize ROI with our comprehensive property management solutions."
    },
    {
      title: "IT Security",
      icon: "security",
      description: "Enterprise-grade security measures to protect your smart building infrastructure from evolving cyber threats."
    }
  ],
  featuredProject: {
    title: "Royal City",
    description: "Providing complete property management solutions for one of the region's premier residential complexes.",
    images: [
      {
        src: "/images/royal-city-1.jpg",
        alt: {
          en: "Modern architectural design featuring sustainable green elements at Royal City",
          ar: "تصميم معماري حديث يضم عناصر خضراء مستدامة في المدينة الملكية"
        }
      },
      {
        src: "/images/royal-city-2.jpg",
        alt: {
          en: "Advanced smart building control system interface at Royal City",
          ar: "واجهة نظام التحكم المتقدمة للمباني الذكية في المدينة الملكية"
        }
      },
      {
        src: "/images/royal-city-3.jpg",
        alt: {
          en: "Earthlink Telecommunications, a trusted technology partner for Royal City",
          ar: "إيرثلينك للاتصالات، شريك تكنولوجي موثوق للمدينة الملكية"
        }
      }
    ]
  },
  appStores: {
    ios: {
      url: "https://apps.apple.com/app/spacegate/id123456789",
      scheme: "itms-apps://itunes.apple.com/app/id123456789"
    },
    android: {
      url: "https://play.google.com/store/apps/details?id=com.spacegate.app",
      fallbackUrl: "https://play.google.com/store/apps/details?id=com.spacegate.app"
    }
  },
  auth: {
    main: "https://spacegate.com/app/login",
    subdomains: {
      royal: "https://royal.spacegate.com/app/login"
    },
    beta: {
      enabled: process.env.ENABLE_BETA_REDIRECT === "true",
      url: process.env.BETA_REDIRECT_URL || "https://staging.spacegate.com/app/login"
    }
  }
}; 