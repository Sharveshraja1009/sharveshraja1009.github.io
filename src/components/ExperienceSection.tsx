import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    org: 'Legends Tech Solution, Puducherry',
    role: 'Full-Stack Developer',
    when: 'Jul 2025 – Present',
    color: 'text-neon-cyan',
    items: [
      'Pondy Job: built the job portal from its first commit. PHP REST API on MySQL, React website and admin panel, Expo React Native app, Firebase OTP login, a PayU points system and GitHub Actions deploys.',
      'Pondicherry Matrimony: 400+ commits on the staff admin (PHP/Yii, MySQL): office billing and business reports, PayU reconciliation, staff lead pop-ups, follow-up tracking and photo approval.',
      'Automation: a WhatsApp assistant on the OpenAI API with staff handover and spending caps; YouTube Shorts/Live and Facebook/Instagram auto-posting; a Google Ads campaign dashboard.',
      'Matrimony Flutter app: OTP login, push notifications, new login and home designs, Matches and the Wedding Market section.',
      'Rent Pondy & Pondy Property: area and pincode search, nightly auto-expire, follow-up tracking, listing SEO and a Tesseract OCR importer for newspaper property ads.',
    ],
  },
  {
    org: 'Freelance',
    role: 'Web Developer',
    when: '2026 – Present',
    color: 'text-neon-purple',
    items: [
      'Thirumalai Properties: React 19 site prerendered for SEO, plus a blog CMS on Cloudflare Workers, Hono and D1 with writer, editor and admin roles.',
      "Menan Makeovers: rebuilt a bridal studio's Wix site in Astro + TypeScript on Wix Headless, with enquiry forms and Google reviews.",
    ],
  },
  {
    org: 'Sri Venkateshwaraa College of Engineering and Technology',
    role: 'B.Tech, Computer Science Engineering · CGPA 9.0',
    when: '2021 – 2025',
    color: 'text-neon-pink',
    items: [
      'Final-year project: Blockchain Chat Application (Blowfish encryption, IPFS, Ethereum).',
      'Paper at the DST-SERB International Conference (Aug 2024): “Improving Performance using Blockchain Technology for Secure Messaging in Social Networks”.',
      'Certifications: Fortinet Network Security Associate · Palo Alto Networks Cybersecurity Virtual Internship.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${job.color}`}>{job.role}</h3>
                  <div className="text-lg text-foreground">{job.org}</div>
                </div>
                <div className="text-muted-foreground whitespace-nowrap">{job.when}</div>
              </div>
              <ul className="space-y-2">
                {job.items.map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-neon-cyan">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
