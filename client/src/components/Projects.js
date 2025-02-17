import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import AnimatedText from "./AnimatedText";

const Projects = () => {
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
      title: "Secure SMS Exchange",
      description: "A Python-based implementation of secure SMS exchange, featuring RC6 encryption.",
      link: "https://github.com/Nir-betesh/Crypto_Project",
    },
    {
      title: "TodoList Web Project",
      description: "Developed a Todo List application as part of a final project in a Web Development course, utilizing React, Node.js, and TypeScript.",
      link: "https://github.com/Nir-betesh/ToDoList-project",
    },
    {
      title: "Portfolio Website",
      description: "Built a personal portfolio website using React and Tailwind CSS.",
      link: "https://github.com/Nir-betesh/MyPortfolio",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
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
      className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
    >
      <h2 className="text-5xl font-bold mb-16 text-center glow-text dark:dark-glow-text animate-fade-in-down">
        <AnimatedText text="My Projects" />
      </h2>

      {/* Mobile: Show ALL projects in full list */}
      {isMobile ? (
        <div className="flex flex-col w-full items-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-4 rounded-lg shadow-md w-full sm:w-3/4"
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
        <div className="text-center grid grid-cols-1 gap-6">
          <Slider {...settings} className="flex-col">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transition-transform duration-300 ${
                  index === projectIndex ? "" : "scale-75 opacity-50"
                }`}
              >
                {/* Project Info */}
                <div className="dark:bg-black bg-white min-h-[500px] w-300 flex flex-col flex-wrap justify-between p-4 border rounded shadow-xl">
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
