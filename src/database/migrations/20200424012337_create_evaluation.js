exports.up = function(knex) {
  return knex.schema.createTable('evaluation',function(table){
      table.string('id').primary(); 
      table.string('user_id').notNullable(); 
      table.foreign('user_id').references('id').inTable('user'); 
      table.string('school_id').notNullable(); 
      table.foreign('school_id').references('id').inTable('school'); 
      table.string('score').notNullable(); 
      table.string('comments').notNullable(); 

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('evaluation'); 
};
