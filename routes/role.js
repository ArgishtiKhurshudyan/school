import express from 'express'
import {createRole, deleteRole, getRole, updateRole} from "../controllers/role";


const router = express.Router()

router.post('/', createRole)
router.get('/:id', getRole)
router.put('/:id', updateRole)
router.delete('/:id', deleteRole)

export default router