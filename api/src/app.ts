import express, { Request, Response } from 'express';
import compression from "compression";
import MongoDB from './config/mongoDB';
import logger from './middleware/logger.middleware';
import User, { IUser } from './models/User.model';

const app = express()
const mongoDB = MongoDB;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.get('/users', (req: Request, res: Response) => {
  User.find( { }, (err, users: IUser[]) => {
    if(err) res.status(500).send(err);
    res.send(users)
  });
})
export default app;