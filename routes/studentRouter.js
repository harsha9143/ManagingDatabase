const express = require("express");

const studentRouter = express.Router();

const studentController = require("../controllers/studentController");

studentRouter.get("/", studentController.getAllStudents);
studentRouter.get("/:id", studentController.getStudentById);
studentRouter.post("/", studentController.addStudent);
studentRouter.put("/update/:id", studentController.editStudent);
studentRouter.delete("/delete/:id", studentController.deleteStudent);

module.exports = studentRouter;
