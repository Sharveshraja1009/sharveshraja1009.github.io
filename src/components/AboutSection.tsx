
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neon-cyan">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer at Legends Tech Solution in Puducherry. I work on four
              products used across the region: Pondy Job, Pondicherry Matrimony, Rent Pondy and
              Pondy Property. Each one has a public web app, an admin panel and an Android app.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I built Pondy Job from its first commit, and on Pondicherry Matrimony I work on the staff
              admin, the Flutter app, PayU payments and a WhatsApp assistant. Outside my job I build
              websites for local businesses, and tools I need myself: an Android movie-booking alarm,
              an offline PDF editor and a local recruitment assistant.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              B.Tech in Computer Science Engineering (2021–2025, CGPA 9.0).
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-neon-cyan mb-2">7</div>
                <div className="text-sm text-muted-foreground">Live products & websites</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-lg text-center"
              >
                <div className="text-3xl font-bold text-neon-purple mb-2">650+</div>
                <div className="text-sm text-muted-foreground">Commits to company products</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="w-48 h-48 mx-auto mb-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Sharvesh" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Sharvesh R.</h4>
                <p className="text-neon-cyan mb-4">Full-Stack Developer · Legends Tech Solution</p>
                <p className="text-sm text-muted-foreground">
                  "Talk is cheap,Show me your code"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
