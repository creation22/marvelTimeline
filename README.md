# Marvel Timeline

The ultimate Marvel Cinematic Universe (MCU) companion — explore movies, characters, events, timelines, and story arcs.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **Shadcn/UI**
- **Framer Motion** for animations
- **TanStack Query** + **Zustand** for state management
- **Prisma ORM** + **PostgreSQL** (schema ready, static data active)
- **Lucide Icons**

## Features

- **Homepage** — Hero, search, quick navigation, trending content
- **Chronological Timeline** — Interactive vertical timeline with animated movie cards
- **Movies** — Full detail pages with characters, events, locations, stones
- **Characters** — Biography, Story Mode journey timeline, relationships, quotes
- **Events** — Major MCU events with consequences and connections
- **Infinity Stones** — Owner timelines and movie appearances
- **Locations** — Wakanda, Asgard, Knowhere, and more
- **Organizations** — Avengers, S.H.I.E.L.D., Guardians, TVA, etc.
- **Multiverse Explorer** — Universe variants and connections
- **Watch Guide** — Chronological, release, character, and saga viewing orders
- **Dashboard** — Watch progress, favorites, achievements
- **Admin Panel** — CRUD interface (ready for database connection)
- **Global Search** — Instant search across all content types
- **User Progress** — Mark watched, favorites, watchlists (localStorage via Zustand)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Database Setup (Optional)

The app runs with static MCU data out of the box. To connect PostgreSQL:

```bash
# Configure DATABASE_URL in .env
DATABASE_URL="postgresql://user:password@localhost:5432/marveltimeline"

# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── api/                # REST API endpoints
│   ├── movies/             # Movie listing & detail pages
│   ├── characters/         # Character listing & detail pages
│   ├── events/             # Event pages
│   ├── timeline/           # Chronological timeline
│   ├── infinity-stones/    # Infinity Stones section
│   ├── locations/          # Location pages
│   ├── organizations/      # Organization pages
│   ├── multiverse/         # Multiverse explorer
│   ├── watch-guide/        # Watch order guides
│   ├── dashboard/          # User dashboard
│   └── admin/              # Admin panel
├── components/
│   ├── ui/                 # Shadcn/UI components
│   ├── layout/             # Navbar, Footer
│   ├── movies/             # MovieCard
│   ├── characters/         # CharacterCard, StoryModeTimeline
│   ├── timeline/           # TimelineView
│   ├── home/               # HeroSection, QuickNav
│   └── shared/             # SearchBar, Breadcrumbs, etc.
├── data/                   # MCU static data
├── lib/                    # Utilities & data service
├── store/                  # Zustand stores
└── types/                  # TypeScript interfaces
prisma/
├── schema.prisma           # Full relational database schema
└── seed.ts                 # Database seed script
```

## Theme

- **Black** `#0B0B0B` — Primary background
- **Marvel Red** `#ED1D24` — Accent color
- Dark theme with glassmorphism, smooth animations, and responsive layouts

## License

Fan project for educational purposes. Not affiliated with Marvel Studios or Disney.
