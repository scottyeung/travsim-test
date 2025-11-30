# Quick Start Guide

## View the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
src/
├── components/
│   ├── layout/          # Page sections (Navbar, Hero, Features, etc.)
│   ├── ui/              # Reusable components (Button, Card, etc.)
│   └── index.ts         # Export all components
├── pages/
│   └── Home.tsx         # Main page with all sections
└── ...
```

## Available Components

### Import Everything

```typescript
import {
  // Layout
  Navbar,
  HeroSection,
  UseCasesSection,
  FeaturesSection,
  CTASection,

  // UI
  Button,
  PlanCard,
  FeatureCard,
  StarRating,
  TabButton,
  ComparisonTable,
} from "./components";
```

### Quick Examples

#### Button

```tsx
<Button variant="primary" size="lg" onClick={() => console.log('clicked')}>
  Click Me
</Button>
```

Variants: `primary` | `secondary` | `outline`
Sizes: `sm` | `md` | `lg`

#### PlanCard

```tsx
<PlanCard
  dataAmount="10 GB"
  validity="21 Days"
  price="$ 29.99"
  isBestValue={true}
  isSelected={false}
/>
```

#### StarRating

```tsx
<StarRating rating={5} maxRating={5} />
```

#### FeatureCard

```tsx
<FeatureCard
  icon={<YourIconComponent />}
  title="Fast Speeds"
  description="Enjoy 4G/5G speeds everywhere"
/>
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: '#2563EB',  // Blue
      secondary: '#9333EA', // Purple
    }
  }
}
```

### Typography

Change font in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
```

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Documentation

- **COMPONENTS.md** - Detailed component documentation
- **IMPLEMENTATION_SUMMARY.md** - Project overview
- **FIGMA_TO_REACT.md** - Design conversion details

## Common Tasks

### Add a New Page

1. Create file: `src/pages/NewPage.tsx`
2. Import components you need
3. Add routing (see TanStack Router docs)

### Modify Navbar

Edit `src/components/layout/Navbar.tsx`

### Change Hero Section Plans

Edit the `plans` array in `src/components/layout/HeroSection.tsx`

### Add New Feature Card

Add to the `features` array in `src/components/layout/FeaturesSection.tsx`

## Need Help?

- Check the component documentation in `COMPONENTS.md`
- Look at the Home page (`src/pages/Home.tsx`) for usage examples
- Review individual component files for prop types

## Scripts

```bash
npm run dev              # Development server
npm run build           # Production build
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
npm test                # Run all tests
```

## Tips

1. **Responsive Design:** All components are responsive out of the box
2. **Type Safety:** Use TypeScript for better development experience
3. **Tailwind:** Use Tailwind utility classes for quick customization
4. **State:** Components use local state (useState) - easy to modify
5. **Modularity:** Mix and match components as needed
