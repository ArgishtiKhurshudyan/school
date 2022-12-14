import {Topic} from '../models'
import Joi from "joi";

const topicValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
})

export const createTopic = async (req, res) => {
  try {
    const {error} = await topicValidation.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: error.details ? error.details[0].message : error.message
      })
    }
    const topic = await Topic.create({
      ...req.body,
    })

    return res.status(200).json({topic: 'topic created success!', data: topic})
  } catch (err) {
    return res.status(500).json({error: 'Something went wrong!'})
  }
}

export const getTopic = async (req, res) => {
  const {id} = req.params;
  try {
    const topic = await Topic.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({data: topic})
  } catch (err) {
    return res.status(200).json({error: "something went wrong!"})
  }
}


export const getTopics = async (req, res) => {
  try {
    const topic = await Topic.findAll()
    return res.status(200).json({data: topic})
  } catch (err) {
    return res.status(200).json({error: "something went wrong!"})
  }
}


export const updateTopic = async (req, res) => {
  try {
    const {id} = req.params;
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
      return res.status(201).json({message: "topic not found"})
    }

    return res.status(200).json({message: "topic updated success!", data: topic})
  } catch (err) {
    console.log("err", err)
    return res.status(200).json({error: "something went wrong!"})
  }
}

export const deleteTopic = async (req, res) => {
  try {
    const {id} = req.params;
    await Topic.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({message: "topic deleted success!"})
  } catch (err) {
    console.log("err", err)
    return res.status(200).json({error: "something went wrong!"})
  }
}