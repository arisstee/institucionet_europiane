import { useState } from 'react';
import { Briefcase, MapPin, Lightbulb, Gavel, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import Quiz from './Quiz';

interface CommissionSectionProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function CommissionSection({ onNext }: CommissionSectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const quizQuestions = [
    {
      question: 'Kush është Presidentja aktuale e Komisionit Europian?',
      options: ['Angela Merkel', 'Ursula von der Leyen', 'Christine Lagarde', 'Roberta Metsola'],
      correct: 1,
      explanation: 'Ursula von der Leyen është Presidentja e Komisionit Europian që nga dhjetori 2019, e rizgjedhur për mandatin 2024-2029.'
    },
    {
      question: 'Sa Komisionerë ka Komisioni Europian?',
      options: ['20', '27', '28', '30'],
      correct: 1,
      explanation: 'Ka një Komisionér për çdo vend anëtar, gjithsej 27, duke përfshirë Presidenten.'
    },
    {
      question: 'Cili është roli kryesor i Komisionit?',
      options: ['Voton ligjet', 'Propozon ligje dhe i zbaton ato', 'Zgjedh deputetët', 'Menaxhon gjykatat'],
      correct: 1,
      explanation: 'Komisioni ka "të drejtën e iniciativës" për të propozuar ligje dhe është përgjegjës për zbatimin e tyre.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-4">
          <Briefcase className="text-blue-900" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Komisioni Europian</h1>
        <p className="text-xl text-gray-600 italic">"Motori ekzekutiv i BE-së"</p>
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-2xl p-8 mb-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Çfarë është Komisioni Europian?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Komisioni Europian është <strong>"qeveria" e Bashkimit Europian</strong> - organi ekzekutiv që propozon ligjet e reja, i zbaton ato pasi të miratohen, dhe siguron që të gjitha vendet anëtare t'i respektojnë rregullat e BE-së. Nëse BE-ja ishte një makinë, Komisioni do të ishte motori që e bën të lëvizë.
        </p>
        <p className="text-lg leading-relaxed">
          Me 27 Komisionerë (një nga çdo vend anëtar), Komisioni është i <strong>pavarur nga qeveritë kombëtare</strong> dhe punon për interesin e përbashkët europian. Ai ka monopolin mbi <strong>propozimin e ligjeve të reja</strong> - vetëm Komisioni mund të nisë legjislacion në nivelin e BE-së!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="text-yellow-600" size={28} />
            <h3 className="font-bold text-lg">Komisionerët</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">27</p>
          <p className="text-sm text-gray-600">Një nga çdo vend anëtar, duke përfshirë Presidenten</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-900">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="text-blue-900" size={28} />
            <h3 className="font-bold text-lg">Mandati</h3>
          </div>
          <p className="text-3xl font-bold text-blue-900 mb-2">5 vjet</p>
          <p className="text-sm text-gray-600">I njëjtë me mandatin e Parlamentit</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-blue-500" size={28} />
            <h3 className="font-bold text-lg">Selia</h3>
          </div>
          <p className="text-2xl font-bold text-blue-900 mb-2">Bruksel</p>
          <p className="text-sm text-gray-600">Berlaymont Building, Belgjikë</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('history')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Zap className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Nga Autoriteti i Lartë në Komisionin Modern</h3>
            </div>
            {expandedSection === 'history' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'history' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Komisioni Europian ka rrënjët e tij në <strong>Autoritetin e Lartë të Komunitetit Europian të Qymyrit dhe Çelikut</strong>, krijuar në 1952. Ky organ ishte një eksperiment i guximshëm: një institucion <strong>suprakombëtar</strong> që merrte vendime në emër të vendeve anëtare, jo në bazë të interesave kombëtare.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Vizioni i Jean Monnet (1952)</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Jean Monnet</strong>, "arkitekti" i integrimit europian, ishte Presidenti i parë i Autoritetit të Lartë. Ai besonte se <strong>paqja në Europë</strong> vinte vetëm nëpërmjet integrimit ekonomik dhe institucional. Ideja ishte e thjeshtë por revolucionare: nëse vendet ndajnë kontrollin mbi resurset kyçe (qymyri dhe çeliku ishin jetike për industrinë dhe luftën), ato nuk do të luftojnë më njëra-tjetrën.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    "Ne nuk po bashkojmë shtete, po bashkojmë njerëz." - Jean Monnet
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Evolucioni Historik:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">1952: Autoriteti i Lartë</p>
                    <p className="text-sm text-gray-700">Krijimi i organit të parë suprakombëtar europian. 9 anëtarë të pavarur që vendosin mbi qymyrin dhe çelikun.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">1958: Lindja e Komisionit</p>
                    <p className="text-sm text-gray-700">Me Traktatet e Romës, u krijua "Komisioni i Komunitetit Ekonomik Europian" (KEE). Mandati u zgjerua: nga qymyri dhe çeliku në tërë ekonominë.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">1967: Bashkimi i Institucioneve</p>
                    <p className="text-sm text-gray-700">Tri komunitetet europiane (KECQ, KEE, Euratom) bashkuan institucionet e tyre në një "Komision Europian" të vetëm.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">1992-2009: Fuqizimi me Traktate</p>
                    <p className="text-sm text-gray-700">Traktatet e Maastricht-it, Amsterdam-it, Nice-s dhe Lisbonës i dhanë Komisionit përgjegjësi të reja: monedha e përbashkët, drejtësia, çështje të jashtme.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-1">Sot: Një "Qeveri" Europiane</p>
                    <p className="text-sm text-gray-700">Komisioni ka rreth 32,000 nëpunës dhe menaxhon një buxhet prej ~170 miliardë euro. Është bërë një makineri e vërtetë qeverisëse.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-3">Pse është Unik?</h4>
                <p className="text-blue-100">
                  Komisioni është <strong>unik në botë</strong>. Nuk ka asnjë institucion tjetër ndërkombëtar që ka pushtet të tillë <strong>suprakombëtar</strong>: mund të propozojë ligje që zbatohen në 27 vende, të hetojë qeveritë për shkelje, dhe të ndëshkojë kompani me gjoba masive. Ky pushtet ekziston sepse vendet anëtare ranë dakord të <strong>ndajnë sovranitetin</strong> për të mirën e përbashkët.
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
              <Briefcase className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Përbërja: Kush Janë Komisionerët?</h3>
            </div>
            {expandedSection === 'composition' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'composition' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Komisioni Europian përbëhet nga <strong>27 Komisionerë</strong>, secili i përgjegjës për një fushë specifike politike (portofol). Edhe pse çdo komisionér vjen nga një vend i ndryshëm, ata <strong>betohen të veprojnë për interesin europian</strong>, jo për vendin e tyre.
              </p>

              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4">Si Emërohet Komisioni? (Procesi Kompleks)</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <p className="font-semibold">Zgjedhjet Europiane</p>
                      <p className="text-sm">Qytetarët votojnë për Parlamentin. Partia që fiton më shumë vende tradicionalisht propozon kandidatin për President.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <p className="font-semibold">Këshilli Europian Propozon</p>
                      <p className="text-sm">Krerët e shteteve propozojnë një kandidat për President të Komisionit (duke marrë parasysh rezultatet e zgjedhjeve).</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <p className="font-semibold">Parlamenti Voton</p>
                      <p className="text-sm">Parlamenti duhet të miratojë kandidatin me shumicë absolute. Nëse refuzon, procesi fillon përsëri.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>
                      <p className="font-semibold">Përzgjedhja e Komisionerëve</p>
                      <p className="text-sm">Presidenti-elekti konsultohet me vendet anëtare për të zgjedhur 26 Komisionerët e tjerë. Çdo vend propozon një kandidat.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</span>
                    <div>
                      <p className="font-semibold">Dëgjimet Parlamentare</p>
                      <p className="text-sm">Çdo kandidat-Komisionér kalon dëgjime të forta para komisioneve parlamentare. Disa kanë qenë refuzuar!</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">6</span>
                    <div>
                      <p className="font-semibold">Votimi Final</p>
                      <p className="text-sm">Parlamenti voton për të gjithë Komisionin si kolegj. Nëse miratohet, Komisioni fillon punën.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-xl mb-4 text-blue-900">Portofolët Kryesorë (2024-2029):</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Presidentja</p>
                    <p className="text-sm text-gray-600">Ursula von der Leyen (Gjermani) - Udhëheq tërë Komisionin</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Nënpresidentja Ekzekutive</p>
                    <p className="text-sm text-gray-600">Cleantech, Siguria, Demokracia - role të rëndësishme strategjike</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Politika e Jashtme</p>
                    <p className="text-sm text-gray-600">Përfaqësuesi i Lartë - diplomacia dhe sigurisë</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Konkurrenca</p>
                    <p className="text-sm text-gray-600">Ruan konkurrencën e lirë në tregun e BE-së</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Ekonomia</p>
                    <p className="text-sm text-gray-600">Menaxhon politikën ekonomike dhe monetare</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-bold text-blue-900 mb-1">Klima dhe Green Deal</p>
                    <p className="text-sm text-gray-600">Udhëheq luftën kundër ndryshimeve klimatike</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-xl mb-3 text-blue-900">Pavarësia: Betimi Solemn</h4>
                <p className="text-gray-700 mb-3">
                  Kur fillojnë mandatin, Komisionerët <strong>betohen solemnisht</strong> para Gjykatës së Drejtësisë së BE-së që do të jenë <strong>plotësisht të pavarur</strong>. Ata nuk mund të:
                </p>
                <ul className="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• Të kërkojnë ose pranojnë udhëzime nga qeveritë kombëtare</li>
                  <li>• Të mbajnë pozicione të tjera politike ose biznesi</li>
                  <li>• Të veprojnë në interesin e vendit të tyre</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  Kjo pavarësi është <strong>thelbësore</strong>: Komisioni duhet të veprojë për <strong>interesin e përgjithshëm europian</strong>, edhe nëse kjo bie ndesh me dëshirat e një qeverie të caktuar.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <button
            onClick={() => toggleSection('roles')}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <Gavel className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Tri Rolet Kyçe: Propozon, Zbaton, Ruan</h3>
            </div>
            {expandedSection === 'roles' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'roles' && (
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-lg leading-relaxed mb-6">
                Komisioni Europian ka <strong>tre role kryesore</strong> që e bëjnë atë zemrën e funksionimit të BE-së:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb size={32} className="flex-shrink-0" />
                    <h4 className="font-bold text-2xl">1. Të Drejtën e Iniciativës - Propozuesi i Ligjeve</h4>
                  </div>
                  <p className="mb-4">
                    Komisioni është <strong>i vetmi</strong> që mund të propozojë ligje të reja në nivelin e BE-së. As Parlamenti, as Këshilli nuk mund të propozojnë legjislacion - ata vetëm mund të kërkojnë nga Komisioni të propozojë diçka.
                  </p>
                  <div className="bg-yellow-200 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Si Funksionon?</p>
                    <ol className="text-sm space-y-2">
                      <li><strong>1. Identifikimi i nevojës:</strong> Nga analizat, kërkesat e qytetarëve, apo udhëzimet e Këshillit Europian</li>
                      <li><strong>2. Konsultimet e gjera:</strong> Me ekspertë, qytetarë, organizata, qeveri kombëtare</li>
                      <li><strong>3. Vlerësimi i ndikimit:</strong> Çfarë do të kushtojë? Çfarë përfitimesh do të sjellë?</li>
                      <li><strong>4. Hartimi i propozimit:</strong> Teksti ligjor i detajuar</li>
                      <li><strong>5. Miratimi nga Kolegji:</strong> Të 27 Komisionerët votojnë (shumica e thjeshtë)</li>
                      <li><strong>6. Dërgimi në Parlament dhe Këshilli:</strong> Fillon procesi legjislativ</li>
                    </ol>
                  </div>
                  <p className="text-sm">
                    <strong>Pse është kaq e rëndësishme?</strong> Duke pasur monopolin e iniciativës, Komisioni siguron që legjislacioni të jetë <strong>koherent, i bazuar në ekspertizë dhe i orientuar drejt interesit europian</strong>, jo vetëm lobimit kombëtar.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={32} className="flex-shrink-0" />
                    <h4 className="font-bold text-2xl">2. Zbatimi - Sigurimi që Ligjet Respektohen</h4>
                  </div>
                  <p className="text-blue-100 mb-4">
                    Pasi një ligj miratohet, Komisioni është <strong>"rojtar i traktateve"</strong> - ai siguron që të gjitha vendet anëtare t'i <strong>zbatojnë dhe respektojnë</strong> ligjet e BE-së.
                  </p>
                  <div className="bg-blue-800 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Si e zbaton këtë rol?</p>
                    <ul className="text-sm space-y-2 text-blue-100">
                      <li><strong>• Monitorimi:</strong> Kontrollon nëse vendet anëtare i transponojnë direktivat në ligjin kombëtar</li>
                      <li><strong>• Hetimet:</strong> Heton ankesa nga qytetarë, biznese, ose organizata</li>
                      <li><strong>• Procedurat e shkeljes:</strong> Nëse një vend nuk respekton ligjin e BE-së, Komisioni nis një procedurë</li>
                      <li><strong>• Çon në Gjykatë:</strong> Nëse vendi nuk korrigjohët, Komisioni e çon në Gjykatën e BE-së</li>
                      <li><strong>• Gjoba:</strong> Gjykata mund të vendosë gjoba të mëdha ditore derisa problemi të zgjidhet</li>
                    </ul>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg">
                    <p className="text-sm text-blue-100">
                      <strong>Shembull:</strong> Në 2021, Gjykata e BE-së gjobiti Poloninë me <strong>1 milion euro PËR DITË</strong> për refuzimin e zbatimit të një vendimi mbi sistemin gjyqësor. Komisioni kishte nisur procedurën e shkeljes.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase size={32} className="flex-shrink-0" />
                    <h4 className="font-bold text-2xl">3. Menaxhimi i Buxhetit dhe Programeve</h4>
                  </div>
                  <p className="text-green-100 mb-4">
                    Komisioni menaxhon <strong>buxhetin e BE-së</strong> (~170 miliardë euro/vit) dhe administron programet e shumta të BE-së.
                  </p>
                  <div className="bg-green-700 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Çfarë përfshin kjo?</p>
                    <ul className="text-sm space-y-2 text-green-100">
                      <li><strong>• Propozimi i buxhetit vjetor</strong></li>
                      <li><strong>• Menaxhimi i programeve:</strong> Erasmus+, Horizon Europe (kërkim-zhvillim), fondet e kohezionit, PAC (Politika Bujqësore e Përbashkët)</li>
                      <li><strong>• Shpërndarja e fondeve:</strong> Në projekte, rajone, programe të ndryshme</li>
                      <li><strong>• Kontrolli i përdorimit:</strong> Audite për të parandaluar keqpërdorimin</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Role Shtesë të Rëndësishme:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>• Politika e Konkurrencës:</strong> Komisioni mund të ndëshkojë kompanitë që shkel rregullat e konkurrencës me gjoba masive (Google, Apple janë gjobitur me miliarda)</li>
                    <li><strong>• Përfaqësimi ndërkombëtar:</strong> Komisioni negocjon marrëveshje tregtare në emër të BE-së</li>
                    <li><strong>• Koordinimi në kriza:</strong> COVID-19, kriza energjetike - Komisioni koordinon përgjigjen europiane</li>
                  </ul>
                </div>
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
              <Zap className="text-blue-900" size={28} />
              <h3 className="text-2xl font-bold text-blue-900">Komisioni në Veprim: Raste Reale</h3>
            </div>
            {expandedSection === 'cases' ? <ChevronUp /> : <ChevronDown />}
          </button>
          {expandedSection === 'cases' && (
            <div className="p-6 bg-gray-50 border-t">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 1: Gjobat Masive për Google</h4>
                  <p className="text-gray-700 mb-4">
                    Midis 2017-2019, Komisioni Europian gjobiti Google me total <strong>8.2 miliardë euro</strong> për shkelje të rregullave të konkurrencës - gjobat më të mëdha në historinë e politikës së konkurrencës.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Tri rastet:</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li><strong>2017 - Google Shopping (2.4 mld €):</strong> Google favoroi shërbimin e vet të krahasimit të çmimeve</li>
                      <li><strong>2018 - Android (4.3 mld €):</strong> Google detyronte prodhuesit të para-instalojnë aplikacionet e saj</li>
                      <li><strong>2019 - AdSense (1.5 mld €):</strong> Praktika abuzive në reklamat online</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Ndikimi:</strong> Google u detyrua të ndryshojë praktikat e saj globale. Kjo tregoi se Komisioni ka fuqi reale për të sfiduar edhe gjigantët teknologjikë amerikanë!
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 2: Strategjia e Vaksinave COVID-19</h4>
                  <p className="text-gray-700 mb-4">
                    Në qershor 2020, në mes të pandemisë, Komisioni mori një hap të guximshëm: u kontraktua <strong>në emër të të gjitha vendeve të BE-së</strong> për blerjen e vaksinave. Kjo ishte e pazakontë - normalisht çdo vend blen vaksinat e veta.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Si funksionoi?</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li>• Komisioni negocioi me 6 kompani farmaçeutike (Pfizer, Moderna, AstraZeneca, etj.)</li>
                      <li>• Përfitoi nga fuqia blerëse e 450 milionë njerëzve</li>
                      <li>• Siguroi 4.2 miliardë doza vaksinash</li>
                      <li>• Shpërndarja u bë në baza të <strong>barabarta për person</strong> në çdo vend</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Rezultati:</strong> Vendet më të vogla si Malta dhe Qipro morën të njëjtat vaksina si Gjermania dhe Franca - diçka që nuk do të kishte ndodhur nëse çdo vend negocionte vetë. Por pati edhe kritika për vonesën fillestare dhe kontratat sekrete.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 3: Digital Services Act & Digital Markets Act (2022-2024)</h4>
                  <p className="text-gray-700 mb-4">
                    Komisioni propozoi dhe shtyu për miratimin e dy ligjeve revolucionare që <strong>rregullojnë platformate dixhitale</strong> si Facebook, Amazon, TikTok.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Çfarë bëjnë këto ligje?</p>
                    <ul className="text-sm space-y-2 text-gray-700">
                      <li><strong>DSA (Digital Services Act):</strong> Platformave u kërkohet të largojnë përmbajtje ilegale shpejt, transparencë në reklamat, mbrojtje e fëmijëve</li>
                      <li><strong>DMA (Digital Markets Act):</strong> "Gatekeeper"-ët (Google, Apple, Meta, Amazon, Microsoft) duhet të lejojnë konkurrencë - p.sh. app store alternative, interoperabilitet në mesazhe</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Zbatimi:</strong> Komisioni tashmë ka nisur hetimin e Apple për shkelje të DMA. Gjoba mund të arrijnë <strong>10% të xhiros globale</strong> - për Apple, kjo do të ishte ~40 miliardë euro!
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                  <h4 className="font-bold text-xl mb-3 text-blue-900">Rasti 4: Bllokimi i Shitjes Alstom-Siemens (2019)</h4>
                  <p className="text-gray-700 mb-4">
                    Në 2019, Komisioni <strong>bllokoi</strong> bashkimin e divioneve të trenave të Alstom (Francë) dhe Siemens (Gjermani), pavarësisht presionit të fortë politik nga Parisi dhe Berlini.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Pse?</strong> Komisioni argumentoi se bashkimi do të krijonte një monopol në tregun europian të trenave të shpejtë, duke dëmtuar konsumatorët. Qeveritë franceze dhe gjermane ishin të zemëruara, por Komisioni mbrojti <strong>pavarësinë e tij</strong>. Ky rast tregoi se Komisioni vërtet vepron për interesin europian, jo për qeveritë e fuqishme.
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
          Sa ke kuptuar rreth Komisionit Europian?
        </p>
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          {showQuiz ? 'Mbyll Kuizin' : 'Fillo Kuizin'}
        </button>
      </div>

      {showQuiz && <Quiz questions={quizQuestions} institutionName="Komisioni Europian" />}

      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-yellow-400">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Në Përfundim...</h3>
        <p className="text-gray-700 leading-relaxed">
          Komisioni Europian është <strong>motori ekzekutiv</strong> që bën BE-në të funksionojë çdo ditë. Pa të, nuk do të kishte ligje të reja, nuk do të zbatoheshin rregullat, dhe BE-ja do të ishte thjesht një forum diskutimi. Komisioni ka treguar se mund të jetë i <strong>pavarur, i guximshëm dhe efektiv</strong> - nga sfidimi i Google-it te menaxhimi i pandemisë. Kjo pavarësi është çmimi që e bën BE-në unike!
        </p>
      </div>
    </div>
  );
}
