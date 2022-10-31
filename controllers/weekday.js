import { WeekDays } from '../models'
import Joi from "joi";
const weekDaysValidation = Joi.object({
  name: Joi.string().min(3).max(10).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 10 characters long!'
  }),
})
export const createDay = async (req, res) => {
  try {
    const { error } = await weekDaysValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const weekday = await WeekDays.create({
      ...req.body,
    })
    return res.status(200).json({ weekday: 'day created success!', data: weekday })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getDays = async (req, res) => {
  try {
    const weekday = await WeekDays.findAll()
    if(!weekday) {
      return res.status(200).json({ message: "day is not found" })
    }
    return res.status(200).json({ data: weekday })
  } catch (err) {
    throw err
  }
}

export const updateTDay = async (req, res) => {
  try {
    const { id } = req.params;
    await WeekDays.update(req.body, {
      where: {
        id: id
      }
    })

    const weekday = await WeekDays.findOne({
      where: {
        id: id
      }
    })
    if (!weekday) {
      return res.status(201).json({ message: "week day not found" })
    }
    return  res.status(200).json({ message: "week day updated success!", data: weekday })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteDay = async (req, res) => {
  try {
    const { id } = req.params;
    await WeekDays.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "week day deleted success!" })
  } catch(err) {
    console.log("err", err)
  }
}