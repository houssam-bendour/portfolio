import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Stagiaire - Développeur Full Stack",
    company: "LEADER SPACE",
    location: "Taza, Maroc",
    period: "Juillet 2024 - Septembre 2024",
    description: [
      "Développement d'une application web de gestion d'espace de coworking",
      "Gestion des abonnements, réservations et accès",
      "Technologies : Java/Spring Boot, React, MySQL"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mon parcours professionnel et mes réalisations
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end space-y-2 mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;