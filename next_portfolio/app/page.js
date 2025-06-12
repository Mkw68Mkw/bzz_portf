"use client"
import Image from "next/image";
import Timeline from "../components/timeline";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Geschichtsprojekt: The Great Depression",
    description: "Interaktive Lernwebsite zur Weltwirtschaftskrise 1929 mit Zeitleiste und Quizmodul",
    image: "/tgd.jpg"
  },
  {
    title: "Raumreservationssystem",
    description: "Fullstack-Lösung mit Next.js Frontend, Flask Backend und MySQL-Datenbank",
    image: "/raumreservationssystem.jpg"
  },
  {
    title: "Klassisches Snake-Spiel",
    description: "Browserbasiertes Arcade-Spiel mit modernem UI-Design und Highscore-System",
    image: "/nka.jpg"
  },
  {
    title: "Task-Manager Website",
    description: "Simple Task-Manager Website mit Angular und Spring Boot (JAVA)",
    image: "/Task-manager.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-12 lg:p-20 font-[family-name:var(--font-gluten)]">
      {/* Hero Section */}
      <header className="mb-20 md:mb-32">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-xl font-bold">Kevin Kaize Wu</span>
        </nav>
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 0.5 }
            }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent font-[family-name:var(--font-gluten)] overflow-hidden"
          >
            {"Full-Stack Entwickler".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.07 + 0.3
                }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                transition: {
                  repeat: Infinity,
                  duration: 0.8,
                  delay: 2.5
                }
              }}
              className="ml-1.5"
            >
              |
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.7,
                duration: 0.5,
                ease: "easeOut"
              }
            }}
            className="text-xl md:text-2xl text-gray-500 max-w-2xl"
          >
            Digitale Lösungen zwischen Code und Kreativität
          </motion.p>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="mb-20 md:mb-32">
        <h2 className="text-3xl font-bold mb-12 font-[family-name:var(--font-gluten)]">Ausgewählte Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 transition-all aspect-[3/2]">
              <div className="relative w-full h-full">
                <Image
                  src={project.image || "/fallback.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/30 p-4 rounded-lg w-full">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-100">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <Image
              src="/bild.jpg"
              alt="Profilbild"
              width={400}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 font-[family-name:var(--font-gluten)]">Über mich</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Als angehender Informatiker an der IMS kombiniere ich technisches Know-how 
              mit gestalterischem Flair. Neben der Schule entwickle ich leidenschaftlich 
              Webanwendungen und experimentiere mit neuen Technologien.
            </p>
            <div className="flex flex-wrap gap-4">
              {['HTML/CSS', 'JavaScript', 'React', 'Python', 'MySQL', 'Figma'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Timeline></Timeline>
    </div>
  );
}
