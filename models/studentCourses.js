const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/dbUtil");

const StudentCourses = sequelize.define("student_courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = StudentCourses;
