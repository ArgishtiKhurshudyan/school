import express from 'express'
import { createClassHour, getClassHours } from "../controllers/classHour";

const router = express.Router()

router.post('/', createClassHour)
router.get('/', getClassHours)

export default router