const { uuid } = require("uuidv4");
const connection = require("../database/connections");
// const loggerRequest = require('../../src/util/LoggerRequest');

module.exports = {
  async index(request, response) {
    const evaluations = await connection("evaluation").select("*");
    return response.json({ evaluations });
  },

  async create(request, response) { 
    const { user_id } = request.query;
    const { school_id, score, comments } = request.body;

    const user = await connection('user').select('id').where('id', user_id).first();
    const school = await connection('school').select('id').where('id', school_id).first();

    if (user.id !== user_id) {
      return response.status(400).json({ error: "user not found" });
    }
    if (school.id !== school_id) {
      return response.status(400).json({ error: "school not found" });
    }

    const id = uuid();
    const [evaluation] = await connection('evaluation').insert({
      id,
      user_id,
      school_id,
      score,
      comments 
    });
    return response.json({ evaluation });
  }, 
  
  async update(request, response){
    const { user_id } = request.query;
    const { school_id, score, comments } = request.body;

    const evaluationId = await connection('evaluation').select('id').where('user_id', user_id)
        .andWhere('school_id','=',school_id).first();

    if (!evaluationId) {
      return response.status(400).json({ error: "evaluation not found" });
    }

    const updateEvaluation = await connection('evaluation').where('user_id', user_id)
    .andWhere('school_id','=',school_id).update({
      score:score,
      comments:comments, 
    }); 
    return response.status(200).json({updateEvaluation});
  }, 

  async delete(request, response){
    const { user_id } = request.query;
    const { school_id } = request.body;

    try {
      await connection('evaluation').select('id').where('user_id', user_id)
            .andWhere('school_id','=',school_id).delete();  
    } catch (error) {
     response.status(400).json({error: "command error, not permission"}); 
    }
    response.status(200).send(); 
  }
}
