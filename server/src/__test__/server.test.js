import { app } from '../server.js';
import supertest from 'supertest';
// import { mocks as userMock } from '../../../../testUtils/mocks/users.js';

describe('with existing post', () => {
  let user;

  // console.log(prisma, 'prisma')

  // beforeEach(async () => {
  //   user = await prisma['User'].create({
  //     data: userMock[0],
  //   });
  // });

  it('should return the user', async () => {
    const response = await supertest(app).get('/users')
    const { users, message } = response._body
    expect(response.ok).toEqual(true)
    expect(response.code).toEqual(200)
    expect(message).toEqual('Users found')
    // expect(users)
    // expect(JSON.parse(response.code)).toMatchObject([user]);




  });
});