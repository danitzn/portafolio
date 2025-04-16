'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

export default function BackToHome() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
      >
        <FiHome className="text-lg" />
        <span>Volver al Inicio</span>
      </Link>
    </motion.div>
  );
}