const {uuid} = require('uuidv4'); 
const connection = require('../database/connections'); 

module.exports = {
  async index(request, response){
  const users = await connection('user').select('*'); 
  return response.json({users});

  },   
  
  async create(request, response){
  const {name, adress, city, uf} = request.body; 

  const id = uuid(); 
  const [user] = await connection('user').insert({
    id, 
    name, 
    adress, 
    city, 
    uf, 
    }); 
    return response.json({user}); 
  }, 

  async update(request, response){
  const id = request.params; 
  const  { name, adress, city, uf } = request.body; 
  
    const user = await connection('user')
    .select('*')
    .where('id',id); 

    if(user.id !== id){
      return response.status(404).json('User not found'); 
    }

    const updateUser = await connection('user').inser({
    id, 
    name, 
    adress, 
    city, 
    uf, 
    }); 

    return response.json({updateUser}); 
  }
}