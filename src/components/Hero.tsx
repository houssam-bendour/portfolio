import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Créer un lien temporaire
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'houssam-bendour-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Houssam Bendour
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Développeur Full Stack & Créateur de Solutions Digitales
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger CV
            </motion.button>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;