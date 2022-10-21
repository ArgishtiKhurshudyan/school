const {School} = require("../models");
module.exports = {
  async up(queryInterface, Sequelize) {
    const schoolId = await School.findAll()
    let floor = schoolId.map((i) => {
      return {
        floor: 'first floor',
        school_id: i.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('Floors', floor, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Floors', null, {});

  }
};
