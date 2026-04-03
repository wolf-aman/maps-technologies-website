# MAPS Technologies - Electronics E-Commerce Platform

A modern, feature-rich electronics component marketplace built with Next.js 16, React, TypeScript, and Tailwind CSS. MAPS Technologies provides a comprehensive platform for browsing, searching, and discovering electronic components and professional engineering services.

## 🚀 Features

### Product Catalog
- **Multi-level Product Hierarchy**: Easy-to-navigate categories, subcategories, and individual products
- **17+ Featured Products** across 5 major categories
- **Rich Product Information**: Comprehensive descriptions, detailed specifications, feature lists, product images, and model numbers
- **PDF Datasheets**: Each product has downloadable PDF documentation

### Service Offerings
- **12+ Professional Services** including Design, PCB Layout, EMI/EMC Testing, and Training
- **Service Details**: Capabilities, specifications, implementation examples
- **Team Consultation**: Direct engagement form for custom requests

### User Experience
- **Smart Search**: Full-text search across products and services with real-time dropdown suggestions
- **Simplified Navigation**: Back button integrated only in navbar for cleaner UI
- **Smart Back Button**: Clears history when reaching home page, preventing accidental further navigation
- **Auto-Scroll to Top**: Home page always starts from top when accessed via navigation or home button
- **Hierarchical Navigation**: Sidebar TOC for intuitive browsing
- **Dynamic Content Panel**: Real-time updates without page reloads
- **Responsive Design**: Fully mobile-optimized interface
- **Fast Performance**: Built with Next.js Turbopack

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── products/          # Product pages & categories
│   ├── services/          # Service pages
│   ├── page.tsx           # Homepage
│   └── api/               # API routes
├── components/            # Reusable React components
├── config/                # Configuration files
├── data/                  # Product & service data
├── types/                 # TypeScript types
├── utils/                 # Utility functions
└── lib/                   # Library code

