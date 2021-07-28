import { connectDb } from './db';
import express, { Application } from 'express';
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import 'express-async-errors';
import notFoundHandler from './middleware/notFoundHandler';

class App {
  express: Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares = (): void => {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  };

  private routes = (): void => {
    this.express.use(routes);
    this.express.use(notFoundHandler);
    this.express.use(errorHandler);
  };

  private database = async (): Promise<void> => {
    await connectDb();
  };
}

export default App;
