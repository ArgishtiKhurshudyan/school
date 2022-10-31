'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      const { User } = models;
      Role.hasMany(User, { foreignKey: 'role_id' })
    }
  }
  Role.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};