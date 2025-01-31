import React from 'react';
import AnimatedText from './AnimatedText';

const About = () => {

  const hiIm = 'Hi, I’m ';
  return (
    <section id="about" className="transition-colors duration-500 ease-in-out min-h-screen scroll-mt-16 p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white flex justify-center items-center">
      <div className="max-w-4xl text-center">
        <h2 className="Block text-4xl font-extrabold mb-6 glow-text dark:dark-glow-text animate-fade-in-down">
          <AnimatedText text="About Me"/>
        </h2>
        <p className="Block text-lg leading-relaxed animate-fade-in opacity-90">
          {hiIm}
          <span className="font-bold dark:text-white glow-text dark:dark-glow-text">
            Nir Betesh
          </span>
          , a dedicated and motivated Software Engineer with a Bachelor’s degree in Software Engineering. I have a strong foundation in programming languages, including Python, C, Java, and C#, complemented by hands-on experience with a variety of tools, technologies, and methodologies. I am passionate about pursuing a career in  
          <span className="Block dark:text-white glow-text dark:dark-glow-text">
            : Embedded Systems, DevOps Engineering, or Full-Stack Development
          </span> 
          , where I can combine my technical expertise with innovative problem-solving to deliver impactful solutions.
        </p>
        <div className="mt-8 space-y-6">
          <div className="animate-fade-in-up">
            <h3 className="Block text-3xl font-semibold dark:text-white glow-text dark:dark-glow-text">
              <AnimatedText text="Highlights"/>
            </h3>
            <ul className="Block list-disc list-inside mt-4 text-left">
              <li>
                <span className="font-bold dark:text-white glow-text dark:dark-glow-text">Full-Stack Development:</span> Designing and implementing dynamic systems using Svelte, SvelteKit, TypeScript, and Drizzle.
              </li>
              <li>
                <span className="font-bold dark:text-white glow-text dark:dark-glow-text">Blockchain Expertise:</span> Creating an Ethereum-based voting system with Solidity and integrating it with a modern web interface.
              </li>
              <li>
                <span className="font-bold dark:text-white glow-text dark:dark-glow-text">Game Development:</span> Building games like Snake and Space Shooter in Unity with C#.
              </li>
              <li>
                <span className="font-bold dark:text-white glow-text dark:dark-glow-text">Software Verification:</span> Developing and verifying systems using Promela and the SPIN model checker.
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="Block text-3xl font-semibold dark:text-white glow-text dark:dark-glow-text">
              <AnimatedText text="Beyond Code"/>
            </h3>
            <p className="Block mt-4 text-left">
              I’ve also dedicated time to volunteering:
            </p>
            <ul className="Block list-disc list-inside mt-2 text-left">
              <li>Mentored a high school student through the Perach Project.</li>
              <li>Collaborated with bereaved families via the Recipe with Memory Scholarship.</li>
            </ul>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="Block text-3xl font-semibold dark:text-white glow-text dark:dark-glow-text">
              <AnimatedText text="Hobbies"/>
            </h3>
            <p className="Block mt-4 leading-relaxed">
              When I’m not coding, I enjoy pool, surfing, hiking, gaming, fitness, and cooking.
            </p>
          </div>
        </div>

        <p className="Block mt-8 text-lg font-semibold animate-fade-in-up">
          Let’s connect and create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;



