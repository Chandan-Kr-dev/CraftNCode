import mongoose from 'mongoose';

const playerSchema=new mongoose.Schema({
    Name:{
        typeof: String,
        required:true
    },
    Game1:{
        typeof: String,
        required:true,
        default:"No"
    },
    Game2:{
        typeof: String,
        required:true,
        default:"No"
    },
    Score1:{
        typeof: Number,
        required:true,
        default:0
    },
    Score2:{
        typeof: Number,
        required:true,
        default:0
    }
},{timestamps:true})

const Players=mongoose.model("Players",playerSchema)

module.exports=Players