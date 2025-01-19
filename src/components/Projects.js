import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Space Shooter Game App",
      description: "2D game that I developed in Unity using C#.",
      link: "https://github.com/Nir-betesh/SpaceShooter",
      media: "/videos/SpaceShooter.mp4",
    },
    {
      title: "Graphic playground",
      description: "Developed a Graphic playground using C, and OpenGL",
      link: "https://github.com/Nir-betesh/graphics-project",
      media: "/videos/PlayGround.mp4",
    },
    {
      title: "'EKrut' Vending Machine System",
      description:
        "Ekrut System is a vending machine management platform with role-based login for managers, suppliers, and more.",
      link: "https://github.com/Nir-betesh/Ekrut-Project",
      media: "/gifs/ekrut_project.gif",
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

  const isVideo = (file) => file?.endsWith(".mp4"); // Check if the media file is a video

  return (
    <section
      id="projects"
      className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
    >
      <h2 className="text-center text-3xl font-bold mb-4">My Projects</h2>
      <div className="overflow-x-auto w-full">
        <div className="flex space-x-8 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-4 border rounded-md shadow-md transition-all duration-500 ease-in-out transform ${
                index === 2
                  ? "scale-110" // The third item is the largest
                  : index === 0 || index === projects.length - 1
                  ? "scale-90" // The first and last items are smaller
                  : "scale-100" // The others are medium-sized
              }`}
            >
              {/* Project Info */}
              <div className="flex flex-col items-center">
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
              </div>

              {/* Media Preview */}
              {project.media && (
                <div className="mt-4">
                  {isVideo(project.media) ? (
                    <video
                      src={project.media}
                      className="w-full h-auto rounded"
                      loop
                      controls
                      controlsList="nodownload noremoteplayback"
                      muted={false}
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.media}
                      alt={`${project.title} Preview`}
                      className="w-full h-auto rounded"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
