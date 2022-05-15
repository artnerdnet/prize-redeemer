import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'product';

// TODO pagination https://www.prisma.io/docs/concepts/components/prisma-client/pagination

export const getProducts = (req, res, next) =>
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
