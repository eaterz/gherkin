import React, { useState } from 'react';

const InfoSection = ({ title, children }) => (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="text-gray-600">{children}</div>
    </div>
);

const UserStoryExample = () => (
    <div className="bg-gray-50 p-4 rounded-md my-4 font-mono">
        <p className="mb-2">KĀ &lt;lietotāja loma&gt;</p>
        <p className="mb-2">ES VĒLOS &lt;vēlme/funkcionalitāte&gt;</p>
        <p>LAI &lt;ieguvums/vērtība&gt;</p>
    </div>
);

const ScenarioExample = () => (
    <div className="bg-gray-50 p-4 rounded-md my-4 font-mono">
        <p className="font-bold mb-2">Scenārijs: Veiksmīga pieteikšanās</p>
        <p className="mb-1">KAD esmu pieteikšanās lapā</p>
        <p className="mb-1">JA ievadu derīgus pieteikšanās datus</p>
        <p>TAD tieku ielaists sistēmā</p>
    </div>
);

const FunctionalFeatures = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Funkcionālās Iezīmes Izstrādē
            </h1>

            <InfoSection title="Kas ir funkcionālā iezīme?">
                <p className="mb-4">
                    Funkcionālā iezīme ir programmatūras funkcionalitātes vienība, kas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Sniedz vērtību lietotājam</li>
                    <li>Ir izmērāma un pārbaudāma</li>
                    <li>Var tikt izstrādāta un piegādāta neatkarīgi</li>
                    <li>Risina konkrētu biznesa vajadzību</li>
                </ul>
            </InfoSection>

            <InfoSection title="Lietotājstāstu veidošana">
                <p className="mb-4">Lietotājstāsti tiek veidoti pēc šādas struktūras:</p>
                <UserStoryExample />
                <p>Piemēram:</p>
                <p className="mt-2 italic">
                    "KĀ sistēmas administrators, ES VĒLOS redzēt pieteikto kļūdu sarakstu,
                    LAI varētu prioritizēt to labošanu."
                </p>
            </InfoSection>

            <InfoSection title="Scenāriju veidošana">
                <p className="mb-4">Scenāriji tiek veidoti izmantojot Gherkin sintaksi:</p>
                <ScenarioExample />
                <p className="mt-4">Galvenie elementi:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>KAD (Given) - sākotnējais konteksts</li>
                    <li>JA (When) - darbība</li>
                    <li>TAD (Then) - sagaidāmais rezultāts</li>
                </ul>
            </InfoSection>

            <InfoSection title="Rubika kuba perspektīva">
                <p className="mb-4">
                    Rubika kubs palīdz skatīties uz funkcionālajām iezīmēm no dažādām perspektīvām:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Lietotāja perspektīva - kā funkcionalitāte izskatās lietotājam</li>
                    <li>Tehniskā perspektīva - kā to implementēt</li>
                    <li>Biznesa perspektīva - kādu vērtību tas sniedz</li>
                    <li>Drošības perspektīva - kādi riski jāņem vērā</li>
                    <li>Testēšanas perspektīva - kā pārbaudīt funkcionalitāti</li>
                </ul>
            </InfoSection>

            <InfoSection title="Veiksmīgā iznākuma scenārijs">
                <p className="mb-4">
                    Veiksmīgā iznākuma scenārijs (Happy Path) ir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Ideālais ceļš caur funkcionalitāti</li>
                    <li>Pamata scenārijs bez kļūdām vai izņēmumiem</li>
                    <li>Svarīgākais testēšanas scenārijs</li>
                    <li>Parāda funkcionalitātes galveno mērķi</li>
                </ul>
                <p className="mt-4 italic">
                    Piemēram: Lietotājs ievada pareizu lietotājvārdu un paroli,
                    un veiksmīgi piesakās sistēmā.
                </p>
            </InfoSection>
        </div>
    );
};

export default FunctionalFeatures;