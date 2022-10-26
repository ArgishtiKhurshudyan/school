import {Floor, Teacher, Topic} from '../models'

export const createFloor = async (req, res) => {
  try {
    const floor = await Floor.create({
      ...req.body,
    })
    return res.status(200).json({ floor: 'floor created success!', data: floor })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getFloor = async (req, res) => {
  const { id } = req.params;
  try {
    const floor = await Floor.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: floor })
  } catch (err) {
    throw err
  }
}

export const updateFloor = async (req, res) => {
  try {
    const { id } = req.params;
    await Floor.update(req.body, {
      where: {
        id: id
      }
    })

    const floor = await Floor.findOne({
      where: {
        id: id
      }
    })
    if (!floor) {
      return res.status(201).json({ message: "floor not found" })
    }

    return  res.status(200).json({ message:"floor updated success!", data: floor })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteFloor = async (req, res) => {
  try {
    const { id } = req.params;
    await Floor.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "floor deleted success!" })
  } catch(err) {
    console.log("err", err)
  }
}