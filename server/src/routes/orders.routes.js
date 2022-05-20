import express from 'express';
import { findOrderById, editOrder, removeOrder, addOrder, findAllOrders, findAllOrdersByUserId } from '../controllers/orders.controllers.js';

const router = express.Router();

router.route('/order')
  .get(findOrderById)
  .patch(editOrder)
  .delete(removeOrder)
  .post(addOrder)

router.route('/orders')
  .get(findAllOrders)

router.route('/orders/user/:id')
  .get(findAllOrdersByUserId)

export default router;
