
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  // "where" = the work this skill was used in (no self-rated percentages)
  const skills = [
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React", where: "Rent Pondy, Pondy Job, freelance", icon: "⚛️" },
        { name: "TypeScript", where: "Freelance, personal apps", icon: "🔷" },
        { name: "Tailwind CSS", where: "Pondy Job, Pondy Belle", icon: "🎨" },
        { name: "Flutter", where: "Matrimony, Rent Pondy, Pondy Property", icon: "💙" },
        { name: "React Native", where: "Pondy Job, Movie Watcher", icon: "📱" },
        { name: "Astro", where: "Menan Makeovers", icon: "🚀" }
      ]
    },
    {
      category: "Backend & Data",
      items: [
        { name: "Node.js / Express", where: "Rent Pondy, Pondy Property", icon: "🟢" },
        { name: "PHP (Yii)", where: "Pondy Job, Matrimony admin", icon: "🐘" },
        { name: "MySQL", where: "Pondy Job, Matrimony", icon: "🐬" },
        { name: "MongoDB", where: "Rent Pondy, Pondy Property", icon: "🍃" },
        { name: "Python / FastAPI", where: "HireFlow AI", icon: "🐍" },
        { name: "Cloudflare Workers", where: "Thirumalai blog CMS", icon: "☁️" }
      ]
    },
    {
      category: "Integrations & Tools",
      items: [
        { name: "PayU payments", where: "Pondy Job, Matrimony", icon: "💳" },
        { name: "Firebase OTP & push notifications", where: "Pondy Job, Matrimony app", icon: "🔥" },
        { name: "OpenAI API", where: "Matrimony WhatsApp assistant", icon: "🤖" },
        { name: "GitHub Actions", where: "Pondy Job, Thirumalai, this site", icon: "⚙️" },
        { name: "Git & GitHub", where: "Every project", icon: "📚" },
        { name: "WinSCP", where: "Server deploys", icon: "🗂️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="neon-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-neon-cyan">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      </div>
                    <div className="text-sm text-muted-foreground pl-11">{skill.where}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
