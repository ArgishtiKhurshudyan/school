import { Floor } from '../models'

export const createFloor = async (req, res) => {
  try {
    const floor = await Floor.create({
      ...req.body,
    })
    return res.status(200).json({ floor: 'floor created success!', data: floor })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
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