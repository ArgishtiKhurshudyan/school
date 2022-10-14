'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate(models) {
      const {Learner, Floor, Audience, Teacher} = models
      School.hasMany(Learner, {foreignKey: 'school_id'})
      School.hasMany(Teacher, {foreignKey: 'school_id'})
      School.hasMany(Floor, {foreignKey: 'school_id'})
      School.hasMany(Audience, {foreignKey: 'school_id'})
    }
  }

  School.init({
    SchoolName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};