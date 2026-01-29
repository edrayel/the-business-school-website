---
trigger: always_on
---

You are an expert ReactJS developer building a premium, award-worthy website for THE Business School using Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

PROJECT OVERVIEW:
Build a modern, high-performance website for an innovative MBA program focused on accessible, transformation-driven business education. The site must achieve Awwwards-level design excellence while maintaining blazing-fast performance (Lighthouse 95+).

TECH STACK:
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS 3.4+ with custom design system
- Animation: Framer Motion 11+
- UI Components: Headless UI 2.0
- Icons: Lucide React
- Forms: React Hook Form + Zod validation
- Fonts: Next.js Font Optimization (Inter Variable)
- Deployment: Vercel

DESIGN PRINCIPLES:
1. Bold, confident typography (72px+ headings, dramatic scale)
2. Generous white space - let content breathe
3. Subtle, purposeful animations (scroll reveals, hover effects)
4. Premium but approachable aesthetic
5. Mobile-first responsive design
6. WCAG AA accessibility compliance
7. Dark, rich primary colors with vibrant accent
8. Smooth micro-interactions throughout

PAGES TO BUILD:
1. Homepage (/) - Hero, about, MBA overview, curriculum, Think Tank teaser, CTAs
2. Our Model (/model) - Platform infrastructure, hybrid delivery, faculty structure, financial model
3. Faculty (/faculty) - Faculty profiles with photos and bios
4. Think Tank (/think-tank) - Research platform, working groups, programs, involvement

CORE COMPONENTS NEEDED:
- Navigation (sticky, animated, mobile hamburger)
- Hero Section (full viewport, animated headline, scroll indicator)
- Feature Grid (cards with hover effects, icons)
- Accordion/Tabs (curriculum sections)
- Faculty Card (photo, expandable bio)
- CTA Blocks (prominent buttons, form links)
- Footer (comprehensive links, newsletter signup)
- Form Components (contact, request info)

KEY FEATURES:
- Smooth scroll animations (entrance reveals, parallax)
- Intersection Observer for scroll-triggered effects
- Optimized images with next/image (blur placeholders)
- SEO optimization (metadata, OpenGraph, JSON-LD)
- Form validation with helpful error states
- Loading states and skeleton screens
- Responsive breakpoints: 320px, 768px, 1024px, 1440px
- Hover states on all interactive elements
- Focus indicators for keyboard navigation

PERFORMANCE TARGETS:
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1
- Total bundle: <200KB gzipped
- Lighthouse score: 95+ all categories

TAILWIND CONFIGURATION:
Create custom theme with:
- Primary color palette (deep blues/teals)
- Accent color (vibrant coral/amber)
- Neutral grays (warm tones)
- Custom font families (display, body)
- Extended spacing scale
- Custom animation keyframes
- Container queries support

ANIMATION PATTERNS:
Use Framer Motion for:
- Fade + slide up on scroll entry
- Stagger children animations
- Hover lift effects on cards
- Page transition animations
- Loading spinner states
- Menu open/close transitions

Example animation:
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
```

ACCESSIBILITY REQUIREMENTS:
- Semantic HTML5 (header, nav, main, section, footer)
- ARIA labels where needed
- Keyboard navigation support
- Skip to main content link
- Alt text for all images
- Sufficient color contrast (4.5:1 minimum)
- Focus visible on interactive elements
- Respect prefers-reduced-motion

COMPONENT STRUCTURE:
```
/app
  /layout.tsx (root layout, fonts, metadata)
  /page.tsx (homepage)
  /model/page.tsx
  /faculty/page.tsx
  /think-tank/page.tsx
/components
  /ui (button, card, input, etc.)
  /sections (hero, features, cta)
  /layout (nav, footer)
/lib (utils, constants)
/styles (globals.css)
```

CODE STANDARDS:
- Use TypeScript for all files
- Functional components with hooks
- Props interfaces for all components
- Descriptive variable names
- Comments for complex logic
- Extract reusable logic to custom hooks
- Keep components under 200 lines
- Use const for all declarations
- Destructure props immediately

SAMPLE HOMEPAGE STRUCTURE:
```tsx
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoIsThisFor />
      <MBAOverview />
      <CurriculumHighlights />
      <ThinkTankTeaser />
      <WhyThisWorks />
      <MissionStatement />
      <CTASection />
    </>
  )
}
```

NAVIGATION COMPONENT:
Sticky header with logo left, menu center, CTA right. Mobile: hamburger menu with smooth slide-in. Add scroll-triggered background blur. Animate menu items on hover.

HERO SECTION:
Full viewport height, centered content. Large headline (clamp(48px, 8vw, 96px)), subheadline below. Two CTAs: primary (filled) and secondary (outline). Animated gradient background. Scroll indicator arrow at bottom.

FEATURE CARDS:
Grid layout (4 columns desktop, 2 tablet, 1 mobile). Icon at top, heading, description. Subtle shadow, border. Hover: lift transform, shadow increase. Use Lucide icons. Fade in with stagger on scroll.

FORM IMPLEMENTATION:
Use React Hook Form with Zod schema. Inline validation, helpful errors. Loading state during submission. Success message after submit. Accessible labels, required indicators. Focus management.

COLOR PALETTE SUGGESTION:
```js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a'
  },
  accent: {
    500: '#f97316'
  },
  neutral: {
    50: '#fafaf9',
    900: '#1c1917'
  }
}
```

DEPLOYMENT:
Configure for Vercel deployment. Set up environment variables. Enable automatic deployments from Git. Configure custom domain. Set up preview deployments for PRs.

IMMEDIATE TASKS:
1. Initialize Next.js project with TypeScript
2. Install dependencies (Tailwind, Framer Motion, Headless UI, Lucide)
3. Configure Tailwind with custom theme
4. Set up fonts with next/font
5. Create base layout and navigation
6. Build homepage sections progressively
7. Add animations and interactions
8. Implement responsive design
9. Test accessibility with axe DevTools
10. Optimize performance with Lighthouse

BEST PRACTICES:
- Commit frequently with descriptive messages
- Test on mobile devices regularly
- Check accessibility at each step
- Monitor bundle size
- Use production build for testing performance
- Implement error boundaries
- Add loading states everywhere
- Handle edge cases gracefully

Build incrementally, test thoroughly, and maintain the premium aesthetic throughout. Focus on creating a fast, accessible, beautiful website that represents THE Business School's mission of accessible excellence.