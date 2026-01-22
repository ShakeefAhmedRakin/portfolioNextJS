# Portfolio Website

A modern, performant portfolio website built with Next.js 15, featuring a content-driven architecture, comprehensive SEO optimization, and dynamic Open Graph image generation.

## Technical Stack

### Core Framework
- **Next.js 15.3.8** - React framework with App Router architecture
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development with strict mode enabled
- **Turbopack** - Fast development bundler (enabled in dev mode)

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework with PostCSS
- **shadcn/ui** - High-quality component library built on Radix UI
- **Radix UI** - Accessible, unstyled component primitives
  - `@radix-ui/react-dialog` - Modal dialogs
  - `@radix-ui/react-dropdown-menu` - Dropdown menus
  - `@radix-ui/react-slot` - Composition utilities
- **tailwindcss-animated** - Animation utilities for Tailwind
- **tailwindcss-intersect** - Intersection Observer utilities
- **tw-animate-css** - Additional animation classes
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Intelligent Tailwind class merging
- **clsx** - Conditional class name utility

### Content Management
- **Velite 0.2.2** - Type-safe content layer for MDX files
  - Schema-based content validation
  - Type generation from content schemas
  - Hot reload in development
  - Collections: Projects, Achievements, Research, Work Experiences

### Animation & Motion
- **Motion 12.11.3** (Framer Motion) - Production-ready animation library
  - Spotlight effects with animated gradients
  - Fade-up animations on scroll
  - Smooth transitions and micro-interactions
- **simplex-noise** - Procedural noise generation for visual effects

### Icons & Assets
- **lucide-react** - Icon library (primary)
- **react-icons** - Additional icon sets

### SEO & Metadata
- **schema-dts** - TypeScript types for JSON-LD structured data
- Dynamic Open Graph image generation via Edge runtime
- Comprehensive metadata management system
- Automatic sitemap generation
- Robots.txt configuration
- JSON-LD structured data for:
  - WebPage schemas
  - Person schemas
  - Organization schemas
  - Project schemas
  - Achievement schemas
  - Research schemas

### Utilities & Tools
- **sonner** - Toast notification system
- **concurrently** - Run multiple commands simultaneously
- **prettier** - Code formatting with Tailwind plugin

### Development Tools
- **ESLint 9** - Code linting with Next.js config
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing

## Architecture

### Project Structure

```
├── app/                          # Next.js App Router
│   ├── (home)/                   # Home route group
│   │   └── _components/          # Home page components
│   ├── (pages)/                  # Page route group
│   │   ├── about/                # About page
│   │   ├── projects/             # Projects listing & detail
│   │   ├── achievements/         # Achievements listing & detail
│   │   ├── research/             # Research listing & detail
│   │   └── license/              # License page
│   ├── api/                      # API routes
│   │   └── og/                   # Open Graph image generation
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/                    # Reusable components
│   ├── navigation/               # Header, footer, breadcrumbs
│   ├── ui/                       # UI primitives (shadcn/ui)
│   └── branding/                 # Logo components
├── content/                       # MDX content files
│   ├── projects/                 # Project MDX files
│   ├── achievements/             # Achievement MDX files
│   ├── research/                 # Research MDX files
│   ├── workExperience/           # Work experience MDX files
│   └── home/                     # Home page content
├── metadata/                      # SEO & metadata system
│   ├── schemas/                  # JSON-LD schema components
│   ├── generators/               # Metadata generators
│   └── shared/                   # Shared metadata utilities
├── lib/                          # Utility functions
├── hooks/                        # React hooks
├── types/                        # TypeScript type definitions
└── public/                       # Static assets
```

### Content Management System

The project uses **Velite** for type-safe content management:

- **Collections**: Defined in `velite.collections.ts` with Zod-like schemas
- **Content Types**:
  - **Projects**: Featured projects with categories, tags, thumbnails
  - **Achievements**: Awards, hackathons, recognitions
  - **Research**: Published papers with authors, keywords, abstracts
  - **Work Experiences**: Employment history with dates and descriptions
