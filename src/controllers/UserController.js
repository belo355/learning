const { uuid } = require("uuidv4");
const connection = require("../database/connections");
// const loggerRequest = require('../../src/util/LoggerRequest');

module.exports = {
  async index(req, res) {
    const users = await connection("user").select("*");
    return res.json({ users });
  },

  async create(req, res) {
    const { name, adress, city, uf } = req.body;

    const id = uuid();
    const [user] = await connection("user").insert({
      id,
      name,
      adress,
      city,
      uf,
    });
    return res.json({ user });
  },

  async update(req, res){
      const {id} = req.query; 
      const { name } = req.body; 
     
      const user = await connection('user')
      .select('*').where('id',id).first(); 
      console.log(user); 
      console.log('INFO REQ  >>>>>>>>>> '); 
      console.log(id); 
      console.log(name); 

      if(!user.id){
        return res.status(404).json({error:"not found"}); 
      }

      const userInsert = await connection('user')
        .where('id',id)
        .update({
            "name":name
          }); 
      return res.json({userInsert}); 
  }, 

  async delete(req, res) {
    const {id} = req.query; 

    try {
      await connection('user').where('id', id).delete(); 
    } catch (error) {
      return res.status(404).json({error:"not found"}); 
    }
    
    return res.status(204).send();
  }
} 
