import AnimatedText from './AnimatedText';

const About = () => {
  
    
  const hiIm = "Hi, I’m ";

  return (
    <section id="about" className="transition-colors duration-500 ease-in-out min-h-screen scroll-mt-16 bg-gray-100 p-8 dark:bg-[#101016] text-black dark:text-white flex justify-center">
      <div className="max-w-7xl text-center">
        <h2 className="appear-left-animation text-6xl font-extrabold mb-6 glow-text dark:dark-glow-text animate-fade-in-down">
          <AnimatedText text="About Me" className="break-words"/>
        </h2>
        <p className="appear-left-animation leading-relaxed animate-fade-in opacity-90 text-left">
          {hiIm}
          <span className="font-bold dark:text-white glow-text dark:dark-glow-text">
            Nir Betesh
          </span>
          , a dedicated and motivated Software Engineer with a Bachelor’s degree in Software Engineering. I have a strong foundation in programming languages, including Python, C, Java, and C#, complemented by hands-on experience with a variety of tools, technologies, and methodologies. I am passionate about pursuing a career in  
          <span className="appear-left-animation dark:text-white glow-text dark:dark-glow-text">
            : Embedded Systems, DevOps Engineering, or Full-Stack Development
          </span> 
          , where I can combine my technical expertise with innovative problem-solving to deliver impactful solutions.
        </p>
        <div className="appear-left-animation mt-8 space-y-6">
          <div className="animate-fade-in-up">
            <h3 className="appear-left-animation text-5xl font-semibold dark:text-white glow-text dark:dark-glow-text">
              <AnimatedText text="Beyond Code"/>
            </h3>
            <p className="mt-4 text-left">
              I’ve also dedicated time to volunteering:
            </p>
            <ul className="list-disc list-inside mt-2 text-left">
              <li>Volunteered as a combat soldier on October 7th despite a reserve exemption. Later approved for Tzav 8, conducting arrests and weapons searches in Judea and Samaria.</li>
              <li>Mentored a high school student through the Perach Project.</li>
              <li>Collaborated with bereaved families via the Recipe with Memory Scholarship.</li>
            </ul>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="text-5xl font-semibold dark:text-white glow-text dark:dark-glow-text">
              <AnimatedText text="Hobbies"/>
            </h3>
            <p className="mt-4 text-left">
            When I’m not coding I love to enjoy from:
            </p>
            <ul className="list-disc list-inside mt-2 text-left">
              <li>billiards</li>
              <li>sea surfing</li>
              <li>hiking</li>
              <li>fitness</li>
              <li>gaming</li>
              <li>cooking</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-3xl font-semibold animate-fade-in-up">
          Let’s connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;



