const express = require('express');
const dotenv = require('dotenv');

const authRouter = require('./routes/auth');
const connectDB = require('./db');

const { json } = express;
const app = express();
dotenv.config()

connectDB();

app.use(json());
app.use('/api/auth', authRouter);

app.listen(3001, ()=> {
    console.log("Backend Server is running!");
})