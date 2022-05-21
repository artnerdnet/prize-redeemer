import express from 'express';
import { findProducts, addProduct, findProductById, editProduct, removeProduct, findProductsStatusByUser } from '../controllers/products.controllers.js';

const router = express.Router();

router.route('/product')
  .get(findProductById)
  .patch(editProduct)
  .delete(removeProduct)
  .post(addProduct)

router.route('/products')
  .get(findProducts)

router.route('/products/user/:id')
  .get(findProductsStatusByUser)

export default router;
