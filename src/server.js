const app = require('../src/app'); 
const logSymbols = require('log-symbols'); 

app.listen(3333);
console.log(logSymbols.success, 'start application'); 