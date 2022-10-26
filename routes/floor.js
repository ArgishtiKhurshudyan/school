import express from 'express'
import { createFloor, getFloor, updateFloor, deleteFloor } from "../controllers/floor";

const router = express.Router()

router.post('/', createFloor)
router.get('/:id', getFloor)
router.put('/:id', updateFloor)
router.delete('/:id', deleteFloor)

export default  router