import { Learner } from '../models'

export const createLearner = async (req, res) => {
  try {
    const learner = await Learner.create({
      ...req.body,
    })
    return res.status(200).json({ learner: 'learner created success!', data: learner })
  } catch (err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getLearner = async (req, res) => {
  const {id} = req.params;
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

export const updateLearner = async (req, res) => {
  try {
    const {id} = req.params;

    await Learner.update(req.body, {
      where: {
        id: id
      }
    })
    const learner = await Learner.findOne({
      where: {
        id: id
      }
    })
    if (!learner) {
      return res.status(200).json({ message: "learner is not found" })
    }
    return res.status(200).json({ message: 'learner updated success!', data: learner })
  } catch (err) {
    console.log("err", err)
  }
}

export const deleteLearner = async (req, res) => {
  try {
    const {id} = req.params;
    await Learner.destroy({
      where: {
        id: id
      }
    })
    res.status(200).json({ message: "learner hide  success!" })
  } catch (err) {
    console.log("err", err)
  }
}