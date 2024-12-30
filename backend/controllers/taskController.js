import db from "../db/db.js";

const getAllTask = async (req,res)=> {
    try{
        const rows = await db.query('SELECT description FROM task')
        res.json({message:'up and running'})
        console.log(rows)
    } catch(err){
        console.log(err)
    }
}


const getOneTask = async (req,res) => {
    const {id} = req.params
    try{
        const rows = await db.query('SELECT description FROM task WHERE id = $1', [id])
    } catch(err){
        console.log(err)
    }
}


const addTask = async (req,res)=> {
    const {description} = req.body
    try{
        const rows = await db.query('INSERT INTO task(description) VALUES ($1) RETURNINNG *', [description])
    } catch(err){
        console.log(err)
    }
}

const updateTask = async (req,res)=> {
    const {id} = req.params
    const {description} = req.body
    try{
        const rows = await db.query('UPDATE task SET description = $2 WHERE id = $1 RETURNINNG *', [id,description])
    } catch(err){
        console.log(err)
    }
}

const deleteTask = async (req,res)=> {
    const {id} = req.params
    try{
        const rows = await db.query('DELETE FROM task WHERE id = $1', [id])
    } catch(err){
        console.log(err)
    }
}

export {getAllTask,getOneTask,  addTask,updateTask , deleteTask}
