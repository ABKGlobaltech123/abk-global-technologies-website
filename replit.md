# ABK Global Technologies Website

## Overview

This is a modern React-based corporate website for ABK Global Technologies, an IT solutions and services provider. The application showcases the company's various technology offerings including IT security, networking, data management, and cloud solutions. Built with a full-stack architecture using React frontend with TypeScript, Express.js backend, and PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui components for accessible, customizable interface elements
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Pattern**: RESTful API design with centralized route registration
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Schema**: Shared schema definitions between frontend and backend using Zod validation

### Authentication and Authorization
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication structure
- **Validation**: Zod schemas for runtime type validation and data integrity

### Build and Development
- **Development**: Hot module replacement with Vite dev server
- **Production**: Optimized builds with code splitting and asset optimization
- **TypeScript**: Strict type checking with shared types between client and server
- **Module System**: ESM modules throughout the application stack

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Environment**: DATABASE_URL configuration for database connectivity

### UI and Design System
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Modern icon library for consistent iconography
- **Font Awesome**: Additional icon set for brand and social media icons

### Development Tools
- **Vite**: Fast build tool with React plugin and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### React Ecosystem
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing solution
- **Date-fns**: Date manipulation and formatting utilities

### Production Infrastructure
- **Replit**: Development and hosting platform integration
- **Static Assets**: Optimized asset serving with proper caching headers
- **Environment Configuration**: Separate development and production configurations