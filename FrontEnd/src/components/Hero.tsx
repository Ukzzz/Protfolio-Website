import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-pattern pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50" />
      </div>

      <div className="container-custom section-padding">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-12" variants={itemVariants}>
            <motion.div
              className="relative w-48 h-48 mx-auto mb-8"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-white rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`;
                    }}
                  />
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Available
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles size={16} />
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 gradient-text-primary text-shadow-xl"
            variants={itemVariants}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-light text-slate-600 mb-10 leading-tight"
            variants={itemVariants}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.querySelector("#projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View My Work - Scroll to Projects section"
            >
              <ExternalLink size={20} />
              View My Work
            </motion.a>

            <motion.a
              href={personalInfo.resume}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              download
              aria-label="Download Resume"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 place-items-center"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">
                5+
              </div>
              <div className="text-slate-600 font-medium">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text-primary mb-2">
                100%
              </div>
              <div className="text-slate-600 font-medium">Commitment</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            className="text-slate-400 hover:text-blue-500 transition-colors duration-300 group"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-label="Scroll to next section"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                Explore More
              </span>
              <ArrowDown
                size={32}
                className="group-hover:scale-110 transition-transform"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
