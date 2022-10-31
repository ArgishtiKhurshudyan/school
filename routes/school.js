import express from 'express'
import {createSchool, getSchool, updateSchool,deleteSchool} from "../controllers/school";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createSchool)
router.get('/:id', verifyToken, getSchool)
router.put('/:id', verifyToken, updateSchool)
router.delete('/:id', verifyToken, deleteSchool)

export default  router