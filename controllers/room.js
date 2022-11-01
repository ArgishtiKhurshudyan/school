import { Rooms } from '../models'

export const createRoom = async (req, res) => {
  try {
    const room = await Rooms.create({
      ...req.body,
    })
    return res.status(200).json({ room: 'room created success!', data: room })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
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
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await Rooms.update(req.body, {
      where: {
        id: id
      }
    })

    const room = await Rooms.findOne({
      where: {
        id: id
      }
    })
    if (!room) {
      return res.status(201).json({ message: "room not found" })
    }

    return  res.status(200).json({ message:"room updated success!", data: room })
  } catch (err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await Rooms.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "room deleted success!" })
  } catch(err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}