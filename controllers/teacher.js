import {Teacher, Learner, Topic, Gender, Image} from '../models'
import Joi from "joi";
import  fs from 'fs';
import { stringify } from 'csv-stringify';
import multer from "multer";

const teacherValidation = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name length must be at least 3 characters long!',
    'string.max': 'Name length must be less than or equal to 20 characters long!'
  }),
  gender: Joi.string(),
})

export const createTeacher = async (req, res) => {
  try {
    // const { error } = await teacherValidation.validate({ name: req.body.name })
    // if (error) {
    //   return res.status(400).json({
    //     message: error.details ? error.details[0].message : error.message
    //   })
    // }
    // const teacher = await Teacher.create({
    //   ...req.body,
    // })
    // const teacherFind = await Teacher.findOne({
    //   where: {
    //     id: teacher.id,
    //   },
    //   include: [
    //     {
    //       model: Gender,
    //     },
    //     {
    //       model: Topic,
    //     },
    //   ],
    // })


    const storage = await multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/');;
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
        console.log('filename', req);
      }
    });
    // const upload = multer({ storage: storage });
    const uploadImg = multer({storage: storage}).single('images')
    console.log(uploadImg)

    return res.status(200).json({ teacher: 'teacher created success!', data: 'teacherFind' })
  } catch (err) {
    console.log("error", err)
    return res.status(400).json({ error: 'Something went wrong!' })
  }
}

export const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findOne({
      where: {
        id: id,
      },
      include: [
        {
        model: Learner,
        as: "learner"
        },
        {
          model: Gender,
        },
        {
          model: Topic,
        },
        {
          model: Image
        }
      ]
    })
    return res.status(200).json({ data: teacher })
  } catch (err) {
    return  res.status(200).json({ error: "something went wrong!" })
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
     return  res.status(200).json({ message: "teacher updated success!", data: teacher })
   } catch (err) {
     console.log("err", err)
     return  res.status(200).json({ error: "something went wrong!" })
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
    return res.status(200).json({ message: "teacher hide success!" })
  } catch(err) {
    console.log("err", err)
    return  res.status(200).json({ error: "something went wrong!" })
  }
}


export const exportTeachers = async (req, res) => {
  const LINK = process.env.LINK
  try {
    const teachers = await Teacher.findAll({
      attributes: [ 'id', 'name', 'profession' ],
      raw: true,
    })
    if (!fs.existsSync('./resources/teacher-list')){
      fs.mkdirSync('./resources/teacher-list');
    }
    stringify(teachers, {
      header: true
    }, function (err, output) {
      fs.writeFile('./resources/teacher-list/teacher-data.csv', output, {}, function (){});
    })
    return res.status(200).json({ Link: LINK })
  } catch (err) {
    console.log('err', err)
  }
}