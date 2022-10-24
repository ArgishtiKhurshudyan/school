import { Learner } from '../models'

export const createLearner = async (req, res) => {
  try {
    const learner = await Learner.create({
      ...req.body,
    })
    return res.status(200).json({ teacher: 'teacher created success!', data: learner })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
  }
}

export const getLearner= async (req, res) => {
  const { id } = req.params;
  try {
    const learner = await Learner.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: learner })
  } catch (err) {
    throw err
  }
}