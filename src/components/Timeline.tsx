import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function Timeline({ }: TimelineProps) {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events = [
    {
      year: '1951',
      title: 'Traktati i Parisit',
      icon: '🏭',
      category: 'Fillimi',
      description: 'Krijimi i Komunitetit Europian të Qymyrit dhe Çelikut (KECQ)',
      details: [
        '6 vende themelues: Franca, Gjermania Perëndimore, Italia, Belgjika, Holanda, Luksemburgu',
        'Qëllimi: Të parandalohet lufta duke integruar industritë e qymyrit dhe çelikut',
        'Jean Monnet bëhet Presidenti i parë i Autoritetit të Lartë',
        'Ky ishte hapi i parë drejt integrimit europian',
        'Ideja bazë: Vendet që ndajnë resurset strategjike nuk luftojnë njëra-tjetrën'
      ],
      impact: 'Krijoi modelin e integrimit suprakombëtar që do të zgjerohej më vonë'
    },
    {
      year: '1957',
      title: 'Traktatet e Romës',
      icon: '📜',
      category: 'Zgjerim',
      description: 'Themelimi i Komunitetit Ekonomik Europian (KEE) dhe Euratom',
      details: [
        'U krijua Tregu i Përbashkët - lëvizje e lirë e mallrave, shërbimeve, kapitalit dhe njerëzve',
        'Komisioni Europian zëvendësoi Autoritetin e Lartë me mandat më të gjerë',
        'Qëllimi: Integrimi ekonomik si rrugë drejt paqes dhe prosperitetit',
        'U vendos tarifa e përbashkët doganore',
        'Krijimi i Politikës së Përbashkët Bujqësore'
      ],
      impact: 'Transformoi BE-në nga një bashkëpunim sektorial në një projekt ekonomik gjithëpërfshirës'
    },
    {
      year: '1974',
      title: 'Krijimi i Këshillit Europian',
      icon: '👥',
      category: 'Institucione',
      description: 'Krerët e shteteve fillojnë të mblidhen formalisht',
      details: [
        'Samiti i Parisit vendos që krerët e shteteve të takoheshin tre herë në vit',
        'Ishte përgjigje ndaj krizave ekonomike të viteve 70',
        'Fillimisht ishte një organ informal',
        'Qëllimi: Të jepte drejtim politik strategjik për Komunitetin',
        'U formalizua plotësisht me Traktatin e Maastricht-it në 1992'
      ],
      impact: 'Krijoi nivelin më të lartë të vendimmarrjes politike në BE'
    },
    {
      year: '1979',
      title: 'Zgjedhjet e Para Direkte të PE',
      icon: '🗳️',
      category: 'Demokracia',
      description: 'Qytetarët votojnë për herë të parë drejtpërdrejt për Parlamentin Europian',
      details: [
        '410 deputetë u zgjodhën nga 9 vende anëtare',
        'Pjesëmarrja ishte 62% - rekord që nuk është thyer që atëherë',
        'Simone Veil (Francë) u zgjodh Presidente e parë e zgjedhur',
        'Deri atëherë, deputetët emëroheshin nga parlamentet kombëtare',
        'Ishte një hap i madh drejt legjitimitetit demokratik'
      ],
      impact: 'Parlamenti fitoi autoritet moral për të kërkuar më shumë fuqi'
    },
    {
      year: '1986',
      title: 'Akti i Vetëm Europian',
      icon: '🔓',
      category: 'Integrimi',
      description: 'Krijimi i Tregut të Brendshëm të vërtetë',
      details: [
        'Objektivi: Eleminimi i të gjitha pengesave për tregti deri në 1992',
        'U krijuan 4 liritë themelore: mallra, shërbime, kapital, njerëz',
        'Parlamenti fitoi më shumë fuqi përmes "procedurës së bashkëpunimit"',
        'Zgjerimi i votimit me shumicë të kualifikuar në Këshilli',
        '280 direktiva u miratuan për harmonizimin e rregullave'
      ],
      impact: 'Krijoi bazën për ekonominë më të madhe të integruar në botë'
    },
    {
      year: '1992',
      title: 'Traktati i Maastricht-it',
      icon: '🇪🇺',
      category: 'Unioni',
      description: 'Lindja e "Bashkimit Europian" dhe planifikimi i Euros',
      details: [
        'Komuniteti Ekonomik Europian u bë "Bashkimi Europian"',
        'U krijua shtyllë e re: Politika e Jashtme dhe e Sigurisë së Përbashkët',
        'U vendos krijimi i Euros - monedha e përbashkët',
        'Futja e "qytetarisë europiane"',
        'Parlamenti fitoi të drejtën e "bashkëvendimit" në shumë fusha',
        'Këshilli Europian u formalizua si institucion'
      ],
      impact: 'BE-ja u shndërrua nga një bashkim ekonomik në një union politik'
    },
    {
      year: '1999',
      title: 'Futja e Euros',
      icon: '💶',
      category: 'Monedha',
      description: 'Lëshimi i monedhas unike europiane',
      details: [
        '11 vende adoptuan Euron si monedhe elektronike në janar 1999',
        'Kartëmonedhat dhe monedhat fizike u futën në janar 2002',
        'Banka Qendrore Europiane filloi punën në Frankfurt',
        'Kriteri i konvergjencës: inflacion i ulët, borxh publik < 60% PBB, deficit < 3%',
        'Sot 20 vende përdorin Euron',
        'Është monedha e dytë më e përdorur në botë pas dollarit'
      ],
      impact: 'Krijoi një zonë monetare me 340 milionë njerëz'
    },
    {
      year: '2004',
      title: 'Zgjerimi i Madh',
      icon: '🌍',
      category: 'Zgjerimi',
      description: '10 vende të reja anëtare - Kryesisht nga Europa Lindore',
      details: [
        'Polonia, Republika Çeke, Hungaria, Sllovakia, Sllovenia, Estonia, Letonia, Lituania, Malta, Qipro',
        'Nga 15 në 25 vende anëtare - zgjerimi më i madh në histori',
        'Bashkimi i Europës pas Luftës së Ftohtë',
        'Procesi i anëtarësimit kërkoi reforma të thella në vendet kandidate',
        'Fondet strukturore u rritën dramatikisht për të ndihmuar rajonet e reja'
      ],
      impact: 'Bashkoi Europën Perëndimore dhe Lindore për herë të parë që nga Lufta e Ftohtë'
    },
    {
      year: '2009',
      title: 'Traktati i Lisbonës',
      icon: '⚖️',
      category: 'Reforma',
      description: 'Reforma institucionale dhe më shumë fuqi për Parlamentin',
      details: [
        'Krijimi i pozicionit të Presidentit të përhershëm të Këshillit Europian',
        'Krijimi i Përfaqësuesit të Lartë për Politikën e Jashtme',
        'Parlamenti u bë bashkë-legjislator i plotë me Këshillin',
        'Kartë e të Drejtave Themelore u bë ligjërisht e detyrueshme',
        'Sistemi i ri i votimit: shumicë e kualifikuar më e thjeshtë',
        'Vendet fituan të drejtën të tërhiqen nga BE (Brexit e përdori këtë)'
      ],
      impact: 'Bëri BE-në më demokratike dhe më efikase'
    },
    {
      year: '2012',
      title: 'Kriza e Euros dhe ESM',
      icon: '💰',
      category: 'Kriza',
      description: 'BE-ja përgjigjet ndaj krizës së borxhit sovran',
      details: [
        'Greqia, Irlandais, Portugalia, Qipro kërkojnë ndihmë financiare',
        'Krijimi i Mekanizmit Europian të Stabilitetit (ESM) - fond shpëtimi 500 mld €',
        'Banka Qendrore Europiane ndërhyn masivisht në tregjet e borxhit',
        'Programet e "shpëtimit" vijnë me kushte strikte reformash',
        'Debatat e ashpra mbi solidaritetin europian',
        'Mario Draghi (BQE): "Do të bëjmë çfarëdo që duhet për të shpëtuar Euron"'
      ],
      impact: 'Provoi se BE-ja mund të menaxhojë kriza ekzistenciale, por me kosto politike'
    },
    {
      year: '2016',
      title: 'Referendumi i Brexit-it',
      icon: '🇬🇧',
      category: 'Kriza',
      description: 'Britania e Madhe voton për të dalë nga BE',
      details: [
        '52% votojnë për largim, 48% për qëndrim',
        'Ishte hera e parë që një vend vendos të largohet nga BE',
        'Negociata komplekse që zgjatën 4 vjet (2016-2020)',
        'Brexit realizohet më 31 janar 2020',
        'Ndikimi: probleme tregtare, migrimi, Irlanda e Veriut',
        'BE humbi vendin e dytë më të madh ekonomik'
      ],
      impact: 'Tronditje për projektin europian, por BE-ja mbeti e bashkuar'
    },
    {
      year: '2020',
      title: 'NextGenerationEU - Reagimi ndaj COVID',
      icon: '💉',
      category: 'Solidariteti',
      description: 'Paketa historike e rimëkëmbjes 1.8 trilion euro',
      details: [
        'Përgjigje ndaj krizës ekonomike të shkaktuar nga pandemia',
        'Për herë të parë, BE-ja merr hua të përbashkët',
        '750 miliardë € për NextGenerationEU + 1.1 trilion € buxheti 2021-2027',
        '390 miliardë në grante, 360 miliardë në hua',
        'Kushtet: reforma strukturore dhe investime të gjelbërta/dixhitale',
        'Këshilli Europian negocioi 5 ditë pa ndërprerje'
      ],
      impact: 'Moment historik i solidaritetit - vendet e pasura ndihmojnë ato më të prekurat'
    },
    {
      year: '2022',
      title: 'Ukraina Statusi i Kandidatit',
      icon: '🇺🇦',
      category: 'Zgjerimi',
      description: 'Përgjigje e shpejtë ndaj agresionit rus',
      details: [
        'Ukraina dhe Moldavia marrin statusin e vendit kandidat në qershor 2022',
        'Procesi që normalisht merr vite, u realizua në 4 muaj',
        'Ishte një sinjal i fortë gjeopolitik për mbështetjen e Ukrainës',
        'Këshilli Europian votoi unanimisht',
        'Sank sione të pashembullta ndaj Rusisë (11 paketa sanksionesh)',
        'BE-ja furnizoi ndihmë ushtarake dhe humanitare masive'
      ],
      impact: 'BE-ja demonstroi unitet në një moment kritik historik'
    },
    {
      year: '2024',
      title: 'AI Act & Digital Markets Act',
      icon: '🤖',
      category: 'Rregullimi',
      description: 'Ligjet e para globale për AI dhe platformave dixhitale',
      details: [
        'AI Act: Rregullimi i parë gjithëpërfshirës i AI në botë',
        'Klasifikimi i sistemeve AI sipas riskut: minimal, i lartë, i papranueshëm',
        'Digital Markets Act detyron "gatekeeper"-ët të hapin platformat',
        'Apple, Google, Meta, Amazon, Microsoft duhet të ndryshojnë praktikat',
        'Gjoba deri në 10% të xhiros globale për shkelje',
        'BE-ja vendos standardet që bota do të ndjekë'
      ],
      impact: 'BE-ja po bëhet "supergalia rregullatore" që ndikon praktika globale'
    }
  ];

  const categories = [
    { name: 'Të gjitha', color: 'all' },
    { name: 'Fillimi', color: 'blue' },
    { name: 'Institucione', color: 'yellow' },
    { name: 'Demokracia', color: 'green' },
    { name: 'Integrimi', color: 'purple' },
    { name: 'Kriza', color: 'red' },
    { name: 'Zgjerimi', color: 'orange' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Të gjitha');

  const filteredEvents = selectedCategory === 'Të gjitha'
    ? events
    : events.filter(e => e.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Fillimi': 'bg-blue-500',
      'Zgjerim': 'bg-purple-500',
      'Institucione': 'bg-yellow-500',
      'Demokracia': 'bg-green-500',
      'Integrimi': 'bg-indigo-500',
      'Unioni': 'bg-blue-600',
      'Monedha': 'bg-yellow-600',
      'Zgjerimi': 'bg-orange-500',
      'Reforma': 'bg-teal-500',
      'Kriza': 'bg-red-500',
      'Solidariteti': 'bg-green-600',
      'Rregullimi': 'bg-purple-600'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="max-w-6xl mx-auto p-8 pb-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-purple-600 rounded-full mb-4">
          <Calendar className="text-white" size={40} />
        </div>
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Timeline Historik i BE-së</h1>
        <p className="text-xl text-gray-600">Nga qymyri dhe çeliku tek inteligjenca artificiale</p>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">70+ Vjet Integrimi Europian</h2>
        <p className="text-lg text-blue-100">
          Nga një bashkëpunim modest midis 6 vendeve për të menaxhuar qymyrin dhe çelikun, deri në një union politik dhe ekonomik me 27 vende dhe 450 milionë qytetarë - ky është udhëtimi i Bashkimit Europian. Çdo hap në këtë timeline përfaqëson momente vendimtare që kanë formësuar Europën moderne.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === cat.name
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 via-yellow-400 to-blue-900"></div>

        <div className="space-y-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-full border-4 border-blue-900 flex items-center justify-center shadow-lg text-2xl">
                {event.icon}
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className={`${getCategoryColor(event.category)} text-white p-1 px-4`}>
                  <span className="text-xs font-semibold">{event.category}</span>
                </div>

                <button
                  onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-3xl font-bold text-blue-900">{event.year}</span>
                        <h3 className="text-2xl font-bold text-blue-900">{event.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{event.description}</p>
                    </div>
                    {expandedEvent === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>

                {expandedEvent === index && (
                  <div className="p-6 pt-0 bg-gray-50 border-t">
                    <div className="mb-6">
                      <h4 className="font-bold text-xl text-blue-900 mb-3">Detajet Kryesore:</h4>
                      <ul className="space-y-2">
                        {event.details.map((detail, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-2">Ndikimi Historik:</h4>
                      <p className="text-gray-700">{event.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Çfarë Vjen në të Ardhmen?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">🌱 Green Deal Europiane</h4>
            <p className="text-sm">
              BE-ja synon të bëhet kontinenti i parë klimatikisht neutral deri në 2050.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🔬 Sovraniteti Strategjik</h4>
            <p className="text-sm">
              Investime masive në teknologji, gjysmëpërçuesë, dhe pavarësi strategjike.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🛡️ Politika e Mbrojtjes</h4>
            <p className="text-sm">
              Zhvillimi i kapaciteteve të përbashkëta ushtarake dhe autonomisë strategjike.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">🌍 Zgjerimi i Ardhshëm</h4>
            <p className="text-sm">
              Ballkani Perëndimor, Ukraina, Moldavia - perspektiva e anëtarësimit.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Mësim nga Historia</h3>
        <p className="text-gray-700 leading-relaxed">
          Historia e BE-së tregon se <strong>integrimi europian nuk është një proces linear</strong>. Ka pasur momente triumfi (Euro, zgjerimi, solidariteti në COVID) dhe momente krize (Brexit, kriza e euros, migrimi). Por çdo krizë ka çuar në <strong>thellim të integrimit</strong> dhe <strong>reforma institucionale</strong>. BE-ja vazhdon të evoluojë, dhe ju jeni pjesë e kësaj historie!
        </p>
      </div>
    </div>
  );
}
