# Dr. Qian Yuan - Academic Research Website

A modern, responsive academic website built with Next.js, showcasing research in Earth Sciences, Geophysics, and Planetary Science. The website features a dark theme inspired by formingworlds.space with comprehensive accessibility features and performance optimizations.

## 🌟 Features

- **Modern Design**: Dark theme with beautiful gradients and animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Accessibility First**: WCAG 2.1 AA compliant with screen reader support
- **Performance Optimized**: Static site generation with optimized assets
- **SEO Ready**: Comprehensive meta tags, sitemap, and structured data
- **Content Management**: JSON-based CMS for easy content updates
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📁 Project Structure

```
qian-yuan-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── research/           # Research pages
│   │   ├── people/             # Team page
│   │   ├── outreach/           # Outreach page
│   │   ├── news/               # News page
│   │   └── join-us/            # Join Us page
│   ├── components/             # Reusable React components
│   │   ├── Navigation.tsx      # Main navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── HeroSlider.tsx      # Homepage hero slider
│   │   └── SkipLink.tsx        # Accessibility skip link
│   └── data/                   # Content management
│       ├── content.json        # Site content
│       └── research-projects.json # Research project details
├── public/                     # Static assets
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Site structure for SEO
├── .github/workflows/          # GitHub Actions
│   └── deploy.yml              # Automated deployment
└── next.config.ts              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/username/qian-yuan-website.git
cd qian-yuan-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## 📝 Content Management

The website uses a JSON-based content management system for easy updates:

### Main Content (`src/data/content.json`)
Contains site metadata, navigation structure, and page content for:
- Site information and navigation
- Homepage sections
- Page content for People, Outreach, News, and Join Us

### Research Projects (`src/data/research-projects.json`)
Contains detailed information for research projects:
- Project descriptions and content
- Publications and references
- Image and media assets

### Updating Content

1. Edit the JSON files in `src/data/`
2. The changes will be reflected automatically in development
3. Commit and push to trigger automatic deployment

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) and Cyan (#06B6D4)
- **Background**: Slate-900 (#0F172A)
- **Text**: White and Gray variants
- **Accents**: Gradient combinations

### Typography
- **Headings**: Space Grotesk (display font)
- **Body**: Inter (readable font)
- **Responsive**: Fluid typography scales

### Components
- Consistent spacing and padding
- Hover effects and transitions
- Mobile-first responsive design
- Dark theme optimized

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **Skip Links**: Quick navigation to main content
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant ratios
- **Reduced Motion**: Respects user preferences
- **High Contrast**: Support for high contrast mode

## 🚀 Deployment

### GitHub Pages (Recommended)

The website is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

2. **Custom Domain** (Optional):
   - Add `CNAME` file to `public/` directory
   - Configure DNS settings

### Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. The static files will be in the `out/` directory
3. Upload to any static hosting service

### Environment Variables

For production deployment, you may want to set:
- `NODE_ENV=production` - Enables production optimizations
- Custom domain configuration in `next.config.ts`

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- Static export configuration
- Image optimization settings
- Performance optimizations
- GitHub Pages compatibility

### SEO Configuration
- Comprehensive meta tags in `layout.tsx`
- Sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add feature'`
6. Push: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [formingworlds.space](https://formingworlds.space)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

For questions or support, please contact:
- Email: qian.yuan@university.edu
- GitHub Issues: [Create an issue](https://github.com/username/qian-yuan-website/issues)

---

**Built with ❤️ for academic research and scientific communication**
