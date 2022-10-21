const {Class} = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {

    const classId = await Class.findAll()
    const learnersName = ["Arshak", "Valodya", "Hracho"]
    const learnersList = classId.map((i) => {
      return {
        name: learnersName.map(i => i),
        gender: 'male',
        class_id: i.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert('Learners', learnersList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Learners', null, {});
  }
};
