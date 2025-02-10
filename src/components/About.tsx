import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            À Propos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Étudiant en dernière année de master spécialisé en Systèmes Intelligents et Mobiles à l'université Mohamed Ben Abdellah, je suis passionné par le développement web et mobile.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Mon parcours académique et mes expériences professionnelles m'ont permis de développer une expertise solide en développement full stack, avec une spécialisation particulière dans les technologies Java, Spring Boot, et React.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform skew-y-6 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Espace de travail"
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;