import React from 'react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'C', level: 90 },
  { name: 'C#', level: 95 },
  { name: 'Unity', level: 95},
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Svelte', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 90 },
  { name: 'SvelteKit', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'MongoDB', level: 85 },
  { name: 'Linux', level: 80 },
  { name: 'Git', level: 90 },
  { name: 'Agile Development', level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="transition-colors duration-500 ease-in-out scroll-mt-16 min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text:black dark:text-white pb-12">
      <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="Block space-y-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full"
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
