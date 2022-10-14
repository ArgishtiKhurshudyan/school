'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learner extends Model {
    static associate(models) {
      const {School,Teacher} = models
      Learner.belongsTo(School, {foreignKey:'school_id'})
      Learner.belongsToMany(Teacher, {
        foreignKey: 'learner_id',
        joinTableAttributes: [],
        through: {model: 'Learner_Teachers', joinTableAttributes: [], attributes: ['id']},
        paranoid: true, raw: true,
        as: 'colors'
      })
    }
  }

  Learner.init({
    learnerName: DataTypes.STRING,
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
    modelName: 'Learner',
  });
  return Learner;
};