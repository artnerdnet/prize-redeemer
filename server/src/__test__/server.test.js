import { server } from '../server.js';

import supertest from 'supertest';

import { mocks as userMocks } from '../testUtils/mocks/users.js';
import { mocks as productMocks } from '../testUtils/mocks/products.js';
import { mocks as orderMocks } from '../testUtils/mocks/orders.js';
import { routes, BASE_PATH } from "../../config/constants.js";

afterAll(async () => {
  try {
    if (server) {
      server.close()
    }
  } catch (error) {
    console.error(error)
    throw error;
  }
})

describe('test users endpoints', () => {
  it('should return the users', async () => {
    const response = await supertest(BASE_PATH).get(routes.users.users)

    const { ok, message, users } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Users found')
    expect(users).toHaveLength(4)
  });
  it('should return user by id', async () => {
    const response = await supertest(BASE_PATH).get(routes.users.user).send({
      'id': 1
    })

    const { ok, message, user } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('User found')
    expect(user).toMatchObject(userMocks[0])
  });
  it('should add user', async () => {
    const newUser = {
      email: 'janis@gmail.com',
      name: 'Janis',
      lastName: 'Joplin',
      username: 'janis_j',
      password: '1234',
      points: 1000,
      picture: 'http://www.placeholder.com/image.jpg'
    }
    const response = await supertest(BASE_PATH).post(routes.users.user).send(newUser)

    const { ok, message, user } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('User created')
    expect(user).toMatchObject(newUser)
  });
  it('should remove user by id', async () => {
    const response = await supertest(BASE_PATH).delete(routes.users.user).send({ id: '1' })

    const { ok, message, user } = response._body;
    expect(ok).toEqual(true)
    expect(message).toEqual('User deleted')
    expect(user).toBe(null)
  });
});

describe('test products endpoints', () => {
  it('should return the products', async () => {
    const response = await supertest(BASE_PATH).get(routes.products.products)

    const { ok, message, products } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Products found')
    expect(products).toHaveLength(8)
  });
  it('should return product by id', async () => {
    const response = await supertest(BASE_PATH).get(routes.products.product).send({
      'id': 1
    })

    const { ok, message, product } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Product found')
    expect(product).toMatchObject(productMocks[0])
  });
  it('should add product', async () => {
    const newProduct = {
      code: 'ABC123',
      name: 'A new product',
      stock: 10,
      points: 100,
      image: 'http://www.placeholder.com/image.jpg'

    }
    const response = await supertest(BASE_PATH).post(routes.products.product).send(newProduct)

    const { ok, message, product } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Product created')
    expect(product).toMatchObject(newProduct)
  });
  it('should remove product by id', async () => {
    const response = await supertest(BASE_PATH).delete(routes.products.product).send({ id: '1' })

    const { ok, message, product } = response._body;
    expect(ok).toEqual(true)
    expect(message).toEqual('Product deleted')
    expect(product).toBe(null)
  });
  it('should get products of a specific user', async () => {
    const endpoint = routes.products.productsByUser.replace(":id", "2")

    const response = await supertest(BASE_PATH).get(endpoint)
    const { ok, message, products } = response._body;
    expect(ok).toEqual(true)
    expect(message).toEqual('Products status by user found')
  });
});

describe('test orders endpoints', () => {
  it('should return all the orders', async () => {
    const response = await supertest(BASE_PATH).get(routes.orders.orders)

    const { ok, message, orders } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Orders found')
    expect(orders).toHaveLength(13)
  });
  it('should add order', async () => {
    const newOrder = {
      userId: 3,
      productId: 2
    }
    const response = await supertest(BASE_PATH).post(routes.orders.order).send(newOrder)
    const { ok, message, order } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Order created')
    expect(order).toMatchObject(newOrder)
  });
  it('should return order by id', async () => {
    const response = await supertest(BASE_PATH).get(routes.orders.order).send({
      'id': 2
    })

    const { ok, message, order } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Order by id found')
    expect(order).toMatchObject(orderMocks[1])
  });
  it('should remove order by id', async () => {
    const response = await supertest(BASE_PATH).delete(routes.orders.order).send({ id: '2' })

    const { ok, message, order } = response._body;
    expect(ok).toEqual(true)
    expect(message).toEqual('Order deleted')
    expect(order).toBe(null)
  });
  it('should get orders of a specific user', async () => {
    const endpoint = routes.orders.ordersByUser.replace(":id", "2")
    const response = await supertest(BASE_PATH).get(endpoint)
    const { ok, message, orders } = response._body;

    expect(ok).toEqual(true)
    expect(message).toEqual('Orders by user id found')
    expect(orders).toHaveLength(9)
  });
});