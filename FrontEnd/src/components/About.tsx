import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Award, Rocket, Zap, Star, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '5+', color: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, label: 'Technologies', value: '15+', color: 'from-orange-500 to-red-500' },
    { icon: Rocket, label: 'Commitment', value: '100%', color: 'from-blue-500 to-red-500' }
  ];

  const skills = [
    'Modern web development with MERN Stack',
    'Backend development with Node.js, Express, and MongoDB/MySQL',
    'UI/UX design with attention to detail and user experience',
    'Performance optimization and best practices',
    'Real-time applications with Socket.IO',
    'Version control with Git and collaborative development',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Enhanced Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text-primary text-shadow-xl">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Get to know me better - my journey, passion, and what drives me to create exceptional digital experiences that make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Image */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Decorations */}
                <motion.div
                  className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                  variants={floatingVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: '2s' }}
                />
                
                {/* Enhanced Image Container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl transform rotate-6 shadow-2xl"></div>
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face';
                      }}
                    />
                    
                    {/* Floating Badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
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
                      <Zap size={16} className="inline mr-2" />
                      Available
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  Crafting Digital Experiences with{' '}
                  <span className="gradient-text-primary">Passion</span>
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Hello! I'm <span className="font-semibold text-slate-900">Uzair Kashif</span>, a creative and driven full-stack web developer with a strong foundation in the MERN stack, Git/GitHub, Postman, and modern development tools. I specialize in building responsive, high-performance web applications that blend functionality with elegant design.
                  </p>
                  <p>
                    My journey began with a deep curiosity about how the web works, which quickly grew into a passion for crafting seamless, intuitive digital experiences that solve real-world problems. I specialize in modern JavaScript frameworks like React and backend development with Node.js, forming a strong foundation in the MERN stack.
                  </p>
                  <p>
                    Alongside that, I bring solid experience in Python, C++, and real-time technologies like Socket.IO. I'm proficient with industry-standard tools such as Postman, Git, and GitHub, which I use to streamline development and ensure clean, collaborative code.
                  </p>
                </div>
              </div>

              {/* Enhanced Skills Highlight */}
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                  <Star className="text-yellow-500" size={24} />
                  What I bring to the table:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div 
            className="mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <stat.icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-3 gradient-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Let's collaborate to create something amazing together. I'm always excited to work on new projects and bring innovative solutions to life.
              </p>
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket size={20} />
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
