'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    static associate(models) {
      const {Schedule_hour} = models
      Rooms.belongsToMany(Schedule_hour, {
        foreignKey: 'room_id',
        joinTableAttributes: [],
        through: {model: 'Hours_Rooms', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'scheduleHour'
      })
    }
  }

  Rooms.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};