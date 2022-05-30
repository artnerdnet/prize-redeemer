export const BASE_PATH = process.env.NODE_ENV === 'production' ? process.env.BASE_PATH : `${process.env.BASE_PATH}:${process.env.PORT}`

export const routes = {
  users: {
    users: '/users',
    user: '/user',
  },
  products: {
    products: '/products',
    product: '/product',
    productsByUser: '/products/user/:id'
  },
  orders: {
    orders: '/orders',
    order: '/order',
    ordersByUser: '/orders/user/:id'
  }
}