import express from 'express'
import { createClassList, getClassLists, updateClassList, deleteList } from "../controllers/classlists";
import {verifyToken} from "../verifyToken";

const router = express.Router()

router.post('/', verifyToken, createClassList)
router.get('/', verifyToken, getClassLists)
router.put('/:id', verifyToken, updateClassList)
router.delete('/:id', verifyToken, deleteList)

export default router