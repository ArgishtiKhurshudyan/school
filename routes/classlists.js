import express from 'express'
import { createClassList, getClassLists, updateClassList, deleteList } from "../controllers/classlists";

const router = express.Router()

router.post('/', createClassList)
router.get('/', getClassLists)
router.put('/:id', updateClassList)
router.delete('/:id', deleteList)

export default router