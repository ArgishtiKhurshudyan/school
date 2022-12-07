import express from 'express'
import {createLearner, getLearner, deleteLearner, updateLearner} from "../controllers/learner";
import {verifyToken} from "../verifyToken";
import {multerMiddleware} from "../multerMiddleware";

const router = express.Router()

router.post('/', [verifyToken, multerMiddleware], createLearner)
router.get('/:id', verifyToken, getLearner)
router.put('/:id', verifyToken, updateLearner)
router.delete('/:id', verifyToken, deleteLearner)

export default router