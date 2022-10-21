'use strict';
const {Learner, Teacher, ScheduleHours, Topic, Class, Rooms, WeekDays} = require('../models')
module.exports = {
  async up(queryInterface, Sequelize) {
    const learnerId = await Learner.findAll()
    const teacherId = await Teacher.findAll()
    const hourId = await ScheduleHours.findAll()
    const topicId = await Topic.findAll()
    const classId = await Class.findAll()
    const roomId = await Rooms.findAll()
    const dayId = await WeekDays.findAll()

    console.log(learnerId, 'learnerId');
    console.log(teacherId, 'teacherId');
    console.log(hourId, 'hourId');
    console.log(topicId, 'topicId');
    console.log(classId, 'classId');
    console.log(roomId, 'roomId');
    console.log(dayId, 'dayId');

    // await queryInterface.bulkInsert('ClassLists', [{
    //   room_id: roomId.map(i => i.id),
    //   class_id: classId.map(i => i.id),
    //   teacher_id: teacherId.map(i => i.id),
    //   learner_id: learnerId.map(i => i.id),
    //   topic_id: topicId.map(i => i.id),
    //   scheduleHours_id: hourId.map(i => i.id),
    //   weekday_id: dayId.map(i => i.id),
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('ClassLists', null, {});

  }
};
