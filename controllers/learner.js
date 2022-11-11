import { Learner, Teacher, Gender, Image } from '../models'
import Joi from "joi"

const learnerValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
  gender: Joi.string(),
})

export const createLearner = async (req, res) => {
  try {
    const { error } = await learnerValidation.validate({ name: req.body.name })
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const learner = await Learner.create({
      ...req.body,
    })

    const learnerFind = await Learner.findOne({
      where: {
        id: learner.id
      },
      include: {
        model: Gender
      }
    })
    // const teacher = await Teacher.findAll({
    //   where: {
    //     id: {
    //       [Op.in]: req.body.teacher
    //     }
    //   },
    //   attributes: ["id"]
    // })
    //
    // const teacherIds = teacher.map(i => i.id)
    // const learnerToBeAssignTeacher = await Learner.findOne({
    //   where: {
    //     id: learner.id
    //   },
    //   include: {
    //     model: Teacher,
    //     as: "teacher"
    //   }
    // })
    // await learnerToBeAssignTeacher.addTeacher(teacherIds, { through: "Learner_Teachers" })
    // const createdLearner = await  Learner.findOne({
    //   where: { id: learner.id },
    //   include: {
    //     model: Teacher,
    //     as: "teacher"
    //   }
    // })
    return res.status(200).json({ learner: 'learner created success!', data: learnerFind })
  } catch (err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getLearner = async (req, res) => {
  try {
    const { id } = req.params;
    const learner = await Learner.findOne({
      where: {
        id: id
      },
      include: [{
        model: Teacher,
        as: "teacher"
      },
        {
          model: Gender
        } ,
        {
          model: Image
        }
      ]
    })
    return res.status(200).json({ data: learner })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const updateLearner = async (req, res) => {
  try {
    const { id } = req.params;
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
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const deleteLearner = async (req, res) => {
  try {
    const { id } = req.params;
    await Learner.destroy({
      where: {
        id: id
      }
    })
    res.status(200).json({ message: "learner hide success!" })
  } catch (err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}