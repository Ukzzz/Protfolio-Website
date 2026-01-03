import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Layers,
} from "lucide-react";
import { projects } from "../data/portfolio";
import { Project, FilterCategory } from "../types";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, controls } = useScrollAnimation();

  const filterOptions: {
    label: string;
    value: FilterCategory;
    icon: React.ReactNode;
  }[] = [
    { label: "All Projects", value: "all", icon: <Star size={16} /> },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                color: '#22d3ee'
              }}
            >
              <Layers size={16} />
              My Work
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text-primary">Featured Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore my latest work showcasing modern web development,
              innovative solutions, and cutting-edge technologies that deliver
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === option.value
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                style={{
                  background: filter === option.value 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)'
                    : 'rgba(255, 255, 255, 0.03)',
                  border: filter === option.value 
                    ? '1px solid rgba(139, 92, 246, 0.4)'
                    : '1px solid rgba(255, 255, 255, 0.05)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 z-10">
                  {option.icon}
                  {option.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  variants={itemVariants}
                  layoutId={`project-${project.id}`}
                  onClick={() => openModal(project)}
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="relative rounded-2xl overflow-hidden h-full transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Hover gradient border */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                        padding: '1px'
                      }}
                    />
                    
                    {/* Top gradient line on hover */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), rgba(6, 182, 212, 0.8), transparent)'
                      }}
                    />


                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-5 line-clamp-2 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium"
                              style={{
                                background: 'rgba(139, 92, 246, 0.1)',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                color: '#c4b5fd'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span 
                            className="px-2.5 py-1 rounded-lg text-xs font-medium"
                            style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: '#64748b'
                            }}
                          >
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ x: 4 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-white font-medium text-sm transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ x: 4 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'rgba(3, 0, 20, 0.9)',
                backdropFilter: 'blur(20px)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 31, 0.98) 0%, rgba(3, 0, 20, 0.99) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(139, 92, 246, 0.15)'
              }}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Top gradient line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), rgba(6, 182, 212, 0.8), transparent)'
                }}
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 rounded-full transition-all duration-300"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <X size={20} className="text-white" />
              </button>

              {/* Image Gallery or Placeholder */}
              <div className="relative aspect-video">
                {selectedProject.images.length > 0 ? (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-t-3xl"
                    />

                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <ChevronLeft size={24} className="text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                          style={{
                            background: 'rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <ChevronRight size={24} className="text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    {selectedProject.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "bg-white scale-125"
                                : "bg-white/40 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Placeholder when no images */
                  <div 
                    className="w-full h-full rounded-t-3xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)'
                    }}
                  >
                    <div className="text-center">
                      <Layers size={64} className="text-violet-400 mx-auto mb-4" />
                      <p className="text-slate-400 font-medium">{selectedProject.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 rounded-xl text-sm font-medium"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          color: '#c4b5fd'
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoUrl && (
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-3"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      View Live Demo
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#fff'
                      }}
                      whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      View Source
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
