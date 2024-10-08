import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {DBConnection} from './database/DBConnection.js';
import {errorMiddleware} from './error/error.js';
import router from './routes/reservationRoute.js'

const app = express();
dotenv.config();
app.use(cors({
    origin:true,
    methods:["POST"],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",router);

DBConnection();

app.use(errorMiddleware)

export default app;
