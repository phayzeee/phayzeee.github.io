# Android Developer Portfolio

A modern, professional portfolio website for Senior Android Developers. Built with Next.js 14, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/1200x630/171717/3DDC84?text=Android+Developer+Portfolio)

## ✨ Features

- **Android-Focused Design**: Clean, modern aesthetic that positions Android development as the core identity
- **Dark Mode Support**: Seamless light/dark theme switching with system preference detection
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance Focused**: Optimized images and lazy loading
- **TypeScript**: Full type safety throughout the codebase

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/android-portfolio.git

# Navigate to the project
cd android-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
android-portfolio/
├── public/
│   ├── images/
│   │   └── projects/          # Project screenshots go here
│   └── resume.pdf             # Your resume file
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page composition
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Experience.tsx     # Work experience timeline
│   │   ├── Skills.tsx         # Skills & technologies
│   │   ├── Contact.tsx        # Contact form & info
│   │   └── Footer.tsx         # Site footer
│   └── data/
│       └── portfolio.ts       # All portfolio content
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json
```

## 🎨 Customization Guide

### Step 1: Update Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Senior Android Developer",
  tagline: "Your professional tagline",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/resume.pdf",
  heroSummary: "Your professional summary...",
  // ... update about section
};
```

### Step 2: Update Projects

Each project follows this structure:

```typescript
{
  id: "unique-project-id",
  name: "Project Name",
  platform: "android", // or "flutter"
  featured: true, // Featured projects appear larger
  shortDescription: "Brief one-liner",
  
  description: {
    problem: "What challenge did you solve?",
    approach: "How did you engineer the solution?",
    outcome: "What were the measurable results?",
  },
  
  techStack: ["Kotlin", "Jetpack Compose", "..."],
  
  screenshots: [
    "/images/projects/project-1.png",
    "/images/projects/project-2.png",
  ],
  
  links: {
    github: "https://github.com/...", // or null
    playStore: "https://play.google.com/...", // or null
  },
  
  highlights: [
    "500K+ users",
    "4.8★ rating",
    "Key metric",
  ]
}
```

### Step 3: Add Project Screenshots

1. Add your screenshots to `public/images/projects/`
2. Recommended dimensions: 1920x1200 (16:10 aspect ratio)
3. Supported formats: PNG, JPG, WebP
4. Update the `screenshots` array in each project

### Step 4: Update Experience

```typescript
export const experience = [
  {
    id: "company-id",
    company: "Company Name",
    role: "Your Role",
    period: "2022 – Present",
    location: "City, State",
    type: "Full-time",
    description: "Brief role description",
    responsibilities: [
      "Key achievement or responsibility",
      // ...
    ],
    techStack: ["Tech", "Stack", "Used"]
  },
  // ...
];
```

### Step 5: Update Skills

Skills are organized by priority:

```typescript
export const skills = {
  primary: {      // Android (most prominent)
    title: "Android Development",
    skills: [{ name: "Kotlin", level: "Expert" }, ...]
  },
  secondary: {    // Flutter (secondary)
    title: "Cross-Platform",
    skills: [...]
  },
  architecture: { // Architecture patterns
    title: "Architecture & Patterns",
    skills: [...]
  },
  tools: {        // Tools & platforms
    title: "Tools & Platforms",
    skills: [...]
  },
  domain: {       // Domain knowledge (de-emphasized)
    title: "Domain Exposure",
    skills: [...]
  }
};
```

### Step 6: Add Your Resume

Place your resume PDF at `public/resume.pdf`

### Step 7: Customize Colors (Optional)

Edit `tailwind.config.js` to change the accent color:

```javascript
colors: {
  accent: {
    DEFAULT: '#3DDC84', // Android green
    // ... shades
  },
}
```

### Step 8: Contact Form Integration

The contact form in `src/components/Contact.tsx` is currently a demo. To make it functional:

**Option 1: Formspree**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: new FormData(e.target as HTMLFormElement),
    headers: { 'Accept': 'application/json' }
  });
  // Handle response
};
```

**Option 2: Custom API Route**
Create `src/app/api/contact/route.ts` and implement your email sending logic.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Self-Hosted

```bash
npm run build
npm start
```

Or export as static:
```bash
# Add to next.config.js: output: 'export'
npm run build
# Deploy the 'out' folder
```

## 📝 Content Guidelines

### Writing Project Descriptions

Follow the **Problem → Approach → Outcome** format:

- **Problem**: What was the business or technical challenge?
- **Approach**: What Android engineering decisions did you make?
- **Outcome**: What were the measurable results?

Example:
> **Problem**: Legacy app suffered from poor performance and 3.2★ rating.
> 
> **Approach**: Migrated to Clean Architecture with Jetpack Compose, implemented proper coroutine scopes.
> 
> **Outcome**: Improved crash-free rate to 99.9%, boosted rating to 4.6★.

### Platform Positioning

- **Android projects** come first and are more prominent
- **Flutter projects** are secondary, clearly marked as cross-platform
- Payments, banking, POS are described as **domain features**, not specializations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for Android developers
