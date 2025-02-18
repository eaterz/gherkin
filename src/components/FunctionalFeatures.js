import React from 'react';
import { Check } from 'lucide-react';

const GherkinKeyword = ({ children }) => (
    <span className="font-mono font-bold text-green-700">{children}</span>
);

const GherkinComment = ({ children }) => (
    <div className="text-green-600 font-mono text-sm italic pl-4 border-l-4 border-green-300 my-4 py-1">
        # {children}
    </div>
);

const InfoSection = ({ title, children }) => (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-lg border-2 border-green-200">
        <h2 className="text-2xl font-bold mb-4 text-green-800 pb-2 border-b-2 border-green-300 flex items-center">
      <span className="mr-2">
        <Check size={24} className="text-green-600" />
      </span>
            {title}
        </h2>
        <div className="text-green-700">{children}</div>
    </div>
);

const UserStoryExample = () => (
    <div className="bg-green-50 p-4 rounded-md my-4 font-mono border-l-4 border-green-400 shadow-sm">
        <GherkinComment>User Story Template</GherkinComment>
        <p className="mb-2 text-green-800"><GherkinKeyword>KĀ</GherkinKeyword> &lt;lietotāja loma&gt;</p>
        <p className="mb-2 text-green-800"><GherkinKeyword>ES VĒLOS</GherkinKeyword> &lt;vēlme/funkcionalitāte&gt;</p>
        <p className="text-green-800"><GherkinKeyword>LAI</GherkinKeyword> &lt;ieguvums/vērtība&gt;</p>
    </div>
);

const ScenarioExample = () => (
    <div className="bg-green-50 p-4 rounded-md my-4 font-mono border-l-4 border-green-400 shadow-sm">
        <GherkinComment>Example Scenario</GherkinComment>
        <p className="font-bold mb-2 text-green-900"><GherkinKeyword>Scenārijs:</GherkinKeyword> Veiksmīga pieteikšanās</p>
        <p className="mb-1 text-green-800"><GherkinKeyword>KAD</GherkinKeyword> esmu pieteikšanās lapā</p>
        <p className="mb-1 text-green-800"><GherkinKeyword>JA</GherkinKeyword> ievadu derīgus pieteikšanās datus</p>
        <p className="text-green-800"><GherkinKeyword>TAD</GherkinKeyword> tieku ielaists sistēmā</p>
    </div>
);

const GherkinTable = ({ items }) => (
    <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse bg-green-50 rounded-md overflow-hidden">
            <tbody>
            {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-l-4 border-green-400 flex items-start">
              <span className="mr-2 mt-1 text-green-600">
                <Check size={16} />
              </span>
                        <span>{item}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

const FunctionalFeatures = () => {
    const featureItems = [
        "Sniedz vērtību lietotājam",
        "Ir izmērāma un pārbaudāma",
        "Var tikt izstrādāta un piegādāta neatkarīgi",
        "Risina konkrētu biznesa vajadzību"
    ];

    const perspectiveItems = [
        "Lietotāja perspektīva - kā funkcionalitāte izskatās lietotājam",
        "Tehniskā perspektīva - kā to implementēt",
        "Biznesa perspektīva - kādu vērtību tas sniedz",
        "Drošības perspektīva - kādi riski jāņem vērā",
        "Testēšanas perspektīva - kā pārbaudīt funkcionalitāti"
    ];

    const happyPathItems = [
        "Ideālais ceļš caur funkcionalitāti",
        "Pamata scenārijs bez kļūdām vai izņēmumiem",
        "Svarīgākais testēšanas scenārijs",
        "Parāda funkcionalitātes galveno mērķi"
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gradient-to-b from-green-50 to-white rounded-lg shadow-lg border-2 border-green-300">
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-8 text-center text-green-900 border-b-2 border-green-300 pb-4">
                    Funkcionālās Iezīmes Izstrādē
                </h1>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-8">
                    <p className="font-mono text-green-800 mt-4">
                        <GherkinKeyword>Apraksts:</GherkinKeyword> Šis dokuments apraksta funkcionālo iezīmju veidošanas principus
                    </p>
                </div>

                <InfoSection title="Kas ir funkcionālā iezīme?">
                    <p className="mb-4">
                        Funkcionālā iezīme ir programmatūras funkcionalitātes vienība, kas:
                    </p>
                    <GherkinTable items={featureItems} />
                </InfoSection>

                <InfoSection title="Lietotājstāstu veidošana">
                    <p className="mb-4">Lietotājstāsti tiek veidoti pēc šādas struktūras:</p>
                    <UserStoryExample />
                    <GherkinComment>Example User Story</GherkinComment>
                    <p className="mt-2 italic bg-green-50 p-3 rounded font-mono text-green-800 border-l-4 border-green-400">
                        "<GherkinKeyword>KĀ</GherkinKeyword> sistēmas administrators, <GherkinKeyword>ES VĒLOS</GherkinKeyword> redzēt pieteikto kļūdu sarakstu,
                        <GherkinKeyword>LAI</GherkinKeyword> varētu prioritizēt to labošanu."
                    </p>
                </InfoSection>

                <InfoSection title="Scenāriju veidošana">
                    <p className="mb-4">Scenāriji tiek veidoti izmantojot Gherkin sintaksi:</p>
                    <ScenarioExample />
                    <p className="mt-4 font-semibold">Galvenie elementi:</p>
                    <div className="overflow-x-auto my-4">
                        <table className="w-full border-collapse rounded-md overflow-hidden">
                            <thead>
                            <tr className="bg-green-200">
                                <th className="p-2 text-left text-green-900 font-mono">Atslēgvārds</th>
                                <th className="p-2 text-left text-green-900 font-mono">Angliski</th>
                                <th className="p-2 text-left text-green-900 font-mono">Apraksts</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-green-50">
                                <td className="p-2 font-mono font-bold text-green-700">KAD</td>
                                <td className="p-2 font-mono">Given</td>
                                <td className="p-2">sākotnējais konteksts</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="p-2 font-mono font-bold text-green-700">JA</td>
                                <td className="p-2 font-mono">When</td>
                                <td className="p-2">darbība</td>
                            </tr>
                            <tr className="bg-green-50">
                                <td className="p-2 font-mono font-bold text-green-700">TAD</td>
                                <td className="p-2 font-mono">Then</td>
                                <td className="p-2">sagaidāmais rezultāts</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </InfoSection>

                <InfoSection title="Rubika kuba perspektīva">
                    <p className="mb-4">
                        Rubika kubs palīdz skatīties uz funkcionālajām iezīmēm no dažādām perspektīvām:
                    </p>
                    <GherkinTable items={perspectiveItems} />
                </InfoSection>

                <InfoSection title="Veiksmīgā iznākuma scenārijs">
                    <p className="mb-4">
                        Veiksmīgā iznākuma scenārijs (Happy Path) ir:
                    </p>
                    <GherkinTable items={happyPathItems} />
                    <GherkinComment>Happy Path Example</GherkinComment>
                    <p className="mt-4 italic bg-green-50 p-3 rounded font-mono text-green-800 border-l-4 border-green-400">
                        <GherkinKeyword>Scenārijs:</GherkinKeyword> Veiksmīga pieteikšanās<br/>
                        <GherkinKeyword>KAD</GherkinKeyword> lietotājs ievada pareizu lietotājvārdu un paroli<br/>
                        <GherkinKeyword>TAD</GherkinKeyword> lietotājs veiksmīgi piesakās sistēmā
                    </p>
                </InfoSection>
            </div>
        </div>
    );
};

export default FunctionalFeatures;