'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate(models) {
      const {Department} = models
      Library.belongsTo(Department, {foreignKey: 'department_id'})
    }
  }

  Library.init({
    libraryName: DataTypes.STRING,
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
    modelName: 'Library',
  });
  return Library;
};