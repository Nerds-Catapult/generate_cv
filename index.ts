require('dotenv').config();
import  Express  from 'express';
const app = Express();
const port = process.env.PORT || 5000;

import connectDB  from './config/db'
import bodyParser from 'body-parser';
import session from 'express-session';
connectDB()

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    resave: false,
    secret: "somesessionsecrets",
    saveUninitialized: true
}));

import  userRouter  from './routers/routes';
app.use('/api', userRouter);





app.listen(port, () => console.log(`Server running on port ${port}`));
