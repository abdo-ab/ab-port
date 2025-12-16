import aboutImg from "../images/owner-profile.webp";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0F172A] text-gray-300 flex items-center justify-center py-10"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left: side */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(37,99,235,0.5)]">
          <img
            src={aboutImg}
            alt="About DEV AB"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute inset-0 rounded-2xl border-4 border-blue-500 opacity-50 animate-pulse"></span>

        </div>

        {/* Right: side */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] md:text-[clamp(2.5rem,4vw,3rem)] font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-[clamp(1rem,2vw,1.25rem)]">
            I’m <span className="font-semibold text-white">ABDO</span>, a passionate Full Stack Developer with experience in building modern, responsive web applications using technologies like{" "}
            <span className="text-blue-400 font-medium">
              JavaScript, PHP, Laravel, Vue.js, React.js and TailwindCSS
            </span>
            . I love transforming ideas into clean, efficient, and scalable solutions.
          </p>

          <p className="text-gray-400 leading-relaxed text-[clamp(1rem,2vw,1.25rem)]">
            Beyond coding, I enjoy learning new tools, optimizing performance, and contributing to open-source projects. My goal is to build digital experiences that combine design, performance, and accessibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
