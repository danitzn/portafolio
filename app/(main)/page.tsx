'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-12 bg-white text-gray-800">
      
      {}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-72 h-72 relative overflow-hidden rounded-full shadow-xl bg-[#f4f4f9]">
          <Image
            src="/foto.jpg"
            alt="Foto de Danilo"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* INFO */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold">¡Hola! Soy Danilo Mosqueira</h1>
        <p className="text-lg text-gray-600">
          Desarrollador Backend especializado en automatización, APIs y soluciones en la nube.
        </p>

        <div className="text-md text-gray-700 space-y-1">
          <p><strong>Edad:</strong> 30 años</p>
          <p><strong>Egresado:</strong> Lic. en Ciencias Informáticas – Univesidad Nacional de Asuncion</p>
          <p><strong>Trabajo actual:</strong> Desarrollador - Soporte Tecnico en Inmo Group</p>
          <p><strong>Stack:</strong> Python · Django · FastAPI · SQLite · Azure · Synapse · APIs REST</p>
        </div>

    <Link href="/blog">
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
      Learn More
      </button>
    </Link>
      </div>
    </main>
  );
}
