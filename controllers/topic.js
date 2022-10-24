import { Topic } from '../models'

export const createTopic = async (req, res) => {
  try {
    const topic = await Topic.create({
      ...req.body,
    })
    return res.status(200).json({ topic: 'teacher created success!', data: topic })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
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