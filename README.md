# ECLIPSE Framework

A modern, interactive web application built with React and TypeScript, featuring a sophisticated mobile-first design and multi-screen user experience.

## 🌟 Overview

ECLIPSE is an advanced web framework that provides a seamless, responsive experience across both desktop and mobile platforms. The application features a dynamic interface with smooth animations, interactive chat functionality, and a comprehensive dashboard system.

## ✨ Features

### Multi-Platform Experience
- **Responsive Design**: Automatically adapts between desktop and mobile layouts
- **Mobile-First Architecture**: Dedicated mobile components with native-like interactions
- **Progressive Enhancement**: Optimized experience for each platform

### Interactive Components
- **Dynamic Chat Interface**: Real-time chat experience with smooth animations
- **Comprehensive Dashboard**: Feature-rich dashboard with data visualization
- **Onboarding System**: Guided user introduction with persistent state management
- **Profile Management**: User profile customization and settings

### Design & Animation
- **Framer Motion Integration**: Smooth, professional animations throughout
- **Tailwind CSS**: Modern, utility-first styling approach
- **shadcn/ui Components**: High-quality, accessible UI components
- **Cosmic Theme**: Beautiful gradient backgrounds with neural grid effects
- **Dark/Light Mode Support**: Comprehensive theming system

### Technical Architecture
- **TypeScript**: Full type safety and enhanced developer experience
- **Component-Based**: Modular, reusable component architecture
- **Custom Hooks**: Efficient state management and logic separation
- **Responsive Navigation**: Smart routing system for different screen sizes

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1**: Modern React with hooks and concurrent features
- **TypeScript**: Type-safe development environment
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Framer Motion**: Production-ready motion library
- **Lucide React**: Beautiful icon library

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Recharts**: Chart and data visualization library

### Mobile Development
- **Capacitor**: Native mobile app capabilities
- **Progressive Web App**: Web-based mobile experience
- **Touch-Optimized**: Mobile-first interaction design

## 📱 Application Structure

### Desktop Experience
```
Landing Page → Dashboard → Chat Interface
     ↓              ↓            ↓
Hero Section   Data Insights   AI Chat
```

### Mobile Experience
```
Onboarding → Home → Dashboard/Chat/Profile
     ↓         ↓         ↓
Setup Flow   Navigation   Feature Access
```

### Key Components
- **LoadingScreen**: Animated startup experience
- **HeroSection**: Compelling landing page with call-to-action
- **Dashboard**: Analytics and insights interface
- **EclipseChat**: Interactive chat functionality
- **MobileApp**: Complete mobile experience wrapper
- **MobileOnboarding**: First-time user setup flow

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eclipse-framework
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

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── mobile/          # Mobile-specific components
│   ├── Dashboard.tsx    # Main dashboard interface
│   ├── EclipseChat.tsx  # Chat functionality
│   ├── HeroSection.tsx  # Landing page hero
│   └── LoadingScreen.tsx # Startup animation
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── styles/              # Global styles and themes
```

## 🎨 Design System

### Color Scheme
- Cosmic gradients with deep space aesthetics
- HSL-based color tokens for consistency
- Dark/light mode adaptive theming
- Neural grid background patterns

### Typography
- Exo font family for modern, technical aesthetic
- Responsive typography scales
- Semantic heading hierarchy

### Animations
- Framer Motion for smooth transitions
- Custom keyframe animations
- Interactive hover effects
- Page transition animations

## 📱 Mobile Capabilities

### Native Features (via Capacitor)
- iOS and Android app compilation
- Native device APIs access
- Offline functionality support
- App store distribution ready

### Mobile-Optimized Features
- Touch gesture support
- Mobile navigation patterns
- Responsive breakpoints
- Performance optimizations

## 🔧 Configuration

### Tailwind Configuration
Custom design tokens and utilities are defined in `tailwind.config.ts` for consistent theming across the application.

### TypeScript Setup
Strict TypeScript configuration ensures type safety and better development experience.

### Vite Configuration
Optimized build settings for fast development and efficient production bundles.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a private project. For collaboration inquiries, please contact the project maintainers.

---

**Built with ❤️ using modern web technologies**