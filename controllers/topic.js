import {Teacher, Topic} from '../models'

export const createTopic = async (req, res) => {
  try {
    const topic = await Topic.create({
      ...req.body,
    })
    return res.status(200).json({ topic: 'teacher created success!', data: topic })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getTopic = async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: topic })
  } catch (err) {
    throw err
  }
}

export const updateTopic = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.update(req.body, {
      where: {
        id: id
      }
    })

    const topic = await Topic.findOne({
      where: {
        id: id
      }
    })
    if (!topic) {
      return res.status(201).json({ message: "topic not found" })
    }

    return  res.status(200).json({ message:"topic updated success!", data: topic })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteTopic = async (req, res) => {
  try {
    const { id } = req.params;
    await Teacher.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "topic delete success!" })
  } catch(err) {
    console.log("err", err)
  }
}