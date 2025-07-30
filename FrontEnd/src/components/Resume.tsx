import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Resume: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  return (
    <section id="resume" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container-custom">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-primary text-shadow-xl flex items-center justify-center gap-3">
              <Briefcase className="text-blue-500" size={40} />
              My Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A summary of my professional experience and educational background. For more details, download my resume.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Experience Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                  <Briefcase className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">Experience</h3>
                  <p className="text-slate-500">Professional background</p>
                </div>
              </div>

              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-blue-400 rounded-full" />
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div key={exp.id} variants={itemVariants} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-5 top-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10" />
                      <div className="ml-4 bg-white rounded-2xl shadow-md border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-lg text-slate-900">{exp.position}</span>
                          <span className="text-blue-500 font-semibold">@ {exp.company}</span>
                        </div>
                        <div className="text-sm text-slate-500 mb-3">{exp.duration}</div>
                        <ul className="list-disc list-inside space-y-2 text-slate-600">
                          {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">Education</h3>
                  <p className="text-slate-500">Academic background</p>
                </div>
              </div>

              <div className="relative pl-8">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-pink-300 rounded-full" />
                <div className="space-y-12">
                  {education.map((edu, index) => (
                    <motion.div key={edu.id} variants={itemVariants} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-5 top-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10" />
                      <div className="ml-4 bg-white rounded-2xl shadow-md border border-purple-100 p-6 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-bold text-lg text-slate-900">{edu.degree}</span>
                          <span className="text-purple-500 font-semibold">in {edu.field}</span>
                        </div>
                        <div className="text-sm text-slate-500 mb-3">{edu.institution} | {edu.duration}</div>
                        <p className="text-slate-600">{edu.description}</p>
                      </div>
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
            <a
              href={personalInfo.resume}
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              download
            >
              <Download size={22} />
              Download My Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
