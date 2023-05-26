require('dotenv').config();
import  Express  from 'express';
const app = Express();
const port = process.env.PORT || 5000;

import connectDB  from './config/db'
connectDB()







app.listen(port, () => console.log(`Server running on port ${port}`));
