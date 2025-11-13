import logo from "../images/ab-logo.jpg";

const Header = ({ scrollToSection }) => {
  return (
    <header className="nav-bar fixed top-0 w-full bg-black shadow-md z-50 p-4 flex justify-between items-center font-sans font-semibold text-white">
      
      <div className="hidden lg:flex items-center">
        <img
          src={logo}
          alt="Dev-ab Logo"
          className="h-10 w-24 md:h-12 md:w-28 object-contain"
        />
      </div>
      <nav className="hidden md:flex space-x-6">
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Home
        </button>

        
        <button
          onClick={() => scrollToSection("projects")}
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-500 transition-colors duration-200"
        >

          About
        </button>
        

        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-blue-500 transition-colors duration-200"
        >
          Skills
        </button>
<button
          onClick={() => scrollToSection("contact")}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white px-4 py-2 rounded-md"
        >

         
          Hire me
        </button>
      </nav>
    </header>
  );
};

export default Header;
