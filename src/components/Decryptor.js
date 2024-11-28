// src/components/Decryptor.js
import React, { useState } from 'react';
import { decryptAES } from '../utils/encryption';

const Decryptor = () => {
    const [inputText, setInputText] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [decryptedText, setDecryptedText] = useState('');
    const [showKey, setShowKey] = useState(false);

    const handleDecrypt = () => {
        if (!inputText || !secretKey) {
            alert('Por favor, ingresa el texto encriptado y la clave secreta.');
            return;
        }

        try {
            const result = decryptAES(inputText, secretKey);
            setDecryptedText(result);
            setShowKey(false);
        } catch (error) {
            alert(error.message);
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(decryptedText);
            alert('Texto copiado al portapapeles!');
        } catch (err) {
            alert('Error al copiar el texto. Intenta nuevamente.');
        }
    };

    return (
        <div className="decryptor">
            <h1 className="title">Desencriptador de Texto</h1>
            <div className="container">
                <div className="input-area">
                    <textarea 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)} 
                        placeholder="Ingresa el texto encriptado aquí"
                    />
                    <div className="key-area">
                        <input 
                            type={showKey ? 'text' : 'password'}
                            value={secretKey} 
                            onChange={(e) => setSecretKey(e.target.value)} 
                            placeholder="Ingresa la clave secreta"
                        />
                        <button onClick={() => setShowKey(!showKey)}>
                            {showKey ? 'Ocultar' : 'Mostrar'} Clave
                        </button>
                        <button onClick={handleDecrypt}>Desencriptar</button>
                    </div>
                </div>
                <div className="output">
                    <h2>Texto Desencriptado:</h2>
                    <p>{decryptedText}</p>
                    {decryptedText && (
                        <button onClick={copyToClipboard}>Copiar</button>
                    )}
                </div>
            </div>
        </div>
    ); 
};

export default Decryptor;