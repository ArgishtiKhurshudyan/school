import express from 'express'
import {createRoom, getRoom, updateRoom, deleteRoom } from "../controllers/room";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createRoom)
router.get('/:id', verifyToken, getRoom)
router.put('/:id', verifyToken, updateRoom)
router.delete('/:id', verifyToken, getRoom)

export default  router