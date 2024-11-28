import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Encryptor = () => {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleEncrypt = () => {
        if (!file || !password) {
            alert('Por favor selecciona un archivo y proporciona una contraseña.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = event.target.result;
            const encrypted = CryptoJS.AES.encrypt(fileData, password).toString();

            const blob = new Blob([encrypted], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${file.name}.enc`;
            link.click();
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <h2>Encriptar Archivo</h2>
            <input type="file" onChange={handleFileChange} />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleEncrypt}>Encriptar</button>
        </div>
    );
};

export default Encryptor;