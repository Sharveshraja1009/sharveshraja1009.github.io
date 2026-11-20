/**
 * Single source of truth for the portfolio.
 * Every fact here comes from Sharvesh's resume, the project code/READMEs, or his own answers.
 * Anything not yet confirmed is marked TODO and is hidden on the page until it is filled in.
 * Edit this file to update the site; components only render what is here.
 */

const base = import.meta.env.BASE_URL; // "/" locally, set by vite.config for GitHub Pages
export const asset = (p: string) => `${base}${p.replace(/^\//, '')}`;

export const profile = {
  name: 'Sharvesh R.',
  nameHalves: ['Shar', 'vesh'] as const,
  role: 'Full-stack developer',
  city: 'Puducherry, India',
  email: 'sharveshraja1009@gmail.com',
  github: 'https://github.com/Sharveshraja1009',
  linkedin: 'https://www.linkedin.com/in/sharveshraja1009',
  resume: 'R.Sharvesh_Resume.pdf', // TODO: replace with an updated resume that lists Legends Tech Solution
  intro:
    'Full-stack developer in Puducherry. I work on the web and mobile apps behind Rent Pondy, Pondicherry Matrimony and Pondy Job.',
};

export type Experience = {
  org: string;
  role: string;
  when: string;
  summary: string;
  items: string[];
};

export const experience: Experience[] = [
  {
    org: 'Legends Tech Solution',
    role: 'Full-stack developer',
    when: 'Jul 2025 – now',
    summary:
      'Four local platforms, each with a user app, an admin panel and an Android app. Over 650 commits under my name since April 2026.',
    items: [
      'Pondy Job — built the job portal from its first commit: PHP REST API on MySQL, React site and admin, Expo React Native app, Firebase OTP login, a PayU points system and GitHub Actions deploys.',
      'Pondicherry Matrimony — 400+ commits on the staff admin (PHP/Yii, MySQL): office billing and business reports, PayU reconciliation, lead pop-ups for staff, a WhatsApp assistant and YouTube/Google Ads tools; plus the Flutter app (OTP login, push notifications, Wedding Market).',
      'Rent Pondy — area and pincode search, nightly auto-expire, follow-up tracking and a Tesseract OCR importer for newspaper ads, across React, Node.js/MongoDB and Flutter.',
      'Pondy Property — SEO for listings, auto-expire, buyer follow-ups and the move to the pondyproperty.com domain.',
    ],
  },
  {
    org: 'Freelance',
    role: 'Web developer',
    when: '2026',
    summary: 'Websites for two Puducherry businesses, built and shipped end to end.',
    items: [
      'Thirumalai Properties — React 19 site prerendered for SEO on GitHub Pages, plus a blog CMS on Cloudflare Workers, Hono and D1 with writer, editor and admin roles.',
      'Menan Makeovers — bridal studio site rebuilt in Astro on Wix Headless, with Wix Forms, structured data and Google reviews.',
    ],
  },
  {
    org: 'Sri Venkateshwaraa College of Engineering and Technology',
    role: 'B.Tech, Computer Science Engineering · CGPA 8.54',
    when: '2021 – 2025',
    summary:
      'Final-year project: a blockchain chat application. Paper presented at the DST-SERB International Conference, Aug 2024.',
    items: [
      'Paper: “Improving Performance using Blockchain Technology for Secure Messaging in Social Networks”.',
      'Palo Alto Networks Cybersecurity Virtual Internship · Fortinet Network Security Associate.',
    ],
  },
];

/** Live products shown in the work section (each has a real screenshot of its public site). */
export type Work = { name: string; url: string; image: string; kind: string; where: string };

export const work: Work[] = [
  { name: 'Rent Pondy', url: 'https://rentpondy.com/', image: 'work/rentpondy.webp', kind: 'Rental platform, web + Flutter', where: 'Legends Tech' },
  { name: 'Pondicherry Matrimony', url: 'https://www.pondicherrymatrimony.com/', image: 'work/pondicherrymatrimony.webp', kind: 'Matrimony service, web + Android', where: 'Legends Tech' },
  { name: 'Pondy Job', url: 'https://pondyjob.com/', image: 'work/pondyjob.webp', kind: 'Job portal, web + React Native', where: 'Legends Tech' },
  { name: 'Pondy Property', url: 'https://pondyproperty.com/', image: 'work/pondyproperty.webp', kind: 'Property listings, web + Flutter', where: 'Legends Tech' },
  { name: 'Thirumalai Properties', url: 'https://thirumalaiproperties.com/', image: 'work/thirumalai.webp', kind: 'Real-estate site and blog CMS', where: 'Freelance · 2026' },
  { name: 'Menan Makeovers', url: 'https://www.menanmakeovers.com/', image: 'work/menan.webp', kind: 'Bridal studio site, Astro + Wix', where: 'Freelance · 2026' },
  { name: 'Pondy Belle', url: 'https://sharveshraja1009.github.io/tr-app-p-b/', image: 'work/travel.webp', kind: 'Pondicherry travel guide, React', where: 'Personal · 2026' },
];

