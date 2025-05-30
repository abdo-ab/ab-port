import React from "react";
// import profile from "../images/profile.png";
import owner from "../images/owner image.png";

const Card = ({ title, description }) => (
  <div className="flex-1 p-6 border border-gray-300 rounded-lg ">
    <h1 className="text-xl font-bold mb-2 text-orange-400">{title}</h1>
    <p className="text-gray-50">{description}</p>
  </div>
);

function App() {
  return (
    <div className="  p-6 items-center" id="about">
      <h1 className="text-xl font-bold p-4 mb-2 text-blue-600 text-center">
        {" "}
        a little bite about me{" "}
      </h1>
      <div className="w-full items-center">
        {/* profile with detail info */}
        <img
          src={owner}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500  justify-center"
        />
        <h2 className="text-2xl font-bold text-blue-500">ABDO MOHAMMED</h2>
        <div className="text-white text-lg font-medium">
          Full Stack Web | Mobile App Developer
        </div>
        <div className="text-blue-700 mb-6 text-lg">
          Based in Awash, Ethiopia
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap animate-slide-right">
        <Card
          title="Introduction"
          description=" I'm Abdo mohammed but you can call me Dev-Ab. I'm a passionate web
              developer with a focus on creating intuitive and engaging user
              experiences. My journey in web development began with a
              fascination for how websites work, I've been hooked ever
              since. and I have
              experience working with a variety of technologies, including HTML,
              CSS, JavaScript, and React. I'm always looking for new challenges
              and opportunities to learn and grow as a developer."
        />
        <Card
          title="Education"
          description="I hold a degree in Computer Science from Semara University, where I honed my skills in web development and software engineering. During my studies, I worked on various projects, including developing a web-based platform for managing student projects and a mobile app for tracking fitness goals. These experiences solidified my passion for creating impactful digital solutions."
        />
      </div>{" "}
      <br /> <br />
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap animate-slide-left">
        <Card
          title="Skills"
          description=" My expertise lies on front end development, where I specialize in
            HTML, CSS, and JavaScript. I'm proficient in modern frameworks like
            React and Vue.js, and I'm always eager to learn new technologies to
            stay at the forefront of web development. I also have experience
            with back-end development using Node.js and Express, allowing me to
            build full-stack applications that are both robust and scalable."
        />
        <Card
          title="Interests"
          description="Outside of coding, I enjoy exploring new technologies,
            contributing to open-source projects, and staying active through
            hiking and cycling. I believe in continuous learning and always seek
            opportunities to expand my knowledge and skills in the ever-evolving
            field of web development."
        />
      </div>
    </div>
  );
}

export default App;
