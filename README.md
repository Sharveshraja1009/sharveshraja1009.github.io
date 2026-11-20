# Sharvesh R. — Portfolio

Personal portfolio of **Sharvesh R.**, Full-Stack Developer at Legends Tech Solution, Puducherry.

**Live:** https://sharveshraja1009.github.io

## Stack

React 18 · Vite · TypeScript · Tailwind CSS · Framer Motion · EmailJS (contact form)

## Run locally

```bash
npm ci
cp .env.example .env.local   # add your EmailJS IDs to enable the contact form
npm run dev                  # http://localhost:8080
```

## Where to edit content

| Section | File |
|---|---|
| Hero (intro, resume button) | `src/components/HeroSection.tsx` |
| About | `src/components/AboutSection.tsx` |
| Experience & education | `src/components/ExperienceSection.tsx` |
| Projects (cards, filters, links, screenshots in `public/work/`) | `src/components/ProjectsSection.tsx` |
| Skills | `src/components/SkillsSection.tsx` |
| Contact & social links | `src/components/ContactSection.tsx` |
| Resume PDF | `public/R_Sharvesh_Full_Stack_Developer_Resume.pdf` |

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). The EmailJS IDs come from the repo's Actions secrets
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY`.
