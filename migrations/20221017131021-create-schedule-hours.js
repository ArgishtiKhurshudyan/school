'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedule_hours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      firstHour: {
        type: Sequelize.STRING,
        hour: "09:00"
      },
      secondHour: {
        type: Sequelize.STRING,
        hour: "09:55"
      },
      thirdHour: {
        type: Sequelize.STRING,
        hour: "10:45"
      },
      fourthHour: {
        type: Sequelize.STRING,
        hour: "11:35"
      },
      fifthHour: {
        type: Sequelize.STRING,
        hour: "12:25"
      },
      sixthHour:{
        type: Sequelize.STRING,
        hour: "13:10"
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
    await queryInterface.dropTable('Schedule_hours');
  }
};