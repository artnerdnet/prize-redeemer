import express from 'express';
import { productsRouter, usersRouter} from './routes/index.js';
import { User } from './models/user.models.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(User,'user!')
app.use('/', [
  usersRouter,
  productsRouter
])

app.listen(9229, ()=> console.log('running on port', 9229))