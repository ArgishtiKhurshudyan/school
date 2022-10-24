import { Weekday } from '../models'

export const createDay = async (req, res) => {
  try {
    const weekday = await Weekday.create({
      ...req.body,
    })
    return res.status(200).json({weekday: 'teacher created success!', data: weekday})
  } catch (err) {
    return res.status(500).json({errorMessage: 'Something went wrong!'})
  }
}

export const getDays = async (req, res) => {
  try {
    const weekday = await Weekday.findAll()
    return res.status(200).json({data: weekday})
  } catch (err) {
    throw err
  }
}