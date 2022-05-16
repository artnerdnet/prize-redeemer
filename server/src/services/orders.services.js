import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'order';

export const getOrders = () =>
  transactionHandler(TABLE_NAME).findAll()
    .then((orders) => orders)
    .catch(error => { throw new Error(error) })

export const getOrdersByUserId = async (userId) =>
  transactionHandler(TABLE_NAME).findAllByKey({ userId })
    .then((orders) => orders)
    .catch(error => { throw new Error(error) })

export const createOrder = async (data) =>
  transactionHandler(TABLE_NAME).create(data)
    .then((order) => order)
    .catch(error => { throw new Error(error) })

export const getOrder = async (id) =>
  transactionHandler(TABLE_NAME).findById(id)
    .then((order) => order)
    .catch(error => { throw new Error(error) })

export const updateOrder = async (data) =>
  transactionHandler(TABLE_NAME).update(data)
    .then((order) => order)
    .catch(error => { throw new Error(error) })

export const deleteOrder = async (id) =>
  transactionHandler(TABLE_NAME).destroy(id)
    .then((order) => order)
    .catch(error => { throw new Error(error) })
