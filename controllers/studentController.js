// const IdentityCard = require("../models/identityCard");
// const Student = require("../models/student");

const { Student, Department, IdentityCard } = require("../models/index");
const db = require("../utils/dbUtil");

exports.addStudent = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const student = await Student.create({
      name,
      email,
    });

    res.status(201).send(`Student with name ${name} registered successfully`);
  } catch (error) {
    res.status(500).send("student registration failed");
  }
};

exports.editStudent = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }

    if (name) {
      student.name = name;
    }

    if (email) {
      student.email = email;
    }

    await student.save();

    res.status(200).send("Student details updated successfully");
  } catch (error) {
    res.send(500).send("updating student failed");
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!student) {
      return res.status(404).send("student not found");
    }

    res.status(200).send("Student has been deleted successfully");
  } catch (error) {
    res.send(500).send("Student not deleted");
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();

    if (!students) {
      return res.status(404).send("Students doesn't exist");
    }

    res.status(200).json({ data: students });
  } catch (error) {
    res.status(500).send("Fetching students failed");
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const students = await Student.findByPk(req.params.id);

    if (!students) {
      return res.status(404).send("Student doesn't exist");
    }

    res.status(200).json({ data: students });
  } catch (error) {
    res.status(500).send("Fetching student failed");
  }
};

exports.associateStudentWithId = async (req, res, next) => {
  try {
    const student = await Student.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.identityCard,
      studentId: student.id,
    });

    res.status(201).json({ student, idCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
