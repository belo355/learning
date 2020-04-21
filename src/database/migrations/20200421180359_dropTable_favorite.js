
exports.up = function(knex) {
  return knex.schema.dropTable('favorite',function(table){
      table.dropTable('favorite'); 
}); 
}
exports.down = function(knex) {
  return knex.schema.dropTable('favorite'); 
};
