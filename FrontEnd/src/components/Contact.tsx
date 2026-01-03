import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Zap, Star, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  
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

  const socialLinks = [
    { icon: Linkedin, url: personalInfo.contact.linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600', glow: 'rgba(59, 130, 246, 0.4)' },
    { icon: Github, url: personalInfo.contact.github, label: 'GitHub', color: 'from-slate-600 to-slate-700', glow: 'rgba(71, 85, 105, 0.4)' },
    { icon: Twitter, url: personalInfo.contact.twitter, label: 'Twitter', color: 'from-sky-400 to-sky-500', glow: 'rgba(56, 189, 248, 0.4)' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'from-violet-500 to-purple-600',
      glow: 'rgba(139, 92, 246, 0.3)',
      description: 'Send me an email',
    },
    ...(personalInfo.contact.phone
      ? [{
          icon: Phone,
          label: 'WhatsApp',
          value: personalInfo.contact.phone,
          href: `https://wa.me/${personalInfo.contact.phone.replace(/\D/g, '')}`,
          color: 'from-emerald-500 to-green-600',
          glow: 'rgba(16, 185, 129, 0.3)',
          description: 'Chat with me on WhatsApp',
        }]
      : []),
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.contact.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.contact.location)}`,
      color: 'from-cyan-500 to-blue-600',
      glow: 'rgba(6, 182, 212, 0.3)',
      description: 'Based in',
    },
  ];

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0a1f 50%, #030014 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-[30%] left-[10%] w-[350px] h-[350px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
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
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: '#34d399'
              }}
            >
              <Send size={16} />
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text-primary">Let's Work Together</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you and bring your ideas to life!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              variants={itemVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label !== 'Email' ? '_blank' : undefined}
                  rel={info.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group relative p-6 rounded-2xl transition-all duration-300 block"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'rgba(139, 92, 246, 0.2)'
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: `radial-gradient(circle, ${info.glow} 0%, transparent 70%)`,
                      filter: 'blur(30px)',
                      transform: 'scale(1.2)'
                    }}
                  />

                  <div 
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}
                    style={{
                      boxShadow: `0 10px 30px -10px ${info.glow}`
                    }}
                  >
                    <info.icon className="text-white" size={24} />
                  </div>
                  <p className="text-slate-500 text-sm mb-1">{info.description}</p>
                  <h4 className="text-white font-semibold text-lg group-hover:text-violet-300 transition-colors">
                    {info.value}
                  </h4>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-3">
                <Zap className="text-amber-400" size={24} />
                Connect with me
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return social.url ? (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-br ${social.color} text-white relative overflow-hidden group`}
                      style={{
                        boxShadow: `0 10px 30px -10px ${social.glow}`
                      }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={social.label}
                    >
                      <Icon size={24} className="relative z-10" />
                      <div 
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </motion.div>

            {/* Availability Card */}
            <motion.div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}
              variants={itemVariants}
            >
              {/* Top gradient line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), rgba(6, 182, 212, 0.5), transparent)'
                }}
              />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      Currently Available
                    </h4>
                  </div>
                  <p className="text-slate-400 mb-3">
                    I'm actively looking for new opportunities and exciting projects to work on.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Star className="text-amber-400" size={16} fill="currentColor" />
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                </div>
                <motion.a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="btn-primary inline-flex items-center gap-3 whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
