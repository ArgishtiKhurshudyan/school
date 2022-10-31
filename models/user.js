'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
     const { Role } = models;
     User.belongsTo(Role, { foreignKey: 'role_id' })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onDelete: "cascade",
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};