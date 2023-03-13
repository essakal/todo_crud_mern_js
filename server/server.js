const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

const taskModel = require("./model/taskModel")

require('./db/cnx')

app.get('/', (req, res)=>{
    taskModel.find()
        .then(tasks=>res.send(tasks))
        .catch(e=>res.send(e))
})

app.post('/add',(req, res)=>{
    data = req.body
    task = new taskModel(data)
    task.save()
        .then(()=>res.send("bien ajouter"))
        .catch(e=>res.send(e))
})

app.delete('/:task', (req, res)=>{
    task = req.params.task
    taskModel.findOneAndDelete({task: task})
        .then(()=>res.send('bien deleted'))
        .catch(e=>res.send(e))
})

app.put('/:task', (req, res)=>{
    task = req.params.task
    data = req.body
    taskModel.findOneAndUpdate({task:task}, data)
        .then(()=>res.send("bien modifier"))
        .catch(e=>res.send(e))
})

app.listen(5000, ()=>{
    console.log('server worked...')
})