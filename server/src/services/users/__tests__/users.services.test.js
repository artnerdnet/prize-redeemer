// import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../../testUtils/prismaMock.js';
import { app } from '../../../server.js';
import supertest from 'supertest';
import { mocks as userMock } from '../../../../testUtils/mocks/users.js';

// const prisma = new PrismaClient()

describe('with existing post', () => {
  let user;

  beforeEach(async () => {
    user = await prisma.user.create({
      data: userMock[0],
    });
  });

  it('should return the user', async () => {
    const response = await supertest(app).get('/users').expect(200);
    expect(true).toBe(false)
    expect(JSON.parse(response.text)).toMatchObject([user]);
  });
});