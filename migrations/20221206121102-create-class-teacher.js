'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Class_Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Classes",
          key: 'id'
        },
        onDelete: "cascade",
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Teachers",
          key: 'id'
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Class_Teachers');
  }
};