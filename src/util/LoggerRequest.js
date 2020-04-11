const logSymbols = require('log-symbols'); 

module.export = {
    loggerRequest(request, response, next){
    const {method, url} = request; 

    const logLabel = `[${method.toUpperCase()}] ${url}`; 
    console.time(logSymbols.info, logLabel);
    next(); 
    console.timeEnd(logSymbols.info, SlogLabel);
}
}
