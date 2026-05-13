# AI Automation Portfolio

A professional portfolio website for AI Engineers & AI Automation Specialists, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Synthwave Terminal Aesthetic**: Dark theme with purple neon accents, inspired by robbowen.digital
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **Particle Background**: Interactive particle constellation on the hero page
- **Typewriter Effect**: Cycling headlines on the landing page
- **Animated Timeline**: Experience section with scroll-triggered animations
- **Filterable Projects**: Tag-based filtering for project showcase
- **Contact Form**: Terminal-style form with validation
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: JetBrains Mono (via next/font)
- **Deployment**: Vercel-ready

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-automation-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with navbar/footer
│   ├── page.tsx           # Home/hero page
│   ├── about/             # About page
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects showcase
│   └── contact/           # Contact form
├── components/            # Reusable UI components
│   ├── ui/               # Base UI elements (Button, Input)
│   ├── ParticleCanvas.tsx # Animated particle background
│   ├── Typewriter.tsx    # Cycling text animation
│   └── ...               # Other components
├── lib/                  # Utility functions and data
│   ├── data.ts           # Portfolio content data
│   └── motion.ts         # Animation variants
└── public/               # Static assets
```

## Customization

### Content
Edit `lib/data.ts` to update:
- Skills and proficiency levels
- Experience timeline entries
- Project showcases
- Social media links

### Styling
- Colors: Edit `tailwind.config.ts` for theme colors
- Animations: Modify components for custom motion effects
- Layout: Adjust responsive breakpoints in Tailwind classes

### Contact Form
The contact form currently logs to console. To add email functionality:
1. Install a service like Resend or EmailJS
2. Update `components/ContactForm.tsx` to send emails
3. Add environment variables for API keys

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
The `vercel.json` is included for Vercel, but the app works on any Node.js hosting platform.

## Performance

- **Optimized Fonts**: JetBrains Mono loaded via next/font
- **Image Optimization**: Ready for Next.js Image component
- **Bundle Analysis**: Run `npm run build` to check bundle size
- **Accessibility**: Reduced motion support, proper ARIA labels

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with modern CSS Grid/Flexbox support

## License

This project is open source and available under the [MIT License](LICENSE).</content>
<parameter name="filePath">c:\Users\HP\Desktop\My portfolio web\README.md