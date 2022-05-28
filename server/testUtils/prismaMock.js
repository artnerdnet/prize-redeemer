import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import { join } from 'path';
import { URL } from 'url';
import { v4 } from 'uuid';
import * as request from 'supertest';
import { app } from '../src/server.js';

const generateDatabaseURL = (schema) => {
  if (!process.env.DATABASE_URL_TEST) {
    throw new Error('please provide a database url');
  }
  const url = new URL(process.env.DATABASE_URL_TEST);
  url.searchParams.append('schema', schema);
  return url.toString();
};

let server;
const schemaId = `test-${v4()}`;
const prismaBinary = join(__dirname, '..', 'node_modules', '.bin', 'prisma');
const url = generateDatabaseURL(schemaId);
const schemaPath = join(__dirname, '..', 'prisma');

export const prisma = new PrismaClient({
  datasources: { db: { url } },
});

const config = {
  ...process.env,
  DATABASE_URL: url,
}

beforeEach(() => {
  server = app.listen(4000, () => {
    global.agent = request.agent(server);
  });
  execSync(`${prismaBinary} db push --schema=${schemaPath}/schema.prisma`, {
    env: config,
  });
});

afterEach(async () => {

  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE;`);
  await prisma.$disconnect();
  if (server) {
    await server.close();
  }
});