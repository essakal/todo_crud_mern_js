const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const taskSchema = new Schema({
    task: String
}, {collection: "task"})

module.exports = mongoose.model("task", taskSchema, "task")