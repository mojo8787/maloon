'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, language } = useLanguage();
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === siteConfig.featuredProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? siteConfig.featuredProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray">
              {t('projects.featured')} {siteConfig.featuredProject.title}
            </h2>
            <p className="text-dark-light mb-6">
              {t('projects.description')}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-light/20 text-brand-green rounded-full text-sm">{t('projects.tag.property')}</span>
              <span className="px-3 py-1 bg-primary-light/20 text-brand-green rounded-full text-sm">{t('projects.tag.smart')}</span>
              <span className="px-3 py-1 bg-primary-light/20 text-brand-green rounded-full text-sm">{t('projects.tag.security')}</span>
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden border border-brand-gray/10">
              {siteConfig.featuredProject.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={language === 'ar' ? image.alt.ar : image.alt.en}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-gray/90 to-transparent p-4 text-white">
              <p className={language === 'ar' ? 'text-right' : 'text-left'}>
                {language === 'ar'
                  ? siteConfig.featuredProject.images[currentIndex].alt.ar
                  : siteConfig.featuredProject.images[currentIndex].alt.en
                }
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2">
              <button 
                onClick={handlePrevious}
                className="h-8 w-8 bg-brand-green/60 backdrop-blur-sm hover:bg-brand-green/80 rounded-full flex items-center justify-center text-white"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2">
              <button 
                onClick={handleNext}
                className="h-8 w-8 bg-brand-green/60 backdrop-blur-sm hover:bg-brand-green/80 rounded-full flex items-center justify-center text-white"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
              {siteConfig.featuredProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? 'w-6 bg-brand-green' : 'w-2 bg-brand-green/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Partners Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-6 text-center text-brand-gray">{t('projects.partners')}</h3>
          <div className="flex justify-center items-center">
            <div className="px-6 py-4">
              <Image 
                src="/images/logos/partner-1.png"
                alt="Earthlink Telecommunications"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 