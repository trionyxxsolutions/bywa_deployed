# Bengal Yoga Welfare Association — Frontend

Built with **React + Vite**. Light-themed, component-based architecture.

---

## Project Structure

```
yoga-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  ← Entry point
    ├── App.jsx                   ← Root component
    ├── styles/
    │   └── globals.css           ← CSS variables, shared utilities
    ├── hooks/
    │   └── useFadeUp.js          ← Scroll animation hook
    ├── pages/
    │   └── HomePage.jsx          ← Assembles all sections
    └── components/
        ├── index.js              ← Barrel exports
        ├── Navbar/
        │   ├── Navbar.jsx
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── Marquee/
        │   ├── Marquee.jsx
        │   └── Marquee.css
        ├── Features/
        │   ├── Features.jsx
        │   └── Features.css
        ├── JudgingSystem/
        │   ├── JudgingSystem.jsx
        │   └── JudgingSystem.css
        ├── Gallery/
        │   ├── Gallery.jsx
        │   └── Gallery.css
        ├── About/
        │   ├── About.jsx
        │   └── About.css
        ├── Contact/
        │   ├── Contact.jsx
        │   └── Contact.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Pages & Components

| Component | Description |
|---|---|
| `HomePage` | Main page — imports and renders all sections in order |
| `Navbar` | Fixed top nav with scroll-aware shadow + mobile burger menu |
| `Hero` | Split-screen hero with SVG yoga pose illustration + stat strip |
| `Marquee` | Animated scrolling text strip |
| `Features` | 4-column feature grid (Media, Judging, Contact, About) |
| `JudgingSystem` | Interactive score calculator — edit judge scores live |
| `Gallery` | Dark gallery grid with real file upload support |
| `About` | Mission, story, and values grid |
| `Contact` | Contact details + fully wired inquiry form |
| `Footer` | 3-column footer with nav, contact info, credits |

---

## Design Tokens (CSS Variables)

Defined in `src/styles/globals.css`:

| Variable | Value | Use |
|---|---|---|
| `--sand` | `#F5F0E8` | Background panels |
| `--clay` | `#C4956A` | Primary accent / brand |
| `--sage` | `#7A8C74` | Hero right panel |
| `--ink` | `#2A2420` | Primary text / dark bg |
| `--ink-mid` | `#5C4F47` | Body text |
| `--ink-light` | `#9A8F87` | Muted labels |
| `--white` | `#FDFAF6` | Page background |
| `--accent` | `#D4522A` | Excluded score highlight |

---

## Built by Trionyx Solutions for Bengal Yoga Welfare Association, Bally Ghat
