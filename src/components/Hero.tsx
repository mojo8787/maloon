'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// Separate client components for app store badges
const IOSBadge = () => {
  return (
    <a 
      href="https://apps.apple.com/app/spacegate/id123456789"
      target="_blank" 
      rel="noopener noreferrer"
      className="min-w-[135px] h-[40px]"
      data-ga-event="badge_click"
      data-ga-platform="ios"
    >
      <Image 
        src="/images/app-store-badge.svg"
        alt="Download on the App Store"
        width={135}
        height={40}
        className="h-[40px] w-auto"
      />
    </a>
  );
};

const AndroidBadge = () => {
  return (
    <a 
      href="https://play.google.com/store/apps/details?id=com.spacegate.app"
      target="_blank" 
      rel="noopener noreferrer"
      className="min-w-[135px] h-[40px]"
      data-ga-event="badge_click"
      data-ga-platform="android"
    >
      <Image 
        src="/images/google-play-badge.svg"
        alt="Get it on Google Play"
        width={135}
        height={40}
        className="h-[40px] w-auto"
      />
    </a>
  );
};

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-4">
      {/* Background - optimized for fast load */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: 'center',
          }}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gray/90 to-brand-gray/70"></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.heading')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('hero.subheading')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-brand-green hover:bg-brand-green-s text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
            >
              {t('hero.cta')}
            </Link>
            <Link 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium text-center transition-colors border border-brand-green-t"
            >
              {t('hero.explore')}
            </Link>
          </div>
          
          {/* App Store Badges */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white/80 text-sm mb-2 sm:mb-0 mr-2">
              {t('hero.getApp')}
            </p>
            
            {/* iOS Badge */}
            <IOSBadge />
            
            {/* Android Badge */}
            <AndroidBadge />
          </div>
        </div>
      </div>
    </section>
  );
} 