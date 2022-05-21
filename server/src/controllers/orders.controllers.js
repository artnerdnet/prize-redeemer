import { getOrder, getOrders, getOrdersByUserId, createOrder, updateOrder, deleteOrder } from "../services/orders.services.js";

import { getProduct } from '../services/products.services.js';

export const findAllOrders = (req, res, next) =>
  getOrders()
    .then((orders) => res.json({ ok: true, message: 'Orders found', orders }))
    .catch(next)

export const findOrderById = async (req, res, next) =>
  getOrder(Number(req.params.id))
    .then((orders) => {
      res.json({ ok: true, message: 'Orders by id found', orders })
    })
    .catch(next)

export const addOrder = async (req, res, next) =>
  createOrder()
    .then((order) => res.json({ ok: true, message: 'Order created', order }))
    .catch(next)

export const findAllOrdersByUserId = async (req, res, next) => {
  getOrdersByUserId(Number(req.params.id))
    .then((orders) => res.json({ ok: true, message: 'Orders by user id found', orders }))
    .catch(next)
}

export const getAllOrderedProducts = async (id) => {
  getOrdersByUserId(id)
    .then((orders) => orders.map(async (order) =>
      await getProduct(Number(order.productId))
    ))
    .then(products => products)
}

export const editOrder = async (req, res, next) =>
  updateOrder(req.body)
    .then((order) => res.json({ ok: true, message: 'Order updated', order }))
    .catch(next)

export const removeOrder = async (req, res, next) =>
  deleteOrder(req.body.id)
    .then((order) => res.json({ ok: true, message: 'Order deleted', order }))
    .catch(next)
