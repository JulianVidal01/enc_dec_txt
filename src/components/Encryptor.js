// src/components/Encryptor.js
import React, { useState } from 'react';
import { encryptAES } from '../utils/encryption';

const Encryptor = () => {
    const [inputText, setInputText] = useState(''); // Almacena el texto que el usuario desea encriptar.
    const [secretKey, setSecretKey] = useState(''); // Almacena la clave secreta proporcionada por el usuario.
    const [encryptedText, setEncryptedText] = useState(''); // Almacena el resultado de la encriptación.
    const [showKey, setShowKey] = useState(false); // Determina si la clave secreta se muestra como texto plano o como un campo de contraseña.

    const handleEncrypt = () => {
        if (!inputText || !secretKey) {
            alert('Por favor, ingresa el texto y la clave secreta.');
            return;
        } // Verifica que el texto y la clave no estén vacíos.

        try {
            const result = encryptAES(inputText, secretKey);
            setEncryptedText(result);
            setShowKey(false);
        } catch (error) {
            alert('Error al encriptar el texto. Asegúrate de que el texto y la clave sean válidos.');
        } // Intenta encriptar el texto utilizando la función encryptAES
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(encryptedText);
            alert('Texto copiado al portapapeles!');
        } catch (err) {
            alert('Error al copiar el texto. Intenta nuevamente.');
        } // Copia el texto encriptado
    };

    const clearEncryptedText = () => {
        setEncryptedText(''); // Limpia el contenido del texto encriptado
    };

    return (
        <div className="encryptor">
            <h1 className="title">Encriptador de Texto</h1>
            <div className="container">
                <div className="input-area">
                    <textarea 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)} 
                        placeholder="Ingresa el texto aquí"
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
                        <button onClick={handleEncrypt}>Encriptar</button>
                    </div>
                </div>
                <div className="output">
                    <h2>Texto Encriptado:</h2>
                    <p>{encryptedText}</p>
                    {encryptedText && (
                        <div>
                            <button onClick={copyToClipboard}>Copiar</button>
                            <button onClick={clearEncryptedText}>Borrar</button> {/* Botón para borrar el texto encriptado */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    ); 
};

export default Encryptor;