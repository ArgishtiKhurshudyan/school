import express from 'express'
import {createRoom, getRoom, updateRoom, deleteRoom } from "../controllers/room";

const router = express.Router()

router.post('/', createRoom)
router.get('/:id', getRoom)
router.put('/:id', updateRoom)
router.delete('/:id', getRoom)

export default  router