import { app, server } from '../server.js';
import supertest from 'supertest';
// import { mocks as userMock } from '../../../../testUtils/mocks/users.js';
import { mocks as userMocks } from '../testUtils/mocks/users.js';

describe('with existing post', () => {
  let user;

  // console.log(prisma, 'prisma')

  // beforeEach(async () => {
  //   user = await prisma['User'].create({
  //     data: userMock[0],
  //   });
  // });

  afterAll(async () => {
    try {
      await server.close()
    } catch (error) {
      console.error(error)
      throw error;
    }
  })

  console.log(process.env, 'env')
  it('should return the users', async () => {
    const response = await supertest("http://localhost:3001").get('/users')

    const { ok, message, users } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Users found')
    expect(users).toMatchObject(userMocks);
  });
});