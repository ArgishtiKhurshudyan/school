'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // define association here
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