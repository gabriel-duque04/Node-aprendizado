const path = require('path');
//apenas nome do arquivo atual 
console.log(path.basename(__filename));

// nome do diretório atual

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.join(__dirname, "test", "test.html"));


console.log(__filename);

