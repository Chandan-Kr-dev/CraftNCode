
import { Users } from '../models/users.models.js';
import bcrypt from 'bcryptjs';

const login=async(req,res)=>{
    const {Email,Password}=req.body;
    console.log(req.body)
    try {
        const user=await Users.findOne({Email:Email})
        if(user){
            const isMatch=await bcrypt.compare(Password,user.Password)
            console.lof(isMatch)
            if(isMatch){
                res.json("Success")
            }else{
                res.json("Password incorrect")
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const signup=async(req,res)=>{
    const {Username,Email,password}=req.body;
    // console.log(req.body)
    try {
        const hasedPassword=await bcrypt.hash(password,10)
        Users.create({
            Name:Username,
            Email,Email,
            Password:hasedPassword
        })
        .then(()=>(
            res.json("User Created Successfully")
        ))
    } catch (error) {
        
    }
}

export default {login,signup};
// export default signup;