# BOW Website

A modern website built with [Next.js](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest version of React
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting

## Project Structure

```
bow-website/
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout
│       ├── page.tsx      # Home page
│       └── globals.css   # Global styles with Tailwind
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
