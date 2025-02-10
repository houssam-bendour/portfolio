import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Langages de programmation",
    items: ["Java", "C++", "Python", "JavaScript/TypeScript"]
  },
  {
    category: "Développement Web",
    items: ["React", "Spring Boot", "HTML/CSS", "Node.js"]
  },
  {
    category: "Développement Mobile",
    items: ["Flutter", "Dart", "Java Android"]
  },
  {
    category: "Bases de données",
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Outils & DevOps",
    items: ["Git", "Docker", "VS Code", "Postman"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences Techniques
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Un aperçu de mes compétences et technologies maîtrisées
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;