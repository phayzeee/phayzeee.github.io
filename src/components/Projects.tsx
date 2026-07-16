'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, LayoutGrid } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { AndroidIcon, FlutterIcon } from './icons';

interface Project {
  id: string;
  name: string;
  platform: string;
  featured: boolean;
  shortDescription: string;
  description: {
    problem: string;
    approach: string;
    outcome: string;
  };
  techStack: string[];
  screenshots: string[];
  links: {
    github: string | null;
    playStore: string | null;
  };
  highlights: string[];
}

type Filter = 'all' | 'android' | 'flutter';

const filters: { id: Filter; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Projects', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
  { id: 'android', label: 'Android', icon: <AndroidIcon className="w-3.5 h-3.5" /> },
  { id: 'flutter', label: 'Flutter', icon: <FlutterIcon className="w-3.5 h-3.5" /> },
];

function PlatformBadge({ platform }: { platform: string }) {
  return platform === 'android' ? (
    <span className="platform-android">
      <AndroidIcon className="w-3.5 h-3.5" />
      Android
    </span>
  ) : (
    <span className="platform-flutter">
      <FlutterIcon className="w-3.5 h-3.5" />
      Flutter
    </span>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card-brand-hover overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Screenshot Preview */}
      <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        {project.screenshots[0] ? (
          <img
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                project.platform === 'android'
                  ? 'bg-accent-500/20'
                  : 'bg-flutter-500/20'
              }`}>
                {project.platform === 'android' ? (
                  <AndroidIcon className="w-8 h-8 text-accent-500" />
                ) : (
                  <FlutterIcon className="w-8 h-8 text-flutter-500" />
                )}
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">
                Add screenshot: {project.screenshots[0]}
              </p>
            </div>
          </div>
        )}

        {/* Platform badge */}
        <div className="absolute top-4 left-4">
          <PlatformBadge platform={project.platform} />
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-neutral-900/80 text-white rounded-md">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="heading-3 text-neutral-900 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="body-base mb-4">
          {project.shortDescription}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <span key={index} className="accent-badge text-xs">
              {highlight}
            </span>
          ))}
        </div>

        {/* Tech stack preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="tech-badge text-xs">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800">
          {project.screenshots.length > 0 ? (
            <>
              <img
                src={project.screenshots[currentImage]}
                alt={`${project.name} screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Gallery controls */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImage
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-neutral-400">No screenshots available</p>
            </div>
          )}

          {/* Platform badge */}
          <div className="absolute top-4 left-4">
            <PlatformBadge platform={project.platform} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-2">
            {project.name}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.highlights.map((highlight, index) => (
              <span key={index} className="accent-badge">
                {highlight}
              </span>
            ))}
          </div>

          {/* Problem → Approach → Outcome */}
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                The Challenge
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.description.problem}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Engineering Approach
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.description.approach}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Outcome
              </h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.description.outcome}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand"
              >
                <ExternalLink size={18} />
                View on Play Store
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} />
                View Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.platform === activeFilter);

  return (
    <section id="projects" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-10"
        >
          <span className="label mb-4 block">Featured Work</span>
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            A selection of mobile applications I&apos;ve built across native Android
            and Flutter — from banking-grade payment systems to consumer apps.
          </p>
        </motion.div>

        {/* Platform Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-tab ${activeFilter === filter.id ? 'filter-tab-active' : ''}`}
              >
                {activeFilter === filter.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full gradient-brand"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {filter.icon}
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
