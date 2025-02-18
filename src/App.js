import React, { useState } from 'react';
import Translations from './components/Translations';
import FunctionalFeatures from './components/FunctionalFeatures';
import './index.css';

function App() {
    const [showTranslations, setShowTranslations] = useState(true);

    const toggleComponent = () => {
        setShowTranslations(!showTranslations);
    };

    return (
        <div className="App">

            <button onClick={toggleComponent}>
                {showTranslations ? 'Rādīt FunctionalFeatures' : 'Rādīt Translations'}
            </button>


            {showTranslations ? <Translations /> : <FunctionalFeatures />}
        </div>
    );
}

export default App;