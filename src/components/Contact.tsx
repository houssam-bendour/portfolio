import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Créer le corps du mail avec mailto
      const mailtoLink = `mailto:houssamebendour@gmail.com?subject=Contact depuis le portfolio - ${formData.name}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Ouvrir le client mail par défaut
      window.location.href = mailtoLink;

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">houssamebendour@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Téléphone</h3>
                <p className="text-gray-600 dark:text-gray-300">0621639898</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h3>
                <a
                  href="https://github.com/houssam-bendour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  github.com/houssam-bendour
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/houssam-bendour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  linkedin.com/in/houssam-bendour
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
            </motion.button>

            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center">
                Message envoyé avec succès !
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;