import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;          // emoji shown when there is no screenshot
  screenshot?: string;    // file in public/work/
  tech: string[];
  category: 'Legends Tech Solution' | 'Freelance' | 'Personal' | 'College';
  live?: string;
  code?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Pondy Job',
    description: 'Job portal for seekers and employers: web app, admin panel and Android app.',
    details:
      'Built from its first commit: PHP REST API on MySQL, React website and admin panel, Expo React Native app. Firebase OTP login, a PayU-paid points system for employers and job seekers, draft jobs, bulk job import, bill PDFs and GitHub Actions deploys.',
    image: '💼',
    screenshot: 'work/pondyjob.webp',
    tech: ['PHP', 'MySQL', 'React', 'React Native', 'PayU', 'Firebase'],
    category: 'Legends Tech Solution',
    live: 'https://pondyjob.com/',
  },
  {
    id: 2,
    title: 'Pondicherry Matrimony',
    description: 'Matrimony service: member site, staff admin and Flutter Android app.',
    details:
      'Staff admin (PHP/Yii, MySQL): office billing and business reports, PayU reconciliation, staff lead pop-ups, follow-up tracking, photo approval, a WhatsApp assistant on the OpenAI API, and YouTube / Google Ads tools. Flutter app: OTP login, push notifications, new designs, Matches and the Wedding Market section.',
    image: '💍',
    screenshot: 'work/pondicherrymatrimony.webp',
    tech: ['PHP', 'MySQL', 'Flutter', 'OpenAI API', 'PayU'],
    category: 'Legends Tech Solution',
    live: 'https://www.pondicherrymatrimony.com/',
  },
  {
    id: 3,
    title: 'Rent Pondy',
    description: 'Rental platform connecting tenants, owners and brokers, with a Flutter app.',
    details:
      'Area and pincode search, nightly auto-expire, follow-up tracking, a Live Now panel and a Tesseract OCR importer that reads property ads from newspaper issues.',
    image: '🏠',
    screenshot: 'work/rentpondy.webp',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Flutter'],
    category: 'Legends Tech Solution',
    live: 'https://rentpondy.com/',
  },
  {
    id: 4,
    title: 'Pondy Property',
    description: 'Property buy and sell listings on the web and Android.',
    details: 'SEO for property listings, auto-expire, buyer follow-ups and the move to the pondyproperty.com domain.',
    image: '🏢',
    screenshot: 'work/pondyproperty.webp',
    tech: ['React', 'Node.js', 'MongoDB', 'Flutter'],
    category: 'Legends Tech Solution',
    live: 'https://pondyproperty.com/',
  },
  {
    id: 5,
    title: 'Thirumalai Properties',
    description: 'Real-estate website with its own blog CMS.',
    details:
      'React 19 site prerendered for SEO and deployed with GitHub Actions. Blog CMS on Cloudflare Workers, Hono and D1 with writer, editor and admin roles and a review-before-publish flow.',
    image: '🏡',
    screenshot: 'work/thirumalai.webp',
    tech: ['React', 'TypeScript', 'Cloudflare Workers', 'D1'],
    category: 'Freelance',
    live: 'https://thirumalaiproperties.com/',
  },
  {
    id: 6,
    title: 'Menan Makeovers',
    description: 'Bridal makeup studio website, rebuilt from Wix.',
    details: 'Astro + TypeScript front end on Wix Headless, with enquiry forms, structured data for search and a Google reviews carousel.',
    image: '💄',
    screenshot: 'work/menan.webp',
    tech: ['Astro', 'TypeScript', 'Wix Headless'],
    category: 'Freelance',
    live: 'https://www.menanmakeovers.com/',
  },
  {
    id: 7,
    title: 'Pondy Movie Watcher',
    description: 'Android app that alarms when a movie opens for booking in your city.',
    details:
      'Watches chosen cities and theatres in a background service, then plays your own MP3 as an alarm, sends a Telegram alert and opens the booking page. On-device SQLite and TMDB movie discovery.',
    image: '🎬',
    tech: ['React Native', 'TypeScript', 'Kotlin', 'SQLite'],
    category: 'Personal',
    code: 'https://github.com/Sharveshraja1009/Realtime-movie-booking-watcher-',
  },
  {
    id: 8,
    title: 'Sharvesh PDF Studio',
    description: 'Offline Windows PDF editor that edits the real text inside a PDF.',
    details:
      'Keeps the embedded fonts while editing text. Page tools, annotations, redaction, conversion to Word/Excel/PowerPoint, offline OCR (English, Tamil, Hindi) and password protection.',
    image: '📄',
    tech: ['Electron', 'React', 'TypeScript', 'MuPDF'],
    category: 'Personal',
  },
  {
    id: 9,
    title: 'HireFlow AI',
    description: 'Local recruitment assistant that runs fully offline.',
    details:
      'Multi-file resume parsing, explainable match scores, side-by-side comparison, recruiter approval steps, a 9-stage drag-and-drop pipeline and interview scheduling with conflict checks.',
    image: '🤝',
    tech: ['Python', 'FastAPI', 'LangGraph', 'React', 'SQLite'],
    category: 'Personal',
  },
  {
    id: 10,
    title: 'Pondy Belle',
    description: 'Pondicherry travel guide: places, stays, bike rentals and an itinerary planner.',
    details: 'A React travel guide for Pondicherry with a day-by-day itinerary planner.',
    image: '🌴',
    screenshot: 'work/travel.webp',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Personal',
    live: 'https://sharveshraja1009.github.io/tr-app-p-b/',
    code: 'https://github.com/Sharveshraja1009/tr-app-p-b',
  },
  {
    id: 11,
    title: 'Blockchain Chat Application',
    description: 'Final-year project: secure chat with encrypted files on IPFS.',
    details:
      'Shared files are encrypted with Blowfish and stored on IPFS, with an Ethereum smart contract (Ganache) recording each upload. An admin approves new users. Paper presented at the DST-SERB International Conference, Aug 2024.',
    image: '🔐',
    tech: ['React Native', 'Flask', 'Ethereum', 'Ganache', 'IPFS'],
    category: 'College',
    code: 'https://github.com/Sharveshraja1009/Blockchain-Chat-Application-Final-year-Project-',
  },
  {
    id: 12,
    title: 'URL Shortener',
    description: 'Generate and manage short links with quick redirection.',
    details: 'React front end with a Node.js, Express and MongoDB API that creates short IDs and redirects them.',
    image: '🔗',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Personal',
    code: 'https://github.com/Sharveshraja1009/URL-Shortener',
  },
];

