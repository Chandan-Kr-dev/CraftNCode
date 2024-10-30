const mongoose = require('mongoose')

const dotenv = require('dotenv');

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

module.exports= connectdb;