import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Award, Rocket, Zap, Star, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '12+', color: 'from-violet-500 to-purple-600' },
    { icon: Award, label: 'Technologies', value: '15+', color: 'from-cyan-500 to-blue-600' },
    { icon: Rocket, label: 'Academic Experience', value: '6+ Months', color: 'from-pink-500 to-rose-600' },
    { icon: Zap, label: 'Commitment', value: '100%', color: 'from-amber-500 to-orange-600' }
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
        staggerChildren: 0.15,
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

  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
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
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa'
              }}
            >
              <User size={16} />
              Get to know me
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text-primary">About Me</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Get to know me better - my journey, passion, and what drives me to create exceptional digital experiences that make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image with 3D Effects */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="relative w-full max-w-lg mx-auto perspective-container">
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-20 h-20 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
                    border: '1px solid rgba(139, 92, 246, 0.3)'
                  }}
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}
                  animate={{ 
                    y: [10, -10, 10],
                    x: [-5, 5, -5]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Image Container */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)',
                    padding: '3px'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="relative rounded-3xl overflow-hidden"
                    style={{ background: '#0a0a1f' }}
                  >
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face';
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, transparent 60%, rgba(3, 0, 20, 0.8) 100%)'
                      }}
                    />
                    
                    {/* Available Badge */}
                    <motion.div
                      className="absolute top-6 right-6 px-4 py-2 rounded-full flex items-center gap-2"
                      style={{
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        backdropFilter: 'blur(10px)'
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      
                    </motion.div>
                  </div>
                </motion.div>

                {/* Glow behind image */}
                <div 
                  className="absolute inset-0 -z-10 rounded-3xl"
                  style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    transform: 'scale(0.9) translateY(20px)'
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Crafting Digital Experiences with{' '}
                  <span className="gradient-text-primary">Passion</span>
                </h3>
                <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                  <p>
                    Hello! I'm <span className="font-semibold text-white">Uzair Kashif</span>, a creative and driven full-stack web developer with a strong foundation in the MERN stack, Git/GitHub, Postman, and modern development tools. I specialize in building responsive, high-performance web applications that blend functionality with elegant design.
                  </p>
                  <p>
                    My journey began with a deep curiosity about how the web works, which quickly grew into a passion for crafting seamless, intuitive digital experiences that solve real-world problems. I specialize in modern JavaScript frameworks like React and backend development with Node.js, forming a strong foundation in the MERN stack.
                  </p>
                  <p>
                    Alongside that, I bring solid experience in Python, C++, and real-time technologies like Socket.IO. I'm proficient with industry-standard tools such as Postman, Git, and GitHub, which I use to streamline development and ensure clean, collaborative code.
                  </p>
                </div>
              </div>

              {/* Skills Highlight */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Star className="text-amber-400" size={24} />
                  What I bring to the table:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                      style={{
                        background: 'rgba(139, 92, 246, 0.05)',
                        border: '1px solid rgba(139, 92, 246, 0.1)'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        x: 8,
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderColor: 'rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-slate-300 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-24"
            variants={itemVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="p-6 rounded-2xl text-center h-full transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div 
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-gradient-to-br ${stat.color}`}
                      style={{
                        boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.3)'
                      }}
                    >
                      <stat.icon className="text-white" size={28} />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                      transform: 'scale(1.1)'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <div 
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}
            >
              {/* Decorative gradient line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), transparent)'
                }}
              />
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                Let's collaborate to create something amazing together. I'm always excited to work on new projects and bring innovative solutions to life.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -4 }}
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

// Helper component used in header
const User: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default About;
