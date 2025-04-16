'use client'
export default function Projects() {
    const projects = [
      {
        title: "Portafolio Next.js",
        description: "Mi propio portafolio con tecnologías modernas",
        tags: ["Next.js", "Tailwind", "TypeScript"],
        link: "#"
      }
      // Añade más proyectos...
    ];
  
    return (
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Mis Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    )
  }