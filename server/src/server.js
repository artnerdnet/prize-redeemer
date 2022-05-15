import express from 'express';
import { productsRouter, usersRouter, ordersRouter } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', [
  usersRouter,
  productsRouter,
  ordersRouter
])

app.listen(PORT, () => console.log('running on port', PORT))