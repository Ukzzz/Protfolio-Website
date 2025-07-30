import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
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

  const getPlaceholderImage = (project: Project) => {
    const categoryImages = {
      frontend:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=600&fit=crop",
      fullstack:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      mobile:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      backend:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      design:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    };
    return categoryImages[project.category];
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Enhanced Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-primary text-shadow-xl">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore my latest work showcasing modern web development,
              innovative solutions, and cutting-edge technologies that deliver
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Enhanced Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === option.value
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white text-slate-700 hover:bg-slate-100 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 z-10">
                  {option.icon}
                  {option.label}
                </span>
                {filter === option.value && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-0"
                    layoutId="activeFilter"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Projects Grid */}
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
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card overflow-hidden h-full">
                    {/* Enhanced Project Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = getPlaceholderImage(project);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Enhanced Featured Badge */}
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          ⭐ Featured
                        </motion.div>
                      )}

                      {/* Enhanced Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <motion.div
                          className="bg-white rounded-full p-4 shadow-2xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="text-blue-500" size={28} />
                        </motion.div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </div>
                    </div>

                    {/* Enhanced Project Info */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Enhanced Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ x: 4 }}
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-semibold transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ x: 4 }}
                          >
                            <Github size={18} />
                            View Code
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

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Enhanced Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Enhanced Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 bg-black/20 hover:bg-black/40 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <X size={24} />
              </button>

              {/* Enhanced Image Gallery */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = getPlaceholderImage(selectedProject);
                  }}
                />

                {/* Enhanced Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                {/* Enhanced Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Enhanced Project Details */}
              <div className="p-10">
                <h3 className="text-4xl font-bold mb-6 text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Enhanced Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-slate-900">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-6">
                  {selectedProject.demoUrl && (
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-3"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </motion.a>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 shadow-md gap-2"
                    >
                      <Github size={18} />
                      <span>View Source</span>
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
