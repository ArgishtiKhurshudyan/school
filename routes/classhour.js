import express from 'express'
import { createClassHour, getClassHours, updateHour, deleteHour } from "../controllers/classHour";

const router = express.Router()

router.post('/', createClassHour)
router.get('/', getClassHours)
router.put('/:', updateHour)
router.delete('/:', deleteHour)

export default router