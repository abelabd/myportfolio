# Abel Desta - Premium Portfolio Website

A modern, premium portfolio website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Designed with Apple-level simplicity, clean typography, and smooth animations.

## Features

✨ **Modern Design**
- Clean, minimal Apple-inspired aesthetic
- Custom color palette (#3A6D80, #F3CD53, #D56729, #9D402D)
- Perfectly crafted typography and spacing

🎬 **Smooth Animations**
- Framer Motion for elegant, non-intrusive transitions
- Page scroll animations
- Hover effects and interactive elements

🌙 **Dark Mode**
- Built-in dark mode support with `next-themes`
- System preference detection
- Seamless theme switching

📱 **Responsive**
- Mobile-first design
- Perfect on all screen sizes
- Optimized touch interactions

🚀 **Performance**
- Fast page loads
- Optimized images
- Clean, efficient code

## Pages & Sections

- **Home Page** - Hero section with call-to-action buttons
- **Projects** - Showcase of 3 featured projects with interactive cards
- **Project Details** - Dynamic project pages with full information
- **Skills** - Organized skills across three categories
- **About** - Personal background and education
- **Contact** - Contact form and social links
- **Navigation** - Sticky navbar with mobile menu
- **Footer** - Professional footer section

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: Version 19
- **Styling**: Tailwind CSS 4.2
- **Animations**: Framer Motion 12.38
- **Theme**: next-themes
- **Icons**: lucide-react
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd abel-desta-portfolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## Development

### Project Structure
```
/app
  - layout.tsx          # Root layout with theme provider
  - page.tsx            # Home page
  - globals.css         # Global styles & design tokens
  - /projects
    - layout.tsx        # Projects layout
    - /[id]
      - page.tsx        # Dynamic project detail page

/components
  - navbar.tsx          # Navigation bar
  - hero.tsx            # Hero section
  - projects.tsx        # Projects grid
  - skills.tsx          # Skills section
  - about.tsx           # About section
  - contact.tsx         # Contact form
  - footer.tsx          # Footer
```

### Customization

#### Colors
Edit the color palette in `app/globals.css`:
```css
:root {
  --primary: #3A6D80;
  --accent: #F3CD53;
  --secondary: #D56729;
  /* ... other colors ... */
}
```

#### Projects
Update projects data in `components/projects.tsx` and `app/projects/[id]/page.tsx`

#### Personal Info
Update your name, email, and links in:
- `components/navbar.tsx`
- `components/hero.tsx`
- `components/about.tsx`
- `components/contact.tsx`

#### SEO
Update metadata in `app/layout.tsx` and customize `app/sitemap.ts`

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js configuration
4. Click "Deploy"

```bash
pnpm deploy
```

### Deploy to Other Platforms

- **Netlify**: Connect GitHub, auto-detects Next.js
- **Railway**: Connect repo and deploy
- **Self-hosted**: Use `pnpm build && pnpm start`

## Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimal dependencies
- **Animations**: GPU-accelerated with Framer Motion

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

- Meta tags and Open Graph configured
- Sitemap and robots.txt included
- Mobile-friendly
- Fast Core Web Vitals
- Semantic HTML

## License

Created with ❤️ by Abel Desta

## Contact

- Email: abeldesta140@gmail.com
- GitHub: https://github.com/abelabd
- LinkedIn: https://www.linkedin.com/in/abel-desta-385526178/
