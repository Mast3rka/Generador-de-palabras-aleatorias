const palabras = require('an-array-of-spanish-words');
const fs = require('fs');

fs.writeFileSync('palabras.json', JSON.stringify(palabras, null, 2), 'utf-8');
console.log(`Archivo palabras.json creado con ${palabras.length} palabras.`);
