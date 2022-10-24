import express from 'express'
import { createSchool, getSchool } from "../controllers/school";

const router = express.Router()

router.post('/', createSchool)
router.get('/:id', getSchool)

export default  router