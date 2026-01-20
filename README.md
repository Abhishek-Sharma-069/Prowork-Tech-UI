# Prowork Tech - Home Page

A modern, responsive single-page website for Prowork Tech featuring services, demonstrations, testimonials, FAQs, and a functional contact form.

## 🚀 Features

- **Hero Section** - Eye-catching hero section with company name, tagline, and CTA buttons
- **Services Section** - 6 comprehensive services with descriptions
- **Demonstration Section** - Visual workflow steps showing how we work
- **Testimonials** - Client testimonials showcasing our work
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Form** - Fully functional contact form with localStorage integration
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Modern Design** - Beautiful UI built with Tailwind CSS

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS v4.1** - Latest utility-first CSS framework
- **LocalStorage** - Client-side form data storage

## 📁 Project Structure

```
vite-project/
├── public/                      # Static assets
├── src/
│   ├── components/             # React components
│   │   └── sections/          # Page sections
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Demonstration.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       ├── ContactForm.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts       # Barrel exports
│   ├── hooks/                  # Custom React hooks
│   │   ├── useContactForm.ts
│   │   └── useFAQ.ts
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/                  # Utility functions and constants
│   │   ├── constants.ts
│   │   └── localStorage.ts
│   ├── styles/                 # Global styles
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind CSS imports
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── vite.config.ts              # Vite config with Tailwind v4 plugin
```

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 🎨 Features

- **Modular Architecture** - Clean separation of concerns with organized components, hooks, and utilities
- **Type Safety** - Full TypeScript support with type-only imports
- **Custom Hooks** - Reusable hooks for form handling and FAQ management
- **Tailwind CSS v4.1** - Latest version with CSS-first configuration using Vite plugin
- **Industrial Structure** - Professional folder organization following best practices

## 📝 Contact Form Functionality

The contact form stores submitted data in the browser's localStorage. To view submitted forms:

1. Open browser DevTools (F12)
2. Go to the "Application" or "Storage" tab
3. Click on "Local Storage" > your domain
4. Look for the key: `contactSubmissions`

You can also check the browser console to see form submissions logged there.

## 🚀 Deployment

### Option 1: Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite and deploy

4. **Build Settings** (if needed):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Deploy to Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   netlify deploy --prod
   ```

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Option 3: Deploy via Netlify Drop (No Git Required)

1. Build your project: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## 🔧 Configuration

### Tailwind CSS v4.1

This project uses **Tailwind CSS v4.1** with the new CSS-first approach:

- **Vite Plugin**: `@tailwindcss/vite` is configured in `vite.config.ts`
- **CSS Import**: Uses `@import "tailwindcss"` in `src/index.css`
- **No Config File**: Tailwind v4 uses CSS-based configuration (no `tailwind.config.js` needed)

### TypeScript

TypeScript configuration is in `tsconfig.json` and `tsconfig.app.json`. The project uses type-only imports for better tree-shaking and performance.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a project for Prowork Tech. For contributions or suggestions, please contact the development team.

## 📄 License

© 2024 Prowork Tech. All rights reserved.

## 📞 Contact

For questions or support, please use the contact form on the website or reach out to:
- Email: contact@proworktech.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ by Prowork Tech**