const filters = ['All', 'Legends Tech Solution', 'Freelance', 'Personal', 'College'] as const;

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black'
                  : 'glass-morphism text-foreground border border-neon-cyan/30 hover:border-neon-cyan'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shown.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass-morphism p-6 rounded-2xl cursor-pointer group flex flex-col"
            >
              {project.screenshot ? (
                <img
                  src={asset(project.screenshot)}
                  alt={`${project.title} website`}
                  loading="lazy"
                  className="w-full aspect-video object-cover object-top rounded-lg mb-4 border border-neon-cyan/20"
                />
              ) : (
                <div className="text-6xl mb-4 text-center aspect-video flex items-center justify-center">{project.image}</div>
              )}
              <div className="text-xs uppercase tracking-wider text-neon-purple mb-1">{project.category}</div>
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-secondary/50 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="glass-morphism p-8 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject.screenshot ? (
                  <img
                    src={asset(selectedProject.screenshot)}
                    alt={`${selectedProject.title} website`}
                    className="w-full rounded-lg mb-4 border border-neon-cyan/20"
                  />
                ) : (
                  <div className="text-6xl mb-4 text-center">{selectedProject.image}</div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary/50 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mb-3">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-black rounded-lg font-semibold"
                    >
                      Visit live site
                    </a>
                  )}
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 glass-morphism border border-neon-cyan/30 hover:border-neon-cyan rounded-lg font-semibold"
                    >
                      View code
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full px-4 py-2 bg-neon-cyan text-black rounded-lg font-semibold"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
