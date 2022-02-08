knex=require("../database/db")
knex.schema.hasTable('Session').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('Session', function(t) {
        t.increments("session_id").primary();
        t.string('title').notNullable();
        t.string('session_time').notNullable();
        t.string('duration').notNullable();
        t.integer('course_id').notNullable();
        t.integer('trainer_id').notNullable();
      });
    }
  });

module.exports=knex