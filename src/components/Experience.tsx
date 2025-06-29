import { ExperienceCard } from './ExperienceCard';
import { experiences } from '../data/portfolio';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Work Experience
          <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          My professional journey in software development, showcasing my growth and contributions across different organizations.
        </p>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
