import express from 'express'
import { createClassHour, getClassHours, updateHour, deleteHour } from "../controllers/classHour";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createClassHour)
router.get('/', verifyToken, getClassHours)
router.put('/:id', verifyToken, updateHour)
router.delete('/:id', verifyToken, deleteHour)

export default router