import { transactionHandler } from '#helpers/utils';

const TABLE_NAME = 'product';

export const getProducts = () =>
  transactionHandler(TABLE_NAME).findAll()
    .then((products) => products)
    .catch(error => { throw new Error(error) })

export const createProduct = async (data) =>
  transactionHandler(TABLE_NAME).create(data)
    .then((product) => product)
    .catch(error => { throw new Error(error) })

export const getProduct = async (id) =>
  transactionHandler(TABLE_NAME).findById(id)
    .then((product) => product)
    .catch(error => { throw new Error(error) })

export const updateProduct = async (data) =>
  transactionHandler(TABLE_NAME).update(data)
    .then((product) => product)
    .catch(error => { throw new Error(error) })

export const deleteProduct = async (id) =>
  transactionHandler(TABLE_NAME).destroy(id)
    .then((product) => product)
    .catch(error => { throw new Error(error) })
