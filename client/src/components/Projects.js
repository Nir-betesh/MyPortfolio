import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import AnimatedText from "./AnimatedText";

const Projects = () => {
  const sectionRef = useRef(null);

  // Restart animation 
  const restartAnimation = (section) => {
    const blocks = section.querySelectorAll('.appear-animation');
    blocks.forEach((block) => {
      block.classList.remove('appear-animation'); 
      void block.offsetWidth; // Force reflow
      block.classList.add('appear-animation'); 
    });
  };
  const projects = [
    {
      title: "Space Shooter Game App",
      description: "A 2D game I developed in Unity using C#, showcasing my skills in game design and programming.",
      link: "https://github.com/Nir-betesh/SpaceShooter",
      video: "/videos/SpaceShooter.mp4",
    },
    {
      title: "Graphic Playground",
      description: "Developed a graphic playground using C and OpenGL, showcasing interactive graphics and visualizations.",
      link: "https://github.com/Nir-betesh/graphics-project",
      video: "/videos/PlayGround.mp4",
    },
    {
      title: "EKrut Vending Machine System",
      description: "Ekrut System is a vending machine management platform, developed in Java.",
      link: "https://github.com/Nir-betesh/Ekrut-Project",
      video: "/videos/ekrut_project.mp4",
    },
    {
      "title": "Secure SMS Exchange",
      "description": "A Python-based secure SMS exchange system integrating RC6 encryption for message confidentiality, Blind RSA signatures for authentication, and Diffie-Hellman key exchange for secure key distribution. This project ensures end-to-end security, preventing unauthorized access.",
      "link": "https://github.com/Nir-betesh/Crypto_Project"
    },
    {
      "title": "TodoList Web Project",
      "description": "A Todo List web application. Built using React for the front end, Node.js for the backend, and TypeScript for type safety. The project emphasizes clean code, reusable components, and an optimized user experience.",
      "link": "https://github.com/Nir-betesh/ToDoList-project"
    },
    {
      "title": "Portfolio Website",
      "description": "An interactive portfolio. Built with React, Tailwind CSS, and animations. MongoDB-powered comment section, and optimized performance. Continuously updated with new projects.",
      "link": "https://github.com/Nir-betesh/MyPortfolio"
    },
    {
      "title": "Construction Management System",
      "description": "An information system for managing a shelter construction company, built with Svelte, SvelteKit, and Drizzle. Includes role-based access control, contract tracking, inventory monitoring, and project scheduling. Developed using Agile methodology.",
      "link": "https://github.com/Nir-betesh/shelter-construction-manager"
    }    
    
  ]

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Intersection Observer for animation restart
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.7) { // 70% visible = 30% scrolled past
          restartAnimation(sectionRef.current);
        }
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to remove event listener & observer
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="text-black left-10 scale-150 font-bold absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10 duration-300"
    >
      &lt;
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="text-black right-10 scale-150 font-bold absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10 duration-300"
    >
      &gt;
    </button>
  );

  const [projectIndex, setProjectIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setProjectIndex(next),
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-gray-100 dark:bg-[#101016] text-black dark:text-white"
    >
      <h2 className="appear-animation text-6xl font-bold mb-16 text-center glow-text dark:dark-glow-text animate-fade-in-down">
        <AnimatedText text="My Projects" />
      </h2>

      {/* Mobile View */}
      {isMobile ? (
        <div className="appear-animation flex p-4 flex-col w-full items-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#151342] rounded-lg shadow-md w-full sm:w-3/4"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                View Project on GitHub
              </a>
              {project.video && (
                <video
                  src={project.video}
                  className="w-full rounded mt-4"
                  loop
                  controls
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="appear-animation text-center grid grid-cols-1 gap-6">
          <Slider {...settings} className="flex-col">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-transform duration-300 ${
                  index === projectIndex ? "" : "scale-75 opacity-50"
                }`}
              >
                {/* Project Info */}
                <div className="dark:bg-[#151342] bg-white min-h-[500px] w-400 flex flex-col flex-wrap justify-between p-4 border rounded-3xl shadow-xl">
                  <h3 className="text-3xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xl">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-500 mt-2 inline-block"
                  >
                    View Project on GitHub
                  </a>
                  {/* video Preview */}
                  {project.video && (
                    <div className="w-full flex justify-center items-center">
                      <video
                        src={project.video}
                        className="w-full h-auto rounded"
                        loop
                        controls
                        ref={(videoElement) => {
                          if (videoElement && index !== projectIndex) {
                            videoElement.pause();
                          }
                        }}
                        style={{ maxHeight: "300px", maxWidth: "80%" }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default Projects;
