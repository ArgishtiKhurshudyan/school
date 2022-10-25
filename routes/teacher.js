import express from 'express'
import { createTeacher, getTeacher, deleteTeacher, updateTeacher } from "../controllers/teacher";

const router = express.Router()

router.post('/', createTeacher)
router.get('/:id', getTeacher)
router.put('/:id', updateTeacher)
router.delete('/:id', deleteTeacher)

export default  router