/** Every project, for the filterable list. `stack` values drive the technology filter. */
export type Project = {
  name: string;
  what: string;
  stack: string[];
  where: 'Legends Tech' | 'Freelance' | 'Personal' | 'College';
  year: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  { name: 'Rent Pondy', what: 'Rental listings with points, PayU checkout, OTP login and an admin panel', stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Firebase'], where: 'Legends Tech', year: '', url: 'https://rentpondy.com/' },
  { name: 'Pondy Property', what: 'Property buy and sell listings with bulk upload and per-route SEO', stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter'], where: 'Legends Tech', year: '', url: 'https://pondyproperty.com/' },
  { name: 'Pondicherry Matrimony', what: 'Matrimony member site, staff admin and Android app', stack: ['PHP', 'MySQL', 'Flutter', 'React', 'TypeScript', 'Express'], where: 'Legends Tech', year: '', url: 'https://www.pondicherrymatrimony.com/' },
  { name: 'Pondy Job', what: 'Job portal for seekers and employers with chat and resumes', stack: ['PHP', 'MySQL', 'React', 'React Native'], where: 'Legends Tech', year: '', url: 'https://pondyjob.com/' },
  { name: 'Thirumalai Properties', what: 'Prerendered real-estate site and a role-based blog CMS', stack: ['React', 'TypeScript', 'Cloudflare Workers'], where: 'Freelance', year: '2026', url: 'https://thirumalaiproperties.com/' },
  { name: 'Menan Makeovers', what: 'Bridal studio website on Wix Headless', stack: ['Astro', 'TypeScript', 'React'], where: 'Freelance', year: '2026', url: 'https://www.menanmakeovers.com/' },
  { name: 'Pondy Movie Watcher', what: 'Android app that alarms when a movie opens for booking in your city', stack: ['React Native', 'TypeScript', 'Kotlin', 'SQLite'], where: 'Personal', year: '2026', repo: 'https://github.com/Sharveshraja1009/Realtime-movie-booking-watcher-' },
  { name: 'Sharvesh PDF Studio', what: 'Offline Windows PDF editor that edits the real text in a PDF', stack: ['Electron', 'React', 'TypeScript'], where: 'Personal', year: '2026' },
  { name: 'HireFlow AI', what: 'Local recruitment assistant: resume parsing, match scores, hiring pipeline', stack: ['Python', 'FastAPI', 'React', 'SQLite'], where: 'Personal', year: '2026' },
  { name: 'Pondy Belle', what: 'Pondicherry travel guide with stays, bike rentals and an itinerary planner', stack: ['React'], where: 'Personal', year: '2026', url: 'https://sharveshraja1009.github.io/tr-app-p-b/', repo: 'https://github.com/Sharveshraja1009/tr-app-p-b' },
  { name: 'Blockchain Chat Application', what: 'Chat with Blowfish-encrypted files stored on IPFS and Ethereum (Ganache)', stack: ['React Native', 'Python', 'Ethereum', 'IPFS'], where: 'College', year: '2025', repo: 'https://github.com/Sharveshraja1009/Blockchain-Chat-Application-Final-year-Project-' },
  { name: 'To-Do API', what: 'REST API for tasks with full CRUD', stack: ['Node.js', 'Express', 'MongoDB'], where: 'Personal', year: '2024', repo: 'https://github.com/Sharveshraja1009/todo-api' },
  { name: 'URL Shortener', what: 'Turns long links into short ones', stack: ['Node.js', 'Express', 'MongoDB'], where: 'Personal', year: '2024', repo: 'https://github.com/Sharveshraja1009/URL-Shortener' },
];

/** Filter chips, in the order shown. Only technologies that appear in `projects`. */
export const filters = ['React', 'Node.js', 'MongoDB', 'PHP', 'MySQL', 'Flutter', 'React Native', 'TypeScript', 'Python'];

export const credits = [
  { title: 'Pondicherry – French Quarter', by: 'Rainer Halama', licence: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Pondicherry-French_Quarter-WUS02277.jpg' },
  { title: 'Beach Promenade, Pondicherry', by: 'Dey.sandip', licence: 'CC BY 3.0', url: 'https://commons.wikimedia.org/wiki/File:Beach_Promenade,_Pondicherry,_India.jpg' },
];
