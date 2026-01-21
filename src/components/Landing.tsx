import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LandingProps {
  onNext: () => void;
}

export default function Landing({ onNext }: LandingProps) {
  const [starsRotation, setStarsRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarsRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    const radius = 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 opacity-10"></div>

      <div className="text-center z-10 max-w-4xl">
        <div className="relative w-64 h-64 mx-auto mb-12">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `rotate(${starsRotation}deg)` }}
          >
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 flex items-center justify-center"
                style={{
                  transform: `translate(${star.x}px, ${star.y}px)`,
                }}
              >
                <Sparkles className="text-yellow-400 fill-yellow-400" size={28} />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-blue-900 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-6xl font-bold text-yellow-400">BE</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-blue-900 mb-6 animate-fade-in">
          Institucionet e Bashkimit Europian
        </h1>

        <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
          Një udhëtim interaktiv në zemër të demokracisë europiane
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ç'do të mësoni në këtë prezantim:
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <span>Si funksionojnë <strong>Këshilli Europian, Parlamenti Europian dhe Komisioni Europian</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <span>Historikun e themelimit dhe evolucionin e tyre përmes dekadave</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <span>Proceset e vendimmarrjes dhe si ndërveprojnë këto institucione</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <span>Raste reale studimore: GDPR, COVID-19, Ukraina, zgjerimi i BE-së</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">★</span>
              <span>Si mund të angazhoheni si qytetarë në proceset demokratike europiane</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-12 py-4 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-105"
        >
          Fillo Udhëtimin →
        </button>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-900 mb-2">27</div>
            <div className="text-sm text-gray-600">Vende Anëtare</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-900 mb-2">450M</div>
            <div className="text-sm text-gray-600">Qytetarë</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-4xl font-bold text-blue-900 mb-2">24</div>
            <div className="text-sm text-gray-600">Gjuhë Zyrtare</div>
          </div>
        </div>
      </div>
    </div>
  );
}
