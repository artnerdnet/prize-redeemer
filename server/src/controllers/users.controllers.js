import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'users';

// TODO pagination https://gist.github.com/andremsantos/33781f39444efddbf619514104c55f7d
// TODO validation with bookshelf 

export const getUsers = (req, res, next) => 
  transactionHandler(TABLE_NAME).findAll()
  .then((users) => res.json({ ok: true, message: 'Users found', users }))
  .catch(next)

export const createUser = async (req, res, next) =>
  transactionHandler(TABLE_NAME).create(req.body)
  .then((user) => res.json({ ok: true, message: 'User created', user }))
  .catch(next)

export const getUser = async (req, res, next) =>
  transactionHandler(TABLE_NAME).findById(req.body.id)
  .then((user) => res.json({ ok: true, message: 'User found', user }))
  .catch(next)

export const updateUser = async (req, res, next) =>
  transactionHandler(TABLE_NAME).update(req.body)
  .then((user) => res.json({ ok: true, message: 'User updated', user }))
  .catch(next)

export const deleteUser = async (req, res, next) =>
  transactionHandler(TABLE_NAME).destroy(req.body.id)
  .then((user) => res.json({ ok: true, message: 'User deleted', user }))
  .catch(next)
