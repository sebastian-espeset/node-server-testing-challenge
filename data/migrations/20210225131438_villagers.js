
exports.up = function(knex) {
  return knex.schema.createTable("villagers",table=>{
      table.increments();
      table.string("name").notNullable();
      table.string("job").defaultTo("worker")
  })
};

exports.down = function(knex) {
  
};
