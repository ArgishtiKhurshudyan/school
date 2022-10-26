import express from 'express'
import { createDay, getDays, updateTDay, deleteDay } from "../controllers/weekday";

const router = express.Router()

router.post('/', createDay)
router.get('/', getDays)
router.put('/:id', updateTDay)
router.delete('/:id', deleteDay)

export default  router