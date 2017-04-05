const crypto = require('crypto');


const cipher = crypto.createCipher('aes192', '122');
const decipher = crypto.createDecipher('aes192', '122');
let encrypted = cipher.update('huaping', 'utf-8', 'hex');
encrypted += cipher.final('hex');

let deEncrypted = decipher.update(encrypted, 'hex', 'utf-8');
deEncrypted += decipher.final("utf-8");

console.log(encrypted, '=====222=====222====', deEncrypted);