'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      const {Audience, Library, Buffet} = models
      Department.belongsTo(Audience, {foreignKey: 'audience_id'})
      Department.hasOne(Library, {foreignKey: 'department_id'})
      Department.hasOne(Buffet, {foreignKey: 'department_id'})
    }
  }


  Department.init({
    name: DataTypes.STRING,
    audience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Audiences',
        key: 'id'
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};