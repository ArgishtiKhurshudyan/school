import {Class} from '../models'

export const createClass = async (req, res) => {
  try {
    const createClass = await Class.create({
      ...req.body,
    })
    return res.status(200).json({class: 'teacher created success!', data: createClass})
  } catch (err) {
    return res.status(500).json({errorMessage: 'Something went wrong!'})
  }
}

export const getClass = async (req, res) => {
  const {id} = req.params;
  try {
    const getClass = await Class.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({data: getClass})
  } catch (err) {
    throw err
  }
}