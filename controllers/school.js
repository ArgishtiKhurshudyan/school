import { School, Topic } from '../models'
import Joi from "joi";

const schoolNameValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 15 characters long!'
  }),
})
export const createSchool = async (req, res) => {
  try {
    const { error } = await schoolNameValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const school = await School.create({
      ...req.body,
    })
    return res.status(200).json({ school: 'school created success!', data: school })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getSchool = async (req, res) => {
  const { id } = req.params;
  try {
    const school = await School.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: school })
  } catch (err) {
    throw err
  }
}

export const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.update(req.body, {
      where: {
        id: id
      }
    })

    const school = await School.findOne({
      where: {
        id: id
      }
    })
    if (!school) {
      return res.status(201).json({ message: "school not found" })
    }

    return  res.status(200).json({ message:"school updated success!", data: topic })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    await School.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "school deleted success!" })
  } catch(err) {
    console.log("err", err)
  }
}