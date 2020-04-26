const { uuid } = require("uuidv4");
const connection = require("../database/connections");

module.exports = {
  async index(request, response) {
    const favorites = await connection("favorite").select("*");
    return response.json({ favorites });
  },

  async create(request, response) {
    const { user_id, school_id } = request.body;

    const id = uuid();
    const [favorite] = await connection("favorite").insert({
      id,
      user_id,
      school_id,
    });
    return response.json({ favorite });
  },

  async delete(request, response) {
    const { user_id } = request.query;
    const { school_id } = request.body;

    try {
      await connection("favorite")
        .where("user_id", user_id)
        .andWhere("school_id", "=", school_id)
        .delete();
    } catch (error) {
      response.status(400).json({ error: "favorite not found" });
    }
    response.status(200).send(); 
  } 
};
