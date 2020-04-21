const { uuid } = require("uuidv4");
const connection = require("../database/connections");

module.exports = {
  async index(request, response) {
    const favorites = await connection('favorite').select('*');
    return response.json({ favorites });
  }, 

  
  async create(request, response) {
    const { user_id, school_id} = request.body;

    const id = uuid();
    const [favorite] = await connection('favorite').insert({
      id,
      user_id,
      school_id  
    });
    return response.json({ favorite });
  } 

  //TODO: finalizar rotina de dislike
  // async delete(request, response) {
  //   const { id, school_id } = request.body;

  //   const user = await connection('favorite').select('*').where('user_id',id); 

  //   console.log(user); 
  //   console.log(id); 

  //   if(user.user_id !== id){
  //     response.status(400).json({error:"favorite not found"}); 
  //   }  
  //   await connection('favorite').where('user_id',id)
  //     .andWhere('school_id', school_id).delete(); 
    
  //   return response.send();
  // } 
}
