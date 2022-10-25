import { Teacher } from '../models'

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create({
      ...req.body,
    })
    return res.status(200).json({ teacher: 'teacher created success!', data: teacher })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getTeacher = async (req, res) => {

  try {
    const { id } = req.params;
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

export const updateTeacher = async (req, res) => {
   try {
     const { id } = req.params;
    await Teacher.update(req.body, {
       where: {
         id: id
       }
     })

     const teacher = await Teacher.findOne({
       where: {
         id: id
       }
     })
     if (!teacher) {
       return res.status(201).json({ message: "teacher not found" })
     }

     return  res.status(200).json({ message:"teacher updated success!", data: teacher })
   } catch (err) {
     console.log("err", err)
   }
}

export const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
   await Teacher.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "teacher hide success!" })
  } catch(err) {
    console.log("err", err)
  }
}