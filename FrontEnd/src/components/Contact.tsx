import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Zap, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { ref, controls } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://protfolio-website-dvmt.onrender.com', {  // Change URL if needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      const data = await response.json();
      alert('Error: ' + (data.error || 'Failed to send message'));
    }
  } catch (error) {
    alert('Network error: Please try again later.');
  }
};
  
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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

            {/* Enhanced Contact Form */}
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="card p-10 relative overflow-hidden">
                {/* Background Decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
                  variants={floatingVariants}
                  animate="animate"
                />

                <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Send className="text-blue-500" size={32} />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-slate-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-slate-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-slate-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-vertical placeholder-slate-400"
                      placeholder="Tell me about your project or just say hello! I'm excited to hear from you."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center gap-3 py-4 text-lg font-semibold"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
