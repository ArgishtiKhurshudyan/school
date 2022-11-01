import { Floor } from '../models'
import Joi from "joi";

const floorValidation = Joi.object({
  floor: Joi.string().min(3).max(5).required().messages({
    'string.min': 'length must be at least 3 characters long!',
    'string.max': 'length must be less than or equal to 5 characters long!'
  }),
})
export const createFloor = async (req, res) => {
  try {
    const { error } = await floorValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
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
    return res.status(500).json({ error: 'Something went wrong!' })
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
    return res.status(500).json({ error: 'Something went wrong!' })
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
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}