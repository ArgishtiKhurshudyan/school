'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    static associate(models) {
      const {Class} = models
      Classroom.belongsToMany(Class, {
        foreignKey: 'classroom_id',
        joinTableAttributes: [],
        through: {model: 'Class_Classroom', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'class'
      })
    }
  }

  Classroom.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};