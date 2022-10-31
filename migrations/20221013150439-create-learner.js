'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Learners', {

        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        gender: {
          type: Sequelize.STRING
        },
        class_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Classes",
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      { timestamp: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Learners');
  }
};