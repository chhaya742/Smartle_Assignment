const {dotenv}=require("dotenv").config();
const express=require("express");
const {Course}=require("./database/Course.db")
const {student}=require("./database/Student.db")
const {trainer}=require("./database/Trainer.db")
const {sessoin}=require("./database/Session.db")
const {Enrolment}=require("./database/Enrolment.cd")

const router = require("./routes/Course.routes");
const { route } = require("./routes/Course.routes");
const app=express();

app.get("/",(req,res)=>{
    console.log("hy");
    res.send("ok")

});
routers=require("./routes/Course.routes")
app.use("/",routers)

app.listen(process.env.port,()=>{
    console.log(`server listen on ${process.env.port} port`);
});