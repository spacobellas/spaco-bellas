# Spaço Bellas 💜

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

Spaço Bellas is a professional, high-performance web platform for a luxury Beauty & Wellness Spa. Built with a modern tech stack, it features multiple specialized landing pages, a membership program, and corporate wellness solutions, all optimized for conversion and mobile-first user experience.

## 🚀 Key Features

- **Mobile-First Linktree Entry:** A centralized hub for social media traffic, directing users to specific services and contact channels.
- **Specialized Landing Pages:** Dedicated experiences for:
  - **Spa Day Individual:** Basic and Premium solo relaxation packages.
  - **Spa Day Couples:** Romantic and immersive experiences for two.
  - **Spa Day Celebrities:** The flagship "Star Day" experience with professional photo shoots and VIP treatment.
  - **Spa Day Brides:** Custom "Dia da Noiva" packages for the big day.
- **VIP Bellas Membership:** A recurring subscription program ("Mensal Bellas") offering exclusive benefits and monthly treatments.
- **Bella Empresas:** B2B wellness plans designed for corporate teams to boost performance and employee satisfaction.
- **Seamless WhatsApp Integration:** Context-aware redirection to WhatsApp with pre-filled messages based on the selected package.
- **Modern UI/UX:** Smooth animations with Framer Motion, accessible components via Radix UI, and a refined aesthetic.

## 🛠 Tech Stack

### Frontend
- **Framework:** [React 18](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Components:** [Radix UI](https://www.radix-ui.com/) (Headless UI primitives) & [Lucide React](https://lucide.dev/) (Icons)
- **Routing:** [wouter](https://github.com/molecula/wouter) & [React Router](https://reactrouter.com/)
- **State Management:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms:** [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation

### Backend & Database (Infrastructure)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** PostgreSQL (Supabase)
- **Server:** Express.js (API & Middleware support)

## 📂 Project Structure

The project follows a **Feature-Based Architecture**, making it highly scalable and easy to maintain.

```text
src/
├── assets/             # Global images, brand assets, and styling
├── components/         # Shared UI components and layout elements
│   ├── layout/         # Header, Footer
│   ├── shared/         # Reusable business components (CTA, Testimonials)
│   └── ui/             # Atomic Shadcn-like UI primitives (Button, Card, etc.)
├── config/             # Global constants and contact configurations
├── data/               # Static content for packages, plans, and testimonials
├── features/           # Domain-driven features (The heart of the app)
│   ├── corporate/      # B2B "Bella Empresas" logic and components
│   ├── home/           # Institutional Home page features
│   ├── membership/     # "VIP Bellas" subscription program
│   └── spa-day/        # Specialized Spa Day components
├── hooks/              # Custom React hooks (scroll-spy, intersection-observer)
├── lib/                # Third-party library configurations (utils, queryClient)
└── pages/              # Route-level components
```

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/emanuellcs/spaco-bellas.git
   cd spaco-bellas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

Developed with 💜 for Spaço Bellas.
