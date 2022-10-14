'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    static associate(models) {
      const {School} = models
      Floor.belongsTo(School, {foreignKey:'school_id'})
    }
  }
  Floor.init({
    firstFloor: DataTypes.STRING,
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
    modelName: 'Floor',
  });
  return Floor;
};