import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectdb=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGODBURL)
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectdb;