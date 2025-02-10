import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PFM - Application de Gestion des absences",
    description: "Application web et mobile permettant l'enregistrement automatique des présences par module, séance et enseignant grâce à une application RFID.",
    technologies: ["Python", "Django REST", "React", "Java", "RFID", "MySQL"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Reconnaissance d'objets en temps réel",
    description: "Application mobile pour détecter et reconnaître des objets en temps réel, avec retour audio instantané.",
    technologies: ["Java", "TensorFlow", "YOLO", "COCO"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Réalisés
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez mes dernières réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;