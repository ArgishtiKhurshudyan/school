'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeekDays extends Model {
    static associate(models) {
      const { ClassList } = models
      WeekDays.hasOne(ClassList, {foreignKey: 'weekday_id'})
    }
  }

  WeekDays.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WeekDays',
  });
  return WeekDays;
};