
exports.up = function(knex) {
    return knex.schema.createTable('user',function(table){
        table.string('id').primary(); 
        table.string('nome').notNullable(); 
        table.string('endereco').notNullable(); 
        table.string('cidade').notNullable(); 
        table.string('uf').notNullable(); 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user'); 
};
