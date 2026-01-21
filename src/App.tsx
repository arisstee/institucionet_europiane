import { useState } from 'react';
import Landing from './components/Landing';
import CouncilSection from './components/CouncilSection';
import ParliamentSection from './components/ParliamentSection';
import CommissionSection from './components/CommissionSection';
import DecisionSimulator from './components/DecisionSimulator';
import Timeline from './components/Timeline';
import FinalSection from './components/FinalSection';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 0, name: 'Hyrje', component: Landing },
    { id: 1, name: 'Këshilli Europian', component: CouncilSection },
    { id: 2, name: 'Parlamenti Europian', component: ParliamentSection },
    { id: 3, name: 'Komisioni Europian', component: CommissionSection },
    { id: 4, name: 'Simulim Vendimesh', component: DecisionSimulator },
    { id: 5, name: 'Timeline Historik', component: Timeline },
    { id: 6, name: 'Përfundim', component: FinalSection }
  ];

  const CurrentComponent = sections[currentSection].component;

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToHome = () => {
    setCurrentSection(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <nav className="fixed top-0 left-0 right-0 bg-blue-900 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={goToHome}
            className="flex items-center gap-2 hover:bg-blue-800 px-3 py-2 rounded transition"
          >
            <Home size={20} />
            <span className="font-semibold">Institucionet e BE-së</span>
          </button>

          <div className="flex gap-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-3 py-2 rounded whitespace-nowrap transition ${
                  currentSection === section.id
                    ? 'bg-yellow-400 text-blue-900 font-semibold'
                    : 'hover:bg-blue-800'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <CurrentComponent onNext={nextSection} onPrev={prevSection} />
      </div>

      <div className="fixed bottom-6 right-6 flex gap-3">
        {currentSection > 0 && (
          <button
            onClick={prevSection}
            className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        {currentSection < sections.length - 1 && (
          <button
            onClick={nextSection}
            className="bg-yellow-400 text-blue-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      <div className="fixed bottom-6 left-6 text-sm text-gray-600">
        {currentSection + 1} / {sections.length}
      </div>
    </div>
  );
}

export default App;
