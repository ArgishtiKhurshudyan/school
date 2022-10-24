'use strict';
const {Learner, Teacher, ScheduleHours, Topic, Class, Rooms, WeekDays} = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    const learnersList = await Learner.findAll({
      attributes: ['id'],
      limit: 2
    });
    const teacherList = await Teacher.findAll({
      attributes: ['id'],
      limit: 2
    });
    const hourList = await ScheduleHours.findAll({
      attributes: ['id'],
      limit: 2
    });
    const topicList = await Topic.findAll({
      attributes: ['id'],
      limit: 2
    });
    const classList = await Class.findAll({
      attributes: ['id'],
      limit: 2
    });
    const roomList = await Rooms.findAll({
      attributes: ['id'],
      limit: 2
    });
    const dayList = await WeekDays.findAll({
      attributes: ['id'],
      limit: 2
    });

    /* const learnersListId = learnerId.map((i) => {
       return {
         learner_id: i.id,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     })

     const teacherListId = teacherId.map((i) => {
       return {
         teacher_id: i.id,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     })

     const roomListId = roomId.map((i) => {
       return {
         room_id: i.id,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     })

     const hourListId = hourId.map((i) => {
       return {
         scheduleHours_id: i.id,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     })
     const classListId = classId.map((i) => {
       return {
         class_id: i.id,
         createdAt: new Date(),
         updatedAt: new Date(),
       }
     })*/

    await queryInterface.bulkInsert('ClassLists', [{
      learner_id: learnersList[0]?.id,
      room_id: roomList[0]?.id,
      class_id: classList[0]?.id,
      teacher_id: teacherList[0]?.id,
      topic_id: topicList[0]?.id,
      scheduleHours_id: hourList[0]?.id,
      weekday_id: dayList[0]?.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      // {
      //   learner_id: learnersList[1]?.id,
      //   room_id: roomList[1]?.id,
      //   class_id: classList[1]?.id,
      //   teacher_id: teacherList[1]?.id,
      //   topic_id: topicList[1]?.id,
      //   scheduleHours_id: hourList[1]?.id,
      //   weekday_id: dayList[1]?.id,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClassLists', null, {});
  }
};
