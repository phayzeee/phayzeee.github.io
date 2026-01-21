'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/data/portfolio';

// Android robot SVG icon
const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
  </svg>
);

// Flutter icon
const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
  </svg>
);

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

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className={`card-hover overflow-hidden cursor-pointer ${project.featured ? 'lg:col-span-2' : ''}`}
      onClick={onClick}
    >
      {/* Screenshot Preview */}
      <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        {project.screenshots[0] ? (
          <img
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover"
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
                  : 'bg-sky-500/20'
              }`}>
                {project.platform === 'android' ? (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent-500" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-sky-500" fill="currentColor">
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                  </svg>
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
          {project.platform === 'android' ? (
            <span className="platform-android">
              <AndroidIcon />
              Android
            </span>
          ) : (
            <span className="platform-flutter">
              <FlutterIcon />
              Flutter
            </span>
          )}
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
          {project.highlights.map((highlight, index) => (
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
            {project.platform === 'android' ? (
              <span className="platform-android">
                <AndroidIcon />
                Android
              </span>
            ) : (
              <span className="platform-flutter">
                <FlutterIcon />
                Flutter
              </span>
            )}
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
                className="btn-primary"
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Separate Android and Flutter projects
  const androidProjects = projects.filter(p => p.platform === 'android');
  const flutterProjects = projects.filter(p => p.platform === 'flutter');

  return (
    <section id="projects" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <span className="label mb-4 block">Featured Work</span>
          <h2 className="heading-2 text-neutral-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            A selection of Android applications I&apos;ve architected and built, 
            showcasing modern development practices and scalable solutions.
          </p>
        </motion.div>

        {/* Android Projects */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="platform-android">
              <AndroidIcon />
              Android
            </span>
            <span className="text-sm text-neutral-500">Primary Focus</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {androidProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Flutter Projects */}
        {flutterProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="platform-flutter">
                <FlutterIcon />
                Flutter
              </span>
              <span className="text-sm text-neutral-500">Cross-Platform</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {flutterProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}
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
