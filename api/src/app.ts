import express, { Request, Response } from 'express';
import compression from "compression";
import logger from '@/middleware/logger.middleware';
import { userRouter } from '@/routes/user.router'

const app = express()

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(userRouter)

export default app;