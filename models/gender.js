'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    static associate(models) {
   const { Teacher, Learner } = models;
   Gender.hasOne(Teacher, { foreignKey: "gender_id" })
   Gender.hasOne(Learner, { foreignKey: "gender_id" })
    }
  }
  Gender.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};