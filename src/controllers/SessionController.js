const connection = require("../database/connections");

module.exports = {
    async create(request,response){
        const {id} = request.body;
        const ong = await connection('user').where('id',id).select('name').first(); 

        if(!ong){
            response.status(400).json({erro: 'Not Found'}); 
        }
        return response.json(ong); 
    }
}