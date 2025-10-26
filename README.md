# CROWDIA Landing Page

A stunning, SEO-optimized marketing landing page for CROWDIA - the social event discovery platform transforming how people experience their cities.

## 🎨 Features

- **Full-screen video hero** with auto-play support (including Safari)
- **Dark mode design** with glowing magenta accents throughout
- **Sparkle button CTAs** with shimmer and glow effects
- **Responsive layout** optimized for all devices
- **SEO optimized** with comprehensive meta tags
- **Custom branding** following CROWDIA's brand guidelines
- **Smooth animations** and transitions
- **Modern tech stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

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

Open [http://localhost:3000](http://localhost:3000) (or next available port) to view the landing page.

## 🎨 Brand Colors

- **Magenta**: `#FF007F` - Primary brand color for CTAs and accents
- **Charcoal**: `#2E2E2E` - Background and contrast
- **White**: `#FFFFFF` - Text and clarity

## 📁 Project Structure

```
crowdia-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with SEO meta tags
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── video-hero.tsx      # Video background hero section
│   └── ui/
│       └── sparkle-button.tsx  # Glowing magenta CTA button
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    ├── Glowing_Night_City_Trails_Video.mp4
    └── crowdia-logo-icon-transparent.png
```

## 🎯 Key Sections

1. **Hero Section** - Full-screen video with logo and primary CTA
2. **Features** - 6 key value propositions with glowing borders
3. **How It Works** - 3-step user journey
4. **Social Proof** - Stats and vision statement
5. **Footer CTA** - Final conversion opportunity

## 🔧 Customization

### Updating Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  magenta: { ... },
  charcoal: { ... }
}
```

### Changing Content

Edit `app/page.tsx` to update copy, sections, or structure.

### Replacing Video

Replace `public/Glowing_Night_City_Trails_Video.mp4` with your video file.

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (desktop & mobile)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🎬 Video Background Notes

The video hero component includes:
- Auto-play with mute (required for most browsers)
- `playsInline` attribute for mobile Safari
- Fallback poster image
- Event listeners for Safari compatibility
- Dark overlay for text readability

## 📄 License

© 2025 CROWDIA. All rights reserved.