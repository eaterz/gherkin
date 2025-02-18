import React from 'react';
import { Check } from 'lucide-react';

const GherkinKeyword = ({ children }) => (
    <span className="font-mono font-bold text-green-700">{children}</span>
);

const GherkinComment = ({ children }) => (
    <div className="text-green-600 font-mono text-sm italic pl-4 border-l-4 border-green-300 my-2 py-1">
        # {children}
    </div>
);

const InfoSection = ({ title, children }) => (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md border border-green-200">
        <h2 className="text-xl font-bold mb-3 text-green-800 pb-2 border-b border-green-200 flex items-center">
            <span className="mr-2"><Check size={20} className="text-green-600" /></span>
            {title}
        </h2>
        <div className="text-green-700">{children}</div>
    </div>
);

const GherkinTable = ({ items }) => (
    <div className="overflow-x-auto my-3">
        <table className="w-full border-collapse bg-green-50 rounded-md overflow-hidden">
            <tbody>
            {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                    <td className="py-1 px-3 border-l-4 border-green-400 flex items-start">
                        <span className="mr-2 mt-1 text-green-600"><Check size={14} /></span>
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
        "Risina konkrētu biznesa vajadzību"
    ];

    const keyElements = [
        { keyword: "KAD (Given)", description: "sākotnējais konteksts" },
        { keyword: "JA (When)", description: "darbība" },
        { keyword: "TAD (Then)", description: "sagaidāmais rezultāts" }
    ];

    return (
        <div className="max-w-3xl mx-auto p-3 bg-gradient-to-b from-green-50 to-white rounded-lg shadow-md border border-green-300">
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-center text-green-900 border-b border-green-300 pb-3">
                    Funkcionālās Iezīmes
                </h1>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-5">
                    <p className="font-mono text-green-800 mt-2">
                        <GherkinKeyword>Apraksts:</GherkinKeyword> Īss pārskats par funkcionālo iezīmju veidošanu
                    </p>
                </div>

                <InfoSection title="Kas ir funkcionālā iezīme?">
                    <p className="mb-2">Funkcionalitātes vienība, kas:</p>
                    <GherkinTable items={featureItems} />
                </InfoSection>

                <InfoSection title="Lietotājstāsti">
                    <div className="bg-green-50 p-3 rounded-md my-2 font-mono border-l-4 border-green-400 shadow-sm">
                        <p className="text-green-800">
                            <GherkinKeyword>KĀ</GherkinKeyword> &lt;loma&gt; <GherkinKeyword>ES VĒLOS</GherkinKeyword> &lt;funkcionalitāte&gt; <GherkinKeyword>LAI</GherkinKeyword> &lt;ieguvums&gt;
                        </p>
                    </div>
                </InfoSection>

                <InfoSection title="Scenāriju veidošana">
                    <div className="bg-green-50 p-3 rounded-md my-2 font-mono border-l-4 border-green-400 shadow-sm">
                        <p className="font-bold mb-1 text-green-900"><GherkinKeyword>Scenārijs:</GherkinKeyword> Veiksmīga pieteikšanās</p>
                        <p className="text-green-800">
                            <GherkinKeyword>KAD</GherkinKeyword> esmu lapā <GherkinKeyword>JA</GherkinKeyword> ievadu datus <GherkinKeyword>TAD</GherkinKeyword> tieku ielaists
                        </p>
                    </div>
                    <div className="overflow-x-auto my-3">
                        <table className="w-full border-collapse rounded-md overflow-hidden">
                            <tbody>
                            {keyElements.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                                    <td className="p-2 font-mono font-bold text-green-700 w-1/3">{item.keyword}</td>
                                    <td className="p-2">{item.description}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </InfoSection>

                <InfoSection title="Veiksmīgā iznākuma scenārijs">
                    <p className="mb-2">
                        Ideālais ceļš caur funkcionalitāti, bez kļūdām, kas parāda funkcionalitātes galveno mērķi.
                    </p>
                    <p className="italic bg-green-50 p-3 rounded font-mono text-sm text-green-800 border-l-4 border-green-400">
                        <GherkinKeyword>Scenārijs:</GherkinKeyword> Veiksmīga pieteikšanās<br/>
                        <GherkinKeyword>KAD</GherkinKeyword> lietotājs ievada pareizus datus<br/>
                        <GherkinKeyword>TAD</GherkinKeyword> lietotājs piesakās sistēmā
                    </p>
                </InfoSection>
            </div>
        </div>
    );
};

export default FunctionalFeatures;