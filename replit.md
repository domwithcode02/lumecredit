# Credit Bro Landing Page Application

## Overview

Credit Bro is a React-based web application that serves as a landing page for a fintech credit-building platform. The application is designed to capture early user interest through a limited-time offer (first 250 users) for lifetime access to credit-building services at a discounted price of $200. The platform targets underserved communities, students, immigrants, and individuals seeking to build or repair their credit history through various tradeline products including revolving credit lines, installment loans, and rent reporting services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React 18 and TypeScript, utilizing a modern component-based architecture. The UI framework leverages Radix UI primitives for accessible components, styled with Tailwind CSS for responsive design. The application implements client-side routing using Wouter for lightweight navigation between pages (home, FAQ, login, admin dashboard). State management is handled through React Query (TanStack Query) for server state and React's built-in hooks for local component state.

### Backend Architecture
The server architecture follows an Express.js REST API pattern with TypeScript. The application uses a simple in-memory storage system (MemStorage class) that implements a standardized IStorage interface, allowing for easy migration to database persistence later. The backend includes middleware for request logging, JSON parsing, and CORS handling. Authentication is implemented using a simple username/password system with hardcoded credentials, storing session data in localStorage on the client side.

### Data Storage Solutions
Currently, the application uses an in-memory storage solution for development purposes, with all data stored in memory and lost on server restart. The database schema is defined using Drizzle ORM with PostgreSQL dialect, indicating preparation for future database integration. The schema includes a subscribers table with fields for id, fullName, email, phone, and timestamp. Form validation is implemented using Zod schemas with React Hook Form for client-side validation.

### Authentication and Authorization
The authentication system implements a basic username/password login with two user types: regular users and administrators. Credentials are hardcoded (rebekah/virginia123 for regular access, admin/5winners for administrative access). Login attempts are tracked and logged to a file-based system for security monitoring. The client maintains authentication state in localStorage and implements protected routes that redirect unauthenticated users to the login page.

### Development and Build System
The build system uses Vite for fast development and optimized production builds. The application supports both development and production modes with environment-specific configurations. Asset management includes support for various image formats and automatic optimization. The project includes TypeScript configuration with strict mode enabled and path mapping for clean imports.

## External Dependencies

- **Neon Database**: PostgreSQL database service configured through @neondatabase/serverless
- **Drizzle ORM**: Database ORM with PostgreSQL dialect for schema management and migrations
- **Stripe**: Payment processing integration (@stripe/stripe-js, @stripe/react-stripe-js)
- **UI Components**: Extensive use of Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling with PostCSS for processing
- **Form Handling**: React Hook Form with Zod for validation and @hookform/resolvers
- **State Management**: TanStack React Query for server state management
- **Development Tools**: Various Replit-specific plugins for theme management and development experience
- **Runtime Environment**: Node.js with Express.js server framework