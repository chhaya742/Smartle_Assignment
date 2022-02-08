const knex=require("../database/db")

knex.schema.hasTable('Student').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Student', function(table) {
        table.increments("student_id").primary();
        table.string("full_name").notNullable();
        table.string("age").notNullable();
        table.string("contact").notNullable();
        table.string("location").notNullable();
    })
}
});
module.exports=knex
