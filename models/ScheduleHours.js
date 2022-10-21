'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScheduleHours extends Model {
    static associate(models) {
      const {Class, ClassList} = models
      ScheduleHours.hasOne(ClassList, {foreignKey: 'scheduleHours_id'})
    }
  }

  ScheduleHours.init({
  }, {
    sequelize,
    modelName: 'ScheduleHours',
  });
  return ScheduleHours;
};