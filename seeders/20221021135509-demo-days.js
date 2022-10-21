

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('WeekDays', [{
      name: 'Friday',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WeekDays', null, {});

  }
};
