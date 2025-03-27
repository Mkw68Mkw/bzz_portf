import Image from "next/image";

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
    <div className="min-h-screen p-8 sm:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="mb-20 md:mb-32">
        <nav className="flex justify-between items-center mb-16">
          <span className="text-xl font-bold">Kevin Kaize Wu</span>
        </nav>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Entwickler
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl">
            Digitale Lösungen zwischen Code und Kreativität
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <section id="projects" className="mb-20 md:mb-32">
        <h2 className="text-3xl font-bold mb-12">Ausgewählte Projekte</h2>
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
            <h2 className="text-3xl font-bold mb-6">Über mich</h2>
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

      {/* Contact Section */}
      <section id="contact" className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Kontakt aufnehmen</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
              />
              <input type="email" placeholder="E-Mail" className="p-4 border rounded-lg" />
            </div>
            <textarea 
              placeholder="Nachricht" 
              rows="5" 
              className="w-full p-4 border rounded-lg"
            ></textarea>
            <button className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Absenden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
