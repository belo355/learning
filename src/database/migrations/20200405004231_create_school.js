
exports.up = function(knex) {
    return knex.schema.createTable('schools',function(table){
        table.string('id').primary(); 
        table.string('nome').notNullable(); 
        table.string('endereco').notNullable(); 
        table.string('cidade').notNullable(); 
        table.string('uf').notNullable(); 
        table.string('nivel').notNullable(); 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('schools'); 
};
