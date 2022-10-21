
const {School} = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    const schoolId = await School.findAll()
    let teacherLists = schoolId.map((i) => {
      return {
        name: 'Ruzanna Alaverdyan',
        profession: "Chimia",
        gender: 'female',
        school_id: i.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('Teachers', teacherLists, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
