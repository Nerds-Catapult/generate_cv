import express, {Request, Response} from 'express'
import { login, register, createTodo } from '../controller/controller';
const userRouter = express();


import { isAuth } from '../middleware/isAuth';
import todoModel from '../model/Todo';
import User from '../model/User';


userRouter.get("/", async (req: Request, res: Response) => {
    const user = await User.aggregate([{ $lookup: { from: "todos", localField: "_id", foreignField: "userId", as: "todos" } }, { $unwind: { path: "$todos", preserveNullAndEmptyArrays: true } }])
    res.send(user)
});

userRouter.get("/", async (req: Request, res: Response) => {
    const user = await User.aggregate([{ $lookup: { from: "todos", localField: "_id", foreignField: "userId", as: "todos" } }, { $unwind: { path: "$todos", preserveNullAndEmptyArrays: true } }])
    res.send(user)
});

userRouter.get("/addTodo", async (req: Request, res: Response) => {
    const userData = req.session.user;
    res.send({ isVerify: true, message: "Add Todo", userData })
});

userRouter.get("/get", async (req: Request, res: Response) => { 
    const userData = req.session.user;
    const todos = await todoModel.find({userId: userData._id})
    res.send({ isVerify: true, message: , todos })
});


userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/createTodo", createTodo);


export default userRouter;
