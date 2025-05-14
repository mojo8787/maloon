import { siteConfig } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  // Icons mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'building':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'property':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'security':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const serviceTranslations = {
    'building': {
      title: 'services.bms.title',
      description: 'services.bms.description',
    },
    'property': {
      title: 'services.pms.title',
      description: 'services.pms.description',
    },
    'security': {
      title: 'services.security.title',
      description: 'services.security.description',
    },
  };

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-gray">{t('services.title')}</h2>
          <p className="text-dark-light max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-gray">
                {t(serviceTranslations[service.icon as keyof typeof serviceTranslations].title)}
              </h3>
              <p className="text-dark-light">
                {t(serviceTranslations[service.icon as keyof typeof serviceTranslations].description)}
              </p>
            </div>
          ))}
        </div>
        
        {/* Iraq-specific section for SEO */}
        <div className="mt-16 bg-primary-light/20 p-8 rounded-lg border border-brand-green/20">
          <h3 className="text-2xl font-bold mb-4 text-brand-gray">{t('services.iraq.title')}</h3>
          <p className="text-dark-light mb-4">
            {t('services.iraq.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-brand-green">
              <h4 className="font-semibold text-lg mb-2 text-brand-green">{t('services.iraq.energy')}</h4>
              <p className="text-dark-light">Our systems are optimized for Iraq's extreme temperature variations, helping reduce energy consumption by up to 30% with intelligent HVAC control strategies.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-brand-green">
              <h4 className="font-semibold text-lg mb-2 text-brand-green">{t('services.iraq.support')}</h4>
              <p className="text-dark-light">With offices in Baghdad and Erbil, our local technical teams provide rapid response and support for all BMS deployments throughout Iraq.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 