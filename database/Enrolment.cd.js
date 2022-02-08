knex=require("../database/db")
knex.schema.hasTable('Enrolment').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Enrolment', function(t) {
        t.increments("enrolment_id").primary();
        t.timestamp("enrolment_date").defaultTo(knex.fn.now());
        t.integer('student_id').notNullable();
        t.integer('session_id').notNullable();
      });
    } 
}); 
module.exports=knex