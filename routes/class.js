import express from 'express'
import {createClass, getClass, updateClass, deleteClass, getAllClass} from "../controllers/class";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createClass)
router.get('/', verifyToken, getAllClass)
router.get('/:id', verifyToken, getClass)
router.put('/:id', verifyToken, updateClass)
router.delete('/:id', verifyToken, deleteClass)

export default  router