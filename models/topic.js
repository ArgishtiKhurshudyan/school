'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate(models) {
      const { ClassList, Teacher } = models
      Topic.hasOne(ClassList, { foreignKey: 'topic_id' })
      Topic.hasOne(Teacher, { foreignKey: 'topic_id' })
    }
  }

  Topic.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};