'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule_hours extends Model {
    static associate(models) {
     const {Rooms} = models
      Schedule_hours.hasOne(Rooms, {foreignKey:'schedule_id'})
    }
  }
  Schedule_hours.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule_hours',
  });
  return Schedule_hours;
};