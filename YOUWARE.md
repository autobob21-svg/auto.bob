# YOUWARE.md

## Project Overview
This project is a premium one-page website for "Šlep Služba Simić", a professional towing service in Novi Sad, Serbia. It is built using React, TypeScript, Vite, and Tailwind CSS, following a strict Blue/Black/Red color scheme and automotive aesthetic.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Custom configuration for colors and fonts)
- **Icons**: Lucide React
- **Fonts**: Poppins (Headings), Inter (Body), Montserrat (Alternative)

## Key Features
- **Responsive Design**: Mobile-first approach, fully responsive across all devices.
- **Sticky Header**: Navigation bar that changes style on scroll.
- **Hero Section**: High-impact hero with video background/gradient and clear CTAs.
- **Service Showcase**: Detailed service cards with icons.
- **Process Steps**: Visual 4-step process guide.
- **Gallery**: Lightbox-enabled image gallery with zoom effect.
- **Testimonials**: Auto-scrolling customer reviews.
- **FAQ**: Accordion-style frequently asked questions.
- **Contact**: Comprehensive contact section with form and map link.
- **Performance**: Optimized images (WebP/Unsplash), lazy loading, and code splitting.

## Project Structure
```
src/
  components/
    Header/       # Sticky navigation and mobile menu
    Hero/         # Main landing area with CTAs
    Process/      # 4-step process visualization
    Services/     # Service cards
    Vehicles/     # Vehicle types grid
    Coverage/     # Service area information
    WhyUs/        # Benefits and statistics
    Gallery/      # Image gallery with lightbox
    Video/        # Video presentation section
    Testimonials/ # Customer reviews slider
    FAQ/          # Accordion FAQ section
    Contact/      # Contact form and footer
  data/
    mock/         # Static data for site content (siteInfo.ts)
  App.tsx         # Main component assembling all sections
  main.tsx        # Entry point
  index.css       # Global styles and Tailwind directives
```

## Design System
- **Colors**:
  - Primary: Deep Blue (`#1E40AF`)
  - Secondary: Black (`#000000`)
  - Accent: Bright Red (`#DC2626`)
- **Typography**:
  - Headings: `font-heading` (Poppins)
  - Body: `font-sans` (Inter)

## Development Commands
- `npm install`: Install dependencies
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Future Improvements
- **Backend Integration**: Connect the contact form to a backend service (e.g., Youware Backend) for email sending and data storage.
- **Real Map**: Replace the Google Maps link with an interactive map component.
- **SEO Optimization**: Further enhance meta tags and structured data for better search engine visibility.
