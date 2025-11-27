# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type
Next.js 15 landing page with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom dark theme using OKLCH color space
- **UI Components**: shadcn/ui components library (New York style)
- **Fonts**: Geist Sans and Geist Mono
- **Analytics**: Vercel Analytics

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with dark theme default
  - `page.tsx` - Landing page for HashLogic product
  - `globals.css` - Global styles with Tailwind directives and custom theme
- `/components` - React components
  - `/ui` - shadcn/ui component library (50+ pre-built components)
- `/lib` - Utility functions
  - `utils.ts` - cn() utility for classname merging
- `/hooks` - Custom React hooks
- `/public` - Static assets

### Key Design Patterns
- **Theme**: Dark mode only with custom cyan/blue gradient theme
- **Component Library**: Uses shadcn/ui's New York style with Radix UI primitives
- **Styling Approach**: Tailwind CSS with custom OKLCH color variables
- **Path Aliases**: `@/` maps to root directory for imports

### Custom Theme Variables
The project uses a custom dark theme with OKLCH colors optimized for HashLogic branding:
- Primary: Cyan accent (oklch(0.65 0.15 195))
- Background: Deep dark blue (oklch(0.08 0.02 240))
- Custom gradient utilities: `.gradient-cyan-blue` and `.gradient-text`