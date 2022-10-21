module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ScheduleHours', [{
      start_time: '09:00',
      end_time: '14:45',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ScheduleHours', null, {});

  }
};
