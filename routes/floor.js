import express from 'express'
import { createFloor, getFloor, updateFloor, deleteFloor } from "../controllers/floor";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createFloor)
router.get('/:id', verifyToken, getFloor)
router.put('/:id', verifyToken, updateFloor)
router.delete('/:id', verifyToken, deleteFloor)

export default  router