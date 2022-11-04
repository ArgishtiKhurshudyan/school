import { Role, User } from '../models'

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({ user: 'user created success!', data: user })
  } catch (err) {
    console.log("err", err)
    return  res.status(400).json({ error: "something went wrong" })
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id: id
      },
      include: {
        model: Role
      },
      attributes: {
        exclude: ['password', 'confirmPassword']
      }
    })
    return res.status(200).json({ data: user })
  } catch (err) {
    return  res.status(200).json({ error: "something went wrong!" })
  }
}


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.update(req.body, {
      where: {
        id: id
      }
    })
    const user = await User.findOne({
      where: {
        id: id
      }
    })
    if (!user) {
      return res.status(201).json({ message: "user not found!" })
    }
    return  res.status(200).json({ message: "user updated success!", data: user })
  } catch (err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id: id
      }
    })
    return  res.status(200).json({ message: "user deleted success!" })
  } catch(err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}