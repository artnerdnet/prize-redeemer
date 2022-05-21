import { errorHandler } from "../lib/error.js"
import { getProduct, createProduct, getProducts, updateProduct, deleteProduct } from "../services/products.services.js"
import { getAllOrderedProducts } from "./orders.controllers.js"
import { retrieveUserPoints } from "./users.controllers.js"

// TODO pagination https://www.prisma.io/docs/concepts/components/prisma-client/pagination

export const findProducts = (req, res, next) =>
  getProducts()
    .then((products) => res.json({ ok: true, message: 'Products found', products }))
    .catch(next)

export const addProduct = async (req, res, next) =>
  createProduct(req.body)
    .then((product) => res.json({ ok: true, message: 'Product created', product }))
    .catch(next)

export const findProductById = async (req, res, next) =>
  getProduct(Number(req.body.id))
    .then((product) => res.json({ ok: true, message: 'Product found', product }))
    .catch(next)

export const editProduct = async (req, res, next) =>
  updateProduct(req.body)
    .then((product) => res.json({ ok: true, message: 'Product updated', product }))
    .catch(next)

export const removeProduct = async (req, res, next) =>
  deleteProduct(req.body.id)
    .then((product) => res.json({ ok: true, message: 'Product deleted', product }))
    .catch(next)

export const findProductsStatusByUser = async (req, res, next) => {
  let foundProducts;
  getProducts()
    .then((products) => {
      if (!products.length) {
        errorHandler({ ...res, status: 404 }, 'No products found', 'Not found')
        throw new Error
      }
      foundProducts = products.map(product => product.status = getStockStatus(product.stock))
    }
    )
    .then(() => {
      const test = getAllOrderedProducts(Number(req.params.id))
      console.log(test, 'test')
    })
    .then(() => {
      if (foundProducts.length) {
        const userPoints = retrieveUserPoints(Number(req.params.id));
        foundProducts = products.map(product => product.status = calcPoints(product.points, userPoints))
        console.log(foundProducts, '>>')
      }
    })
    .then(() => res.json({ ok: true, message: 'Products status by user found', foundProducts }))
    .catch(next)
}

const getStockStatus = (stock) => stock === 0 ? 0 : 1
const calcPoints = (productPoints, userPoints) => productPoints <= userPoints ? 2 : 3