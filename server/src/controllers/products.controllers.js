import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'products';

// TODO pagination https://gist.github.com/andremsantos/33781f39444efddbf619514104c55f7d

export const getProducts = (req, res, next) => // TODO if 0 found
  transactionHandler(TABLE_NAME).findAll()
  .then((products) => res.json({ ok: true, message: 'Products found', products }))
  .catch(next)

export const createProduct = async (req, res, next) =>
  transactionHandler(TABLE_NAME).create(req.body)
  .then((product) => res.json({ ok: true, message: 'Product created', product }))
  .catch(next)

export const getProduct = async (req, res, next) =>
  transactionHandler(TABLE_NAME).findById(req.body.id)
  .then((product) => res.json({ ok: true, message: 'Product found', product }))
  .catch(next)

export const updateProduct = async (req, res, next) =>
  transactionHandler(TABLE_NAME).update(req.body)
  .then((product) => res.json({ ok: true, message: 'Product updated', product }))
  .catch(next)

export const deleteProduct = async (req, res, next) =>
  transactionHandler(TABLE_NAME).destroy(req.body.id)
  .then((product) => res.json({ ok: true, message: 'Product deleted', product }))
  .catch(next)
