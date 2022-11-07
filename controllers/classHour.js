import { ScheduleHours } from '../models'
import Joi from "joi";

const classHourValidation = Joi.object({
  start_time: Joi.string().min(2).max(5).required().messages({
    'string.min': 'length must be at least 2 characters long!',
    'string.max': 'length must be less than or equal to 5 characters long!'
  }),
  end_time: Joi.string().min(2).max(5).required().messages({
    'string.min': 'length must be at least 2 characters long!',
    'string.max': 'length must be less than or equal to 5 characters long!'
  }),
})



export const createClassHour = async (req, res) => {
  try {
    const { error } = await classHourValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const hour = await ScheduleHours.create({
      ...req.body,
    })
    return res.status(200).json({ hour:' class hour created success!', data: hour })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getClassHours = async (req, res) => {
  try {
    const hour = await ScheduleHours.findAll()
    return res.status(200).json({ data: hour })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const updateHour = async (req, res) => {
  try {
    const { id } = req.params;
    await ScheduleHours.update(req.body, {
      where: {
        id: id
      }
    })
    const hour = await ScheduleHours.findOne({
      where: {
        id: id
      }
    })
    if (!hour) {
      return res.status(201).json({ message: "class hour not found" })
    }
    return  res.status(200).json({ message:"class hour updated success!", data: hour })
  } catch (err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const deleteHour = async (req, res) => {
  try {
    const { id } = req.params;
    await ScheduleHours.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "class hour deleted success!" })
  } catch(err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}