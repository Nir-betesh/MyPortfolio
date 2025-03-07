import AnimatedText from './AnimatedText';
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);

  const restartAnimation = (section) => {
    const blocks = section.querySelectorAll('.appear-animation');
    blocks.forEach((block) => {
      block.classList.remove('appear-animation'); 
      void block.offsetWidth; // Force reflow
      block.classList.add('appear-animation'); 
    });
  };
  
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Java', level: 90 },
    { name: 'C', level: 90 },
    { name: 'C#', level: 90 },
    { name: 'Unity', level: 90},
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 90 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 90 },
    { name: 'Linux', level: 80 },
    { name: 'Git', level: 90 },
    { name: 'Agile Development', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'Svelte', level: 75 },
    { name: 'SvelteKit', level: 70 },
  ];

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.7) { // 70% visible means 30% scrolled past
          restartAnimation(sectionElement);
        }
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="skills"
      className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen flex flex-col justify-center items-center p-8 dark:bg-[#0c0c0e] dark:text-white"
    >
        <h2 className="appear-animation text-6xl font-bold mb-32 text-center glow-text dark:dark-glow-text animate-fade-in-down">
          <AnimatedText text="My Skills"/>
        </h2>
        
      <div className="top-10 -translate-y-20 w-full max-w-5xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
          <div 
            key={index} 
            className="appear-animation space-y-2 justify-center dark:bg-[#12102f] pb-4 pt-2 pr-3 pl-3 rounded-md"
          >              
            <div className="flex justify-between ">
                <span className="text-2xl font-semibold">{skill.name}</span>
                <span className="text-xl text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="dark:bg-[#4239c4] bg-[#fe7a42] h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
