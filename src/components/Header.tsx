import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolio';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header = ({ onNavigate }: HeaderProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'licenses', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white py-4 sticky top-0 z-10 shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <h1 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <div className="flex items-center space-x-6">
            <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-white hover:text-blue-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
