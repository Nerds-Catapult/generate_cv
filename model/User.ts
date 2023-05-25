const IUser = require('../interface/todoInterface')
const { model } = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    }
});


const userModel = model("Users", userSchema)
module.exports = { userModel }
