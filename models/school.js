'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate(models) {
      const {Floor, Teacher} = models
      School.hasMany(Teacher, {foreignKey: 'school_id'})
      School.hasMany(Floor, {foreignKey: 'school_id'})
    }
  }

  School.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};