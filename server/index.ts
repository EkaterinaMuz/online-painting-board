import express, { Request, Response } from "express";
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.listen(PORT, () => {
    console.log('port is on', PORT)
})