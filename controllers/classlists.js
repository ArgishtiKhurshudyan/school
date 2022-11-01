import { ClassList } from '../models'

export const createClassList = async (req, res) => {
    try {
    const classList = await ClassList.create({
      ...req.body,
    })
    return res.status(200).json({ classList: 'class list created success!', data: classList })
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const getClassLists = async (req, res) => {
    try {
    const classLists = await ClassList.findAll()
    return res.status(200).json({ data: classLists })
  } catch (err) {
    return res.status(401).json({ error: "something went wrong!" })
  }
}

export const updateClassList = async (req, res) => {
  try {
    const { id } = req.params;
    await ClassList.update(req.body, {
      where: {
        id: id
      }
    })

    const list = await ClassList.findOne({
      where: {
        id: id
      }
    })
    if (!list) {
      return res.status(200).json({ message: "class list is not found" })
    }
    return res.status(200).json({ message: "class list updated success!", data: list })
  } catch(err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await ClassList.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "class list deleted success!" })
  } catch(err) {
    console.log("err", err)
    return res.status(500).json({ error: 'Something went wrong!' })
  }
}