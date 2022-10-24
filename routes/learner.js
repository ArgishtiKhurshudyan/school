import express from 'express'
import { createLearner, getLearner } from "../controllers/learner";

const router = express.Router()

router.post('/', createLearner)
router.get('/:id', getLearner)

export default  router