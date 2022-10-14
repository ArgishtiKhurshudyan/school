'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audience extends Model {
    static associate(models) {
      const {School, Department} = models
      Audience.belongsTo(School, {foreignKey: 'school_id'})
      Audience.hasMany(Department, {foreignKey:'audience_id'})

    }
  }

  Audience.init({
    audienceName: DataTypes.STRING,
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
    modelName: 'Audience',
  });
  return Audience;
};