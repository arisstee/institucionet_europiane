import { useState } from 'react';
import { Vote, MapPin, Users2, Scale, ChevronDown, ChevronUp, Megaphone } from 'lucide-react';
import Quiz from './Quiz';

interface ParliamentSectionProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function ParliamentSection({ onNext }: ParliamentSectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const quizQuestions = [
    {
      question: 'Sa deputetë ka Parlamenti Europian?',
      options: ['705', '720', '751', '800'],
      correct: 1,
      explanation: 'Parlamenti Europian ka 720 deputetë që nga zgjedhjet e 2024-ës.'
    },
    {
      question: 'Sa herë zgjidhet Parlamenti Europian?',
      options: ['Çdo 3 vjet', 'Çdo 4 vjet', 'Çdo 5 vjet', 'Çdo 6 vjet'],
      correct: 2,
      explanation: 'Zgjedhjet e Parlamentit Europian mbahen çdo 5 vjet, dhe të gjithë qytetarët e BE-së kanë të drejtë vote.'
    },
    {
      question: 'Cili është roli kryesor i Parlamentit Europian?',
      options: ['Zbaton ligjet', 'Miraton ligje dhe kontrollon buxhetin', 'Emëron gjyqtarë', 'Menaxhon kufirin'],
      correct: 1,
      explanation: 'Parlamenti bashkë-miraton legjislacionin me Këshillin e BE-së dhe ka autoritet mbi buxhetin e BE-së.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
          <Vote className="text-blue-900" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Parlamenti Europian</h1>
        <p className="text-xl text-gray-600 italic">"Zëri i qytetarëve europianë"</p>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-2xl p-8 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Çfarë është Parlamenti Europian?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Parlamenti Europian është <strong>institucioni i vetëm i zgjedhur drejtpërdrejt</strong> nga qytetarët e BE-së. Me 720 deputetë që përfaqësojnë më shumë se 450 milionë njerëz, ai është organi legjislativ i Bashkimit Europian dhe zëri demokratik i popujve europianë.
        </p>
        <p className="text-lg leading-relaxed">
          Ndryshe nga Këshilli Europian që është <strong>strategjik</strong>, Parlamenti është <strong>legjislativ dhe mbikëqyrës</strong>. Ai miraton ligjet, kontrollon buxhetin e BE-së, dhe mbikëqyr punën e Komisionit Europian. Pa miratimin e Parlamentit, asnjë ligj i BE-së nuk mund të kalojë!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
          <div className="flex items-center gap-3 mb-3">
            <Users2 className="text-yellow-600" size={28} />
            <h3 className="font-bold text-lg">Deputetët</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">720</p>
          <p className="text-sm text-gray-600">Anëtarë të Parlamentit Europian (MEPs) nga 27 vende</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-900">
          <div className="flex items-center gap-3 mb-3">
            <Vote className="text-blue-900" size={28} />
            <h3 className="font-bold text-lg">Mandati</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">5 vjet</p>
          <p className="text-sm text-gray-600">Zgjedhje të drejtpërdrejta çdo 5 vjet</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-blue-500" size={28} />
            <h3 className="font-bold text-lg">Selitë</h3>
          </div>
          <p className="text-xl font-bold text-blue-900 mb-2">3 Qytete</p>
          <p className="text-sm text-gray-600">Strasburg, Bruksel, Luksemburg</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('history')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Megaphone className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Historiku: Nga Asamble në Parlament</h3>
            </div>
            {expandedSection === 'history' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'history' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Historia e Parlamentit Europian është një histori <strong>transformimi nga një organ konsultativ në një fuqi legjislative të plotë</strong>. Ky evolucion pasqyron luftën për më shumë demokraci në nivelin europian.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Faza 1: Vitet 1950s - Asambleja e Parë</h4>
                <p className="text-gray-700 mb-3">
                  Në <strong>1952</strong>, u krijua "Asambleja e Përbashkët" e Komunitetit Europian të Qymyrit dhe Çelikut. Por kjo asamblee kishte <strong>zero fuqi vendimmarrëse</strong> - ajo vetëm jepte mendime. Anëtarët nuk zgjidheshin nga populli, por <strong>emëroheshin nga parlamentet kombëtare</strong>.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600"><strong>Pse ishte kështu?</strong> Vendet anëtare ishin skeptike ndaj dhënies së shumë pushteti në nivelin europian. Ato donin ta mbante kontrollin.</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Faza 2: Vitet 1970s - Zgjedhjet e Para Direkte</h4>
                <p className="text-gray-700 mb-3">
                  Momenti historik erdhi në <strong>1979</strong>, kur për herë të parë qytetarët europianë votuan drejtpërdrejt për deputetët e tyre europianë. Kjo ishte një <strong>revolucion demokratik</strong>: tashmë Parlamenti kishte <strong>legjitimitet të drejtpërdrejtë</strong> nga populli.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600"><strong>Rezultati:</strong> 410 deputetë u zgjodhën nga 9 vende anëtare. Pjesëmarrja ishte 62% - shumë më e lartë se sot!</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Faza 3: Vitet 1990s-2000s - Fitimi i Fuqisë</h4>
                <p className="text-gray-700 mb-3">
                  Përmes një sërë traktatesh (<strong>Maastricht 1992, Amsterdam 1997, Nice 2001, Lisbona 2009</strong>), Parlamenti fitoi gradualisht më shumë fuqi:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>• Bashkë-vendimmarrje:</strong> Nga thjesht konsultativ, u bë bashkë-legjislator me Këshillin</li>
                  <li><strong>• Kontrolli mbi buxhetin:</strong> Autorizimi final i buxhetit të BE-së</li>
                  <li><strong>• Votimi për Komisionin:</strong> Duhet të miratojë (ose refuzojë) Komisionin e propozuar</li>
                  <li><strong>• Mocion i mosbesimit:</strong> Mund të shkarkojë tërë Komisionin</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-4">Sot: Një Parlament i Vërtetë</h4>
                <p className="text-blue-100">
                  Sot, Parlamenti Europian është një nga parlamentet më të fuqishme në botë. Ai ka fuqi <strong>legjislative, buxhetore dhe mbikëqyrëse</strong>. Por sfida mbetet: <strong>pjesëmarrja në zgjedhje ka rënë</strong> (rreth 50% në 2024), duke treguar nevojën për më shumë angazhim qytetar.
                </p>
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
              <Users2 className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Përbërja: 720 Deputetë, 7 Grupe Politike</h3>
            </div>
            {expandedSection === 'composition' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'composition' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Parlamenti Europian ka një strukturë unike: deputetët <strong>nuk organizohen sipas kombësive</strong>, por sipas <strong>grupeve politike trans-europiane</strong>. Kjo do të thotë që një socialist italian ulet pranë një socialisti suedez, jo pranë kolegëve italianë nga parti të tjera!
              </p>

              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Si Ndahen Vendet?</h4>
                <p className="text-gray-700 mb-4">
                  Numri i deputetëve për çdo vend bazohet në <strong>proporcionalitet degressiv</strong>: vendet e mëdha kanë më shumë deputetë, por jo në proporcion të plotë me popullsinë. Kjo siguron që vendet e vogla të mos <strong>"zhduken"</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Vendet më të mëdha:</p>
                    <ul className="text-sm space-y-1">
                      <li>🇩🇪 Gjermania: 96 deputetë</li>
                      <li>🇫🇷 Franca: 81 deputetë</li>
                      <li>🇮🇹 Italia: 76 deputetë</li>
                      <li>🇪🇸 Spanja: 61 deputetë</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Vendet më të vogla:</p>
                    <ul className="text-sm space-y-1">
                      <li>🇲🇹 Malta: 6 deputetë</li>
                      <li>🇱🇺 Luksemburgu: 6 deputetë</li>
                      <li>🇨🇾 Qipro: 6 deputetë</li>
                      <li>🇪🇪 Estonia: 7 deputetë</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Grupet Politike Kryesore (2024-2029):</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-900">PPE - Partia Popullore Europiane</span>
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm">Qendër-Djathtë</span>
                    </div>
                    <p className="text-sm text-gray-600">Grupi më i madh. Përfshin parti konservatore dhe kristian-demokrate. ~188 deputetë.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-red-700">S&D - Socialistët dhe Demokratët</span>
                      <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm">Qendër-Majtë</span>
                    </div>
                    <p className="text-sm text-gray-600">Parti social-demokrate dhe socialiste. ~136 deputetë.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-yellow-700">Renew Europe</span>
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Liberal-Qendër</span>
                    </div>
                    <p className="text-sm text-gray-600">Parti liberale dhe pro-europiane. ~79 deputetë.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-green-700">Greens/EFA</span>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Të Gjelbër</span>
                    </div>
                    <p className="text-sm text-gray-600">Parti ekologjike dhe rajonaliste. ~53 deputetë.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                <h4 className="font-bold text-xl mb-3 text-blue-900">Si Zgjidhen Deputetët?</h4>
                <p className="text-gray-700 mb-4">
                  Çdo vend anëtar organizon zgjedhjet e veta, por ka disa <strong>rregulla të përbashkëta</strong>:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>• Votimi proporcional:</strong> Të gjitha vendet duhet të përdorin një sistem proporcional (jo fitues-merr-të-gjitha)</li>
                  <li><strong>• E drejta e votës:</strong> Të gjithë qytetarët mbi 18 vjeç (në disa vende 16) mund të votojnë</li>
                  <li><strong>• Kandidimi:</strong> Mund të kandidosh në vendin tënd ose ku jeton</li>
                  <li><strong>• Data e njëjtë:</strong> Zgjedhjet mbahen të njëjtën fundjavë në të gjithë BE-në (zakonisht në qershor)</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('powers')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Scale className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Fuqitë: Legjislative, Buxhetore, Mbikëqyrëse</h3>
            </div>
            {expandedSection === 'powers' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'powers' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Parlamenti Europian ka tri fuqi kryesore që e bëjnë atë një institucion të fuqishëm demokratik:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl mb-4">1. Fuqia Legjislative</h4>
                  <p className="text-blue-100 mb-4">
                    Parlamenti është <strong>bashkë-legjislator</strong> me Këshillin e BE-së. Kjo do të thotë që shumica e madhe e ligjeve të BE-së duhet të miratohen nga <strong>të dyja institucionet</strong>.
                  </p>
                  <div className="bg-blue-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Si Funksionon?</p>
                    <ol className="space-y-2 text-sm text-blue-100">
                      <li>1. <strong>Komisioni</strong> propozon një ligj të ri</li>
                      <li>2. <strong>Parlamenti dhe Këshilli</strong> e shqyrtojnë dhe propozojnë amendamente</li>
                      <li>3. Nëse bien dakord → ligji miratohet</li>
                      <li>4. Nëse nuk bien dakord → shkon në "konciliacion" ku negociohet një kompromis</li>
                      <li>5. Votim final në të dy institucionet</li>
                    </ol>
                  </div>
                  <p className="text-blue-100 mt-4 text-sm">
                    <strong>Pa miratimin e Parlamentit, ligji nuk mund të kalojë!</strong> Kjo është një fuqi e madhe: Parlamenti mund të bllokojë legjislacion që nuk i pëlqen.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl mb-4">2. Fuqia Buxhetore</h4>
                  <p className="mb-4">
                    Parlamenti <strong>bashkë-vendos mbi buxhetin</strong> e BE-së me Këshillin. Buxheti vjetor i BE-së është rreth <strong>170 miliardë euro</strong>, dhe asnjë euro nuk mund të shpenzohet pa miratimin e Parlamentit.
                  </p>
                  <div className="bg-yellow-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Çfarë Kontrollon Parlamenti?</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Miratimi i buxhetit vjetor</li>
                      <li>• Kontrolli i shpenzimeve (ku shkojnë paratë)</li>
                      <li>• Auditimi i përdorimit të fondeve</li>
                      <li>• Mund të refuzojë buxhetin nëse nuk është i kënaqur</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-2xl mb-4">3. Fuqia Mbikëqyrëse</h4>
                  <p className="text-green-100 mb-4">
                    Parlamenti kontrollon institucionet e tjera të BE-së, veçanërisht <strong>Komisionin Europian</strong>. Ai është "syri vigjilent" që siguron që institucionet të veprojnë në interesin e qytetarëve.
                  </p>
                  <div className="bg-green-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Si e Ushtron Këtë?</p>
                    <ul className="space-y-2 text-sm text-green-100">
                      <li><strong>• Pyetje parlamentare:</strong> Deputetët mund të pyesin Komisionin për çdo çështje</li>
                      <li><strong>• Dëgjesa:</strong> Komisionerët vijnë para Parlamentit për të raportuar</li>
                      <li><strong>• Komisionet hetimore:</strong> Hetime të thella për skandale ose probleme</li>
                      <li><strong>• Mocion mosbesimi:</strong> Me 2/3 të votave, mund të shkarkojë tërë Komisionin!</li>
                      <li><strong>• Miratimi i Komisionit:</strong> Komisioni i ri duhet të marrë "po" nga Parlamenti para se të fillojë punën</li>
                    </ul>
                  </div>
                  <p className="text-green-100 mt-4 text-sm">
                    <strong>Shembull historik:</strong> Në 1999, Komisioni Santer dha dorëheqje para se Parlamenti të votonte një mocion mosbesimi, pas akuzave për korrupsion!
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 className="font-bold text-xl mb-3 text-red-900">Çfarë NUK Mund të Bëjë Parlamenti?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>• Nuk mund të propozojë ligje:</strong> Vetëm Komisioni ka "të drejtën e iniciativës"</li>
                  <li><strong>• Nuk vendos vetëm:</strong> Duhet të bien dakord me Këshillin për shumicën e ligjeve</li>
                  <li><strong>• Nuk kontrollon politikën e jashtme:</strong> Kjo është kryesisht në duart e Këshillit</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('work')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Vote className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Si Punon Parlamenti? Komisionet dhe Sesionet</h3>
            </div>
            {expandedSection === 'work' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'work' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Parlamenti Europian nuk është thjesht një sallë e madhe ku deputetët votojnë. Shumica e punës bëhet në <strong>komisione të specializuara</strong> dhe përmes një cikli të rregullt mbledhjesh.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Komisionet Parlamentare (20+)</h4>
                <p className="text-gray-700 mb-4">
                  Çdo deputet është anëtar i <strong>një ose më shumë komisioneve</strong> që specializohen në fusha të caktuara. Këtu bëhet puna e vërtetë: leximi i propozimeve, dëgjimi i ekspertëve, shkruarja e raporteve dhe amendamenteve.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">AFET - Çështjet e Jashtme</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">ENVI - Mjedisi dhe Shëndetësia</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">ECON - Ekonomia dhe Monedha</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">LIBE - Liritë Civile dhe Drejtësia</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">AGRI - Bujqësia</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm">TRAN - Transporti dhe Turizmi</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Cikli Mujor i Punës:</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Java 1-2: Puna në Komision</p>
                      <p className="text-sm text-gray-600">Deputetët punojnë në Bruksel në komisionet e tyre. Dëgjime, debate, shkrim i raporteve.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Java 3: Sesioni Plenar në Strasburg</p>
                      <p className="text-sm text-gray-600">Të gjithë 720 deputetët mblidhen për të debatuar dhe votuar. Këto janë momentet dramatike!</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <p className="font-semibold">Java 4: Puna në Rreth</p>
                      <p className="text-sm text-gray-600">Deputetët kthehen në rretet e tyre për të takuar qytetarët dhe për të kuptuar shqetësimet e tyre.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3">Pse Tri Qytete?</h4>
                <p className="text-blue-100 mb-3">
                  Një kurioztitet i Parlamentit Europian është që ka <strong>tri seli</strong>:
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li><strong>• Strasburg (Francë):</strong> Selia zyrtare - 12 sesione plenare në vit</li>
                  <li><strong>• Bruksel (Belgjikë):</strong> Puna në komisione dhe sesione plenare shtesë</li>
                  <li><strong>• Luksemburg:</strong> Sekretariati administrativ</li>
                </ul>
                <p className="text-blue-100 mt-3 text-sm">
                  Kjo është rezultat i kompromiseve historike, por është shpesh kritikuar si e kushtueshme dhe joefikase - deputetët dhe stafi udhëtojnë vazhdimisht!
                </p>
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
              <Megaphone className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Raste Studimore: GDPR dhe Politika Klimatike</h3>
            </div>
            {expandedSection === 'cases' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'cases' && (
            <div className="p-6 bg-gray-50 border-t">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 1: GDPR - Ligji që Ndryshoi Botën</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>General Data Protection Regulation (GDPR)</strong>, që hyri në fuqi në maj 2018, është një nga sukseset më të mëdha të Parlamentit Europian. Ky ligj i jep qytetarëve kontroll mbi të dhënat e tyre personale dhe ka ndikuar në legjislacionin global.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Si u Miratua?</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li><strong>2012:</strong> Komisioni propozoi rregulloren e parë</li>
                      <li><strong>2012-2015:</strong> Komisionit LIBE i Parlamentit punoi intensivisht, dëgjoi mijëra ekspertë</li>
                      <li><strong>2015-2016:</strong> Negociata të vështira me Këshillin (disa vende donin rregulla më të buta)</li>
                      <li><strong>2016:</strong> Parlamenti votoi në favor me <strong>shumicë dërrmuese</strong> (621 për, 10 kundër)</li>
                      <li><strong>2018:</strong> Hyrja në fuqi - kompani në të gjithë botën u detyruan të respektojnë GDPR për të operuar në BE</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Ndikimi Global:</p>
                    <p className="text-sm text-gray-700">
                      GDPR u bë "standardi i artë" global. Kompani si Google, Facebook, Amazon u detyruan të ndryshonin praktikat e tyre globale. Vende të tjera (Kalifornia, Brazili, India) krijuan ligje të ngjashme. Parlamenti provoi se BE-ja mund të vendosë standardet!
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 2: European Green Deal dhe Ligji i Klimës</h4>
                  <p className="text-gray-700 mb-4">
                    Parlamenti Europian ka qenë në <strong>ballë të luftës kundër ndryshimeve klimatike</strong>. Në 2019, ai shpalli "emergjencë klimatike" dhe ka shtyrë vazhdimisht për objektiva më ambicioze.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Momenti Kyç: Ligji Europian i Klimës (2021)</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li><strong>• Objektivi:</strong> BE-ja të bëhet <strong>klimatikisht neutrale deri në 2050</strong></li>
                      <li><strong>• Roli i Parlamentit:</strong> Donte objektiva edhe më të larta (60% reduktim emisionesh deri 2030 vs. 55% të propozuar nga Komisioni)</li>
                      <li><strong>• Negociatat:</strong> Parlamenti luftoi fort, arriti kompromis në 55% me mundësi rishikimi</li>
                      <li><strong>• Rezultati:</strong> Ligji u miratua në qershor 2021, duke e bërë objektivin ligjërisht të detyrueshëm</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Paketa "Fit for 55"</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Parlamenti ka punuar për të miratuar duzina ligje që zbatojnë Green Deal:
                    </p>
                    <ul className="text-sm space-y-1 text-gray-700 ml-4">
                      <li>• Ndalimi i veturave me karburant fosil nga 2035</li>
                      <li>• Reforma e sistemit të tregtimit të emoneve (ETS)</li>
                      <li>• Ligji i restaurimit të natyrës</li>
                      <li>• Detyrime për renovimin e ndërtesave</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 3: Refuzimi i ACTA (2012)</h4>
                  <p className="text-gray-700 mb-4">
                    Në 2012, Parlamenti tregoi <strong>pavarësinë e tij</strong> duke refuzuar ACTA (Anti-Counterfeiting Trade Agreement), një marrëveshje tregtare që shumë e shihnin si kërcënim për liritë në internet.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Pavarësisht presionit nga Komisioni dhe disa vende anëtare, Parlamenti dëgjoi shqetësimet e qytetarëve (protestave masive) dhe votoi <strong>478 kundër, 39 për</strong>. Ishte një moment që tregoi se Parlamenti nuk është thjesht "gumë vule"!
                    </p>
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
          Sa ke mësuar rreth Parlamentit Europian?
        </p>
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {showQuiz ? 'Mbyll Kuizin' : 'Fillo Kuizin'}
        </button>
      </div>

      {showQuiz && <Quiz questions={quizQuestions} institutionName="Parlamenti Europian" />}

      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-yellow-400">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Në Përfundim...</h3>
        <p className="text-gray-700 leading-relaxed">
          Parlamenti Europian është <strong>zëri i drejtpërdrejtë i qytetarëve</strong> në nivelin europian. Ndryshe nga institucionet e tjera, ai përfaqëson <strong>ju</strong> - jo qeveritë, por njerëzit. Me çdo zgjedhje që vjen çdo 5 vjet, ju keni mundësinë të zgjidhni se kush do t'ju përfaqësojë në Strasburg dhe Bruksel. Mos e nënvlerësoni këtë pushtet!
        </p>
      </div>
    </div>
  );
}
