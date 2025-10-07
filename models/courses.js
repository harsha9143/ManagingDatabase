const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/dbUtil");

const Courses = sequelize.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Courses;
