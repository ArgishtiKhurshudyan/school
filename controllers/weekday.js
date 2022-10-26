import {Teacher, Topic, WeekDays} from '../models'

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

    return  res.status(200).json({ message:"week day updated success!", data: weekday })
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