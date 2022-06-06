import express from 'express';
import { productsRouter, usersRouter, ordersRouter } from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', [
	usersRouter,
	productsRouter,
	ordersRouter
]);

export const server = app.listen(PORT, HOST);