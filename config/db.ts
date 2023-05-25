require('dotenv').config()
const mongoose = require('mongoose')


mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw new Error(String(error))
    }
}


module.exports = connectDB
