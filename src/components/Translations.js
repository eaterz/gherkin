import React from 'react';

const TranslationRow = ({ english, latvian }) => (
    <tr className="border-b border-green-100 hover:bg-green-50 transition-colors">
        <td className="p-4 text-green-800 font-mono">{english}</td>
        <td className="p-4 text-green-800 font-mono">{latvian}</td>
    </tr>
);

const TranslationsTable = ({ data }) => (
    <div className="overflow-x-auto">
        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-green-200">
                <th className="p-4 text-left text-green-900 font-mono font-semibold">English</th>
                <th className="p-4 text-left text-green-900 font-mono font-semibold">Latviešu</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <TranslationRow key={index} {...item} />
            ))}
            </tbody>
        </table>
    </div>
);

const Translations = () => {
    const translationsData = [
        {
            english: "Feature",
            latvian: "Funkcionalitāte",
        },
        {
            english: "Scenario",
            latvian: "Scenārijs",
        },
        {
            english: "Given",
            latvian: "Kad",
        },
        {
            english: "When",
            latvian: "Ja",
        },
        {
            english: "Then",
            latvian: "Tad",
        },
        {
            english: "And",
            latvian: "Un",
        },
        {
            english: "But",
            latvian: "Bet",
        },
        {
            english: "Background",
            latvian: "Priekšvēsture",
        },
        {
            english: "Scenario Outline",
            latvian: "Scenārija struktūra",
        },
        {
            english: "Examples",
            latvian: "Piemēri",
        },
        {
            english: "Or",
            latvian: "Vai",
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-300">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-300 pb-3">
                    Gherkin Termini
                </h2>
                <p className="mb-4 text-green-700 font-mono text-sm italic">
                    # Language: lv
                </p>
                <TranslationsTable data={translationsData} />
            </div>
        </div>
    );
};

export default Translations;