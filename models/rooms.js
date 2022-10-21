'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    static associate(models) {
      const {ClassList, Floor} = models
      Rooms.belongsTo(Floor, {foreignKey: 'floor_id'})
      Rooms.hasOne(ClassList, {foreignKey: 'room_id'})
    }
  }

  Rooms.init({

  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};