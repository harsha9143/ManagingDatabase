const express = require("express");

const courseController = require("../controllers/courseController");

const courseRouter = express.Router();

courseRouter.post("/addcourse", courseController.addCourse);
courseRouter.get("/addStudentCourses", courseController.addStudentToCourses);

module.exports = courseRouter;
