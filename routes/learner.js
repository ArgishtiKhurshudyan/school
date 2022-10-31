import express from 'express'
import {createLearner, getLearner, deleteLearner, updateLearner} from "../controllers/learner";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createLearner)
router.get('/:id', verifyToken, getLearner)
router.put('/:id', verifyToken, updateLearner)
router.delete('/:id', verifyToken, deleteLearner)

export default router