'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Learner extends Model {
    static associate(models) {
      const { Teacher, ClassList, Class, Gender, Image } = models
      // Learner.belongsTo(Class, { foreignKey: 'class_id' })
      Learner.hasMany(ClassList, { foreignKey: 'learner_id' })
      Learner.belongsTo(Gender, { foreignKey: "gender_id" })
      Learner.hasMany(Image, { foreignKey: 'imageableId' })
      Learner.belongsToMany(Teacher, {
        foreignKey: 'learner_id',
        joinTableAttributes: [],
        through: { model: 'Learner_Teachers', joinTableAttributes: [], attributes: ['id'] },
        paranoid: true, raw: true,
        as: 'teacher'
      })
    }
  }

  Learner.init({
    name: DataTypes.STRING,
    filePath: DataTypes.STRING,
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Classes',
        key: 'id'
      },
      onDelete: "cascade",
    },
    gender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genders',
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