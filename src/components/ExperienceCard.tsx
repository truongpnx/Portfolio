import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {experience.position}
            </h3>
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {experience.company}
            </h4>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 16v-8a2 2 0 012-2h4a2 2 0 012 2v8m-6 0h6" />
            </svg>
            <span className="font-medium">{experience.duration}</span>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Responsibilities:</h5>
          <ul className="space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies:</h5>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium border border-blue-200 dark:border-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
