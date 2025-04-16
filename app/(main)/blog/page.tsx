'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  {
    year: "2018-2024",
    title: "Implementador de Sistemas",
    company: "Lógica S.A.",
    description: "Implementación y configuración de sistemas ERP para clientes corporativos.",
    skills: ["ERP", "Sistemas", "Implementación"],
    projects: []
  },
  {
    year: "2020-2021",
    title: "Instructor de SQL",
    company: "Facultad Politécnica UNA (Voluntario)",
    description: "Enseñanza de bases de datos y SQL a estudiantes de ingeniería.",
    skills: ["SQL", "Docencia", "Bases de Datos"],
    projects: []
  },
  {
    year: "2020-Presente",
    title: "Desarrollador Independiente",
    company: "Proyectos Personales",
    description: "Desarrollo de sistemas como TataTraining y otros proyectos personales.",
    skills: ["Django", "Python", "Full-stack"],
    projects: [
      {
        name: "TataTraining",
        description: "Sistema de gestión para gimnasios",
        link: "#"
      }
    ]
  },
  {
    year: "2023-Presente",
    title: "Desarrollador & Soporte Técnico",
    company: "Inmo Group S.A.",
    description: "Desarrollo de soluciones internas y soporte técnico avanzado.",
    skills: ["FastAPI", "Azure", "APIs", "Soporte"],
    projects: [
      {
        name: "Sistema de Reportes Automatizados",
        description: "Automatización de reportes financieros",
        link: "#"
      }
    ]
  }
];

export default function BlogPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-6 py-12 bg-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">📚 Mi Trayectoria Técnica</h1>
          <p className="text-lg text-gray-600">
            Evolución de mi carrera como profesional en tecnología
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-12 pl-12"
            >
              {/* Punto de la línea */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-cyan-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>

              {/* Contenido */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">{item.year}</span>
                    <h2 className="text-xl font-bold mt-1">{item.title}</h2>
                    <h3 className="text-lg text-gray-700 dark:text-gray-300">{item.company}</h3>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                      {item.skills[0]}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-400">{item.description}</p>

                {item.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {item.projects.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Proyectos destacados:</h4>
                    <div className="space-y-3">
                      {item.projects.map((project, i) => (
                        <Link
                          key={i}
                          href={project.link}
                          className="block p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition"
                        >
                          <h5 className="font-medium text-gray-800 dark:text-gray-200">{project.name}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}