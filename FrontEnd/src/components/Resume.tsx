import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

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
      id="resume" 
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
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
                background: 'rgba(236, 72, 153, 0.1)',
                border: '1px solid rgba(236, 72, 153, 0.2)',
                color: '#f472b6'
              }}
            >
              <Calendar size={16} />
              My Journey
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text-primary">My Journey</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A summary of my professional experience and educational background. For more details, download my resume.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            
            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-10">
                <div 
                  className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600"
                  style={{
                    boxShadow: '0 10px 40px -10px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="text-slate-400 text-sm">Academic background</p>
                </div>
              </div>

              <div className="relative pl-8">
                {/* Timeline line */}
                <div 
                  className="absolute left-[11px] top-2 bottom-2 w-[2px] rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.1) 100%)'
                  }}
                />
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={edu.id} 
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {/* Timeline dot */}
                      <div 
                        className="absolute -left-[21px] top-2 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                          boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
                        }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      
                      <motion.div 
                        className="ml-4 p-6 rounded-2xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                        whileHover={{ 
                          backgroundColor: 'rgba(139, 92, 246, 0.05)',
                          borderColor: 'rgba(139, 92, 246, 0.2)'
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <span className="font-bold text-lg text-white">{edu.degree}</span>
                          <span className="text-violet-400 font-semibold">in {edu.field}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {edu.institution}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {edu.duration}
                          </span>
                        </div>
                        {edu.description && (
                          <p className="text-slate-400">{edu.description}</p>
                        )}
                        {edu.gpa && (
                          <div className="mt-3">
                            <span 
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                background: 'rgba(139, 92, 246, 0.15)',
                                color: '#c4b5fd'
                              }}
                            >
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Download Resume Button */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
          >
            <motion.a
              href={personalInfo.resume}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
              download
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={22} />
              Download My Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
