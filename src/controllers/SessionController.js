const connection = require("../database/connections");

module.exports = {
  async index(request, response) {
    const { id } = request.body;
    const user = await connection('user').select('name').where('id',id); 
    // const ong = await connection('ongs').where('id',id).select('name').first(); 

    if (!user) {
      return response.status(404).json({ error: 'not found' });
    }
    return reponse.status(200).json({user}); 
  }
}
