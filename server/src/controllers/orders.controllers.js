import { transactionHandler } from '../helpers/utils.js';

const TABLE_NAME = 'order';

export const getOrders = (req, res, next) =>
  transactionHandler(TABLE_NAME).findAll()
    .then((orders) => res.json({ ok: true, message: 'Orders found', orders }))
    .catch(next)

export const getOrdersByUserId = async (req, res, next) =>
  transactionHandler(TABLE_NAME).findAllByKey({ userId: req.body.userId })
    .then((orders) => res.json({ ok: true, message: 'Orders by user found', orders }))
    .catch(next)

export const createOrder = async (req, res, next) =>
  transactionHandler(TABLE_NAME).create(req.body)
    .then((order) => res.json({ ok: true, message: 'Order created', order }))
    .catch(next)

export const getOrder = async (req, res, next) =>
  transactionHandler(TABLE_NAME).findById(req.body.id)
    .then((order) => res.json({ ok: true, message: 'Order found', order }))
    .catch(next)

export const updateOrder = async (req, res, next) =>
  transactionHandler(TABLE_NAME).update(req.body)
    .then((order) => res.json({ ok: true, message: 'Order updated', order }))
    .catch(next)

export const deleteOrder = async (req, res, next) =>
  transactionHandler(TABLE_NAME).destroy(req.body.id)
    .then((order) => res.json({ ok: true, message: 'Order deleted', order }))
    .catch(next)
