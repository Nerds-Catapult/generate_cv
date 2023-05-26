import IUser from "../interface/userInterface";
import User from "../model/User";
import bcrypt from 'bcrypt'

import { Request, Response } from "express";

import "express-session";
import todoModel from "../model/Todo";



declare module "express-session" {
    interface sessionData {
        user: IUser
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            res.json({ message: " user already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            ...req.body,
            password: hashedPassword
        });
        const result = await user.save()
            .then((result) => res.send({ result: result }))
            .catch((error) => res.send({ error: "Invalid data passed" }))
    } catch (error) {
        console.error(error);
    }
}


// import { Request, Response } from 'express';
// import User from 'path/to/UserModel'; // Import the User model from its correct path
// import bcrypt from 'bcrypt';

export const login = async(req:Request, res:Response)=>{
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email});
        if(user &&   await bcrypt.compare(password, user.password)){
            req.session.user = user;
            const userData = await User.findById({_id:user._id});
            res.status(200).send({user: userData,message:"Now You Can Add Todo..."});
        }else{
            res.status(404).send({error:"User Not Found..."})
        }
    } catch (error) {
        console.log(error);
        
    }
}

