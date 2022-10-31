import express from 'express'
import { createDay, getDays, updateTDay, deleteDay } from "../controllers/weekday";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createDay)
router.get('/', verifyToken, getDays)
router.put('/:id', verifyToken, updateTDay)
router.delete('/:id', verifyToken, deleteDay)

export default  router