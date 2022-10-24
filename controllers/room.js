import { Rooms } from '../models'

export const createRoom = async (req, res) => {
  try {
    const room = await Rooms.create({
      ...req.body,
    })
    return res.status(200).json({ room: 'room created success!', data: room })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
  }
}

export const getRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Rooms.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: room })
  } catch (err) {
    throw err
  }
}