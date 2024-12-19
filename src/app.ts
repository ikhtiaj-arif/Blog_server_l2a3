import cors from 'cors';
import express, { Request, Response } from 'express';
import { userRoutes } from './modules/user/User.routes';
import errorHandler from './app/middlewears/ErrorHandler';

const app = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cors());


//application routes
app.use('/api', userRoutes);


const getController = (req: Request, res: Response) => {
  res.send('Hello World!');

};

app.get('/', getController);
app.use(errorHandler)


export default app;
