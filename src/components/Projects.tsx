import { ProjectCard } from './ProjectCard';
import { projects } from '../data/portfolio';

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Projects
          <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in machine learning, web development, and game development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
