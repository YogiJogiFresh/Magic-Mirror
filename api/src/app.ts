import express, { Request, Response } from 'express';
import compression from "compression";

const app = express()
const port = 3000

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.get('/user', (req: Request, res: Response) => {
  res.json({
    id: 1,
    username: "YogiFresh"
  })
})
app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
})

export default app;