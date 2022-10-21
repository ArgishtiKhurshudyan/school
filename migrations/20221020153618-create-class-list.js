'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Rooms",
          key: 'id'
        }
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Classes",
          key: 'id'
        }
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Teachers",
          key: 'id'
        }
      },
      learner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Learners",
          key: 'id'
        }
      },
      topic_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Topics",
          key: 'id'
        }
      },
      weekday_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "WeekDays",
          key: 'id'
        }
      },
      scheduleHours_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ScheduleHours",
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
    await queryInterface.dropTable('ClassLists');
  }
};