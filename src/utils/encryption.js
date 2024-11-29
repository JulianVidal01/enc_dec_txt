// src/utils/encryption.js
import CryptoJS from 'crypto-js';

export const encryptAES = (text, secretKey) => {
    if (!text || !secretKey) {
        throw new Error('Texto y clave son necesarios para la encriptación.');
    }

    const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    return encrypted;
};

export const decryptAES = (encryptedText, secretKey) => {
    if (!encryptedText || !secretKey) {
        throw new Error('Texto encriptado y clave son necesarios para la desencriptación.');
    }

    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8); // El resultado se convierte a una cadena de texto legible (UTF-8)

    // Verificar si el texto desencriptado es válido
    if (!decrypted) {
        throw new Error('La clave secreta es incorrecta o el texto no es válido.');
    }

    return decrypted;
};