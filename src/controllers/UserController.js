const { uuid } = require("uuidv4");
const connection = require("../database/connections");
// const loggerRequest = require('../../src/util/LoggerRequest');

module.exports = {
  async index(request, response) {
    const users = await connection("user").select("*");
    return response.json({ users });
  },

  // TODO: fazer funcionar
  // async indexFindOne(request, response){
  //     const id = request.params;
  //     const user = await connection('user').select('*').where('id',id).first();

  //     return response.json({user});
  //   },

  async create(request, response) {
    const { name, nick,  adress, city, uf } = request.body;

    const id = uuid();
    const [user] = await connection("user").insert({
      id,
      name,
      nick, 
      adress,
      city,
      uf,
    });
    return response.json({ user });
  },


  async delete(request, response) {
    const { id } = request.params;

    const user = await connection('user').where('id', id).select('*').fist();

    if (user.id !== id) {
      return response.status(404).json({ error: 'ID not found' });
    }
    await connetion("user").where(id).delete();
    return response.status(204).send();
  }
} 
