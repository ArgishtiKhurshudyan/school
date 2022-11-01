import { Class } from '../models'
import Joi from "joi";

const classTypeValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
})

export const createClass = async (req, res) => {
  try {
    const { error } = await classTypeValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const createClass = await Class.create({
      ...req.body,
    })
    return res.status(200).json({ class: 'teacher created success!', data: createClass })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getClass = async (req, res) => {
  const { id } = req.params;
  try {
    const getClass = await Class.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: getClass })
  } catch (err) {
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const updateClass = async (req, res) => {
  try {
    const { id } = req.params
    await Class.update(req.body, {
      where: {
        id: id
      }
    })
    const classRoom = await  Class.findOne({
      where: {
        id: id
      }
    })
    if (!classRoom) {
      return res.status(201).json({ message: 'class is not found' })
    }
    return res.status(200).json({ message: 'class update success!', data: classRoom })
  } catch (err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}


export const deleteClass = async (req, res) => {
    try {
    const { id } = req.params;
    await Class.destroy({
      where: {
        id: id
      }
    })
    return res.status(201).json({ message: 'class deleted success!' })
  } catch (err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}
