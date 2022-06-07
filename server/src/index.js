import express from 'express';
import { productsRouter, usersRouter, ordersRouter } from './routes/index.js';
import cors from 'cors';
import os from 'os';
console.log(os.hostname, 'os');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', [
	usersRouter,
	productsRouter,
	ordersRouter
]);

export const server = app.listen(PORT);