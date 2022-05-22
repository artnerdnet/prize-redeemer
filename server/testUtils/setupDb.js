import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
import dotenv from 'dotenv'

import { execSync } from 'child_process';
import { join } from 'path';
// import { URL } from 'url';
// import { v4 } from 'uuid';
process.env.DATABASE_URL = process.env.DATABASE_URL_TEST

console.log('yepppp')
// make sure npx runs from the project root
const cwd = join(__dirname, '..');

const setupDatabase = async () => {
  console.log('Setup database');
  // push DB schema to database
  execSync(`npx prisma db push --force-reset`, {
    cwd,
    env: process.env
  });
  console.log('Database setup');
  return true;
};

const cleanDatabase = async () => {
  // clears database of all data
  execSync(`npx prisma db push --force-reset`, {
    cwd,
    env: process.env
  });
  console.log('Database reset');
  return true;
};

export const before = (async function () {
  console.log('Starting DB')
  prisma.$connect();
  this.timeout(15000);
  await setupDatabase();
})();

export const after = (async function () {
  this.timeout(15000);
  await cleanDatabase();
  prisma.$disconnect();   // disconnecting makes sure mocha will exit properly
});

