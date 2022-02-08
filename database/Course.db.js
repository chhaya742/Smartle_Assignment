knex=require("../database/db")

knex.schema.hasTable('Course').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Course', function(table) {
        table.increments("course_id").primary();
        table.string("title").notNullable();
        table.text("description").notNullable();
        table.timestamp("duration").defaultTo(knex.fn.now());
      
    })
    }
});
module.require=knex