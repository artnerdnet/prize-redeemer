import express from 'express';
import { productsRouter, usersRouter, ordersRouter } from './routes/index.js';
import cors from 'cors';
import helmet from 'helmet';
import xssClean from 'xss-clean';
import hpp from 'hpp';
import { rateLimit } from 'express-rate-limit';
// import { check } from 'express-validator'; move validation

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,    // 10 minutes
  max: 100                     // 100 requests per IP
});

app.use(limiter);

app.use('/', [
  usersRouter,
  productsRouter,
  ordersRouter
])

app.listen(PORT, () => console.log('running on port', PORT))