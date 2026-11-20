# Sharvesh R. — Portfolio

Personal portfolio of Sharvesh R., full-stack developer in Puducherry. One page: live products, every project with a technology filter, work history and contact.

**Live:** https://sharveshraja1009.github.io *(after the GitHub Pages setup below)*

## Stack

| Layer | Technology |
|---|---|
| UI | React 18, TypeScript, Vite 5 |
| Styling | Plain CSS with design tokens (`src/styles/portfolio.css`), dark and light themes |
| Contact form | EmailJS (optional, enabled when its three env vars are set) |
| Hosting | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) |

## Editing content

All text, projects, links and experience live in **one file**: [`src/data/profile.ts`](src/data/profile.ts).
Components in `src/components/pf/` only render that data.

- Add a live product → append to `work` and put a 900×900 screenshot in `public/work/`.
- Add any project → append to `projects`; its `stack` values feed the technology filter.
- Set `linkedin` to your profile URL; the LinkedIn links stay hidden while it is empty.

## Run locally

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build in dist/
npm run preview    # serve the build
```

## Environment

Copy the names below into `.env.local` (git-ignored). The site works without them; the contact form is hidden.

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Deploy to GitHub Pages

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Add the three EmailJS values as **Actions secrets** (optional).
3. Push to `main`. The workflow picks the base path automatically:
   a repo named `sharveshraja1009.github.io` is served at the root; any other repo at `/<repo-name>/`.

## Credits

Photographs: “Pondicherry – French Quarter” by Rainer Halama (CC BY-SA 4.0) and “Beach Promenade, Pondicherry, India” by Dey.sandip (CC BY 3.0), via Wikimedia Commons. Product screenshots are captures of the public sites.
