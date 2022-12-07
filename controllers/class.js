import {Class, Teacher} from '../models'
import Joi from "joi";
import {Op} from "sequelize";


const classTypeValidation = Joi.object({
  class_type: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
})

export const createClass = async (req, res) => {
  try {
    // const {error} = await classTypeValidation.validate(req.body)
    // if (error) {
    //   return res.status(400).json({
    //     message: error.details ? error.details[0].message : error.message
    //   })
    // }
    const createClass = await Class.create({
      ...req.body,
    })


    const teacher = await Teacher.findAll({
      where: {
        id: {
          [Op.in]: req.body.teacher,
        }
      },
      attributes: ['id']
    })

    const teacherIds = teacher.map(i => i.id)
    const classTobeAssignTeacher = await Class.findOne({
      where: {
        id: createClass.id,
      },
      include: {
        model: Teacher,
        as: 'teacher'
      }
    })
    await classTobeAssignTeacher.addTeacher(teacherIds, {through: 'Class_Teachers'})

    const createdRoom = await Class.findOne({
      where: {id: createClass.id},
      include: {
        model: Teacher,
        as: "teacher"
      }
    })
    console.log(createdRoom)
    return res.status(200).json({class: 'class created success!', data: createdRoom})

  } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'Something went wrong!'})
  }
}

export const getClass = async (req, res) => {
  const {id} = req.params;
  try {
    const getClass = await Class.findOne({
      where: {
        id: id
      },
      include: {
        model: Teacher,
        as: "teacher"
      }
    })
    return res.status(200).json({data: getClass})
  } catch (err) {

    return res.status(400).json({error: "something went wrong!"})
  }
}

export const getAllClass = async (req, res) => {
  try {
    const getClass = await Class.findAll()
    return res.status(200).json({data: getClass})
  } catch (err) {
    console.log("erreeererer", err)
    return res.status(400).json({error: "something went wrong!"})
  }
}

export const updateClass = async (req, res) => {
  try {
    const {id} = req.params
    await Class.update(req.body, {
      where: {
        id: id
      }
    })
    const classRoom = await Class.findOne({
      where: {
        id: id
      }
    })
    if (!classRoom) {
      return res.status(400).json({message: 'class is not found'})
    }
    return res.status(200).json({message: 'class update success!', data: classRoom})
  } catch (err) {
    console.log("err", err)
    return res.status(400).json({error: "something went wrong!"})
  }
}


export const deleteClass = async (req, res) => {
  try {
    const {id} = req.params;
    await Class.destroy({
      where: {
        id: id
      },

    })
    return res.status(200).json({message: 'class deleted success!'})
  } catch (err) {
    console.log("err", err)
    return res.status(400).json({error: "something went wrong!"})
  }
}
