const knex = require("../database/db");

getSession=(req,res)=>{
    knex.select("*").from("Session").join("Course","Session.course_id","Course.course_id").join("Trainer","Session.trainer_id","Trainer.trainer_id")
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}

module.exports={getSession}