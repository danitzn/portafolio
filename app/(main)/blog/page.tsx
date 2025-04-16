'use client';
import Link from "next/link";

const posts = [
  {
    title: "Automatizando reportes con Python",
    description: "Una guía paso a paso para generar reportes automáticos usando Pandas y Openpyxl.",
    date: "2024-03-10",
    slug: "automatizando-reportes-python",
  },
  {
    title: "APIs REST con FastAPI",
    description: "Cómo crear, documentar y desplegar APIs REST con FastAPI de forma profesional.",
    date: "2024-01-25",
    slug: "apis-rest-fastapi",
  },
  {
    title: "ETL con Azure Data Factory",
    description: "Tu primer pipeline en Azure para transformar datos y almacenarlos en Synapse.",
    date: "2024-02-14",
    slug: "etl-azure-data-factory",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">📚 Blog Técnico</h1>
        <p className="text-center text-gray-600 text-lg">
          Publicaciones sobre automatización, APIs, cloud y más.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  href={`/main/blog/${post.slug}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
