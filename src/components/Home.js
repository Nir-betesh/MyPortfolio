import React from 'react';
import AnimatedText from './AnimatedText';
const Home = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="dark:invert absolute top-0 left-0 w-full h-full object-cover z-0 Home-background"
      >
        <source src="/videos/HomeBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-center duration-500 transition-all text-black dark:text-white z-10">
        <h1 className="text-5xl font-bold mb-4 glow-text dark:dark-glow-text">
          <AnimatedText text="Hi, I'm Nir"/>
        </h1>
        <h1 className="text-5xl font-bold mb-4 glow-text dark:dark-glow-text">
          <AnimatedText text="Welcome to My Website!" />
        </h1>
        <div className=" text-xl mb-6 text-center glow-text dark:dark-glow-text">
          <AnimatedText text="Building seamless digital experiences, one line of code at a time."/>
        </div>
        <a href="#projects"        >
          <button
            className="w-40 h-12 bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-2 rounded text-center transition-transform duration-300 ease-in-out transform hover:scale-110
            hover:bg-gray-800 dark:hover:bg-gray-50
            glow-button dark:dark-glow-button"
            >
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;