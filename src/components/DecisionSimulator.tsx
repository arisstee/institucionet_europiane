import { useState } from 'react';
import { Play, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface DecisionSimulatorProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function DecisionSimulator({ }: DecisionSimulatorProps) {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const proposals = [
    {
      id: 'environment',
      title: 'Ligj për Mbrojt jen e Mjedisit Detar',
      description: 'Një propozim për të reduktuar ndotjen plastike në detet e Europës me 80% deri në 2030',
      icon: '🌊',
      complexity: 'E lartë'
    },
    {
      id: 'digital',
      title: 'Rregullore për Inteligjencën Artificiale',
      description: 'Krijimi i rregullave të para në botë për përdorimin e sigurt të AI në sektorë kritikë',
      icon: '🤖',
      complexity: 'Shumë e lartë'
    },
    {
      id: 'health',
      title: 'Direktiva për Shëndetin Mendor',
      description: 'Standardet minimale për shërbimet e shëndetit mendor në të gjitha vendet e BE-së',
      icon: '🧠',
      complexity: 'E mesme'
    }
  ];

  const steps = [
    {
      institution: 'Komisioni Europian',
      color: 'yellow',
      icon: '💼',
      title: 'Faza 1: Propozimi Fillestar',
      description: 'Komisioni Europian harton propozimin e ligjit',
      details: [
        'Analizë e hollësishme e problemit dhe nevojës për veprim',
        'Konsultime me ekspertë, organizata të shoqërisë civile dhe qeveritë',
        'Vlerësim i ndikimit: sa do të kushtojë dhe çfarë përfitimesh do të sjellë',
        'Hartimi i tekstit ligjor nga juristë të specializuar',
        'Votim në Kolegjin e Komisionerëve (të gjithë 27 votojnë)',
        'Publikimi zyrtar dhe dërgimi në Parlament dhe Këshilli'
      ],
      duration: '6-12 muaj',
      participants: '27 Komisionerë + staf i ekspertëve'
    },
    {
      institution: 'Parlamenti Europian',
      color: 'blue',
      icon: '🗳️',
      title: 'Faza 2: Shqyrtimi Parlamentar',
      description: 'Parlamenti debaton dhe propozon ndryshime',
      details: [
        'Komisioni përgjegjës (p.sh. ENVI për mjedisin) emëron një Relator',
        'Relatorul harton një raport me amendamente të propozuara',
        'Dëgjime me ekspertë, përfaqësues të industrisë, OJQ-ve',
        'Diskutime intensive në komision - çdo deputet mund të propozojë amendamente',
        'Votimi në komision për raportin dhe amendamentet',
        'Debat i plotë në sesionin plenar (720 deputetë)',
        'Votim final në Parlament për pozicionin e parë'
      ],
      duration: '8-12 muaj',
      participants: '720 Deputetë, fokusi në komisionin relevant'
    },
    {
      institution: 'Këshilli i BE-së',
      color: 'green',
      icon: '🏛️',
      title: 'Faza 3: Shqyrtimi në Këshilli',
      description: 'Ministrat e 27 vendeve negociojnë pozicionin e tyre',
      details: [
        'Grup pune i ekspertëve kombëtarë shqyrton propozimin në detaje',
        'COREPER (ambasadorët e përhershëm) diskutojnë çështjet politike',
        'Ministrat përkatës (p.sh. Mjedisi) mblidhen në Këshillin temati',
        'Negociata intensive - çdo vend ka interesat e veta',
        'Kërkohet shumicë e kualifikuar (55% e vendeve, 65% e popullsisë)',
        'Miratimi i "pozicionit të përgjithshëm" të Këshillit'
      ],
      duration: '6-18 muaj',
      participants: 'Ministrat e 27 vendeve + negociatorë teknikë'
    },
    {
      institution: 'Trialogu',
      color: 'purple',
      icon: '🤝',
      title: 'Faza 4: Negociatat Trianshtë',
      description: 'Komisioni, Parlamenti dhe Këshilli negociojnë kompromisin',
      details: [
        'Takime konfidenciale midis përfaqësuesve të tre institucioneve',
        'Komisioni vepron si ndërmjetës dhe ofron zgjidhje teknike',
        'Parlamenti përfaqësohet nga Relatoru dhe negociatorët e grupit',
        'Këshilli përfaqësohet nga presidenca rrotulluese',
        'Çdo amendament diskutohet detaj për detaj',
        'Mund të ketë 5-10+ raunde negociatash, shpesh deri vonë në mbrëmje',
        'Arrihet një tekst kompromis që të gjithë e pranojnë'
      ],
      duration: '3-12 muaj',
      participants: 'Ekipe të vogla negociuese nga të tre institucionet'
    },
    {
      institution: 'Miratimi Final',
      color: 'green',
      icon: '✅',
      title: 'Faza 5: Votimi Përfundimtar',
      description: 'Parlamenti dhe Këshilli miratojnë tekstin e dakorduar',
      details: [
        'Teksti i kompromisit shqyrtohet nga juristët-gjuhësorë',
        'Përkthimi në 24 gjuhë zyrtare të BE-së',
        'Parlamenti voton në sesion plenar - nevojitet shumicë e thjeshtë',
        'Këshilli voton - zakonisht me shumicë të kualifikuar',
        'Nënshkrimi nga Presidenti i Parlamentit dhe i Këshillit',
        'Publikimi në Gazetën Zyrtare të BE-së',
        'Ligji hyn në fuqi pas 20 ditëve (ose në datën e specifikuar)'
      ],
      duration: '2-3 muaj',
      participants: 'Të gjitha institucionet'
    },
    {
      institution: 'Zbatimi',
      color: 'orange',
      icon: '⚙️',
      title: 'Faza 6: Zbatimi Kombëtar',
      description: 'Vendet anëtare zbatojnë ligjin në sistemet e tyre',
      details: [
        'Nëse është Rregullore: zbato het direkt në të gjitha vendet',
        'Nëse është Direktivë: çdo vend duhet ta transpozojë në ligjin kombëtar',
        'Vendet kanë një afat kohor (zakonisht 18-24 muaj)',
        'Komisioni monitoron zbatimin në çdo vend',
        'Qytetarët dhe bizneset mund të ankohen nëse ligji nuk respektohet',
        'Komisioni mund të nisë procedura shkelj eje nëse një vend vonohet',
        'Gjykata e BE-së mund të vendosë gjoba për moszbatim'
      ],
      duration: '1-2 vjet',
      participants: 'Parlamentet dhe qeveritë kombëtare'
    }
  ];

  const startSimulation = (proposalId: string) => {
    setSelectedProposal(proposalId);
    setIsSimulating(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setIsSimulating(false);
    setSelectedProposal(null);
    setCurrentStep(0);
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      yellow: { bg: 'bg-yellow-400', text: 'text-yellow-900', border: 'border-yellow-400' },
      blue: { bg: 'bg-blue-600', text: 'text-blue-900', border: 'border-blue-600' },
      green: { bg: 'bg-green-600', text: 'text-green-900', border: 'border-green-600' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-900', border: 'border-purple-600' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-900', border: 'border-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  const selectedProposalData = proposals.find(p => p.id === selectedProposal);

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4">
          <Play className="text-white" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Simulatori i Vendimmarrjes</h1>
        <p className="text-xl text-gray-600">Zbulo hapin pas hapi si miratohet një ligj në BE</p>
      </div>

      {!isSimulating ? (
        <div>
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Si Funksionon?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Miratimi i një ligji në BE është një proces kompleks që përfshin të tre institucionet kryesore dhe mund të marrë <strong>2-4 vjet</strong>. Ky simulator ju tregon çdo fazë të procesit, nga propozimi fillestar i Komisionit deri në zbatimin në vendet anëtare.
            </p>
            <div className="bg-blue-800 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">Procedura e Bashkëvendimit</h3>
              <p className="text-blue-100 text-sm">
                Mënyra më e zakonshme e miratimit të ligjeve në BE quhet "procedura e zakonshme legjislative" ose "bashkëvendimi". Në këtë procedurë, Parlamenti dhe Këshilli kanë pushtet të barabartë - të dy duhet të bien dakord që ligji të miratohet.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Zgjidhni një Propozim për të Simuluar:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer overflow-hidden"
                  onClick={() => startSimulation(proposal.id)}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 text-center">
                    <div className="text-6xl mb-3">{proposal.icon}</div>
                    <h3 className="text-xl font-bold">{proposal.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{proposal.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Kompleksiteti:</span>
                      <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {proposal.complexity}
                      </span>
                    </div>
                    <button className="w-full mt-4 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2">
                      <Play size={20} />
                      Fillo Simulimin
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <AlertCircle />
              E dini që...?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Një ligj mesatar i BE-së merr <strong>2-3 vjet</strong> për t'u miratuar</li>
              <li>• GDPR-ja (ligji i të dhënave personale) mori <strong>4 vjet</strong> për t'u miratuar plotësisht</li>
              <li>• Janë propozuar <strong>rreth 100-150 ligje të reja</strong> çdo vit nga Komisioni</li>
              <li>• Vetëm <strong>~30%</strong> e propozimeve fillestare kalojnë pa ndryshime të mëdha</li>
              <li>• Tekstet ligjore përkthehen në <strong>24 gjuhë zyrtare</strong> - një punë e jashtëzakonshme!</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {selectedProposalData?.icon} {selectedProposalData?.title}
                </h2>
                <p className="text-gray-600">{selectedProposalData?.description}</p>
              </div>
              <button
                onClick={reset}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Kthehu
              </button>
            </div>

            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex flex-col items-center ${
                      index <= currentStep ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                        index === currentStep
                          ? getColorClasses(step.color).bg + ' ring-4 ring-blue-200'
                          : index < currentStep
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      {index < currentStep ? <CheckCircle2 className="text-white" /> : step.icon}
                    </div>
                    <span className="text-xs text-center mt-2 max-w-20 font-semibold">
                      {step.institution}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 w-8 md:w-16 mx-1 ${
                        index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className={`border-l-4 ${getColorClasses(steps[currentStep].color).border} pl-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{steps[currentStep].icon}</span>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900">{steps[currentStep].title}</h3>
                  <p className="text-xl text-gray-600 mt-1">{steps[currentStep].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Kohëzgjatja mesatare:</p>
                  <p className="text-lg font-bold text-blue-900">{steps[currentStep].duration}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Pjesëmarrësit:</p>
                  <p className="text-lg font-bold text-blue-900">{steps[currentStep].participants}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-xl text-blue-900 mb-4">Çfarë Ndodh në Këtë Fazë?</h4>
                <ul className="space-y-3">
                  {steps[currentStep].details.map((detail, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-blue-600 font-bold flex-shrink-0">{index + 1}.</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentStep === 3 && (
                <div className="mt-6 bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-xl text-purple-900 mb-3">Pse Janë Trialogët Kontroverzialë?</h4>
                  <p className="text-gray-700">
                    Trialogët kritikon për <strong>mungesë transparence</strong>. Negociatat janë konfidenciale, dhe qytetarët nuk mund të shohin çfarë kompromisesh bëhen. Por mbështetësit argumentojnë se konfidencialiteti lejon negociatorët të jenë më fleksibël dhe të arrijnë marrëveshje më shpejt.
                  </p>
                </div>
              )}

              {currentStep === 5 && (
                <div className="mt-6 bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
                  <h4 className="font-bold text-xl text-orange-900 mb-3">Çfarë Ndodh Nëse një Vend Nuk Zbaton?</h4>
                  <p className="text-gray-700 mb-3">
                    Komisioni mund të nisë një <strong>procedurë shkelje</strong>:
                  </p>
                  <ol className="text-sm space-y-1 ml-4 text-gray-700">
                    <li>1. Letër paralajmëruese</li>
                    <li>2. Mendim i arsyetuar (2 muaj për të korrigjuar)</li>
                    <li>3. Referim në Gjykatën e BE-së</li>
                    <li>4. Gjobë të mundshme (dhjetëra miliona euro)</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2"
              >
                ← Faza Paraprake
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="flex-1 bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
              >
                Faza Tjetër
                <ArrowRight />
              </button>
            ) : (
              <button
                onClick={reset}
                className="flex-1 bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <CheckCircle2 />
                Simulimi Përfundoi - Provo Një Tjetër
              </button>
            )}
          </div>
        </div>
      )}

      <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Mësime Kyçe nga Procesi</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-xl mb-2">✓ Demokracia Merr Kohë</h4>
            <p className="text-blue-100 text-sm">
              Procesi mund të duket i ngadaltë, por kjo siguron që të gjitha zërat të dëgjohen dhe vendimet të jenë të mirëmenduara.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">✓ Balanca e Pushteteve</h4>
            <p className="text-blue-100 text-sm">
              Asnjë institucion nuk mund të vendosë vetëm. Kjo parandalon abuzimin e pushtetit.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">✓ Përfaqësimi i Dyfishtë</h4>
            <p className="text-blue-100 text-sm">
              Parlamenti përfaqëson qytetarët, Këshilli përfaqëson vendet - që të dyja perspektivat janë të rëndësishme.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">✓ Kompromisi është Thelbësor</h4>
            <p className="text-blue-100 text-sm">
              Me 27 vende dhe qindra deputetë, kompromisi është i pashmangshëm. Askush nuk merr 100% të asaj që do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
