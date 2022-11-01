'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      const { School, Learner, ClassList } = models
      Teacher.belongsTo(School, {foreignKey: 'school_id'})
      Teacher.hasOne(ClassList, {foreignKey: 'teacher_id'})
      Teacher.belongsToMany(Learner, {
        foreignKey: 'teacher_id',
        joinTableAttributes: [],
        through: { model: 'Learner_Teachers',  attributes: ['id'] },
        paranoid: true, raw: true,
        as: 'learner'
      })
    }
  }

  Teacher.init({
    name: DataTypes.STRING,
    profession: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    school_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Schools',
        key: 'id'
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};