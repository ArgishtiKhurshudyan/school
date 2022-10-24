import { School } from '../models'

export const createSchool = async (req, res) => {
  try {
    const school = await School.create({
      ...req.body,
    })
    return res.status(200).json({ school: 'school created success!', data: school })
  } catch (err) {
    return res.status(500).json({ errorMessage: 'Something went wrong!' })
  }
}

export const getSchool = async (req, res) => {
  const { id } = req.params;
  try {
    const school = await School.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: school })
  } catch (err) {
    throw err
  }
}