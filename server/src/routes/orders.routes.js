import express from 'express';
import { getOrders, getOrder, updateOrder, deleteOrder, createOrder } from '../controllers/orders.controllers.js';

const router = express.Router();

router.route('/order')
  .get(getOrder)
  .patch(updateOrder)
  .delete(deleteOrder)
  .post(createOrder)

router.route('/order')
  .post(createOrder)

router.route('/orders')
  .get(getOrders)

export default router;
