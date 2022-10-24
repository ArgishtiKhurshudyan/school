import express from 'express'
import { createFloor, getFloor } from "../controllers/floor";

const router = express.Router()

router.post('/', createFloor)
router.get('/:id', getFloor)

export default  router