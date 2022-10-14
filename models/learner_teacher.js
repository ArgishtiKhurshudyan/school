'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learner_Teacher extends Model {
    static associate(models) {
      // define association here
    }
  }
  Learner_Teacher.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Learner_Teacher',
  });
  return Learner_Teacher;
};