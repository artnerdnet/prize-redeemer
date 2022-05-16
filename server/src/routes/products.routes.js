import express from 'express';
import { findProducts, addProduct, findProductById, editProduct, removeProduct } from '../controllers/products.controllers.js';

const router = express.Router();

router.route('/product')
  .get(findProductById)
  .patch(editProduct)
  .delete(removeProduct)
  .post(addProduct)

router.route('/products')
  .get(findProducts)

export default router;
