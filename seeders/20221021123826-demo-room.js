const {Floor} = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {
    const floorId = await Floor.findAll()
    let rooms = floorId.map((i) => {
      return {
        floor_id: i.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('Rooms', rooms, [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
