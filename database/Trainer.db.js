knex=require("../database/db")

knex.schema.hasTable('Trainer').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Trainer', function(table) {
        table.increments("trainer_id").primary();
        table.string("full_name").notNullable();
        table.string("contact").notNullable();
        table.string("country").notNullable();
        table.string("availability").notNullable();
    })
    }
});
module.exports=knex;