'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Code2, Layers, Smartphone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column - Text Content */}
          <div>
            <motion.span variants={itemVariants} className="label mb-4 block">
              About Me
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="heading-2 text-neutral-900 dark:text-white mb-6">
              Engineering Android experiences that scale
            </motion.h2>
            
            <motion.p variants={itemVariants} className="body-large mb-6">
              {personalInfo.about.intro}
            </motion.p>

            {personalInfo.about.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="body-base mb-4">
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Column - Highlights & Cards */}
          <div className="space-y-6">
            {/* Core Expertise Card */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Core Expertise</h3>
              </div>
              <ul className="space-y-3">
                {personalInfo.about.highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Architecture Card */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Architecture Focus</h3>
              </div>
              <ul className="space-y-3">
                {personalInfo.about.highlights.slice(3).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cross-Platform Note */}
            <motion.div variants={itemVariants} className="card p-6 bg-neutral-50 dark:bg-neutral-800/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Cross-Platform</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Beyond native Android, I have hands-on production experience with 
                <span className="font-medium text-neutral-900 dark:text-neutral-200"> Flutter </span>
                for cross-platform projects, enabling rapid multi-platform delivery when needed.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
