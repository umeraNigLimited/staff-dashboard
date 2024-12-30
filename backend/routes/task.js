import express from "express"
import {getAllTask,getOneTask,  addTask,updateTask , deleteTask} from "../controllers/taskController.js"

const router = express.Router();

//get all tasks
router.get('/', getAllTask)

//get One Task
router.get('/:id', getOneTask)

//add Task
router.post('/', addTask)

//update Task
router.patch('/id', updateTask)

//delete Task
router.delete('/:id', deleteTask)


export {router as taskRoute}