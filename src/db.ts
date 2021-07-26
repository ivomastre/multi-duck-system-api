import mongoose from 'mongoose';
import { DATABASE_URL, DB_NAME } from './config/env';
import { CluesModel } from './models';

const connectDb = () => {
  return mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, dbName: DB_NAME });
};
 
const models = { CluesModel };
 
export { connectDb };
 
export default models;