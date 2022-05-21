import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'user';

export const getUsers = () =>
  transactionHandler(TABLE_NAME).findAll()
    .then((users) => users)
    .catch(error => { throw new Error(error) })

export const createUser = async (data) =>
  transactionHandler(TABLE_NAME).create(data)
    .then((user) => user)
    .catch(error => { throw new Error(error) })

export const getUser = async (id) =>
  transactionHandler(TABLE_NAME).findById(id)
    .then((user) => user)
    .catch(error => { throw new Error(error) })


export const updateUser = async (data) =>
  transactionHandler(TABLE_NAME).update(data)
    .then((user) => user)
    .catch(error => { throw new Error(error) })

export const deleteUser = async (id) =>
  transactionHandler(TABLE_NAME).destroy(id)
    .then((user) => user)
    .catch(error => { throw new Error(error) })

export const getUserPoints = async (id) =>
  transactionHandler(TABLE_NAME).findById(id)
    .then((user) => user.points)
    .catch(error => { throw new Error(error) })
