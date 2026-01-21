import { useState } from 'react';
import { Heart, Users, BookOpen, Lightbulb, ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react';

interface FinalSectionProps {
  onNext?: () => void;
  onPrev: () => void;
}

export default function FinalSection({ }: FinalSectionProps) {
  const [completedActions, setCompletedActions] = useState<number[]>([]);

  const toggleAction = (index: number) => {
    if (completedActions.includes(index)) {
      setCompletedActions(completedActions.filter(i => i !== index));
    } else {
      setCompletedActions([...completedActions, index]);
    }
  };

  const engagementActions = [
    {
      title: 'Votoni në Zgjedhjet Europiane',
      description: 'Çdo 5 vjet keni mundësinë të zgjidhni deputetët tuaj në Parlamentin Europian. Zgjedhjet e ardhshme janë në qershor 2029.',
      icon: '🗳️',
      difficulty: 'E Lehtë'
    },
    {
      title: 'Nënshkruani Iniciativa Qytetare Europiane',
      description: 'Nëse 1 milion qytetarë nga të paktën 7 vende nënshkruajnë një iniciativë, Komisioni duhet ta shqyrtojë atë.',
      icon: '✍️',
      difficulty: 'E Lehtë'
    },
    {
      title: 'Kontaktoni Deputetin Tuaj Europian',
      description: 'Çdo qytetar ka deputetë që e përfaqësojnë në Strasburg. Shkruajuni për çështjet që ju shqetësojnë.',
      icon: '📧',
      difficulty: 'E Lehtë'
    },
    {
      title: 'Ndiqni Debatet në Parlament',
      description: 'Sesionet plenare janë të transmetuara live online. Shikoni si deputetët debatojnë ligjet që ju prekin.',
      icon: '📺',
      difficulty: 'E Mesme'
    },
    {
      title: 'Aplikoni për Stage në Institucione',
      description: 'Komisioni, Parlamenti dhe institucionet e tjera ofrojnë stage 5-mujore për të rinjtë.',
      icon: '💼',
      difficulty: 'E Mesme'
    },
    {
      title: 'Përdorni Programet e BE-së',
      description: 'Erasmus+, DiscoverEU, programet e punës dhe trajnimit janë të hapura për ju.',
      icon: '🎓',
      difficulty: 'E Mesme'
    }
  ];

  const resources = [
    {
      category: 'Portale Zyrtare',
      icon: '🌐',
      color: 'blue',
      items: [
        { name: 'europa.eu', description: 'Portali zyrtar i BE-së', url: 'https://europa.eu' },
        { name: 'europarl.europa.eu', description: 'Parlamenti Europian', url: 'https://europarl.europa.eu' },
        { name: 'consilium.europa.eu', description: 'Këshilli Europian dhe Këshilli i BE-së', url: 'https://consilium.europa.eu' },
        { name: 'ec.europa.eu', description: 'Komisioni Europian', url: 'https://ec.europa.eu' }
      ]
    },
    {
      category: 'Për të Rinjtë',
      icon: '🎓',
      color: 'yellow',
      items: [
        { name: 'Erasmus+', description: 'Studim, trajnim dhe vullnetarizëm në Europë', url: 'https://erasmus-plus.ec.europa.eu' },
        { name: 'European Youth Portal', description: 'Mundësi për të rinjtë', url: 'https://youth.europa.eu' },
        { name: 'DiscoverEU', description: 'Udhëto falas në Europë me tren', url: 'https://youth.europa.eu/discovereu' }
      ]
    },
    {
      category: 'Angazhim Qytetar',
      icon: '✊',
      color: 'green',
      items: [
        { name: 'Iniciativa Qytetare', description: 'Propozoni ligje të reja', url: 'https://citizens-initiative.europa.eu' },
        { name: 'Peticionet', description: 'Drejtohuni Parlamentit me ankesa', url: 'https://petiport.secure.europarl.europa.eu' },
        { name: 'Gjeni Deputetin Tuaj', description: 'Kontaktoni përfaqësuesit tuaj', url: 'https://www.europarl.europa.eu/meps' }
      ]
    },
    {
      category: 'Mësoni Më Shumë',
      icon: '📚',
      color: 'purple',
      items: [
        { name: 'EU Law', description: 'Legjislacioni i plotë i BE-së', url: 'https://eur-lex.europa.eu' },
        { name: 'Learning Corner', description: 'Materiale edukative për të gjitha moshat', url: 'https://learning-corner.learning.europa.eu' },
        { name: 'EU Monitor', description: 'Ndjekja e proceseve legjislative', url: 'https://www.eumonitor.eu' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-600 to-blue-800',
      yellow: 'from-yellow-400 to-yellow-600',
      green: 'from-green-600 to-green-800',
      purple: 'from-purple-600 to-purple-800'
    };
    return colors[color];
  };

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
          <Heart className="text-white" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Ju Jeni Pjesë e Kësaj Historie!</h1>
        <p className="text-xl text-gray-600">BE-ja nuk është vetëm institucione - është 450 milionë qytetarë</p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Çfarë Kemi Mësuar?</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-800 rounded-xl p-6">
            <div className="text-4xl mb-3">🏛️</div>
            <h3 className="font-bold text-xl mb-2">Këshilli Europian</h3>
            <p className="text-blue-100 text-sm">
              Orientimi strategjik. Krerët e shteteve vendosin për të ardhmen e BE-së.
            </p>
          </div>

          <div className="bg-yellow-500 text-blue-900 rounded-xl p-6">
            <div className="text-4xl mb-3">🗳️</div>
            <h3 className="font-bold text-xl mb-2">Parlamenti Europian</h3>
            <p className="text-sm">
              Zëri i qytetarëve. I vetmi organ i zgjedhur drejtpërdrejt që miraton ligje.
            </p>
          </div>

          <div className="bg-blue-800 rounded-xl p-6">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold text-xl mb-2">Komisioni Europian</h3>
            <p className="text-blue-100 text-sm">
              Motori ekzekutiv. Propozon ligjet dhe siguron zbatimin e tyre.
            </p>
          </div>
        </div>

        <div className="bg-blue-800 rounded-xl p-6">
          <h3 className="font-bold text-2xl mb-4">Trianguli Institucional: Pse Tre?</h3>
          <p className="text-blue-100 mb-4">
            Shumica e sistemeve politike kanë <strong>ndarje të pushteteve</strong> (legjislativ, ekzekutiv, gjyqësor). BE-ja ka një strukturë unike me tre institucione që <strong>balancojnë interesat e ndryshme</strong>:
          </p>
          <ul className="space-y-3 text-blue-100">
            <li className="flex gap-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span><strong>Këshilli Europian:</strong> Përfaqëson interesat <strong>kombëtare strategjike</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span><strong>Parlamenti:</strong> Përfaqëson <strong>qytetarët individualë</strong> përmes votës direkte</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span><strong>Komisioni:</strong> Përfaqëson <strong>interesin e përgjithshëm europian</strong>, i pavarur nga presionet kombëtare</span>
            </li>
          </ul>
          <p className="text-blue-100 mt-4 text-sm">
            Kjo strukturë krijon një <strong>demokraci shumënivelore</strong> që është unike në botë - jo plotësisht federale, jo thjesht ndërqeveritare, por një <strong>hibrid i sofistikuar</strong> që pasqyron diversitetin e Europës.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          <Users size={40} />
          Si të Angazhoheni në BE
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Demokracia europiane funksionon vetëm nëse qytetarët marrin pjesë aktive. Këtu janë disa mënyra konkrete se si mund të bëheni pjesë e procesit:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {engagementActions.map((action, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                completedActions.includes(index) ? 'border-green-500 bg-green-50' : 'border-blue-900'
              } transition`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{action.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">{action.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{action.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      action.difficulty === 'E Lehtë' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {action.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction(index)}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                    completedActions.includes(index)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  <CheckCircle2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {completedActions.length > 0 && (
          <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
            <p className="text-green-900 font-semibold">
              Urime! Keni shënuar {completedActions.length} veprim{completedActions.length > 1 ? 'e' : ''} si të realizuar. Vazhdoni këtë angazhim!
            </p>
          </div>
        )}
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          <BookOpen size={40} />
          Resurse për të Mësuar Më Shumë
        </h2>

        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${getColorClasses(resource.color)} text-white p-6`}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{resource.icon}</span>
                  <h3 className="text-2xl font-bold">{resource.category}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {resource.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition group"
                    >
                      <ExternalLink className="text-blue-600 flex-shrink-0 group-hover:text-blue-800 transition" size={20} />
                      <div>
                        <p className="font-semibold text-blue-900 group-hover:text-blue-700 transition">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          <Lightbulb size={40} />
          Vizioni për të Ardhmen
        </h2>

        <div className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 rounded-2xl p-8 text-blue-900 shadow-xl">
          <h3 className="text-3xl font-bold mb-6">BE-ja e 2030-ës dhe Përtej</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white bg-opacity-50 backdrop-blur rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">🌱 Neutraliteti Klimatik</h4>
              <p className="text-sm">
                Deri në 2050, BE-ja synon të bëhet kontinenti i parë klimatikisht neutral. Kjo do të thotë zero emetimi neto të gazrave serrë, transformim i plotë i ekonomisë.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 backdrop-blur rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">🤖 Lidershipi Dixhital</h4>
              <p className="text-sm">
                BE-ja po vendos standardet globale për AI, privatësinë e të dhënave, dhe rregullimin e platformave dixhitale. Modeli "Brussels Effect" vazhdon.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 backdrop-blur rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">🛡️ Autonomia Strategjike</h4>
              <p className="text-sm">
                Pas varësisë nga gazrat rusë dhe tensioneve me SHBA-në, BE-ja po ndërton kapacitete të veta në mbrojtje, energji, dhe teknologji kritike.
              </p>
            </div>

            <div className="bg-white bg-opacity-50 backdrop-blur rounded-xl p-6">
              <h4 className="font-bold text-xl mb-3">🌍 Zgjerimi dhe Fqinjësia</h4>
              <p className="text-sm">
                Ballkani Perëndimor, Ukraina, Moldavia - zgjerimi i BE-së vazhdon. Por me sfida të reja: si të integrohen vende me historia dhe ekonomi të ndryshme?
              </p>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-xl p-6">
            <h4 className="font-bold text-xl mb-3">Sfidat e Kohës Tonë:</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>• <strong>Populizmi dhe euroskepticizmi:</strong> Si të rifitojmë besimin e qytetarëve?</li>
              <li>• <strong>Rivalizimi gjeopolitik:</strong> BE-ja midis SHBA-së dhe Kinës</li>
              <li>• <strong>Migrimi:</strong> Solidariteti kundër interesave kombëtare</li>
              <li>• <strong>Demokracia dhe shteti i së drejtës:</strong> Tensionet me Hungarinë dhe Poloninë</li>
              <li>• <strong>Boshllëku demokratik:</strong> Si të bëjmë BE-në më të afërt me qytetarët?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <MessageCircle size={48} />
          <h2 className="text-3xl font-bold">Fjalët e Fundit</h2>
        </div>

        <div className="space-y-4 text-lg text-blue-100">
          <p>
            Institucionet e Bashkimit Europian nuk janë të përsosura. Ato janë <strong>komplekse, nganjëherë të ngadalta, dhe shpesh të vështira për t'u kuptuar</strong>. Por ato përfaqësojnë diçka të jashtëzakonshme: <strong>27 vende</strong> me histori, gjuhë dhe kultura të ndryshme që kanë rënë dakord të <strong>ndajnë sovranitetin</strong> për të mirën e përbashkët.
          </p>

          <p>
            Për shekuj, Europa ishte kontinenti i luftërave. Sot, lufta midis vendeve anëtare të BE-së është <strong>e paimagjinueshme</strong>. Kjo nuk është vetëm për shkak të traktateve - është sepse institucione si Parlamenti, Komisioni dhe Këshilli kanë krijuar një <strong>hapësirë dialogu, kompromisi dhe bashkëpunimi</strong>.
          </p>

          <p>
            Si qytetarë, ne kemi <strong>të drejtën dhe përgjegjësinë</strong> të marrim pjesë në këtë projekt. Votoni, angazhohuni, kritikoni kur është e nevojshme, por mos harroni kurrë se çfarë përfaqëson BE-ja: <strong>paqe, demokraci, dhe bashkëpunim në një botë gjithnjë e më të ndarë</strong>.
          </p>

          <div className="bg-blue-800 rounded-xl p-6 mt-6">
            <p className="text-xl font-semibold text-center text-yellow-400">
              "Bashkuar në larmi" - Deviza e Bashkimit Europian
            </p>
            <p className="text-center text-sm text-blue-200 mt-2">
              In varietate concordia
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Faleminderit që morët pjesë në këtë udhëtim nëpër institucionet e BE-së!
        </p>
      </div>
    </div>
  );
}
