'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Layers, Code2, Wrench, Globe } from 'lucide-react';
import { skills } from '@/data/portfolio';

// Android robot SVG icon
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
  </svg>
);

interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string | null }[];
}

function SkillLevel({ level }: { level: string | null }) {
  if (!level) return null;
  
  const colors: Record<string, string> = {
    'Expert': 'bg-accent-500 text-white',
    'Advanced': 'bg-accent-500/60 text-white',
    'Intermediate': 'bg-neutral-400 text-white',
    'Basic': 'bg-neutral-300 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300',
  };

  return (
    <span className={`text-2xs px-2 py-0.5 rounded-md font-medium ${colors[level] || colors['Basic']}`}>
      {level}
    </span>
  );
}

function SkillCard({
  category,
  icon,
  isPrimary,
  isDeemphasized,
  index,
}: {
  category: SkillCategory;
  icon: React.ReactNode;
  isPrimary?: boolean;
  isDeemphasized?: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card p-6 ${isPrimary ? 'border-accent-500/30 bg-accent-500/5 dark:bg-accent-500/5' : ''} ${isDeemphasized ? 'opacity-70' : ''}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isPrimary 
            ? 'bg-accent-500/20 text-accent-600 dark:text-accent-400' 
            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
        }`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {category.title}
          </h3>
          <p className="text-xs text-neutral-500">{category.description}</p>
        </div>
        {isPrimary && (
          <span className="ml-auto text-xs font-medium uppercase tracking-wider text-accent-600 dark:text-accent-400 bg-accent-500/10 px-2 py-1 rounded">
            Primary
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
              isPrimary
                ? 'bg-white dark:bg-neutral-800 border-accent-500/20'
                : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700'
            }`}
          >
            <span className={`text-sm font-medium ${
              isPrimary 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-neutral-700 dark:text-neutral-300'
            }`}>
              {skill.name}
            </span>
            <SkillLevel level={skill.level} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <span className="label mb-4 block">Expertise</span>
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            A focused toolkit for building robust Android applications, 
            with supporting skills in cross-platform development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Primary - Android */}
          <SkillCard
            category={skills.primary}
            icon={<AndroidIcon />}
            isPrimary
            index={0}
          />

          {/* Secondary - Flutter */}
          <SkillCard
            category={skills.secondary}
            icon={<Smartphone className="w-5 h-5" />}
            index={1}
          />

          {/* Architecture */}
          <SkillCard
            category={skills.architecture}
            icon={<Layers className="w-5 h-5" />}
            index={2}
          />

          {/* Tools */}
          <SkillCard
            category={skills.tools}
            icon={<Wrench className="w-5 h-5" />}
            index={3}
          />

          {/* Domain - De-emphasized */}
          <SkillCard
            category={skills.domain}
            icon={<Globe className="w-5 h-5" />}
            isDeemphasized
            index={4}
          />
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-4 mt-10 text-xs text-neutral-500"
        >
          <span>Proficiency:</span>
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-accent-500" />
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-accent-500/60" />
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-neutral-400" />
              <span>Intermediate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-neutral-300 dark:bg-neutral-600" />
              <span>Basic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
