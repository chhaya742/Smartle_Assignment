const express = require("express");
const router = express.Router();
const { insert,insert1,insert2,insert3,insert4}=require("../controller/insetData.controller")
const {getSession}=require("../controller/controller.session");
const { getEnrolment } = require("../controller/controller.enrolment");

// end points
router.get("/getSession",getSession)
router.get("/getEnrolment",getEnrolment)

router.post("/a",insert);
router.post("/b",insert1);
router.post("/c",insert2);
router.post("/d",insert3);
router.post("/e",insert4);






module.exports = router;