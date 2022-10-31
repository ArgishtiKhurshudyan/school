import express from 'express'
import { createClass, getClass, updateClass, deleteClass } from "../controllers/class";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createClass)
router.get('/:id', verifyToken, getClass)
router.put('/:id', verifyToken, updateClass)
router.delete('/:id', verifyToken, deleteClass)

export default  router