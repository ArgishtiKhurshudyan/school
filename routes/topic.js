import express from 'express'
import { createTopic, getTopic } from "../controllers/topic";

const router = express.Router()

router.post('/', createTopic)
router.get('/:id', getTopic)

export default  router