import { Teacher, Learner, Topic, Gender } from '../models'
import Joi from "joi";

const teacherValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
  gender: Joi.string(),
})

export const createTeacher = async (req, res) => {
  try {
    const { error } = await teacherValidation.validate({ name: req.body.name })
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const teacher = await Teacher.create({
      ...req.body,
    })
    const teacherFind = await Teacher.findOne({
      where: {
        id: teacher.id,
      },
      include: [
        {
          model: Gender,
        },
        {
          model: Topic,
        },
      ],
    })

    // const learner = await Learner.findAll({
    //   where: {
    //     id: {
    //       [Op.in]: req.body.learner
    //     }
    //   },
    //   attributes: ["id"]
    // })
    // const learnerIds = learner.map(i => i.id)
    // const teacherToBeAssignLearner = await Teacher.findOne({
    //   where: {
    //     id: teacher.id
    //   },
    //   include: {
    //     model: Learner,
    //     as: "learner"
    //   }
    // })
    // await teacherToBeAssignLearner.addLearner(learnerIds, { through: "Learner_Teachers" })
    // const createdTeacher = await Teacher.findOne({
    //   where: { id: teacher.id },
    //   include: {
    //     model: Learner,
    //     as: "learner"
    //   }
    // })
    // console.log("teacherfind", createdTeacher)

    return res.status(200).json({ teacher: 'teacher created success!', data: teacherFind })
  } catch (err) {
    console.log("error", err)
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
      include: [
        {
        model: Learner,
        as: "learner"
        },
        {
          model: Gender,
        },
        {
          model: Topic,
        },
      ]
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