const app = require('../src/app'); 
const logSymbols = require('log-symbols'); 
const port = 3333; 

app.listen(port);
console.log(logSymbols.success, 'start application in port', port); 