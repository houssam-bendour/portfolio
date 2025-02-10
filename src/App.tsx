import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Vérifie la préférence système ou la valeur sauvegardée
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && prefersDark);
  });

  useEffect(() => {
    // Met à jour la classe sur le document et sauvegarde la préférence
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              HB
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <a
                href="https://github.com/houssam-bendour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/houssam-bendour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:houssamebendour@gmail.com"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Houssam Bendour. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;