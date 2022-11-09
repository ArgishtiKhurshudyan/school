import express from 'express'
import {createTeacher, getTeacher, deleteTeacher, updateTeacher, exportTeachers} from "../controllers/teacher";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createTeacher)
router.get('/export', verifyToken, exportTeachers)
router.get('/:id', verifyToken, getTeacher)
router.put('/:id', verifyToken, updateTeacher)
router.delete('/:id',verifyToken, deleteTeacher)


export default  router