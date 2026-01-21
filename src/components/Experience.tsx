'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';

function ExperienceCard({ 
  exp, 
  index, 
  isLast 
}: { 
  exp: typeof experience[0]; 
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] md:left-[11px] top-10 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1 top-1.5 w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-accent-500 border-4 border-white dark:border-neutral-900 shadow-sm" />

      <div className="card p-6 md:p-8 mb-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-neutral-400" />
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {exp.company}
              </span>
            </div>
            <h3 className="heading-3 text-neutral-900 dark:text-white">
              {exp.role}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="body-base mb-6">
          {exp.description}
        </p>

        {/* Responsibilities */}
        <div className="space-y-3 mb-6">
          {exp.responsibilities.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0 mt-2" />
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {exp.techStack.map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <span className="label mb-4 block">Career</span>
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Building Android applications across diverse industries, 
            from early-stage startups to enterprise solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
