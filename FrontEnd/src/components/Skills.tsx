import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Brush, Wrench, Zap, Star, TrendingUp } from 'lucide-react';
import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern UI frameworks and responsive design',
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    description: 'Server-side technologies and APIs',
  },
  {
    id: 'tools',
    label: 'Development Tools',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    description: 'Version control and development workflow',
  },
  {
    id: 'design',
    label: 'Design & UX',
    icon: Brush,
    color: 'from-orange-500 to-red-500',
    description: 'User experience and visual design',
  },
];

const Skills: React.FC = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const [activeCategory, setActiveCategory] = useState('frontend');

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

  const floatingVariants: Variants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Returns label for skill level
  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
          {/* Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-primary text-shadow-xl">
              Technical Skills
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my technical expertise, from cutting-edge frontend frameworks to robust backend technologies and intuitive design tools.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-16" variants={itemVariants}>
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 z-10">
                  <category.icon size={20} />
                  {category.label}
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl z-0"
                    layoutId={`activeCategory-${category.id}`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid for Active Category */}
          <AnimatePresence mode="wait">
            {skillCategories
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  className="grid grid-cols-1 gap-12"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.div
                    className="card p-10 relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decoration */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${category.color} rounded-full opacity-10 blur-2xl`}
                      variants={floatingVariants}
                      animate="animate"
                    />

                    {/* Header */}
                    <div className="flex items-center mb-8">
                      <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl mr-6 shadow-lg`}>
                        <category.icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">{category.label}</h3>
                        <p className="text-slate-600">{category.description}</p>
                      </div>
                    </div>

                    {/* Skills with badges */}
                    <div className="space-y-8">
                      {skills
                        .filter((skill) => skill.category === category.id)
                        .map((skill, index) => (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 8 }}
                          >
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`} />
                                <span className="font-semibold text-slate-700 text-lg">{skill.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg shadow-${category.color
                                    .split(' ')[0]
                                    .replace('from-', '')}-500/50`}
                                  style={{ boxShadow: `0 0 8px 2px var(--tw-gradient-stops)` }}
                                >
                                  {getLevelLabel(skill.level)}
                                </span>
                                {skill.level >= 90 && <Star className="text-yellow-500" size={18} />}
                                {skill.level >= 80 && skill.level < 90 && <TrendingUp className="text-green-500" size={18} />}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Summary */}
          <motion.div className="mt-20 text-center" variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-10 border border-blue-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="text-yellow-500" size={32} />
                <h3 className="text-3xl font-bold text-slate-900">Always Learning & Growing</h3>
              </div>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best
                practices. My passion for learning drives me to explore new tools and frameworks that can enhance the
                quality of my work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-primary mb-2">15+</div>
                  <div className="text-slate-600 font-medium">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-primary mb-2">6+</div>
                  <div className="text-slate-600 font-medium">Month Academic Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-primary mb-2">100%</div>
                  <div className="text-slate-600 font-medium">Commitment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
