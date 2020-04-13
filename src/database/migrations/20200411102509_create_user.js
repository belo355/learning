exports.up = function(knex) {
  return knex.schema.createTable('user',function(table){
      table.string('id').primary(); 
      table.string('name').notNullable(); 
      table.string('adress').notNullable(); 
      table.string('city').notNullable(); 
      table.string('uf').notNullable(); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user'); 
};
