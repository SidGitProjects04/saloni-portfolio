import React, { useState } from 'react';
import CursorPetals from './components/CursorPetals';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, CalendarDays, MapPin, Mail, Phone, Linkedin, 
  ChevronDown, GraduationCap, Trophy, ArrowRight, ExternalLink,
  ChevronRight, Award, Camera, Palette
} from 'lucide-react';
import { 
  personalInfo, summary, experience, skills, 
  education, certifications, achievements, extracurriculars 
} from './data/resume';
import profileImage from './assets/profile.png';

// Helper component for reusable glass containers
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}>
    {children}
  </div>
);

// Experience Accordion Item Component
const ExperienceItem = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="group cursor-pointer bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#3A2D4D] group-hover:text-[var(--color-primary-dark)] transition-colors">
              {exp.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 size={16} className="text-[var(--color-primary)]" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CalendarDays size={16} className="text-[var(--color-primary)]" />
                {exp.date}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center shrink-0 text-[var(--color-primary-dark)]"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-[var(--color-primary-light)]/30">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx} 
                      className="flex items-start gap-3 text-[var(--color-text-main)] text-base/relaxed"
                    >
                      <ChevronRight size={18} className="text-[var(--color-primary)] mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function App() {
  return (
    <>
      <CursorPetals />
      
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] w-full relative overflow-x-hidden selection:bg-[var(--color-primary)] selection:text-white">
        
        {/* ====== Decorative Floral Background Elements ====== */}
        {/* Top Left Flower */}
        <svg className="fixed top-[-5%] left-[-5%] w-[40vw] h-[40vw] opacity-20 animate-slow-spin pointer-events-none text-[var(--color-accent-light)]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0C50 20 70 30 70 50C70 70 50 80 50 100C50 80 30 70 30 50C30 30 50 20 50 0Z" />
          <path d="M0 50C20 50 30 30 50 30C70 30 80 50 100 50C80 50 70 70 50 70C30 70 20 50 0 50Z" />
          <circle cx="50" cy="50" r="8" fill="var(--color-accent)" />
        </svg>

        {/* Bottom Right Giant Flower */}
        <svg className="fixed bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] opacity-30 pointer-events-none text-[#EADDFF]" viewBox="0 0 100 100" fill="currentColor" style={{ animation: 'slow-spin 40s linear infinite reverse' }}>
          <path d="M50 0C60 25 80 35 100 50C80 65 60 75 50 100C40 75 20 65 0 50C20 35 40 25 50 0Z" />
          <circle cx="50" cy="50" r="12" fill="var(--color-primary-light)" />
        </svg>

        {/* Soft Accent Blur in Center-Right */}
        <div className="fixed top-[40%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-[var(--color-accent-light)] opacity-20 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10 space-y-24">
          
          {/* ====== HEADER & SUMMARY ====== */}
          <motion.header 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8 flex flex-col items-center"
          >
            {/* Profile Image Wrapper */}
            <motion.div
              style={{ animation: 'float 6s ease-in-out infinite' }}
              className="relative mb-4 group"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent-light)] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500 scale-105"></div>
              {/* Profile Image */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-white">
                <img 
                  src={profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* UPDATED: Badge uses the new Accent color */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--color-accent)] text-[var(--color-accent-dark)] text-sm font-medium shadow-sm"
              style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Rural Development Professional
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#3A2D4D] leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-accent)] to-[#D8B4E2]">
                {personalInfo.name}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] font-light max-w-3xl mx-auto leading-relaxed">
              {summary}
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--color-text-main)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-white/50 hover:border-[var(--color-accent)] group">
                <Mail size={18} className="text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)] transition-colors" />
                <span>Email Me</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--color-text-main)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-white/50 hover:border-[var(--color-accent)] group">
                <Phone size={18} className="text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)] transition-colors" />
                <span>Call</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(255,179,71,0.6)] hover:-translate-y-0.5 transition-all hover:bg-gradient-to-r hover:from-[var(--color-accent)] hover:to-[var(--color-accent-dark)]">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.header>


          {/* ====== EXPERIENCE ====== */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-light)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D4D]">Experience</h2>
            </div>
            
            <div className="space-y-4">
              {experience.map((exp) => (
                <ExperienceItem key={exp.id} exp={exp} />
              ))}
            </div>
          </section>


          {/* ====== SKILLS ====== */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-[#C599D6] to-[#EADDFF]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D4D]">Core Skills</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 text-center gap-3 bg-white/60 hover:bg-white backdrop-blur-sm border border-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/50 group-hover:bg-[var(--color-accent-light)] flex items-center justify-center transition-colors">
                      <IconComponent size={24} className="text-[var(--color-primary-dark)] group-hover:text-[var(--color-accent-dark)] transition-colors" />
                    </div>
                    <span className="font-medium text-[#3A2D4D] text-sm md:text-base">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </section>


          {/* ====== EDUCATION & CERTIFICATIONS ====== */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 px-2">
                <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-[var(--color-primary-light)] to-[var(--color-accent-light)]" />
                <h2 className="text-3xl font-bold text-[#3A2D4D]">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <GlassCard key={idx} className="p-6 border-l-4 border-[var(--color-accent)] border-t-white border-r-white border-b-white">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)]/50 flex flex-shrink-0 items-center justify-center shadow-sm text-[var(--color-accent-dark)]">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#3A2D4D] leading-tight mb-1">{edu.degree}</h3>
                        <p className="text-[var(--color-text-muted)] font-medium">{edu.institution}</p>
                        <p className="text-sm text-[var(--color-primary)] mt-2 flex items-center gap-1">
                          <CalendarDays size={14} /> {edu.date}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Certifications & Diplomas */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 px-2">
                <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-[#EADDFF]" />
                <h2 className="text-3xl font-bold text-[#3A2D4D]">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <GlassCard key={idx} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)]/50 flex flex-shrink-0 items-center justify-center shadow-sm text-[var(--color-accent-dark)]">
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#3A2D4D] leading-tight mb-1">{cert.title}</h3>
                        <p className="text-[var(--color-text-muted)] font-medium text-sm">{cert.issuer}</p>
                        <p className="text-sm text-[var(--color-primary)] mt-2 flex items-center gap-1">
                          <CalendarDays size={14} /> {cert.date}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>


          {/* ====== ACHIEVEMENTS & EXTRA-CURRICULAR ====== */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="h-10 w-2.5 rounded-full bg-gradient-to-b from-[#D8B4E2] to-[var(--color-accent-light)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2D4D]">Achievements & Activities</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Highlight Art Achievements */}
              <GlassCard className="p-8 md:col-span-2 bg-gradient-to-br from-white/80 to-[var(--color-accent-light)]/30 overflow-hidden relative">
                {/* Decorative Art icon bg */}
                <Palette strokeWidth={1} size={200} className="absolute -right-10 -bottom-10 text-[var(--color-accent)]/10 rotate-12" />
                
                <h3 className="text-2xl font-bold text-[#3A2D4D] mb-6 flex items-center gap-3 relative z-10">
                  <Trophy className="text-[var(--color-accent-dark)]" />
                  Arts & Performance
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="bg-white/80 rounded-2xl p-5 border border-[var(--color-accent-light)] shadow-sm space-y-3 hover:shadow-md transition-all">
                      <h4 className="font-bold text-lg text-[#3A2D4D]">{ach.title}</h4>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{ach.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Extra-curriculars */}
              {extracurriculars.map((activity, idx) => (
                <GlassCard key={idx} className="p-6 flex items-start gap-4 hover:border-[var(--color-accent-light)] transition-colors">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <p className="text-[var(--color-text-main)] leading-relaxed">{activity.description}</p>
                </GlassCard>
              ))}
            </div>
          </section>


          {/* ====== FOOTER ====== */}
          <footer className="pt-12 pb-8 border-t border-[var(--color-primary-light)]/30 text-center space-y-4">
            <p className="text-[#3A2D4D] font-medium text-lg">Let's connect and create impact.</p>
            <div className="flex justify-center gap-6">
              <a href={`mailto:${personalInfo.email}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                Email
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]/70 pt-8">
              © {new Date().getFullYear()} Saloni Kumari. All rights reserved.
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}

export default App;

