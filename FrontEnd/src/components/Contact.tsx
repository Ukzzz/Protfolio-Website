import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageCircle, Zap, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
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

  const socialLinks = [
    { icon: Linkedin, url: personalInfo.contact.linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
    { icon: Github, url: personalInfo.contact.github, label: 'GitHub', color: 'from-gray-700 to-gray-800' },
    { icon: Twitter, url: personalInfo.contact.twitter, label: 'Twitter', color: 'from-sky-400 to-sky-500' },
  ];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
    color: 'from-blue-500 to-cyan-500',
    description: 'Send me an email',
  },
  ...(personalInfo.contact.phone
    ? [{
        icon: Phone,
        label: 'WhatsApp',
        value: personalInfo.contact.phone,
        href: `https://wa.me/${personalInfo.contact.phone.replace(/\D/g, '')}`,
        color: 'from-green-500 to-emerald-500',
        description: 'Chat with me on WhatsApp',
      }]
    : []),
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.contact.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.contact.location)}`,
    color: 'from-purple-500 to-pink-500',
    description: 'Based in',
  },
];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
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
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you and bring your ideas to life!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-20">
            {/* Enhanced Contact Information */}
            <motion.div 
              className="space-y-10"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <MessageCircle className="text-blue-500" size={32} />
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 8 }}
                    >
                      <div className={`p-4 bg-gradient-to-r ${info.color} rounded-2xl mr-6 shadow-lg`}>
                        <info.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-500 text-sm font-medium mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-slate-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-semibold text-lg">
                            {info.value}
                          </p>
                        )}
                        <p className="text-slate-500 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                  <Zap className="text-yellow-500" size={28} />
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return social.url ? (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-gradient-to-r ${social.color} rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Icon size={28} className="relative z-10" />
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

              {/* Enhanced Availability Status */}
              <motion.div
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <h4 className="text-xl font-semibold text-slate-900">
                    Currently Available
                  </h4>
                </div>
                <p className="text-slate-600 mb-4">
                  I'm actively looking for new opportunities and exciting projects to work on.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Star className="text-yellow-500" size={16} />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
