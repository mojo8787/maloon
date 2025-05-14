'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-brand-gray text-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt={t('site.title')} 
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center text-white"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#services" className="text-white hover:text-brand-green-t transition-colors">
            {t('nav.services')}
          </Link>
          <Link href="#projects" className="text-white hover:text-brand-green-t transition-colors">
            {t('nav.projects')}
          </Link>
          <Link href="#about" className="text-white hover:text-brand-green-t transition-colors">
            {t('nav.about')}
          </Link>
          <Link href="#contact" className="text-white hover:text-brand-green-t transition-colors">
            {t('nav.contact')}
          </Link>
          <a 
            href="https://space-gate.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-green text-white px-4 py-2 rounded-md hover:bg-brand-green-s transition-colors"
          >
            {t('nav.signin')}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-gray-s w-full py-4 px-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link 
              href="#services" 
              className="text-white hover:text-brand-green-t transition-colors py-2"
              onClick={handleNavLinkClick}
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="#projects" 
              className="text-white hover:text-brand-green-t transition-colors py-2"
              onClick={handleNavLinkClick}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              href="#about" 
              className="text-white hover:text-brand-green-t transition-colors py-2"
              onClick={handleNavLinkClick}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="#contact" 
              className="text-white hover:text-brand-green-t transition-colors py-2"
              onClick={handleNavLinkClick}
            >
              {t('nav.contact')}
            </Link>
            <a
              href="https://space-gate.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-4 py-2 rounded-md hover:bg-brand-green-s transition-colors block text-center mt-2"
            >
              {t('nav.signin')}
            </a>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 