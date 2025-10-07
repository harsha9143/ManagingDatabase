const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/dbUtil");

const Department = sequelize.define("departments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Department;
