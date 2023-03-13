const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/TodoMern")
    .then(()=>console.log("db connect..."))
    .catch(e=>console.log(e))