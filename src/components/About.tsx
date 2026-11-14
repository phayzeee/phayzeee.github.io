'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, GraduationCap, Layers } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { AndroidIcon, FlutterIcon } from './icons';

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
              Engineering mobile experiences{' '}
              <span className="gradient-text-brand">that scale</span>
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

          {/* Right Column - Platform & Architecture Cards */}
          <div className="space-y-6">
            {/* Platform Cards - equal weight */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="card p-6 border-accent-500/20 bg-accent-500/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-accent-500/15 flex items-center justify-center mb-4">
                  <AndroidIcon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Native Android</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Kotlin-first development with Jetpack Compose, Coroutines & Flow — trusted for
                  banking-grade payment systems at national scale.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="card p-6 border-flutter-500/20 bg-flutter-500/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-flutter-500/15 flex items-center justify-center mb-4">
                  <FlutterIcon className="w-5 h-5 text-flutter-600 dark:text-flutter-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Flutter</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Production cross-platform apps with Dart & BLoC — shipped to both the
                  Play Store and App Store from a single codebase.
                </p>
              </motion.div>
            </div>

            {/* Architecture & Quality Card */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">What I Bring to Every App</h3>
              </div>
              <ul className="space-y-3">
                {personalInfo.about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education & Certification Card */}
            <motion.div variants={itemVariants} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">Education & Certification</h3>
              </div>
              <ul className="space-y-3">
                {personalInfo.education.map((item) => (
                  <li key={item.degree} className="text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.degree}</span>
                    <span className="block text-sm">{item.school} · {item.period}</span>
                  </li>
                ))}
                {personalInfo.certifications.map((item) => (
                  <li key={item.name} className="text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.name}</span>
                    <span className="block text-sm">{item.detail} · {item.year}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
