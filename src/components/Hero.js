import { FaGithub, FaEnvelope, FaTelegram } from "react-icons/fa";
import profile from "../images/owner-profile.webp"

const Hero = () => {
  return (
    <section
      id="hero"
      className=" w-full bg-[#0F172A] text-gray-300 flex flex-col items-center justify-center pt-20 pb-12"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-around">
        {/* Left content */}
        <div className="text-center md:text-left space-y-4 md:max-w-lg">
          <h3 className="font-semibold text-blue-500 uppercase tracking-wider text-[16px] lg:text-[clamp(2rem,2vw,2rem)]">
            Full Stack Website Developer
          </h3>

          <p className="text-gray-300 leading-relaxed text-[clamp(1rem,2vw,1.25rem)]">
            Hello! I’m <span className="font-bold text-white">ABDO</span>, a{" "}
            <span className="text-blue-500 font-semibold">
              Full Stack Website Developer
            </span>{" "}
            based in Ethiopia. I build fast, modern, and responsive web
            applications with clean and scalable code.
          </p>

          <div className="flex items-center justify-center md:justify-start">
            <span className="px-3 py-1 text-green-400 bg-green-900/30 border border-green-500 rounded-full text-[clamp(0.875rem,1.8vw,1rem)] font-medium">
              ● Open to work
            </span>
          </div>
          <div className="flex justify-center md:justify-start gap-6 pt-5 text-[clamp(1.25rem,2.5vw,1.5rem)]">
            <a
              href="https://t.me/Dev_abdo_ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://github.com/abdo-ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:Qeysabaxa11@gmail.com"
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 text-gray-300 flex flex-wrap items-center gap-4 text-[clamp(0.875rem,1.8vw,1rem)]">
            <span className="font-medium text-white">Tech Stack |</span>
            {[
              { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
              { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
              { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
              { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
              { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
              { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            ].map((tech) => (
              <div key={tech.name} className="relative group">
                <img
                  src={tech.src}
                  className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                  alt={tech.name}
                />
                <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative mb-10 md:mb-0 flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_rgba(37,99,235,0.9)] transition-all duration-500">
            <img
              src={profile}
              alt="Profile of ABDO"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute top-6 right-6 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-lg"
            aria-hidden="true"
          >
            ✦
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
