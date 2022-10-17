'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      const {School, Learner} = models
      Teacher.belongsTo(School, {foreignKey:'school_id'})
      Teacher.belongsToMany(Learner, {
        foreignKey: 'teacher_id',
        joinTableAttributes: [],
        through: {model: 'Learner_Teachers', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'learner'
      })
    }
  }

  Teacher.init({
    teacherName: DataTypes.STRING,
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