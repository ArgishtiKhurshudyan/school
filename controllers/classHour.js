import { ScheduleHours } from '../models'

export const createClassHour= async (req, res) => {
  try {
    const hour = await ScheduleHours.create({
      ...req.body,
    })
    return res.status(200).json({ hour:' class hour created success!', data: hour })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
  }
}

export const getClassHours= async (req, res) => {
  try {
    const hour = await ScheduleHours.findAll()
    return res.status(200).json({ data: hour })
  } catch (err) {
    throw err
  }
}