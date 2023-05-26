import mongoose from "mongoose";




const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Succesfully Pinged deployment at: ${conn.connection.host}`)
    } catch (error) {
        throw new Error(String(error))
    }
}


export default connectDB
