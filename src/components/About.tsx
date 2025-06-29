import { personalInfo } from '../data/portfolio';

export const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200 dark:border-gray-600">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            About Me
            <div className="mt-2 mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <div className="text-center mb-8">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {personalInfo.name}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                  <span className="font-medium">First:</span> {personalInfo.nameStructure.firstName} • 
                  <span className="font-medium ml-1">Middle:</span> {personalInfo.nameStructure.middleName} • 
                  <span className="font-medium ml-1">Family:</span> {personalInfo.nameStructure.familyName}
                </div>
              </div>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {personalInfo.phone}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 16v-8a2 2 0 012-2h4a2 2 0 012 2v8m-6 0h6" />
                  </svg>
                  Born {personalInfo.birthDate}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <p className="text-lg pl-6">
                {personalInfo.summary}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Technical Skills</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Programming Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.technicalSkills.programmingLanguages.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Frameworks & Libraries</h5>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.technicalSkills.frameworks.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">APIs & Protocols</h5>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.technicalSkills.apis.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Other Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.technicalSkills.other.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                <div className="font-bold text-2xl text-purple-600 dark:text-purple-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
                <div className="font-bold text-2xl text-green-600 dark:text-green-400">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg">
                <div className="font-bold text-2xl text-orange-600 dark:text-orange-400">Fullstack</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
