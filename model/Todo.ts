import mongoose from "mongoose";
import ITodo from "../interface/todoInterface";
import { Schema } from 'mongoose';

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
export default todoModel
