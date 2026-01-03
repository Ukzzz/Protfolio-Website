import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Brush, Wrench, Zap, Star, TrendingUp, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Cpu,
    color: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    description: 'Modern UI frameworks and responsive design',
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.3)',
    description: 'Server-side technologies and APIs',
  },
  {
    id: 'tools',
    label: 'Dev Tools',
    icon: Wrench,
    color: 'from-emerald-500 to-green-600',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    description: 'Version control and development workflow',
  },
  {
    id: 'design',
    label: 'Design',
    icon: Brush,
    color: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(236, 72, 153, 0.3)',
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

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-amber-400 to-orange-500';
    if (level >= 75) return 'from-emerald-400 to-green-500';
    if (level >= 50) return 'from-cyan-400 to-blue-500';
    return 'from-slate-400 to-slate-500';
  };

  const activeData = skillCategories.find(c => c.id === activeCategory);

  return (
    <section 
      id="skills" 
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, ${activeData?.glowColor || 'rgba(139, 92, 246, 0.15)'} 0%, transparent 60%)`,
            willChange: 'background'
          }}
        />
        <div 
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa'
              }}
            >
              <Sparkles size={16} />
              My Expertise
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text-primary">Technical Skills</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my technical expertise, from cutting-edge frontend frameworks to robust backend technologies and intuitive design tools.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div className="flex flex-wrap justify-center gap-3 mb-12" variants={itemVariants}>
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)`
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isActive 
                      ? '1px solid rgba(139, 92, 246, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            {skillCategories
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Category Header Card */}
                  <motion.div
                    className="relative rounded-2xl p-8 mb-8 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                    variants={itemVariants}
                  >
                    {/* Top gradient line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${category.glowColor}, transparent)`
                      }}
                    />

                    <div className="flex items-center gap-6">
                      <div 
                        className={`p-4 rounded-2xl bg-gradient-to-br ${category.color}`}
                        style={{
                          boxShadow: `0 10px 40px -10px ${category.glowColor}`
                        }}
                      >
                        <category.icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{category.label}</h3>
                        <p className="text-slate-400">{category.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills
                      .filter((skill) => skill.category === category.id)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.id}
                          className="group relative p-5 rounded-xl transition-all duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.08 }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(139, 92, 246, 0.08)',
                            borderColor: 'rgba(139, 92, 246, 0.2)'
                          }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div 
                                className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                              />
                              <span className="font-semibold text-white text-lg">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {skill.level >= 90 && <Star className="text-amber-400" size={16} fill="currentColor" />}
                              {skill.level >= 80 && skill.level < 90 && <TrendingUp className="text-emerald-400" size={16} />}
                            </div>
                          </div>
                          
                          {/* Skill Level Bar */}
                          <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                            <motion.div
                              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <span 
                              className={`text-xs font-medium px-2.5 py-1 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}
                            >
                              {getLevelLabel(skill.level)}
                            </span>
                            <span className="text-slate-500 text-sm">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Summary Section */}
          <motion.div className="mt-20" variants={itemVariants}>
            <div 
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(6, 182, 212, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.15)'
              }}
            >
              {/* Top gradient line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), transparent)'
                }}
              />

              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="text-amber-400" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Always Learning & Growing</h3>
              </div>
              <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best
                practices. My passion for learning drives me to explore new tools and frameworks that can enhance the
                quality of my work.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: '15+', label: 'Technologies' },
                  { value: '6+', label: 'Month Academic Experience' },
                  { value: '100%', label: 'Commitment' },
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center p-6 rounded-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(139, 92, 246, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl font-bold gradient-text-primary mb-2">{stat.value}</div>
                    <div className="text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
