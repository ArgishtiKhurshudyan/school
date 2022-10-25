import express from 'express'
import { createClass, getClass, updateClass, deleteClass } from "../controllers/class";

const router = express.Router()

router.post('/', createClass)
router.get('/:id', getClass)
router.put('/:id', updateClass)
router.delete('/:id', deleteClass)

export default  router