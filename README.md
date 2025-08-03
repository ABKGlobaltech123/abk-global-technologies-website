# ABK Global Technologies Website

A modern, responsive corporate website built with React, TypeScript, and Tailwind CSS for ABK Global Technologies - your trusted IT solutions and services provider.

![ABK Global Technologies](https://img.shields.io/badge/ABK-Global%20Technologies-blue)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue)

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Contact Form**: Formspree integration for reliable message handling
- **Service Showcase**: Comprehensive display of IT solutions and services
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Structured for search engine optimization

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI with shadcn/ui components
- **Icons**: Lucide React and React Icons
- **Form Handling**: Formspree integration
- **Routing**: Wouter for lightweight client-side routing

## 📋 Services Offered

- **IT Security Solutions**: Comprehensive cybersecurity measures
- **Networking Solutions**: Advanced network infrastructure
- **Data Management**: Secure data storage and management
- **Backup & Archival**: Reliable backup and recovery solutions
- **Virtualization**: Modern virtualization technologies
- **Cloud Solutions**: Scalable cloud computing services
- **Consulting Services**: Expert IT consulting and strategy
- **Managed Services**: Proactive IT support and maintenance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/abk-global-technologies.git
   cd abk-global-technologies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

The website includes a professional contact form powered by Formspree. To activate:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `client/src/components/ContactForm.tsx`

For detailed setup instructions, see [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Vite
3. Deploy automatically

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Optimized images and lazy loading
- **CSS Optimization**: Purged and minified CSS
- **Fast Animations**: Hardware-accelerated CSS animations
- **Caching**: Optimized caching strategies

## 🎨 Customization

### Colors
Edit theme colors in `client/src/index.css`:
```css
:root {
  --primary: 271 57% 27%;
  --secondary: 210 100% 56%;
  --accent: 271 57% 27%;
}
```

### Typography
Customize fonts and sizes in `tailwind.config.ts`

### Content
Update business content in respective page components in `client/src/pages/`

## 📞 Contact Information

- **Email**: support@abkglobal.tech
- **Phone**: +91 8341051124
- **Address**: H501 Indis VB City Kompally, Hyderabad, India

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 About ABK Global Technologies

ABK Global Technologies is a leading IT solutions provider specializing in infrastructure solutions, consulting services, and managed IT support. We focus on delivering efficient, economically friendly solutions to help businesses thrive in the digital age.

---

**Built with ❤️ by ABK Global Technologies**