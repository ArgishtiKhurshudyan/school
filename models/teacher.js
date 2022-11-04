'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      const { School, Learner, ClassList, Gender, Topic } = models
      Teacher.belongsTo(School, { foreignKey: 'school_id' })
      Teacher.hasOne(ClassList, { foreignKey: 'teacher_id' })
      Teacher.belongsTo(Gender, { foreignKey: 'gender_id' })
      Teacher.belongsTo(Topic, { foreignKey: 'topic_id' })
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
    gender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genders',
        key: 'id'
      },
      onDelete: "cascade",
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
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