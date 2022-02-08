const knex = require("../database/db");

getEnrolment=(req,res)=>{
    // .from("postDetail").join("UserDetail","postDetail.User_id","UserDetail.id")
    knex.select("*").from("Enrolment").join("Student","Enrolment.student_id","Student.student_id").join("Session","Enrolment.session_id","Session.session_id")
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}

module.exports={getEnrolment}