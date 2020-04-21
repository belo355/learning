const { uuid } = require("uuidv4");
const connection = require("../database/connections");

module.exports = {
  async index(request, response) {
    const school = await connection('school').select('*');
    return response.json({ school });
  },
  
  async create(request, response) {
    const { name, adress, city, uf, level } = request.body;

    const id = uuid();
    const [school] = await connection('school').insert({
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
    const { id } = request.query; 
    const { name, adress, city, uf, level } = request.body; 
    
    const school = await connection('school').select('id').where('id', id).first();

    if(school.id !== id){
      return response.status(404).json({error: 'not found'}); 
    }

    const updateSchool = await connection('school').where('id',id).update({
      name:name, 
      adress:adress, 
      city:city, 
      uf:uf, 
      level:level, 
    }); 
    return response.status(200).json({updateSchool}); 
  }, 
  async delete(request, response){
    const {id} = request.query; 

    try {
      await connection('school').where('id', id).delete();  
    } catch (error) {
      return response.status(404).json({ error: "not found" });
    }
    return response.status(204).send(); 

  }
}