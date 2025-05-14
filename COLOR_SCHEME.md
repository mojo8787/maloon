# SpaceGate Color Scheme Analysis

## Logo Analysis

The SpaceGate logo features a sophisticated color palette that combines deep indigo and blue hues, projecting a sense of technology, trust, and innovation. Based on this logo, I've extracted a cohesive color scheme that will be used throughout the website.

## Primary Color Palette

| Color Name | Hex Code | Tailwind Class | Description |
|------------|----------|----------------|-------------|
| Primary    | #4338ca  | indigo-700     | The main indigo color from the logo, used for primary actions, buttons, and active states |
| Secondary  | #1e40af  | blue-800       | A deep blue, used for secondary elements and hover states |
| Accent     | #3b82f6  | blue-500       | A brighter blue for accents, highlights, and to draw attention |
| Light      | #e0e7ff  | indigo-100     | Used for backgrounds, cards, and lighter UI elements |
| Dark       | #1e1b4b  | indigo-950     | Used for text on light backgrounds and dark sections |

## Application Throughout the Website

### Header
- Logo is displayed prominently
- Navigation links use text-gray-700 with hover:text-blue-800 for hover states
- Sign-in button uses bg-indigo-700 with hover:bg-indigo-800

### Hero Section
- Background gradient transitions from indigo-900/80 to blue-900/60
- Primary CTA button uses bg-indigo-600 with hover:bg-indigo-700
- Secondary CTA button uses a semi-transparent white with backdrop blur

### Services Section
- Service icons use text-indigo-600
- Cards have white backgrounds with subtle shadows
- The Iraq-specific section uses bg-indigo-50 with text-indigo-700 for headings

### Featured Project
- Project tags use bg-indigo-100 with text-indigo-800
- Language toggle button uses text-indigo-600 with hover:text-indigo-800
- Carousel navigation buttons use bg-indigo-500/40 with hover:bg-indigo-500/60

### Footer
- Dark background (bg-gray-900) with light text
- Links use text-gray-400 with hover:text-indigo-400
- The SpaceGate logo is displayed in white

## Consistency and Accessibility

The color scheme has been implemented consistently throughout the site, ensuring:
- Brand recognition through consistent use of the primary colors
- Sufficient contrast for accessibility (WCAG 2.1 AA compliance)
- Clear visual hierarchy using color to differentiate between elements
- Responsive design considerations across all device sizes

## Tailwind Configuration

The color scheme has been added to the Tailwind configuration file, making it available through custom color classes:

```js
colors: {
  spaceGate: {
    primary: "#4338ca", // indigo-700
    secondary: "#1e40af", // blue-800
    accent: "#3b82f6", // blue-500
    light: "#e0e7ff", // indigo-100
    dark: "#1e1b4b", // indigo-950
  },
}
```

These colors can be accessed using classes like `bg-spaceGate-primary`, `text-spaceGate-accent`, etc. 