import React from 'react';
import Encryptor from './components/Encryptor';
import Decryptor from './components/Decryptor';
import EncryptorFile from './components/EncryptorFile';
import DecryptorFile from './components/DecryptorFile';
import GlobalStyles from './GlobalStyles'; // Asegúrate de que la ruta sea correcta

import './styles.css';

const App = () => {
    return (
        <>
            <GlobalStyles /> {/* Asegúrate de que esté aquí */}
            <div className="App">
                <EncryptorFile />
                <DecryptorFile />
            </div>
        </>
    );
};

export default App;