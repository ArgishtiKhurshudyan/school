import { Learner, Teacher } from '../models'
import {Op} from "sequelize";

export const createLearner = async (req, res) => {
  try {
    const learner = await Learner.create({
      ...req.body,
    })
    const teacher = await Teacher.findAll({
      where: {
        id: {
          [Op.in]: req.body.teacher
        }
      },
      attributes: ["id"]
    })

    const teacherIds = teacher.map(i => i.id)
    const learnerToBeAssignTeacher = await Learner.findOne({
      where: {
        id: learner.id
      },
      include: {
        model:Teacher,
        as:"teacher"
      }
    })
    await learnerToBeAssignTeacher.addTeacher(teacherIds, { hrough: "Learner_Teachers" })
    const createdLearner = await  Learner.findOne({
      where: { id: learner.id },
      include: {
        model: Teacher,
        as:"teacher"
      }
    })
    return res.status(200).json({ learner: 'learner created success!', data: createdLearner })
  } catch (err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getLearner = async (req, res) => {
  const {id} = req.params;
  try {
    const learner = await Learner.findOne({
      where: {
        id: id
      },
      include: {
        model: Teacher,
        as: "teacher"
      }
    })
    return res.status(200).json({ data: learner })
  } catch (err) {
    throw err
  }
}

export const updateLearner = async (req, res) => {
  try {
    const {id} = req.params;

    await Learner.update(req.body, {
      where: {
        id: id
      }
    })
    const learner = await Learner.findOne({
      where: {
        id: id
      }
    })
    if (!learner) {
      return res.status(200).json({ message: "learner is not found" })
    }
    return res.status(200).json({ message: 'learner updated success!', data: learner })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteLearner = async (req, res) => {
  try {
    const {id} = req.params;
    await Learner.destroy({
      where: {
        id: id
      }
    })
    res.status(200).json({ message: "learner hide  success!" })
  } catch (err) {
    console.log("err", err)
  }
}