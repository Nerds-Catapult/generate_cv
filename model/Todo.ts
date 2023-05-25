import { Schema } from "mongoose";

const ITodo = require('../interface/todoInterface');


const todoSchema = new mongoose.Schema({
    id: {
        type: "string"
    },
    desc: {
        type: "string",
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});


const todoModel = mongoose.model("Todos", todoSchema);
module.exports = { todoModel }
