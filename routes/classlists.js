import express from 'express'
import { createClassList, getClassLists } from "../controllers/classlists";

const router = express.Router()

router.post('/', createClassList)
router.get('/', getClassLists)

export default router