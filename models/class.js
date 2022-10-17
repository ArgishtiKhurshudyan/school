'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      const {Classroom} = models
      Class.belongsToMany(Classroom, {
        foreignKey: 'class_id',
        joinTableAttributes: [],
        through: {model: 'Class_Classroom', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'classroom'
      })
    }
  }

  Class.init({
    className: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};