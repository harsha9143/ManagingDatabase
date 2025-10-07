const Student = require("./student");
const IdentityCard = require("./identityCard");
const Department = require("./department");
const Courses = require("./courses");
const StudentCourses = require("./studentCourses");

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Department.hasMany(Student);
Student.belongsTo(Department);

Student.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Student, { through: StudentCourses });

module.exports = {
  Student,
  IdentityCard,
  Department,
  Courses,
  StudentCourses,
};
