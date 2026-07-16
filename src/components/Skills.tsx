'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Wrench, Globe } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { AndroidIcon, FlutterIcon } from './icons';

interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string | null }[];
}

type Tone = 'android' | 'flutter' | 'neutral';

function SkillLevel({ level }: { level: string | null }) {
  if (!level) return null;

  const colors: Record<string, string> = {
    'Expert': 'bg-gradient-to-r from-accent-600 to-flutter-600 text-white',
    'Advanced': 'bg-accent-500/70 text-white',
    'Intermediate': 'bg-neutral-400 text-white',
    'Basic': 'bg-neutral-300 dark:bg-neutral-600 text-neutral-600 dark:text-neutral-300',
  };

  return (
    <span className={`text-2xs px-2 py-0.5 rounded-md font-medium ${colors[level] || colors['Basic']}`}>
      {level}
    </span>
  );
}

const toneStyles: Record<Tone, { card: string; iconWrap: string; chip: string }> = {
  android: {
    card: 'border-accent-500/30 bg-accent-500/[0.04]',
    iconWrap: 'bg-accent-500/20 text-accent-600 dark:text-accent-400',
    chip: 'bg-white dark:bg-neutral-800 border-accent-500/20',
  },
  flutter: {
    card: 'border-flutter-500/30 bg-flutter-500/[0.04]',
    iconWrap: 'bg-flutter-500/20 text-flutter-600 dark:text-flutter-400',
    chip: 'bg-white dark:bg-neutral-800 border-flutter-500/20',
  },
  neutral: {
    card: '',
    iconWrap: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400',
    chip: 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
  },
};

function SkillCard({
  category,
  icon,
  tone = 'neutral',
  badge,
  index,
}: {
  category: SkillCategory;
  icon: React.ReactNode;
  tone?: Tone;
  badge?: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const styles = toneStyles[tone];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card p-6 h-full ${styles.card}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.iconWrap}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {category.title}
          </h3>
          <p className="text-xs text-neutral-500">{category.description}</p>
        </div>
        {badge && (
          <span className={`ml-auto text-xs font-medium uppercase tracking-wider px-2 py-1 rounded ${
            tone === 'flutter'
              ? 'text-flutter-600 dark:text-flutter-400 bg-flutter-500/10'
              : 'text-accent-600 dark:text-accent-400 bg-accent-500/10'
          }`}>
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${styles.chip}`}
          >
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
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
            A full mobile toolkit — native Android and Flutter for the product,
            solid architecture and tooling underneath it.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Platforms - equal weight, side by side */}
          <div className="grid lg:grid-cols-2 gap-6">
            <SkillCard
              category={skills.primary}
              icon={<AndroidIcon className="w-5 h-5" />}
              tone="android"
              badge="Platform"
              index={0}
            />
            <SkillCard
              category={skills.secondary}
              icon={<FlutterIcon className="w-5 h-5" />}
              tone="flutter"
              badge="Platform"
              index={1}
            />
          </div>

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

          {/* Domain */}
          <SkillCard
            category={skills.domain}
            icon={<Globe className="w-5 h-5" />}
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
              <span className="w-3 h-3 rounded bg-gradient-to-r from-accent-600 to-flutter-600" />
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-accent-500/70" />
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
