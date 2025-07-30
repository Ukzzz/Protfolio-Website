import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Twitter, Mail, ArrowUp, Star, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, url: personalInfo.contact.linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
    { icon: Github, url: 'https://github.com/Ukzzz', label: 'GitHub', color: 'from-gray-700 to-gray-800' },
    { icon: Twitter, url: personalInfo.contact.twitter, label: 'Twitter', color: 'from-sky-400 to-sky-500' },
    { icon: Mail, url: `mailto:${personalInfo.contact.email}`, label: 'Email', color: 'from-green-500 to-emerald-500' },
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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/20 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {personalInfo.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text-primary">
                    {personalInfo.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </motion.div>
              
              <p className="text-slate-300 mb-8 leading-relaxed max-w-md">
                Passionate about creating exceptional digital experiences and turning innovative ideas into reality through modern web technologies.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return social.url ? (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`p-3 bg-gradient-to-r ${social.color} rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon size={20} className="relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
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
                    className="block text-slate-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Zap className="text-blue-500" size={20} />
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="text-slate-300">
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
                <div className="text-slate-300">
                  <p className="text-sm text-slate-400 mb-1">Location</p>
                  <p>{personalInfo.contact.location}</p>
                </div>
                <div className="text-slate-300">
                  <p className="text-sm text-slate-400 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Copyright Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p 
                className="flex items-center gap-2 text-slate-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>&copy; {currentYear} {personalInfo.name}. Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <Heart className="text-red-500" size={16} fill="currentColor" />
                </motion.span>
                <span>and lots of ☕</span>
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
