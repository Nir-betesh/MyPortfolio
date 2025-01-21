import React, { useState } from "react";
import Slider from "react-slick";
const Projects = () => {

  const projects = [
    {
      title: "Space Shooter Game App",
      description: "A 2D game I developed in Unity using C#, showcasing my skills in game design and programming.",
      link: "https://github.com/Nir-betesh/SpaceShooter",
      video: "/videos/SpaceShooter.mp4",
    },
    {
      title: "Graphic playground",
      description: "Developed a Graphic playground using C, and OpenGL",
      link: "https://github.com/Nir-betesh/graphics-project",
      video: "/videos/PlayGround.mp4",
    },
    {
      title: "'EKrut' Vending Machine System",
      description:"Ekrut System is a vending machine management platform with role-based login for managers, suppliers, and more.",
      link: "https://github.com/Nir-betesh/Ekrut-Project",
      video: "/videos/ekrut_project.mp4",
    },
    {
      title: "Secure SMS Exchange",
      description:
        "Secure SMS exchange composed of Encryption & Decryption with RC6, Blind RSA signature and Diffie-Hellman key exchange",
      link: "https://github.com/Nir-betesh/Crypto_Project",
    },
    {
      title: "TodoList Web Project",
      description:
      "Developed a Todo List application as part of a final project in a Web Development course, utilizing React, Node.js, and TypeScript.",
      link: "https://github.com/Nir-betesh/ToDoList-project",
    },
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React.",
      link: "https://github.com/Nir-betesh/MyPortfolio",
    },
  ];
  
  const PrevArrow = ({onClick}) => {
    return ( 
      <button onClick={onClick} className="text-black left-10 scale-150 font-bold absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10 duration-300">
        &lt;
      </button>
    )
  };
  
  const NextArrow = ({onClick}) => {
    return ( 
      <button onClick={onClick} className="text-black right-10 scale-150 font-bold absolute top-1/2 transform -translate-y-1/2 bg-gray-400 p-3 rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10 duration-300">
        &gt;
      </button>
    )
  };
  
  const [projectIndex, setProjectIndex] = useState(0);
  const isVideo = (file) => file?.endsWith(".mp4");
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode:true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setProjectIndex(next)
  };

  return (
    <section
      id="projects"
      className="space-y-40 transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
    >
      <h2 className="Block text-center text-3xl font-bold mb-4">My Projects</h2>
      <div className="text-center Block grid grid-cols-1 gap-6">
        <Slider {...settings } className="flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-transform duration-300 ${index === projectIndex ? "" : "scale-75 opacity-50"}`}>
              {/* Project Info */}
              <div className="dark:bg-black bg-white min-h-[500px] w-300 flex flex-col flex-wrap justify-between p-4 border rounded shadow-xl" >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
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
                        if (videoElement && index != projectIndex) {
                            videoElement.pause();
                        }
                      }}
                      style={{ maxHeight: "300px", maxWidth: "80%" }} // Optional for better scaling
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
    </section>
  );
};

export default Projects;
