import express from 'express'
import {createSchool, getSchool, updateSchool,deleteSchool} from "../controllers/school";

const router = express.Router()

router.post('/', createSchool)
router.get('/:id', getSchool)
router.put('/:id', updateSchool)
router.delete('/:id', deleteSchool)

export default  router