- **Type Generation**: Automatic TypeScript types generated in `.velite/`
- **MDX Support**: Full MDX support for rich content authoring

### Routing Architecture

- **Route Groups**: `(home)` and `(pages)` for logical organization
- **Dynamic Routes**: `[slug]` for projects, achievements, and research
- **Layout Hierarchy**: Root layout with header, footer, and global components
- **Loading States**: Dedicated loading.tsx files for Suspense boundaries

### Component Architecture

- **Server Components**: Default for optimal performance
- **Client Components**: Marked with `"use client"` for interactivity
- **Composition Pattern**: Wrapper components for consistent layouts
- **Variants**: Class Variance Authority for component variants
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Styling System

- **Design Tokens**: CSS custom properties for theming
- **Color System**: OKLCH color space for consistent colors
- **Typography**: Roboto variable font with fallbacks
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Built-in dark mode support (ready for implementation)

### SEO Implementation

1. **Metadata Management**:
   - Centralized metadata configuration in `metadata/site-metadata.ts`
   - Page-specific metadata generators
   - Dynamic metadata for content pages

2. **Structured Data**:
   - JSON-LD schemas for all page types
   - Person, Organization, and WebPage schemas
   - Rich snippets for projects, achievements, and research

3. **Open Graph**:
   - Dynamic OG image generation via Edge runtime
   - Custom image generation API route
   - Base64 image encoding for fonts and assets

4. **Sitemap & Robots**:
   - Dynamic sitemap generation from content
   - Configurable robots.txt
   - Priority-based URL ranking

### Performance Optimizations

- **Image Optimization**: Next.js Image component with blur placeholders
- **Font Optimization**: Variable fonts with subset loading
- **Code Splitting**: Automatic route-based code splitting
- **Edge Runtime**: OG image generation on Edge
- **Static Generation**: Pre-rendered pages where possible
- **Lazy Loading**: Intersection Observer for animations

### Animation System

- **Scroll Animations**: Intersection Observer-based fade-up animations
- **Motion Library**: Framer Motion for complex animations
- **Spotlight Effects**: Animated gradient overlays
- **Micro-interactions**: Hover states, transitions, and feedback

## Key Features

### Content-Driven Architecture
- MDX-based content authoring
- Type-safe content schemas
- Hot reload in development
- Automatic type generation

### Dynamic Open Graph Images
- Edge runtime image generation
- Custom fonts (Roboto) embedded
- Dynamic title and subtitle support
- Base64 image encoding

### Comprehensive SEO
- JSON-LD structured data
- Dynamic metadata per page
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure

### Modern UI/UX
- Responsive design
- Smooth animations
- Accessible components
- Toast notifications
- Loading states

### Developer Experience
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Path aliases (`@/*`)
- Concurrent development scripts

## Build & Development

### Scripts
- `dev` - Development server with Turbopack and Velite watch mode
- `build` - Production build (runs Velite then Next.js build)
- `start` - Production server
- `lint` - ESLint code checking

### Environment Variables
- `WEBSITE_URL` - Base URL for metadata and sitemap generation

### Build Process
1. Velite processes MDX files and generates types
2. Next.js builds the application
3. Static pages are pre-rendered
4. Dynamic routes are prepared for ISR/SSR

## Technical Decisions

### Why Velite?
- Type-safe content management
- MDX support out of the box
- Schema validation
- Zero runtime overhead
- Excellent developer experience

### Why Edge Runtime for OG Images?
- Faster response times
- Lower latency
- Cost-effective
- Scales automatically

### Why Tailwind CSS 4?
- Latest features and performance improvements
- Better PostCSS integration
- Improved developer experience
- Modern CSS features

### Why Motion (Framer Motion)?
- Production-ready animations
- Excellent performance
- Rich animation API
- Active maintenance

## Browser Support

- Modern browsers with ES2017+ support
- CSS Grid and Flexbox support required
- Intersection Observer API support
- CSS Custom Properties support

## License

See the [License page](/license) for details on content and code licensing.
