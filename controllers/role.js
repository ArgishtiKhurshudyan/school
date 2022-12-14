import { Role } from '../models'

export const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    return res.status(200).json({ role: 'role created success!', data: role })
  } catch (err) {
    console.log("err", err)
    return  res.status(400).json({ error: "something went wrong!" })
  }
}

export const getRole = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findOne({
      where: {
        id: id
      }
    })
    return res.status(200).json({ data: role })
  } catch (err) {
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    await Role.update(req.body, {
      where: {
        id: id
      }
    })
    const role = await Role.findOne({
      where: {
        id: id
      }
    })
    if (!role) {
      return res.status(201).json({ message: "role not found" })
    }
    return  res.status(200).json({ message: "role updated success!", data: role })
  } catch (err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    await Role.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "role deleted success!" })
  } catch(err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}