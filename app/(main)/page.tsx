'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-12 bg-white text-gray-800"
    >
      {/* Foto */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="w-72 h-72 relative overflow-hidden rounded-full shadow-xl bg-[#f4f4f9]">
          <Image
            src="/foto.jpg"
            alt="Foto de Danilo"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full md:w-1/2 max-w-xl text-center md:text-left space-y-4"
      >
        <h1 className="text-4xl font-bold">¡Hola! Soy Danilo Mosqueira</h1>
        <p className="text-lg text-gray-600">
          Desarrollador Backend especializado en automatización, APIs y soluciones en la nube.
        </p>

        <div className="text-md text-gray-700 space-y-1">
          <p><strong>Edad:</strong> 30 años</p>
          <p><strong>Egresado:</strong> Lic. en Ciencias Informáticas – Universidad Nacional de Asunción</p>
          <p><strong>Trabajo actual:</strong> Desarrollador - Soporte Técnico en Inmo Group</p>
          <p><strong>Stack:</strong> Python · Django · FastAPI · SQLite · Azure · Synapse · APIs REST</p>
        </div>

        <Link href="/blog" passHref legacyBehavior>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </motion.main>
  );
}