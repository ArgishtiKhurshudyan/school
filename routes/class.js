import express from 'express'
import { createClass, getClass } from "../controllers/class";

const router = express.Router()

router.post('/', createClass)
router.get('/:id', getClass)

export default  router