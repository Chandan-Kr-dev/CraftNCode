import express from 'express';
import UserControllers from '../Controllers/UserControllers.js'
const UserRouter=express.Router()

UserRouter.post('/signup',UserControllers.signup)
UserRouter.post('/login',UserControllers.login)

export default UserRouter;