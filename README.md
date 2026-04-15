# MAPS Technologies - Electronics E-Commerce Platform

Production-ready electronics component marketplace with products, services, search, and contact forms.

---

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

---

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
NODE_ENV=production npm start
```

### Server Requirements
- Node.js 18+ installed
- `.env` file with all variables configured
- Port 3000 available (or set custom PORT)

---

## 🔧 Environment Configuration

Your `.env` file contains:
- `RESEND_API_KEY` - Email service API key
- `RESEND_FROM_EMAIL` - Verified sender email
- Contact email addresses

The `.env` file is managed in your private repository and not committed to version control.

---

## 📁 Project Structure

```
src/
├── app/              # Pages and API routes
├── components/       # React components
├── config/           # Configuration files
├── lib/              # Utilities (logger, validator)
├── types/            # TypeScript types
└── styles/           # Global styles

public/
├── images/           # Product images
└── pdfs/             # Product datasheets
```

---

## ✅ Build Status

- ✓ Compiles successfully in 3.3s
- ✓ Zero TypeScript errors
- ✓ All 14 pages generated
- ✓ Ready to deploy

---

## 🔒 Security Features

- Input validation on all forms
- XSS prevention via HTML sanitization
- Security headers configured
- Environment variables for all secrets
- Error boundary error handling
- Structured logging for monitoring

---

## 📊 Key Features

- Multi-level product catalog with PDF datasheets
- Professional services showcase
- Smart search functionality
- Email submission via Resend API
- Fully responsive mobile design
- Dynamic domain-specific applications

---

## 🛠️ Tech Stack

- Next.js 16.2.1 with Turbopack
- React 18.3.0
- TypeScript 5.4.5 (strict mode)
- Tailwind CSS 3.4.3
- Resend API for emails
- PDF.js for document viewing

---

## 📝 Common Commands

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build for production
npm run build

# Start production server
NODE_ENV=production npm start

# Run linter
npm run lint
```

---

## 📞 Contact

- **Website**: https://www.mapstechnologies.com
- **Email**: info@mapstech.co.in
- **Phone**: +91 9145890775
- **Address**: 57, Officers Campus Ext., Sirsi Road, Jaipur, India, 302012

---

## 📄 License

MAPS Technologies - All rights reserved © 2022-2026

---

**Status**: ✅ Production Ready | Build: ✓ Success | Deploy: Ready Now
