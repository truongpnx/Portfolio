import type { License } from '../types';

interface LicenseCardProps {
  license: License;
}

export const LicenseCard = ({ license }: LicenseCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 max-w-sm w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          {license.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {license.name}
          </h3>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {license.description}
      </p>
      
      <a 
        href={license.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
      >
        View Certificate
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
};
