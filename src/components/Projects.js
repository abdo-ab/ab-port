import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Ablex from  "../images/Ablex_Dashboard.png";
import mefeydalAgency from '../images/mefeydal-Agency.webp';

const projects = [
  {
    title: "Mefeydal Agency",
    description: "Mefydal is an Agency which provides translation service for varies industries",
    image: mefeydalAgency,
    tech: ["React", "TailwindCSS", "Typscript"],
    github: "https://github.com/abdo-ab/mefeydal-agency",
    live: "https://mefeydal-agency.vercel.app/",
  },
  {
    title: "Ablex",
    description: "Ablex is Fullstack E-learning  web App which  build for students to  explore courses , Articles and other resources and  in the backdoor Lecturers post the  courses and write there thoughts",
    image: Ablex,
    tech: ["React.js", "Laravel", "MySQL", "inertia"],
    github: "https://github.com/abdo-ab/ab-port",
    live: "/",
  },
];

const Projects = () => {
  return (
    <>
    <section
      id="projects"
      className="w-full bg-[#0F172A] text-gray-300 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-shadow duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[clamp(0.875rem,2vw,1rem)] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white px-2 py-1 rounded-full text-[clamp(0.75rem,1.8vw,0.875rem)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
     </>
    
  );
};

export default Projects;
