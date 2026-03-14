import React from 'react';
import CursorPetals from './components/CursorPetals';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <CursorPetals />
      
      {/* 
        Container with global background and text colors applied via Tailwind.
        We ensure it's min-h-screen to cover the viewport. 
      */}
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
        
        {/* Decorative background blobs to enhance the pastel aesthetic */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-secondary)] opacity-50 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#EADDFF] opacity-40 blur-[120px] pointer-events-none" />

        <main className="z-10 max-w-4xl w-full text-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-6"
          >
            {/* Soft, floating pill badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-medium shadow-sm mb-4"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
              </span>
              Creative Professional
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#3A2D4D]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-dark)] to-[#D8B4E2]">Saloni</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--color-text-muted)] font-light max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, reactive, and aesthetic digital experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-medium text-lg shadow-[0_8px_20px_-6px_rgba(177,156,217,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(177,156,217,0.8)] hover:-translate-y-1 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-[var(--color-primary-dark)] border border-[var(--color-primary-light)] font-medium text-lg shadow-sm hover:bg-[var(--color-secondary)] transition-all duration-300">
              Contact Me
            </button>
          </motion.div>

        </main>
      </div>
    </>
  );
}

export default App;
