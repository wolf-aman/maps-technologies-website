# MAPS Technologies - Electronics E-Commerce Platform

A modern, feature-rich electronics component marketplace built with Next.js 16, React, TypeScript, and Tailwind CSS. MAPS Technologies provides a comprehensive platform for browsing, searching, and discovering electronic components and professional engineering services.

## 🚀 Features

### Product Catalog
- **Multi-level Product Hierarchy**: Easy-to-navigate categories, subcategories, and individual products
- **17+ Featured Products** across 5 major categories
- **Rich Product Information**: Comprehensive descriptions, detailed specifications, feature lists, product images, and model numbers

### Service Offerings
- **12+ Professional Services** including Design, PCB Layout, EMI/EMC Testing, and Training
- **Service Details**: Capabilities, specifications, implementation examples
- **Team Consultation**: Direct engagement form for custom requests

### User Experience
- **Smart Search**: Full-text search across products and services
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

### Products (17 Total)
**Categories:**
- Power Supply (4 products): AC/DC, DC/DC converters, linear regulators
- Micro Controllers (4 products): 8-bit, 32-bit, DSP controllers
- Analog (3 products): Op-Amps, ADC/DAC, voltage references
- Communication (3 products): WiFi modules, RS485, CAN bus
- Battery & Power Management (3 products): Lithium batteries, chargers, protection

### Services (12 Total)
- Design & Schematic Services
- PCB Layout & Manufacturing
- EMI/EMC Testing & Solutions
- Specialized Training

## 🔍 Key Features

### Multi-Level Navigation
1. **Category Level**: Browse main categories
2. **Subcategory Level**: Explore subcategory options
3. **Product Level**: View detailed product information

### Search Across
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
