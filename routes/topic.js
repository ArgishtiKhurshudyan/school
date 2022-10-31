import express from 'express'
import { createTopic, getTopic, updateTopic, deleteTopic } from "../controllers/topic";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createTopic)
router.get('/:id', verifyToken, getTopic)
router.put('/:id', verifyToken, updateTopic)
router.delete('/:id',verifyToken, deleteTopic)

export default  router