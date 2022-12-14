'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      filePath: {
        type: Sequelize.STRING
      },
      gender_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Genders",
          key: 'id'
        }
      },
      imageableId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Image',
          key: 'id'
        },
        onDelete: "cascade",
      },
      topic_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Topics",
          key: 'id'
        }
      },

      school_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Schools",
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teachers');
  }
};