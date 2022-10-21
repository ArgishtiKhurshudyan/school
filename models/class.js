'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      const {Learner, ClassList} = models
      Class.hasMany(Learner, { foreignKey: 'class_id' })
      Class.hasOne(ClassList, {foreignKey: 'class_id'})
    }
  }

  Class.init({
    class_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
  });

  return Class;
};