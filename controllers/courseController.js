const { Courses, Student, StudentCourses } = require("../models/index");

exports.addCourse = async (req, res, next) => {
  const { name } = req.body;
  console.log(name);

  try {
    const course = await Courses.create({ name });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).send("Failed to add course");
  }
};

exports.addStudentToCourses = async (req, res, next) => {
  const { studentId, courseIds } = req.body;

  try {
    const student = await Student.findByPk(studentId);
    const courses = await Courses.findAll({
      where: {
        id: courseIds,
      },
    });

    await student.addCourse(courses);

    const updatedStudent = await Student.findByPk(studentId, {
      include: Courses,
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Failed to associate");
  }
};