public/
├── images/                # Product & service images
└── pdfs/                  # Product datasheets (PDF files)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.1 with Turbopack
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3
- **Email**: Resend API for form submissions
- **Build Tool**: Turbopack

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file
echo "RESEND_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
```

Server runs on http://localhost:3000

### Production Build

```bash
npm run build    # Build for production
npm start        # Start production server
```

## 📊 Data Overview

### Products (5 Categories)

**Current Product Map:**
| Category | Slug | Subcategories |
|----------|------|----------------|
| **Analog** | analog | Op-Amp Circuits |
| **Power Supply** | power-supply | AC/DC Converters |
| **Communication** | communication | Wireless Modules |
| **Microcontroller** | micro-controller | 8-bit Microcontrollers |
| **Others** | other | Lithium Batteries |

### Services (Design & Testing)
- **Design & Schematic Services**
- **PCB Layout & Manufacturing**
- **EMI/EMC Testing & Solutions**
- **Specialized Training**

## 📄 Managing Product PDFs

### Location
All product PDFs are stored in:
```
public/pdfs/
```

### File Naming Convention
PDFs must be named using the **slug** from the product configuration.

**Format:** `{slug}.pdf`

**Example Values:**
```
slug: "op-amp"              → op-amp.pdf
slug: "ac-dc-converter"     → ac-dc-converter.pdf
slug: "wireless"            → wireless.pdf
slug: "8-bit"               → 8-bit.pdf
slug: "lithium"             → lithium.pdf
```

### How PDF Loading Works

The system automatically loads PDFs from `/pdfs/{slug}.pdf`:

1. **Product Configuration** (`src/config/products-toc.config.ts`):
   - Contains product slug, name, and hierarchy

2. **PDF Path Generation**:
   - System generates path: `/pdfs/{slug}.pdf`
   - Example: slug="op-amp" → `/pdfs/op-amp.pdf`

3. **PDF Viewer Component** (`src/components/PDFViewer.tsx`):
   - Uses iframe to embed PDF
   - Displays fullscreen button
   - Links to browser native viewer

### Adding New Product PDFs

**Step 1:** Update product configuration
```typescript
// src/config/products-toc.config.ts
{
  id: 'analog-filter',
  label: 'Analog Filters',
  slug: 'analog-filter',
  children: [] // or with children for subcategories
}
```

**Step 2:** Add PDF file
```
public/pdfs/analog-filter.pdf
```

**That's it!** The system automatically:
- Generates the correct PDF path
- Loads it when the product is selected
- Displays it in the PDF viewer
- Adds fullscreen functionality

### Current Available PDFs

| Product | Slug | PDF File | Status |
|---------|------|----------|--------|
| Op-Amp Circuits | op-amp | op-amp.pdf | ✅ Ready |
| AC/DC Converters | ac-dc-converter | ac-dc-converter.pdf | ✅ Ready |
| Wireless Modules | wireless | wireless.pdf | ✅ Ready |
| 8-bit Microcontrollers | 8-bit | 8-bit.pdf | ✅ Ready |
| Lithium Batteries | lithium | lithium.pdf | ✅ Ready |

### PDF Viewer Features

- ✅ Clean embedded viewer (no duplicate navbar)
- ✅ Fullscreen button (opens in browser native viewer)
- ✅ Loading indicator
- ✅ Error handling with fallback
- ✅ Responsive sizing (100% width)
- ✅ Full iframe support across browsers

## 🔍 Key Features

### Products Page
1. **Sidebar Navigation**: Collapsible categories
2. **Dynamic PDF Viewer**: Displays product datasheets
3. **Showcase Image**: Default display when no product selected
4. **Responsive Layout**: Mobile-friendly design

### Services Page
1. **Service Cards**: Visual presentation of offerings
2. **Detailed Information**: Features, specifications, examples
3. **Contact Integration**: Direct engagement form
4. **Category Navigation**: Browse by service type

### Homepage
1. **Hero Section**: Eye-catching introduction
2. **Company Info**: Mission, capabilities, domains
3. **Domain Cards**: Medical Electronics, IoT, Metering, etc.
4. **Call-to-Action**: Contact and engagement options

## 🔧 Configuration Files

### `src/config/products-toc.config.ts`
Defines product categories, subcategories, and items:
```typescript
export const productsTocStructure: TocStructure = {
  title: 'Products',
  description: [...],
  items: [
    {
      id: 'analog-category',
      label: 'Analog',
      slug: 'analog',
      children: [
        { id: 'analog-op-amp', label: 'Op-Amp Circuits', slug: 'op-amp' }
      ]
    },
    // ... more categories
  ]
};
```

### `src/config/services-toc.config.ts`
Similar structure for services with multiple service types.

### `src/types/toc.types.ts`
Defines TypeScript interfaces:
- `TocStructure` - Root structure
- `TocItem` - Category/item definition
- `ContentSection` - Content container

## 📦 Dependencies

Key packages used:
- `next` - React framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `resend` - Email service (form submissions)

## 🚀 Scalability

### Adding New Products
1. Update `src/config/products-toc.config.ts`
2. Add corresponding PDF to `public/pdfs/`
3. Add category images to `public/images/products/`

### Adding New Services
1. Update `src/config/services-toc.config.ts`
2. Add service descriptions in configuration
3. Update related service pages

### Extending Features
- All configurations are centralized
- Types ensure consistency
- Components are reusable
- Clean separation of concerns

## ✅ Quality Assurance

- **0 TypeScript Errors** - Full type safety
- **0 Console Warnings** - Clean runtime
- **Responsive Design** - Mobile to desktop
- **Performance Optimized** - Next.js best practices
- **Scalable Architecture** - Ready for growth

## 📞 Contact & Support

For inquiries about products, services, or custom solutions:
- Visit the Contact Us page
- Use the engagement forms throughout the site
- Submit briefs for custom services

## 📄 License

MAPS Technologies - All rights reserved

---

**Last Updated:** April 3, 2026
**Project Status:** Production Ready ✅

### Recent Updates (April 3, 2026)
- ✅ Simplified navbar search with controlled input pattern
- ✅ Navigation only on search result click (no auto-navigation while typing)
- ✅ Removed PageNavigation component from all pages for cleaner UI
- ✅ Back button consolidated to navbar only
- ✅ Intelligent back button that clears history when reaching home
- ✅ Home page auto-scrolls to top for consistent UX
- Product/service names
- Categories and subcategories
- Descriptions
- Specifications
- Features

### Dynamic Content Updates
- No page reloads
- Real-time content panel updates
- Smooth transitions between levels

## 🧪 Testing

### Dev Server
```bash
npm run dev
# Navigate to:
# - Products: http://localhost:3000/products
# - Services: http://localhost:3000/services
```

### Manual Testing Checklist
- [ ] Browse all product categories
- [ ] Search for products
- [ ] Navigate to product detail pages
- [ ] Access all service categories
- [ ] Test mobile responsiveness
- [ ] Submit consultation form

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables
3. Deploy automatically on push

### Self-Hosted
```bash
npm run build
PORT=3000 npm start
```

## 📦 Key Dependencies

- `next`: 16.2.1 - React framework
- `react`: 18+ - UI library
- `typescript`: Latest - Type safety
- `tailwindcss`: 3 - Styling
- `resend`: Latest - Email service

## 🔧 Configuration

### Navigation Menu
Edit `src/config/navigation.config.ts`

### Product Categories
Edit `src/config/products-toc.config.ts`

### Service Categories
Edit `src/config/services-toc.config.ts`

## 📄 Environment Variables

```env
# Required
RESEND_API_KEY=your_resend_api_key

# Optional
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📞 Contact

- **Email**: support@mapstechnologies.com
- **Website**: Visit our website through the application
- **Consultation**: Use the in-app consultation form

## 🎯 Roadmap

- [ ] E-commerce checkout
- [ ] User accounts
- [ ] Product reviews
- [ ] API endpoints
- [ ] Multi-language support
- [ ] Advanced analytics

## 📝 Known Issues

**Issue**: "No products found" on products page
**Solution**: Click a category in the sidebar to navigate to products

**Issue**: Images not loading
**Solution**: Verify image paths in data files match files in `public/images/`

---

**Version**: 1.0.0  
**Last Updated**: March 2026  
**Status**: Production Ready ✅
