import express from 'express'
import {createLearner, getLearner, deleteLearner, updateLearner} from "../controllers/learner";

const router = express.Router()

router.post('/', createLearner)
router.get('/:id', getLearner)
router.put('/:id', updateLearner)
router.delete('/:id', deleteLearner)

export default router