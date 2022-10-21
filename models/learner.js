'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learner extends Model {
    static associate(models) {
      const {Teacher, ClassList,Class} = models
      Learner.belongsTo(Class, {foreignKey: 'class_id'})
      Learner.hasMany(ClassList, {foreignKey:'leaner_id'})
      Learner.belongsToMany(Teacher, {
        foreignKey: 'learner_id',
        joinTableAttributes: [],
        through: {model: 'Learner_Teachers', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'teacher'
      })
    }
  }

  Learner.init({
  name: DataTypes.STRING,
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Classes',
        key: 'id'
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'Learner',
  });
  return Learner;
};