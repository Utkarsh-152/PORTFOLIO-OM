import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://github.com/Utkarsh-152/PORTFOLIO-OM/blob/main/src/components/Photo/WhatsApp%20Image%202025-03-03%20at%2020.14.14_d23cb502.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl  w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a Flutter Developer with expertise in frontend development, UI/UX design, and startup innovation. Currently, I’m working on Diryd, a cab booking platform, where I handle the frontend development using Flutter, backed by node.js and PostgreSQL. I’m also the co-founder of Syncella Enterprises Pvt Ltd, building SafarSathi, a platform that connects travelers.

            </p>
            <p className="text-gray-300 mb-8">
              Additionally, I have experience working as a Flutter Developer Intern at Call Astro Vas Venture Private Limited, where I contribute to the Call Astro admin application.

            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <Code className="text-blue-400 mb-2" size={28} />
                <h4 className="text-white font-medium mb-1">Development</h4>
                <p className="text-gray-400 text-sm">Clean, modern and maintainable code</p>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <Palette className="text-blue-400 mb-2" size={28} />
                <h4 className="text-white font-medium mb-1">Design</h4>
                <p className="text-gray-400 text-sm">Beautiful and intuitive interfaces</p>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg">
                <Globe className="text-blue-400 mb-2" size={28} />
                <h4 className="text-white font-medium mb-1">Strategy</h4>
                <p className="text-gray-400 text-sm">Effective solutions for real problems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
