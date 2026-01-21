import { useState } from 'react';
import { Users, MapPin, Calendar, TrendingUp, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import Quiz from './Quiz';

interface CouncilSectionProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function CouncilSection({ onNext }: CouncilSectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const quizQuestions = [
    {
      question: 'Kush është kryetari aktual i Këshillit Europian?',
      options: ['Charles Michel', 'Ursula von der Leyen', 'Roberta Metsola', 'Josep Borrell'],
      correct: 0,
      explanation: 'Charles Michel është Presidenti i Këshillit Europian që nga dhjetori 2019.'
    },
    {
      question: 'Sa herë mblidhet Këshilli Europian në vit?',
      options: ['2 herë', 'Të paktën 4 herë', 'Çdo muaj', 'Vetëm kur ka krizë'],
      correct: 1,
      explanation: 'Këshilli Europian mblidhet të paktën katër herë në vit, por mund të thërrasë mbledhje shtesë sipas nevojës.'
    },
    {
      question: 'Cilat janë metodat e votimit në Këshillin Europian?',
      options: ['Vetëm unanimitet', 'Vetëm shumicë e thjeshtë', 'Konsensus ose unanimitet', 'Votim me loteri'],
      correct: 2,
      explanation: 'Këshilli Europian përpiqet të marrë vendime me konsensus, por disa vendime kërkojnë unanimitet.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-4">
          <Users className="text-yellow-400" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Këshilli Europian</h1>
        <p className="text-xl text-gray-600 italic">"Orientimi strategjik i BE-së"</p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Çfarë është Këshilli Europian?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Këshilli Europian është institucioni më i lartë politik i Bashkimit Europian. Ai përbëhet nga krerët e shteteve ose qeverive të të gjitha vendeve anëtare të BE-së, së bashku me Presidentin e Këshillit Europian dhe Presidentin e Komisionit Europian. Ky është vendi ku liderët kombëtarë takohen për të përcaktuar orientimin e përgjithshëm politik dhe prioritetet e Bashkimit Europian.
        </p>
        <p className="text-lg leading-relaxed">
          Këshilli Europian <strong>nuk miraton ligje</strong>, por përcakton <strong>agjendën politike</strong> dhe jep <strong>shtytjen e nevojshme</strong> për zhvillimin e BE-së. Ai merr vendimet më të rëndësishme strategjike që ndikojnë në të ardhmen e Europës.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-900">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-blue-900" size={28} />
            <h3 className="font-bold text-lg">Anëtarët</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">27 + 2</p>
          <p className="text-sm text-gray-600">27 krerë shtetesh/qeverish + Presidenti i KE + Presidenti i Komisionit</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="text-yellow-600" size={28} />
            <h3 className="font-bold text-lg">Mbledhjet</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">4+</p>
          <p className="text-sm text-gray-600">Të paktën 4 herë në vit, plus mbledhje të jashtëzakonshme</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-blue-500" size={28} />
            <h3 className="font-bold text-lg">Selia</h3>
          </div>
          <p className="text-2xl font-bold text-blue-900 mb-2">Bruksel</p>
          <p className="text-sm text-gray-600">Europa Building, Belgjikë</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('history')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <TrendingUp className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Historiku dhe Themelimi</h3>
            </div>
            {expandedSection === 'history' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'history' && (
            <div className="p-6 bg-gray-50 border-t">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Këshilli Europian u krijua formalisht në vitin <strong>1974</strong>, në një kohë kur Komuniteti Ekonomik Europian (paraardhësi i BE-së) kishte nevojë për një organ që të ofronte <strong>udhëheqje politike strategjike</strong>. Para kësaj, krerët e shteteve takoheshin në mënyrë jo-formale, por gjithnjë e më shumë u pa nevoja për një institucion të përhershëm që të koordinonte politikat e mëdha.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mb-4">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Pse ishte e nevojshme?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>• Krizat e viteve '70:</strong> Kriza e naftës dhe recesioni ekonomik kërkuan koordinim më të fortë.</li>
                    <li><strong>• Zgjerimi:</strong> Me shtimin e vendeve të reja anëtare, ishte e nevojshme një forum i lartë për të marrë vendime strategjike.</li>
                    <li><strong>• Politika e jashtme:</strong> BE-ja kishte nevojë për një zë të unifikuar në skenën ndërkombëtare.</li>
                    <li><strong>• Legjitimitet demokratik:</strong> Qytetarët donin të shihnin liderët e tyre kombëtarë të përfshirë drejtpërdrejt në vendimet europiane.</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-4">
                  Më 1974, në Samitin e Parisit, u vendos që krerët e shteteve dhe qeverive të takohen <strong>tre herë në vit</strong> në mënyrë formale. Ky ishte fillimi i Këshillit Europian. Megjithatë, institucioni u formalizua plotësisht vetëm me <strong>Traktatin e Maastricht-it</strong> në vitin 1992, dhe mandati i tij u sqarua më tej me <strong>Traktatin e Lisbonës</strong> në 2009.
                </p>

                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Momentet Kyçe Historike:</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="font-bold text-blue-900 min-w-[80px]">1974:</span>
                      <span>Krijimi informal - Samiti i Parisit</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-blue-900 min-w-[80px]">1992:</span>
                      <span>Formalizimi me Traktatin e Maastricht-it</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-blue-900 min-w-[80px]">2009:</span>
                      <span>Krijimi i pozicionit të Presidentit të përhershëm (Traktati i Lisbonës)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-blue-900 min-w-[80px]">2019:</span>
                      <span>Charles Michel bëhet President - mandati aktual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('composition')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Users className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Përbërja dhe Anëtarët</h3>
            </div>
            {expandedSection === 'composition' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'composition' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Këshilli Europian përbëhet nga personalitetet më të larta politike të Bashkimit Europian. Kjo është një trupë <strong>ekskluzive</strong> që përfaqëson nivelin më të lartë të pushtetit ekzekutiv në çdo vend anëtar.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Anëtarët Votues:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>27 Krerë Shtetesh/Qeverish:</strong> Presidenti ose Kryeministri i çdo vendi anëtar</li>
                    <li><strong>Presidenti i Këshillit Europian:</strong> Charles Michel (2019-2024, rizgjedhur për 2024-2027)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Anëtarët Jo-Votues:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Presidenti i Komisionit Europian:</strong> Merr pjesë në diskutime por nuk voton</li>
                    <li><strong>Përfaqësues të Lartë për Politikën e Jashtme:</strong> Merr pjesë kur diskutohen çështje të jashtme</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mb-4">
                <h4 className="font-bold text-xl mb-3 text-blue-900">Si Zgjidhen?</h4>
                <p className="text-gray-700 mb-4">
                  Krerët e shteteve dhe qeverive <strong>nuk zgjidhen për Këshillin Europian</strong> - ata janë automatikisht anëtarë sepse janë zgjedhur nga populli i vendeve të tyre përkatëse. Ky është një element kyç i <strong>legjitimitetit demokratik</strong>: çdo lider kombëtar ka mandat nga qytetarët e vet.
                </p>
                <p className="text-gray-700">
                  Presidenti i Këshillit Europian zgjidhet nga vetë anëtarët e Këshillit me <strong>shumicë të kualifikuar</strong> për një mandat 2.5-vjeçar, i cili mund të rinovohet një herë. Ai/ajo nuk mund të mbajë një pozicion kombëtar në të njëjtën kohë.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3 text-blue-900">E Dini Që...?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Presidenti i Këshillit Europian përfaqëson BE-në në çështje ndërkombëtare (bashkë me Përfaqësuesin e Lartë)</li>
                  <li>• Para Traktatit të Lisbonës (2009), presidenca ishte rrotulluese çdo 6 muaj</li>
                  <li>• Charles Michel është Presidenti i tretë i përhershëm, pas Herman Van Rompuy dhe Donald Tusk</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('role')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <TrendingUp className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Roli dhe Funksionet</h3>
            </div>
            {expandedSection === 'role' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'role' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Këshilli Europian ka një rol <strong>strategjik dhe orientues</strong>, jo legjislativ. Ai është "busulla" që i jep drejtim BE-së, por nuk shkruan ligjet. Le të shohim se çfarë bën konkretisht:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-900">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">1. Përcakton Orientimin Politik</h4>
                  <p className="text-gray-700">
                    Këshilli Europian vendos <strong>prioritetet strategjike</strong> të BE-së për vitet në vijim. Për shembull, ai përcakton nëse BE-ja duhet të fokusohet në klimën, migracionin, ekonominë dixhitale, apo sigurinë. Këto prioritete pastaj zbatohen nga Komisioni dhe Parlamenti.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-400">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">2. Trajton Çështje Komplekse</h4>
                  <p className="text-gray-700">
                    Kur ka çështje që janë <strong>tepër të ndjeshme</strong> për vendet anëtare ose që kërkojnë <strong>konsensus politik të lartë</strong>, Këshilli Europian ndërhyn. Shembuj: reforma e traktateve, pranimin e vendeve të reja, buxheti afatgjatë i BE-së.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">3. Emërimet e Larta</h4>
                  <p className="text-gray-700">
                    Këshilli Europian <strong>propozon</strong> kandidatin për President të Komisionit Europian (që pastaj aprovohet nga Parlamenti) dhe <strong>emëron</strong> Presidentin e Bankës Qendrore Europiane dhe Përfaqësuesin e Lartë për Politikën e Jashtme.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">4. Menaxhon Krizat</h4>
                  <p className="text-gray-700">
                    Në kohë <strong>krizash</strong> (financiare, shëndetësore, sigurie), Këshilli Europian mblidhet shpejt për të koordinuar përgjigjen e përbashkët. Gjatë pandemisë COVID-19 dhe krizës së Ukrainës, ai luajti një rol vendimtar.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3 text-blue-900 flex items-center gap-2">
                  <AlertCircle size={24} />
                  Çfarë NUK Bën Këshilli Europian?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>• Nuk miraton ligje:</strong> Kjo është detyra e Parlamentit dhe Këshillit të BE-së (jo Këshillit Europian!)</li>
                  <li><strong>• Nuk zbaton politika:</strong> Kjo bëhet nga Komisioni Europian</li>
                  <li><strong>• Nuk merr vendime të detajuara:</strong> Ai jep "imazhin e madh", jo detajet teknike</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('decision')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Calendar className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Procesi Vendimmarrës</h3>
            </div>
            {expandedSection === 'decision' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'decision' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Këshilli Europian operon me një qasje të veçantë vendimmarrjeje që pasqyron <strong>natyrën ndërqeveritare</strong> të BE-së. Në vend që të jetë një organ shumicë-pakicë klasik, ai kërkon <strong>konsensus</strong> midis të gjithë anëtarëve.
              </p>

              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl mb-6">
                <h4 className="font-bold text-2xl mb-4">Si Merren Vendimet?</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">1. Konsensus (metoda kryesore):</p>
                    <p className="text-blue-100">
                      Këshilli Europian përpiqet gjithmonë të marrë vendime me <strong>konsensus</strong>, që do të thotë se të gjithë anëtarët bien dakord. Kjo nuk është votim formal - Presidenti "ndjek dhomën" dhe shpall konsensus nëse nuk ka kundërshtim.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">2. Unanimitet (për çështje të caktuara):</p>
                    <p className="text-blue-100">
                      Disa vendime të rëndësishme kërkojnë <strong>unanimitet</strong> (të gjithë duhet të votojnë "po"). Shembuj: pranimin e vendeve të reja, ndryshimin e traktateve, politika të jashtme të caktuara.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">3. Shumicë e Kualifikuar (në raste të veçanta):</p>
                    <p className="text-blue-100">
                      Për disa çështje procedurale (si zgjedhja e Presidentit), përdoret shumicë e kualifikuar: të paktën 55% e anëtarëve që përfaqësojnë të paktën 65% të popullsisë së BE-së.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-3 text-blue-900">Hapat e një Mbledhje Tipike:</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Përgatitja (javë më parë)</p>
                      <p className="text-sm text-gray-600">Presidenti përcakton axhendën në konsultim me Komisionin dhe vendet anëtare</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Mbledhja (1-2 ditë)</p>
                      <p className="text-sm text-gray-600">Liderët diskutojnë çështjet, shpesh deri vonë në mbrëmje. Diskutimet janë konfidenciale.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <p className="font-semibold">Konkluzionet</p>
                      <p className="text-sm text-gray-600">Në fund, Këshilli miraton "konkluzione" që janë udhëzime për institucionet e tjera</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>
                      <p className="font-semibold">Konferenca e Shtypit</p>
                      <p className="text-sm text-gray-600">Presidenti njofton publikun për rezultatet. Çdo lider mund të mbajë konferencën e tij.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-xl mb-3 text-red-900">Sfidat e Procesit:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>• Vendime të ngadalta:</strong> Me 27 vende, arritur konsensus mund të marrë shumë kohë</li>
                  <li><strong>• Veto:</strong> Në çështje që kërkojnë unanimitet, një vend i vetëm mund të bllokojë</li>
                  <li><strong>• Maratonet negociuese:</strong> Disa mbledhje zgjasin deri në mëngjes për të arritur marrëveshje</li>
                  <li><strong>• Presioni publik:</strong> Çdo lider duhet t'i "shesë" marrëveshjen publikut të tij në shtëpi</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('cases')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <AlertCircle className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Raste Studimore Reale</h3>
            </div>
            {expandedSection === 'cases' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'cases' && (
            <div className="p-6 bg-gray-50 border-t">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 1: Kriza e COVID-19 dhe Plani i Rimëkëmbjes</h4>
                  <p className="text-gray-700 mb-3">
                    Në korrik 2020, në mes të pandemisë COVID-19, Këshilli Europian mbajti një nga mbledhjet më të gjata dhe më dramatike në historinë e tij - <strong>5 ditë negociata intensive</strong>. Rezultati? Një paketë historike prej <strong>1.8 trilion euro</strong> për të ndihmuar vendet anëtare të rimëkëmbemi.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Çfarë ndodhi?</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Komisioni propozoi "NextGenerationEU" - një plan rimëkëmbjeje masiv</li>
                      <li>• Vendet "frugale" (Holanda, Austria, Danimarka, Suedia) ishin skeptikë për dhënien e granteve</li>
                      <li>• Italia dhe Spanja, të prekura rëndë, kërkonin solidaritet</li>
                      <li>• Pas ditësh negociatash, u arrit kompromis: 390 miliardë në grante + 360 miliardë në hua</li>
                      <li>• Për herë të parë, BE-ja mori hua të përbashkët në emër të të gjithë vendeve!</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 2: Zgjerimi i BE-së - Përgjigja ndaj Ukrainës</h4>
                  <p className="text-gray-700 mb-3">
                    Pas invazionit rus të Ukrainës në shkurt 2022, Këshilli Europian veproi me shpejtësi të paprecedentë. Në qershor 2022, ai i dha Ukrainës dhe Moldavisë <strong>statusin e vendit kandidat</strong>, një vendim që normalisht merr vite.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Pse ishte i rëndësishëm?</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Dërgoi një sinjal të fortë gjeopolitik për mbështetjen e Ukrainës</li>
                      <li>• Këshilli Europian koordinoi sanksionet masive ndaj Rusisë</li>
                      <li>• Vendosi për furnizimin e armatimit dhe ndihmën humanitare</li>
                      <li>• Tregoi se BE-ja mund të veprojë bashkërisht në kriza të sigurisë</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 3: Kriza e Migracionit 2015-2016</h4>
                  <p className="text-gray-700 mb-3">
                    Gjatë krizës së refugjatëve, Këshilli Europian mbajti <strong>duzina mbledhje emergjente</strong>. Ky ishte një moment që testoi bashkësinë europiane, pasi vendet kishin pikëpamje shumë të ndryshme.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Vendimet kryesore:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Krijimi i mekanizmit të shpërndarjes së refugjatëve (edhe pse jo plotësisht i suksesshëm)</li>
                      <li>• Marrëveshja BE-Turqi për menaxhimin e flukseve</li>
                      <li>• Përforcimi i Frontex (agjencia e kufijve)</li>
                      <li>• Sfidë e vazhdueshme: dallime të mëdha midis vendeve të Lindjes dhe Perëndimit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 mb-8 shadow-xl">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Testo Njohuritë Tua!</h3>
        <p className="text-gray-800 mb-4">
          Je gati të provosh sa ke mësuar rreth Këshillit Europian?
        </p>
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {showQuiz ? 'Mbyll Kuizin' : 'Fillo Kuizin'}
        </button>
      </div>

      {showQuiz && <Quiz questions={quizQuestions} institutionName="Këshilli Europian" />}

      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Në Përfundim...</h3>
        <p className="text-gray-700 leading-relaxed">
          Këshilli Europian është <strong>"dhoma e motorit"</strong> politik të BE-së. Ai nuk shkruan ligje, por përcakton drejtimin. Në një botë gjithnjë e më komplekse, roli i tij si forum për <strong>udhëheqje strategjike dhe koordinim në kriza</strong> është më i rëndësishëm se kurrë. Kur dëgjoni për "samitin e BE-së" në lajme, ajo është Këshilli Europian në veprim!
        </p>
      </div>
    </div>
  );
}
