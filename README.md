# MAPS Technologies Website

A modern, responsive, and informational website for MAPS Technologies - showcasing company information, products, services, and expertise in technology product development, manufacturing, and training.

## 📋 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Customization](#customization)
- [Images & Assets](#images--assets)
- [Development](#development)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

### Purpose
This is an **informational website** designed to provide:
- Company history and mission/vision
- Product information (Power Supply, Micro Controllers, Analog, Communication, etc.)
- Service offerings (Design, PCB Layout, EMI/EMC Testing, Training)
- Educational resources about technology
- Contact information

### Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Server Components** - Optimized performance

### Key Features
✅ Fully responsive (mobile, tablet, desktop)  
✅ Component-based architecture  
✅ Sticky navigation with dropdowns  
✅ Configuration-driven navigation  
✅ Type-safe with TypeScript  
✅ SEO optimized  
✅ Fast page loads with Next.js optimization

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit **http://localhost:3000** to view the site.

### Development Commands

```bash
npm run dev         # Start development server (hot reload)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

---

## 📁 Project Structure

```
MAPS Technologies/
│
├── public/                      # Static assets
│   └── images/                  # All images
│       ├── logo.jpg            # Company logo
│       ├── hero-lab.png        # Hero section image
│       ├── founder.png         # Founder photo
│       └── cofounder.png       # Co-founder photo
│
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── layout.tsx          # Root layout with Navbar
│   │   ├── page.tsx            # Homepage
│   │   ├── products/           # Product pages
│   │   │   ├── page.tsx        # Main products page
│   │   │   ├── power-supply/
│   │   │   ├── micro-controller/
│   │   │   ├── analog/
│   │   │   ├── communication/
│   │   │   └── other/
│   │   └── services/           # Service pages
│   │       ├── page.tsx        # Main services page
│   │       ├── design/
│   │       ├── pcb-layout/
│   │       ├── emi-emc/
│   │       └── training/
│   │
│   ├── components/              # Reusable React components
│   │   ├── Hero.tsx            # Hero section with image
│   │   ├── Timeline.tsx        # Company milestones
│   │   ├── MissionVision.tsx   # Mission & vision cards
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Navbar.tsx          # Navigation bar (sticky)
│   │   ├── Dropdown.tsx        # Dropdown menus
│   │   ├── NavLink.tsx         # Smart link component
│   │   └── PageNavigation.tsx  # Back/Home buttons
│   │
│   ├── config/
│   │   └── navigation.config.ts # Navigation structure
│   │
│   └── types/
│       └── navigation.types.ts  # TypeScript definitions
│
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
└── README.md                   # This file
```

---

## 🧩 Components

All components are located in `src/components/` and built with TypeScript, TailwindCSS, and responsive design.

### 1. Hero Component (`Hero.tsx`)

**Purpose:** Main landing section with heading, description, CTA button, and image.

**Props:**
```typescript
interface HeroProps {
  title: string;                // Main heading
  description: string;          // Supporting text
  buttonText?: string;          // CTA button (optional)
  buttonLink?: string;          // Button destination (optional)
  imageSrc?: string;            // Hero image path (optional)
}
```

**Usage:**
```tsx
<Hero
  title="Engineering the Future"
  description="Your description here"
  buttonText="LEARN MORE"
  buttonLink="#about"
  imageSrc="/images/hero-lab.png"
/>
```

**Responsive:** Stacked on mobile, side-by-side on desktop

---

### 2. Timeline Component (`Timeline.tsx`)

**Purpose:** Display company milestones in a responsive grid.

**Props:**
```typescript
interface Milestone {
  year: string;         // Year or date
  title: string;        // Milestone title
  description: string;  // Description
}

interface TimelineProps {
  title: string;               // Section title
  milestones: Milestone[];     // Array of milestones
}
```

**Usage:**
```tsx
const milestones = [
  { year: '1992', title: 'Founded', description: '...' },
  { year: '2023', title: 'Expansion', description: '...' },
];

<Timeline title="Our History" milestones={milestones} />
```

**Responsive:** 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)

---

### 3. MissionVision Component (`MissionVision.tsx`)

**Purpose:** Display mission and vision side-by-side with icons.

**Props:**
```typescript
interface Statement {
  title: string;        // "Our Mission" or "Our Vision"
  description: string;  // Full statement text
}

interface MissionVisionProps {
  sectionTitle?: string;  // Section heading (optional)
  mission: Statement;     // Mission statement
  vision: Statement;      // Vision statement
}
```

**Usage:**
```tsx
const mission = {
  title: 'Our Mission',
  description: 'To be a Premier organization...'
};

const vision = {
  title: 'Our Vision',
  description: 'To become a Centre of Excellence...'
};

<MissionVision mission={mission} vision={vision} />
```

**Responsive:** Stacked on mobile, side-by-side on desktop

---

### 4. Footer Component (`Footer.tsx`)

**Purpose:** Site footer with company info, quick links, and social media.

**Props:**
```typescript
interface FooterProps {
  companyName?: string;
  companyInfo?: {
    fullName: string;
    address?: string;
    phone?: string;
    email?: string;
  };
  quickLinks?: QuickLink[];      // Navigation links
  socialLinks?: SocialLink[];    // Social media links
}
```

**Social Icons Supported:** Facebook, Twitter, LinkedIn, Instagram, YouTube

**Responsive:** Stacked on mobile, 3 columns on desktop

---

### 5. Navbar Component (`Navbar.tsx`)

**Purpose:** Main navigation bar with logo, menu items, and dropdowns.

**Features:**
- Sticky positioning (stays at top when scrolling)
- Dropdown menus for Products and Services
- Mobile hamburger menu
- Search icon
- Fully responsive

**Configuration:** Edit `src/config/navigation.config.ts` to modify menu items

---

### 6. Dropdown Component (`Dropdown.tsx`)

**Purpose:** Reusable dropdown menu with dual functionality.

**Features:**
- **Desktop:** Clicking parent navigates to main page, hovering shows dropdown
- **Mobile:** Tap to navigate, separate button to expand subcategories
- 200ms hover delay to prevent premature closing
- Smart hover handling

**How it works:**
- Click "Products" → Navigate to `/products`
- Hover "Products" → Show dropdown with subcategories
- Same for "Services"

---

### 7. PageNavigation Component (`PageNavigation.tsx`)

**Purpose:** Back and Home navigation buttons for content pages.

**Usage:**
```tsx
import PageNavigation from '@/components/PageNavigation';

<PageNavigation />
```

**Features:**
- Back button: Uses browser history
- Home button: Links to homepage
- Consistent across all pages

---

## 🎨 Customization

### Updating Homepage Content

**File:** `src/app/page.tsx`

**Change Timeline:**
```tsx
const milestones = [
  { year: '2024', title: 'New Event', description: '...' },
  // Add more milestones
];
```

**Change Mission/Vision:**
```tsx
const mission = {
  title: 'Our Mission',
  description: 'Your new mission text...'
};
```

**Update Footer:**
```tsx
<Footer
  quickLinks={[
    { label: 'New Link', href: '/new-page' }
  ]}
  socialLinks={[
    { name: 'LinkedIn', href: 'https://...', icon: 'linkedin' }
  ]}
/>
```

---

### Modifying Navigation

**File:** `src/config/navigation.config.ts`

**Add Menu Item:**
```typescript
{
  label: 'About',
  href: '/about',
  type: 'internal',
  description: 'About our company'
}
```

**Add Dropdown Item:**
```typescript
{
  label: 'Products',
  href: '/products',
  type: 'internal',
  dropdown: [
    { label: 'New Product', href: '/products/new', type: 'internal' }
  ]
}
```

**Link Types:**
- `internal` - Pages in your app (`/products`)
- `external` - Outside websites (`https://example.com`)
- `pdf` - PDF documents (`/documents/file.pdf`)
- `hash` - Same-page anchors (`#contact`)

---

### Changing Colors

**Update Tailwind classes in components:**

```tsx
// Change primary color from blue to purple
bg-blue-600 → bg-purple-600
text-blue-600 → text-purple-600
hover:bg-blue-50 → hover:bg-purple-50
```

**Or edit:** `tailwind.config.js` for global theme

---

### Creating New Pages

1. **Create page file:**
   ```bash
   src/app/about/page.tsx
   ```

2. **Add basic structure:**
   ```tsx
   import PageNavigation from '@/components/PageNavigation';
   
   export default function AboutPage() {
     return (
       <div className="min-h-screen p-8">
         <PageNavigation />
         <h1>About Us</h1>
         {/* Your content */}
       </div>
     );
   }
   ```

3. **Add to navigation:**
   ```typescript
   // In navigation.config.ts
   { label: 'About', href: '/about', type: 'internal' }
   ```

---

## 🖼️ Images & Assets

### Required Images

| Image | Path | Size | Purpose |
|-------|------|------|---------|
| **Hero Image** | `/public/images/hero-lab.png` | 1200x800px | Homepage hero section |
| **Logo** | `/public/images/logo.jpg` | Flexible | Navbar logo |
| **Founder** | `/public/images/founder.png` | Any | Team section |
| **Co-founder** | `/public/images/cofounder.png` | Any | Team section |

### Image Guidelines

**Hero Image:**
- Recommended size: 1200x800px (3:2 ratio)
- Format: PNG or JPG
- Content: Professional lab/technology workspace
- Optimized: < 500KB for fast loading

**To Replace Hero Image:**
1. Save your image as: `public/images/hero-lab.png`
2. Refresh browser - automatically appears

**To Use Different Image Name:**
```tsx
// In page.tsx
<Hero imageSrc="/images/your-new-image.jpg" ... />
```

### Adding New Images

1. Place image in `public/images/`
2. Reference with `/images/filename.jpg` (not `/public/images/`)
3. Use Next.js `<Image>` component for optimization:
   ```tsx
   import Image from 'next/image';
   
   <Image 
     src="/images/photo.jpg" 
     alt="Description"
     width={800}
     height={600}
   />
   ```

---

## 🎛️ Design System

### Colors
- **Primary:** Blue (`blue-600`, `blue-700`)
- **Text:** Gray (`gray-900` headings, `gray-700` body)
- **Backgrounds:** White, `slate-50`, `blue-50`
- **Borders:** `gray-200`, `gray-300`

### Spacing
- **Sections:** `py-16 lg:py-20` (64-80px vertical)
- **Containers:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Gaps:** `gap-6 lg:gap-8` (24-32px)

### Typography
- **Hero:** `text-3xl sm:text-4xl lg:text-5xl` (30-48px)
- **Section Titles:** `text-3xl sm:text-4xl` (30-36px)
- **Headings:** `text-xl sm:text-2xl` (20-24px)
- **Body:** `text-base` (16px)

### Responsive Breakpoints
- `sm:` 640px (tablet)
- `md:` 768px (small laptop)
- `lg:` 1024px (desktop)
- `xl:` 1280px (large desktop)

---

## 🔧 Development

### File Organization

**DO:**
- ✅ Keep components in `src/components/`
- ✅ Edit `navigation.config.ts` for menu changes
- ✅ Use TypeScript types
- ✅ Document complex components
- ✅ Test responsive design

**DON'T:**
- ❌ Hardcode navigation in components
- ❌ Skip TypeScript types
- ❌ Create duplicate components
- ❌ Mix concerns (keep logic separate from UI)

### Component Best Practices

1. **Self-contained** - Each component in its own file
2. **Typed** - All props have TypeScript interfaces
3. **Documented** - JSDoc comments explaining usage
4. **Reusable** - Can be used in multiple places
5. **Responsive** - Works on all screen sizes

### Code Style

- Use functional components with hooks
- Props interfaces at top of file
- Descriptive variable names
- Extract complex logic to separate functions
- Comment non-obvious code

---

## 🐛 Troubleshooting

### Common Issues

**Problem: Image not displaying**
- ✅ Ensure image exists in `/public/images/`
- ✅ Check file extension matches code (`.jpg` vs `.png`)
- ✅ Path should be `/images/file.jpg` (not `/public/images/`)

**Problem: Navigation not working**
- ✅ Check `navigation.config.ts` syntax
- ✅ Ensure page file exists in `src/app/`
- ✅ Verify `href` matches folder structure
- ✅ Run `npm run build` to check for errors

**Problem: Dropdown not shown**
- ✅ Hover over parent item (desktop)
- ✅ Check `dropdown` array has items
- ✅ Verify no TypeScript errors

**Problem: Build errors**
```bash
# Clear cache and rebuild
Remove-Item -Recurse -Force .next
npm run build
```

**Problem: TypeScript errors**
```bash
# Check for errors
npm run build

# Check types
npx tsc --noEmit
```

### Getting Help

1. Check browser console for errors (F12)
2. Read error messages carefully
3. Verify file paths and imports
4. Test on clean browser (clear cache)
5. Check this README for guidance

---

## 📱 Responsive Design

### Mobile (< 768px)
- Stacked layouts
- Hamburger menu
- Full-width components
- Touch-friendly buttons

### Tablet (768px - 1023px)
- 2-column grids
- Horizontal navigation
- Balanced layouts

### Desktop (1024px+)
- Multi-column grids
- Hover interactions
- Maximum content width: 1280px
- Side-by-side layouts

### Testing Responsiveness

1. Use browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test common sizes: 375px, 768px, 1024px, 1440px
4. Test actual mobile devices

---

## ✅ Feature Summary

### Navigation System
- ✅ Sticky navbar on all pages
- ✅ Clickable parent items (Products/Services navigate to main pages)
- ✅ Hover dropdown menus
- ✅ Mobile hamburger menu
- ✅ Configuration-based (easy to edit)
- ✅ 200ms hover delay (better UX)

### Homepage
- ✅ Hero section with image
- ✅ Timeline with company milestones
- ✅ Mission & Vision cards
- ✅ Professional footer

### All Pages
- ✅ Back and Home navigation buttons
- ✅ Consistent layout
- ✅ Responsive design
- ✅ Fast loading
- ✅ SEO optimized

---

## 📞 Support

For questions or issues:
1. Check this README first
2. Review component documentation
3. Check browser console for errors
4. Contact development team

---

## 📄 License

All rights reserved © 2026 MAPS Technologies

---

**Last Updated:** March 12, 2026  
**Version:** 2.0 (Component-based redesign)  
**Maintainer:** Development Team
