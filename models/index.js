const Student = require("./student");
const IdentityCard = require("./identityCard");
const Department = require("./department");

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Department.hasMany(Student);
Student.belongsTo(Department);

module.exports = {
  Student,
  IdentityCard,
  Department,
};
