import { Header, About, Experience, Projects, Licenses, Contact } from './components';
import { ThemeProvider } from './contexts/ThemeContext';
import { smoothScrollTo } from './utils/scroll';

function App() {
  const handleNavigate = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header onNavigate={handleNavigate} />
        <main>
          <About />
          <Experience />
          <Projects />
          <Licenses />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
