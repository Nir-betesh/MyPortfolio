import AnimatedText from './AnimatedText';  

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="dark:invert absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/HomeBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-center translate-x-1 duration-500 transition-all text-black dark:text-white">
        <h1 className="appear-animation text-center text-7xl font-bold mb-4 glow-text dark:dark-glow-text">
          <AnimatedText text="Hi, I'm Nir"/>
        </h1>
        <h1 className="appear-animation text-center text-7xl font-bold mb-4 glow-text dark:dark-glow-text">
          <AnimatedText text="Welcome to My Website!" />
        </h1>
        <div className="appear-animation text-center text-2xl mb-6 glow-text dark:dark-glow-text">
          <AnimatedText text="Building seamless digital experiences, one line of code at a time."/>
        </div>
        <a href="#projects"        >
          <button
            className="appear-animation bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-2 
            rounded text-center transition-transform duration-300 ease-in-out transform hover:scale-110
            glow-button dark:dark-glow-button text-4xl"
            >
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;