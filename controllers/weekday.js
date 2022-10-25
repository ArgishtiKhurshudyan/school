import { WeekDays } from '../models'

export const createDay = async (req, res) => {
  try {
    const weekday = await WeekDays.create({
      ...req.body,
    })
    return res.status(200).json({ weekday: 'teacher created success!', data: weekday })
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