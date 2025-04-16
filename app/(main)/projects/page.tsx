'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ title, description, tags, link }: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={link}
          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
        >
          Ver proyecto
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Fisioterapia 'FISIOEMA'",
      description: "Plataforma desarrollada con Python Django.",
      tags: ["Django", "Python", "ORM", "SQL", "GitHub", "Git"],
      link: "https://github.com/danitzn/FISIOEMA/tree/master"
    },
    {
      title: "Ecommerce Don Angel",
      description: "Plataforma de ecommerce desarrollada con React y Next Js.",
      tags :["React", "Next.js", "Tailwind CSS", "Node.js", "TypeScript"],
      link: "http://104.237.141.168/"
    },
    {
      title: "API REST para con deepseek r1",
      description: "Swagger de Fast API incoroporado con Deepseek r1 (tipo chatbot).",
      tags: ["IA", "Deepseek", "Api Rest", "FAST API"],
      link: "#",
    },
    {
      title: "TataGym",
      description: "Sisteama de gestión de gimnasio desarrollado con Django",
      tags: ["Django", "SQLite", "Python", "GitHub"],
      link:"https://github.com/danitzn/tatagym"
    },
    {
      title: "Portafolio Profesional",
      description: "Mi portafolio personal construido con Next.js y Tailwind CSS, mostrando mis proyectos y habilidades.",
      tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
      link : "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Mis Proyectos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Algunos de los trabajos que he desarrollado como profesional:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}