'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    'site.title': 'SpaceGate',
    'site.description': 'Smart Buildings, Seamless Living',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign In',
    'hero.heading': 'Smart Buildings, Seamless Living',
    'hero.subheading': 'Experience the future of property management and building automation with SpaceGate',
    'hero.cta': 'Contact Us',
    'hero.explore': 'Explore Services',
    'hero.getApp': 'Get our mobile app:',
    'services.title': 'Our Core Services',
    'services.subtitle': 'SpaceGate provides comprehensive solutions to transform buildings into smart, efficient, and secure environments.',
    'services.bms.title': 'Building Management Systems',
    'services.bms.description': 'Intelligent control systems that optimize energy efficiency, comfort, and safety for all building occupants.',
    'services.pms.title': 'Property Management Systems',
    'services.pms.description': 'Streamline operations, boost tenant satisfaction, and maximize ROI with our comprehensive property management solutions.',
    'services.security.title': 'IT Security',
    'services.security.description': 'Enterprise-grade security measures to protect your smart building infrastructure from evolving cyber threats.',
    'services.iraq.title': 'Building Management Systems (BMS) in Iraq',
    'services.iraq.description': 'As a leading provider of Building Management Systems (BMS) in Iraq, SpaceGate delivers cutting-edge solutions tailored to the unique needs of the Iraqi market.',
    'services.iraq.energy': 'Energy Management in Iraqi Climate',
    'services.iraq.support': 'Local Technical Support',
    'projects.featured': 'Featured Project:',
    'projects.description': 'Providing complete property management solutions for one of the region\'s premier residential complexes.',
    'projects.tag.property': 'Property Management',
    'projects.tag.smart': 'Smart Buildings',
    'projects.tag.security': 'Security Systems',
    'projects.partners': 'Our Technology Partners',
    'footer.tagline': 'Smart building solutions for a connected future.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'language.switch': 'عربي',
  },
  ar: {
    'site.title': 'سبيس جيت',
    'site.description': 'مباني ذكية، حياة سلسة',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.signin': 'تسجيل الدخول',
    'hero.heading': 'مباني ذكية، حياة سلسة',
    'hero.subheading': 'استكشف مستقبل إدارة العقارات وأتمتة المباني مع سبيس جيت',
    'hero.cta': 'اتصل بنا',
    'hero.explore': 'استكشف خدماتنا',
    'hero.getApp': 'احصل على تطبيقنا:',
    'services.title': 'خدماتنا الأساسية',
    'services.subtitle': 'توفر سبيس جيت حلولًا شاملة لتحويل المباني إلى بيئات ذكية وفعالة وآمنة.',
    'services.bms.title': 'أنظمة إدارة المباني',
    'services.bms.description': 'أنظمة تحكم ذكية تحسن كفاءة الطاقة والراحة والسلامة لجميع شاغلي المبنى.',
    'services.pms.title': 'أنظمة إدارة العقارات',
    'services.pms.description': 'تبسيط العمليات، وتعزيز رضا المستأجرين، وتعظيم العائد على الاستثمار مع حلول إدارة العقارات الشاملة.',
    'services.security.title': 'أمن تكنولوجيا المعلومات',
    'services.security.description': 'تدابير أمنية على مستوى المؤسسات لحماية بنية المباني الذكية من التهديدات السيبرانية المتطورة.',
    'services.iraq.title': 'أنظمة إدارة المباني في العراق',
    'services.iraq.description': 'باعتبارها مزودًا رائدًا لأنظمة إدارة المباني في العراق، تقدم سبيس جيت حلولًا متطورة مصممة خصيصًا لتلبية الاحتياجات الفريدة للسوق العراقي.',
    'services.iraq.energy': 'إدارة الطاقة في المناخ العراقي',
    'services.iraq.support': 'دعم فني محلي',
    'projects.featured': 'المشروع المميز:',
    'projects.description': 'توفير حلول إدارة عقارات كاملة لأحد أفخم المجمعات السكنية في المنطقة.',
    'projects.tag.property': 'إدارة العقارات',
    'projects.tag.smart': 'المباني الذكية',
    'projects.tag.security': 'أنظمة الأمن',
    'projects.partners': 'شركاؤنا التقنيون',
    'footer.tagline': 'حلول المباني الذكية لمستقبل متصل.',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'language.switch': 'English',
  }
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ar')) {
      setLanguage(storedLanguage);
    }
    // Apply RTL direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider; 