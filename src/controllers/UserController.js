const { uuid } = require("uuidv4");
const connection = require("../database/connections");
// const loggerRequest = require('../../src/util/LoggerRequest');

module.exports = {
  async index(request, response) {
    const users = await connection("user").select("*");
    return response.json({ users });
  },

  async create(request, response) {
    const { name, adress, city, uf } = request.body;

    const id = uuid();
    const [user] = await connection('user').insert({
      id,
      name,
      adress,
      city,
      uf,
    });
    return response.json({ user }); //TODO: melhorar resposta da api 
  },

  async update(request, response) {
    const { id } = request.query;
    const { name } = request.body;

    const user = await connection('user').select('*').where('id', id).first();

    if (!user.id) {
      return response.status(404).json({ error: "not found" });
    }

    const userUpdate = await connection('user').where('id', id).update({
      name: name,
    });
    return response.json({ userUpdate });
  },

  async delete(request, response) {
    const { id } = request.query;

    try {
      await connection('user').where('id', id).delete();
    } catch (error) {
      return response.status(404).json({ error: "not found" });
    }

    return response.status(204).send();
  },
};
