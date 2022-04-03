import knex from 'knex';
import { default as knexBookshelf } from 'bookshelf';
import config from './config.js';

const db = (knex)(config);
export const bookshelf = knexBookshelf(db);

export default db;
