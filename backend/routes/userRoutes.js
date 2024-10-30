const express=require('express');


const UserControllers=require('../Controllers/UserControllers.js')
const UserRouter=express.Router()

UserRouter.post('/signup',UserControllers.signup)
UserRouter.post('/login',UserControllers.login)

module.exports =UserRouter;