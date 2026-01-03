import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Twitter, Mail, ArrowUp, Star, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, url: personalInfo.contact.linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
    { icon: Github, url: 'https://github.com/Ukzzz', label: 'GitHub', color: 'from-slate-600 to-slate-700' },
    { icon: Twitter, url: personalInfo.contact.twitter, label: 'Twitter', color: 'from-sky-400 to-sky-500' },
    { icon: Mail, url: `mailto:${personalInfo.contact.email}`, label: 'Email', color: 'from-emerald-500 to-green-600' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#030014' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      {/* Top gradient border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), transparent)'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.4)'
                  }}
                >
                  {personalInfo.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text-primary">
                    {personalInfo.name}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </motion.div>
              
              <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                Passionate about creating exceptional digital experiences and turning innovative ideas into reality through modern web technologies.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return social.url ? (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`p-3 rounded-xl bg-gradient-to-br ${social.color} text-white relative overflow-hidden group`}
                      style={{
                        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
                      }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={social.label}
                    >
                      <Icon size={18} className="relative z-10" />
                      <div 
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
                <Star className="text-amber-400" size={18} />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    whileHover={{ x: 4, color: '#a78bfa' }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="text-cyan-400" size={18} />
                Contact Info
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Location</p>
                  <p className="text-slate-400 text-sm">{personalInfo.contact.location}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="text-emerald-400 text-sm">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div 
            className="pt-8"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="flex items-center gap-2 text-slate-500 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>© {currentYear} {personalInfo.name}. Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <Heart className="text-rose-500" size={14} fill="currentColor" />
                </motion.span>
                <span>and lots of ☕</span>
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="p-3 rounded-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} className="text-violet-400" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
