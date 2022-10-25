'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScheduleHours extends Model {
    static associate(models) {
      const { ClassList } = models
      ScheduleHours.hasOne(ClassList, {foreignKey: 'scheduleHours_id'})
    }
  }

  ScheduleHours.init({
    start_time: {
      type: DataTypes.STRING
    },
    end_time: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'ScheduleHours',
  });
  return ScheduleHours;
};