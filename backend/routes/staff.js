import express from 'express'
import {getStaffs, getSingleStaff,  addStaffs, updateStaff, deleteStaffs} from "../controllers/staffController.js"

const router = express.Router()

router.get('/', getStaffs)

//Get Single Staff 
router.get('/:id', getSingleStaff)

router.post('/', addStaffs)

router.patch('/:id', updateStaff)

router.delete('/:id', deleteStaffs)

export { router as staffRouter}


//Staffs can Create, Read annd Write Leave, Messages, and Query
//They can only delete if the 