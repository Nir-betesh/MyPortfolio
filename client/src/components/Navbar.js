import React, { useState, useRef, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import AnimatedText from './AnimatedText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when clicked outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest("#menu-button")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="transition-colors duration-500 ease-in-out transform -translate-y-7 fixed left-0 right-0 bg-gray-100 dark:bg-gray-900 text:black  dark:text-white text-3xl p-4 shadow-lg rounded-lg z-50">
      <div className="glow-text dark:dark-glow-text container flex mx-auto justify-between items-center">
        <h1 className="transform text-3xl font-bold">
          <a href="#home">
            <AnimatedText text="My Portfolio"/>
          </a>
        </h1>

        <ThemeSwitcher />
        
        <button
          id="menu-button"
          className="xl:hidden dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Desktop View */}
        <ul className="transform hidden xl:flex space-x-16">
          {[
            { id: '#home', name: 'Home' },
            { id: '#about', name: 'About' },
            { id: '#skills', name: 'Skills' },
            { id: '#projects', name: 'Projects' },
            { id: '#contact', name: 'Contact' },
            { id: '#comments', name: 'Comments' },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className="hover:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

          {/* Mobile View (Hamburger Button) */}
        {isOpen && (
          <ul
            ref={menuRef}
            className="absolute top-16 left-0 w-full dark:bg-gray-700 bg-gray-200 dark:text-white text-black rounded-md flex flex-col space-y-4 p-4 xl:hidden"
          >
            {[
              { id: '#home', name: 'Home' },
              { id: '#about', name: 'About' },
              { id: '#skills', name: 'Skills' },
              { id: '#projects', name: 'Projects' },
              { id: '#contact', name: 'Contact' },
              { id: '#comments', name: 'Comments' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="hover:underline"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <li>{item.name}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
