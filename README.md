<div align="center">
  
<img src="https://github.com/dotrwt/Cinemyth/blob/main/src/assets/CM_LOGO.png" alt='Logo' height='200'>

# Cinemyth

</div>

**Where Hollywood Fans Create Magic.**

Cinemyth is a fan-community platform for movie enthusiasts , a place to browse films, discover fan-created content, compete on weekly leaderboards, and hunt for hidden easter eggs scattered across the site.

website live at : <a href='https://cinemyth.vercel.app/'>cinemyth.vercel.app</a>

<img src='https://github.com/dotrwt/Cinemyth/blob/main/CN_UI.png' alt='UI'>

---

## Features

- **Movie Catalog** — Browse 24+ iconic films with search, genre filtering, decade filtering, and sorting by popularity, rating, year, or post count. Switch between grid and list views.
- **Movie Pages** — Dive into individual movie communities with tabbed content: fan edits, memes, written reviews, and verified trivia facts.
- **Weekly Leaderboard** — See the top creators ranked by points, specialty, and total likes.
- **Easter Egg Hunt** — Hidden `✨` and `⭐` icons are scattered throughout the UI. Find them all to unlock badges and rewards.
- **Glassmorphism UI** — Dark-themed interface with frosted-glass cards, gradient accents, and hover animations.

---

## Tech Stack

| Layer         | Technology                      |
| ------------- | ------------------------------- |
| Framework     | React 18 + TypeScript           |
| Build Tool    | Vite 6                          |
| Styling       | Tailwind CSS v4                 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Icons         | Lucide React                    |
| Animation     | Motion (Framer Motion)          |
| Additional UI | MUI (Material UI)               |

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                   # Root component & client-side router
│   └── components/
│       ├── HomePage.tsx          # Landing page with hero & trending movies
│       ├── MoviesPage.tsx        # Browsable movie catalog with filters
│       ├── MoviePage.tsx         # Individual movie detail & fan content
│       ├── LeaderboardPage.tsx   # Weekly creator rankings
│       ├── EasterEggsPage.tsx    # Easter egg tracker & rewards
│       ├── AboutPage.tsx
│       ├── ContactPage.tsx
│       ├── TermsPage.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ui/                   # shadcn/ui component library
├── assets/
│   └── CM_LOGO.png
├── styles/
│   ├── globals.css               # CSS variables & theme tokens
│   ├── index.css
│   └── default_theme.css
└── main.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/dotrwt/Cinemyth.git
cd Cinemyth

# Install dependencies
npm i

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Easter Eggs

Hidden easter egg icons (`✨` sparkles and `⭐` stars) are placed throughout the UI. Hover over them to see hints, and visit the **Easter Eggs** page to track your progress and unlock badges.

---

## Current Status

Cinemyth is a **UI prototype**. All movie data and user content is currently hardcoded. Future development would include:

- Backend API & database integration
- User authentication
- Real content upload & storage
- URL-based routing (React Router)
- Dialogue search functionality
- Infinite shorts feed

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---
<div align="center">
  
Developed by <a href='https://github.com/dotrwt'>dotrwt</a>

</div>
