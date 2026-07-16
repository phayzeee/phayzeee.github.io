'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Smartphone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { AndroidIcon, FlutterIcon } from './icons';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-flutter-50/40 dark:from-neutral-950 dark:via-neutral-900 dark:to-flutter-950/30" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orbs — one per platform */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-flutter-500/10 dark:bg-flutter-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-12">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accent-500/15 to-flutter-500/15 text-neutral-800 dark:text-neutral-200 rounded-md border border-neutral-200/60 dark:border-neutral-700/60">
              <Smartphone className="w-3.5 h-3.5" />
              Mobile App Developer
            </span>
            <span className="platform-android">
              <AndroidIcon className="w-3.5 h-3.5" />
              Android
            </span>
            <span className="platform-flutter">
              <FlutterIcon className="w-3.5 h-3.5" />
              Flutter
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 text-neutral-900 dark:text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-medium mb-6"
          >
            <span className="gradient-text-brand">{personalInfo.tagline}</span>
          </motion.h2>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="body-large max-w-2xl mb-10"
          >
            {personalInfo.heroSummary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="btn-brand"
            >
              <ExternalLink size={18} />
              View Projects
            </button>
            <a
              href={personalInfo.resume}
              download
              className="btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
          >
            <div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">4+</div>
              <div className="text-sm text-neutral-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">500K+</div>
              <div className="text-sm text-neutral-500">Users Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text-brand">Android · iOS</div>
              <div className="text-sm text-neutral-500">Platforms Shipped</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-400"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
