import { Teacher, Learner } from '../models'
import { Op } from "sequelize";

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      ...req.body,
    })
    const learner = await Learner.findAll({
      where: {
        id: {
          [Op.in]: req.body.learner
        }
      },
      attributes: ["id"]
    })
    const learnerIds = learner.map(i => i.id)
    const teacherToBeAssignLearner = await Teacher.findOne({
      where: {
        id: teacher.id
      },
      include: {
        model: Learner,
        as: "learner"
      }
    })
    await teacherToBeAssignLearner.addLearner( learnerIds, { through: "Learner_Teachers" } )
    const createdTeacher = await  Teacher.findOne({
      where: { id: teacher.id },
      include: {
        model: Learner,
        as: "learner"
      }
    })
    return res.status(200).json({ teacher: 'teacher created success!', data: createdTeacher })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ error: 'Something went wrong!' })
  }
}

export const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findOne({
      where: {
        id: id,
      },
      include: {
        model: Learner,
        as: "learner"
      }
    })
    return res.status(200).json({ data: teacher })
  } catch (err) {
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const updateTeacher = async (req, res) => {
   try {
     const { id } = req.params;
     await Teacher.update(req.body, {
       where: {
         id: id
       }
     })
     const teacher = await Teacher.findOne({
       where: {
         id: id
       }
     })
     if (!teacher) {
       return res.status(201).json({ message: "teacher not found" })
     }
     return  res.status(200).json({ message: "teacher updated success!", data: teacher })
   } catch (err) {
     console.log("err", err)
     return  res.status(200).json({ error: "something went wrong!" })
   }
}

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await Teacher.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({ message: "teacher hide success!" })
  } catch(err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}