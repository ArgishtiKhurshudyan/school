import { ClassList } from '../models'

export const createClassList = async (req, res) => {
  try {
    const classList = await ClassList.create({
      ...req.body,
    })
    return res.status(200).json({ classList: 'class list created success!', data: classList })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
  }
}

export const getClassLists = async (req, res) => {
  try {
    const classLists = await ClassList.findAll()

    return res.status(200).json({ data: classLists })
  } catch (err) {
    throw err
  }
}