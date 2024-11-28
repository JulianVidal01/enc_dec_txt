import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Decryptor = () => {
    const [file, setFile] = useState(null);
    const [password, setPassword] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDecrypt = () => {
        if (!file || !password) {
            alert('Por favor selecciona un archivo y proporciona una contraseña.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const encryptedData = event.target.result;

            // Desencriptar el contenido
            const bytes = CryptoJS.AES.decrypt(encryptedData, password);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);

            // Verifica si la desencriptación fue exitosa
            if (!decrypted) {
                alert('La contraseña es incorrecta o el archivo está dañado.');
            } else {
                console.log('Contenido desencriptado:', decrypted); // Verifica el contenido desencriptado
                downloadDecryptedFile(decrypted, file.name.replace('.enc', '')); // Cambia el nombre del archivo
            }
        };
        reader.readAsText(file);
    };

    const downloadDecryptedFile = (data, filename) => {
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename; // Nombre del archivo desencriptado
        link.click();
    };

    return (
        <div>
            <h2>Desencriptar Archivo</h2>
            <input type="file" onChange={handleFileChange} />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleDecrypt}>Desencriptar</button>
        </div>
    );
};

export default Decryptor;