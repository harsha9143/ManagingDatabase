const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/dbUtil");

const IdentityCard = sequelize.define("identity_card", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = IdentityCard;
