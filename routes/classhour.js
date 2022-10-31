import express from 'express'
import { createClassHour, getClassHours, updateHour, deleteHour } from "../controllers/classHour";

const router = express.Router()

router.post('/', createClassHour)
router.get('/', getClassHours)
router.put('/:id', updateHour)
router.delete('/:id', deleteHour)

export default router