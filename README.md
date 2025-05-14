# SpaceGate Website

This repository contains the SpaceGate landing page - a modern, SEO-optimized, mobile-friendly website built with Next.js and Tailwind CSS.

## Features

- Fully responsive design from 320px to 1920px
- Fast loading (Largest Contentful Paint ≤ 2.5s on 3G)
- SEO optimized
- App store deep linking
- Bilingual support (English/Arabic) for image captions
- Configurable content via site config
- Smart login redirection based on subdomain
- Google Analytics 4 integration
- Automated Vercel deployment
- Core Web Vitals optimization

## Getting Started

### Prerequisites

- Node.js 18.0.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spacegate-website.git
cd spacegate-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Configuration

The website content can be updated through the `src/config/site.ts` file. This allows marketing teams to update content without code changes.

## Environment Variables

The following environment variables can be used to configure the application:

- `ENABLE_BETA_REDIRECT` - Set to "true" to enable beta redirect for login
- `BETA_REDIRECT_URL` - The URL to redirect to when beta redirect is enabled
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 Measurement ID

## Performance Optimization

- Images are optimized using Next.js Image component
- SVG used for icons to reduce bundle size
- Critical CSS is inlined
- Fonts are preloaded
- Carousel images are loaded on demand
- Core Web Vitals optimization
- Lighthouse score ≥ 90 for Performance, Accessibility, Best Practices, and SEO

## CI/CD Pipeline

The website is automatically deployed to Vercel when changes are pushed to the main branch. The CI/CD pipeline includes:

1. Linting and type checking
2. Running Lighthouse performance tests
3. Building and deploying to Vercel
4. Creating preview URLs for pull requests

## Analytics

Google Analytics 4 is integrated to track:
- Page views
- App store badge clicks (with platform parameter)

## SEO Optimization

- Meta title and description optimized
- OpenGraph and Twitter Card meta tags
- JSON-LD structured data
- Semantic HTML
- Optimized for "BMS Iraq" search term
- Responsive design for all devices

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## License

[MIT](LICENSE)
