import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles, Code, Award, Rocket, Zap } from "lucide-react";
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '7+', color: 'from-violet-500 to-purple-600' },
    { icon: Award, label: 'Technologies', value: '15+', color: 'from-cyan-500 to-blue-600' },
    { icon: Rocket, label: 'Experience', value: '6+ Months', color: 'from-pink-500 to-rose-600' },
    { icon: Zap, label: 'Commitment', value: '100%', color: 'from-amber-500 to-orange-600' }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-30"
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
        <div 
          className="absolute top-[50%] left-[50%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#a78bfa'
              }}
            >
              <Sparkles size={16} className="text-violet-400" />
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="gradient-text-primary">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-light mb-8 leading-relaxed"
            variants={itemVariants}
            style={{ color: '#94a3b8' }}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
            style={{ color: '#64748b' }}
          >
            I specialize in building modern, scalable web applications with the MERN stack. 
            Passionate about creating exceptional digital experiences that combine beautiful design 
            with powerful functionality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              View My Work
            </motion.a>

            <motion.a
              href={personalInfo.resume}
              className="group inline-flex items-center gap-3 text-lg px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                color: '#a78bfa'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: 'rgba(139, 92, 246, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={itemVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="relative group"
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
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-3 mx-auto"
            variants={itemVariants}
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-label="Scroll to next section"
          >
            <span className="text-sm font-medium text-slate-500 group-hover:text-violet-400 transition-colors">
              Explore More
            </span>
            <div 
              className="p-3 rounded-full transition-all duration-300 group-hover:bg-violet-500/10"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}
            >
              <ArrowDown
                size={24}
                className="text-violet-400 group-hover:text-violet-300 transition-colors"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
