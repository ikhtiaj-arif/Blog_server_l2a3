import cors from 'cors';
import express, { Request, Response } from 'express';



const app = express();
const port = 3000;

//parser
app.use(express.json());
app.use(cors());

const getController = (req: Request, res: Response) => {
  res.send('Hello World!');

};

app.get('/', getController);


export default app;
