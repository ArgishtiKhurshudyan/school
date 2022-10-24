import express from 'express'
import { createTeacher, getTeacher } from "../controllers/teacher";

const router = express.Router()

router.post('/', createTeacher)
router.get('/:id', getTeacher)

export default  router