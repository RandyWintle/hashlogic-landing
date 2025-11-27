# HashLogic Landing Page

A stunning, compliance-friendly marketing landing page for HashLogic - the precision yield tracking platform for solventless manufacturers.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This project is configured for AWS Amplify deployment. The `amplify.yml` file contains the build settings.

### Manual Deploy to Amplify

1. Create a new Amplify app in AWS Console
2. Connect your Git repository
3. Amplify will automatically detect the `amplify.yml` configuration
4. Deploy!

### Custom Domain

After deployment, configure your custom domain (e.g., hashlogic.io) in the Amplify Console under "Domain management".

## Project Structure

```
hashlogic-landing/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with animated visualization
│   │   ├── HeroVisualization.tsx # Animated node flow graphic
│   │   ├── ProblemSection.tsx    # Pain points section
│   │   ├── HowItWorks.tsx        # 3-step process flow
│   │   ├── Features.tsx          # Feature grid
│   │   ├── Pricing.tsx           # Pricing cards
│   │   ├── FinalCTA.tsx          # Call-to-action section
│   │   ├── Footer.tsx            # Footer
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button component
│   │       └── Card.tsx          # Reusable card component
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── favicon.svg
├── amplify.yml
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Design System

This landing page uses the "Modern Luxury" design system, matching the main HashLogic application:

- **Colors**: Rich Teal (#2A9D8F), Premium Gold (#C9A227), Warm Off-white backgrounds
- **Typography**: Plus Jakarta Sans (display & body), JetBrains Mono (monospace)
- **Border Radius**: 12px default, 16px large, 24px extra-large
- **Shadows**: Multi-layer shadow system with primary and gold accent glows
- **Animations**: Staggered fade-up, scale-in, floating effects

## Compliance Note

This landing page is designed to be compliance-friendly and avoids industry-specific terminology. All copy focuses on generic manufacturing, process management, and yield tracking language.
