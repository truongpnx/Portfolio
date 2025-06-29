import { LicenseCard } from './LicenseCard';
import { licenses } from '../data/portfolio';

export const Licenses = () => {
  return (
    <section id="licenses" className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Licenses & Certifications
          <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional certifications and licenses that validate my expertise and commitment to continuous learning.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {licenses.map((license, index) => (
            <LicenseCard key={index} license={license} />
          ))}
        </div>
      </div>
    </section>
  );
};
