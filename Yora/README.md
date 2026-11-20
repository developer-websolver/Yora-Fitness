# Yora Fitness Website

A multi-page Yora Fitness website built with React, Vite, TypeScript, Tailwind CSS v4 and React Router.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Getting started
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
.
├── public/
│   └── assets/                 # Static images and brand assets
├── src/
│   ├── components/
│   │   ├── brands/             # Brand-specific components
│   │   ├── franchise/          # Franchise components
│   │   ├── home/               # Homepage sections
│   │   ├── layout/             # Header, footer, modals and layout
│   │   └── ui/                 # Reusable UI primitives
│   ├── context/                # Shared UI state and providers
│   ├── data/                   # Navigation, brand and location data
│   ├── pages/                  # Route-level page components
│   ├── styles/                 # Global site styles
│   ├── App.tsx                 # Application routes and providers
│   ├── index.css               # Tailwind entry and design tokens
│   └── main.tsx                # React entry point
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Routes
- `/` — Home
- `/about` — About
- `/franchise` — Franchise
- `/brands` — Brands
- `/contact` — Contact

Reusable components are grouped by feature and shared UI responsibility. Brand, navigation and location content is centralized under `src/data/`.

Static images are served from `public/assets/` and referenced with `/assets/...` paths.
