import { Teacher } from '../models'

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      ...req.body,
    })
    return res.status(200).json({teacher: 'teacher created success!', data: teacher})
  } catch (err) {
    return res.status(500).json({errorMessage: 'Something went wrong!'})
  }
}

export const getTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: teacher })
  } catch (err) {
    throw err
  }
}