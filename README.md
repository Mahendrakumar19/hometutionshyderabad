# Home Tutions Hyderabad

A professional Next.js website for Home Tutions Hyderabad - connecting expert tutors with students across Hyderabad.

## Features

- 🎯 Modern, responsive design
- 📱 Mobile-friendly interface
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 📧 Contact forms integrated with WhatsApp
- 📍 Service information and location details
- 🔍 SEO optimized

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Extract the zip file**
   ```bash
   unzip home-tutions-hyderabad.zip
   cd home-tutions-hyderabad
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

## Project Structure

```
home-tutions-hyderabad/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer with links
│   ├── about/
│   │   └── page.tsx         # About Us page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── public/
│   └── logo.jpg             # Logo image
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── postcss.config.js        # PostCSS config
```

## Pages

- **Home** (`/`) - Landing page with services overview
- **About Us** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and information

## Contact Information

- **Phone**: 7498246765
- **Email**: hometutionsh@gmail.com
- **Instagram**: @home.tutions_hyderabad
- **Facebook**: Home Tutions Hyderabad
- **Location**: Hyderabad, India

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other deployment options
- Netlify
- GitHub Pages
- AWS
- Digital Ocean

## Build for Production

```bash
npm run build
npm run start
```

## Customization

### Update Contact Details
Edit the contact information in:
- `app/components/Footer.tsx` - Footer links
- `app/contact/page.tsx` - Contact page details

### Update Logo
Replace `public/logo.jpg` with your logo image

### Change Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#002855',     // Blue
  secondary: '#FFA500',   // Orange/Amber
  accent: '#0052cc',      // Accent color
}
```

### Update Content
Edit the text in page files:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/contact/page.tsx` - Contact page content

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified and optimized with Tailwind
- Pages are server-side rendered for better SEO
- Responsive design works on all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Home Tutions Hyderabad. All rights reserved.

## Support

For support or inquiries, contact:
- WhatsApp: 7498246765
- Email: hometutionsh@gmail.com
- Instagram: @home.tutions_hyderabad

---

**Ready to launch?** Follow the setup instructions above and your website will be live!
