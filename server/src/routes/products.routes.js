import express from 'express';
import { getProducts, getProduct, updateProduct, deleteProduct, createProduct } from '../controllers/products.controllers.js';

const router = express.Router();

router.route('/product')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
  .post(createProduct)

router.route('/product')
  .post(createProduct)

router.route('/products')
  .get(getProducts)

export default router;
