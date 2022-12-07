'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      const { Learner, ClassList, Teacher } = models
      // Class.hasMany(Learner, {foreignKey: 'class_id'})
      // Class.hasOne(ClassList, {foreignKey: 'class_id'})
      Class.belongsToMany(Teacher, {
        foreignKey: 'class_id',
        joinTableAttributes: [],
        through: {model: 'Class_Teachers', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'teacher'
      })
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