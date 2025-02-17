import React from 'react';

const Footer = () => {
  const restartAnimation = (sectionId) => {
    const blocks = document.querySelectorAll(`${sectionId} .Block`);
    blocks.forEach((block) => {
      block.classList.remove('Block');
      void block.offsetWidth; 
      block.classList.add('Block'); 
    });
  };

  return (
    <footer className="transition-colors duration-500 ease-in-out bg-gray-100 dark:bg-gray-900 text:black dark:text-white py-6">
      <div className="container mx-auto text-center">
        {/* Social Links */}
        <div className="mb-4">
          <a
            href="https://github.com/nir-betesh"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nir-betesh"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm"> &copy; {new Date().getFullYear()} Nir's Portfolio. All rights reserved.</p>

        {/* Quick Navigation */}
        <div className="mt-4">
          <a href="#home" className="mx-2 text-blue-400 hover:underline" onClick={() => restartAnimation('#home')}>
            Home
          </a>
          <a href="#about" className="mx-2 text-blue-400 hover:underline" onClick={() => restartAnimation('#about')}>
            About
          </a>
          <a href="#skills" className="mx-2 text-blue-400 hover:underline" onClick={() => restartAnimation('#skills')}>
            Skills
          </a>
          <a href="#projects" className="mx-2 text-blue-400 hover:underline" onClick={() => restartAnimation('#projects')}>
            Projects
          </a>
          <a href="#contact" className="mx-2 text-blue-400 hover:underline" onClick={() => restartAnimation('#contact')}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
