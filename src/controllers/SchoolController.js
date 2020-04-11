const connection = require("../database/connections");
const { uuid } = require("uuidv4");

module.exports = {
  async index(request, response) {
    const school = await connection("schools").select("*");
    return response.json({ school });
  },
  
  async create(request, response) {
    const { name, adress, city, uf, level } = request.body;

    const id = uuid();
    const [school] = await connection("schools").insert({
      id,
      name,
      adress,
      city,
      uf,
      level,
    });
    return response.json({ school });
  }, 

  async update(request, response){
    const { id } = request.params; 
    const { name, adress, city, uf, level } = request.body; 

    const findSchool = await connection("schools").select("*").where('id', id);

    if(findSchool.id !==  id){
      return reponse.status(404).json({error: 'not found'}); 
    }

    const school = await connection('school').insert({
      id, 
      name, 
      adress, 
      city, 
      uf, 
      level
    }); 

    return response.status(200).json({school}); 
    
  }

}