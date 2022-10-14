'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buffet extends Model {
    static associate(models) {
      const {Department} = models
      Buffet.belongsTo(Department, {foreignKey: 'department_id'})
    }
  }

  Buffet.init({
    name: DataTypes.STRING,
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Departments',
        key: 'id'
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'Buffet',
  });
  return Buffet;
};