'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassList extends Model {
    static associate(models) {
      const { Learner, Teacher, ScheduleHours, Topic, Class, Rooms, WeekDays } = models
      ClassList.belongsTo(Learner, {foreignKey: 'learner_id'})
      ClassList.belongsTo(Teacher, {foreignKey: 'teacher_id'})
      ClassList.belongsTo(ScheduleHours, {foreignKey: 'scheduleHours_id'})
      ClassList.belongsTo(Topic, {foreignKey: 'topic_id'})
      ClassList.belongsTo(Class, {foreignKey: 'class_id'})
      ClassList.belongsTo(Rooms, {foreignKey: 'room_id'})
      ClassList.belongsTo(WeekDays, {foreignKey: 'weekday_id'})
    }
  }

  ClassList.init({
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
  }, {
    sequelize,
    modelName: 'ClassList',
  });
  return ClassList;
};