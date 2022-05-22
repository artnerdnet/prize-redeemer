import { errorHandler } from "../lib/error.js"
import { getProduct, createProduct, getProducts, updateProduct, deleteProduct } from "../services/product/products.services.js"
import { getAllRedeemedProducts } from "./orders.controllers.js"
import { retrieveUserPoints } from "./users.controllers.js"
import { calcPoints, getStockStatus } from './helpers.js'

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
  const foundProducts = new Array()

  getProducts()
    .then((products) => {
      if (!products.length) {
        return errorHandler({ ...res, status: 404 }, 'No products found', 'Not found')
      }

      products.forEach(product => {
        foundProducts.push({ ...product, status: getStockStatus(product.stock) })
      })
    })
    .then(() => {
      getAllRedeemedProducts(Number(req.params.id))
        .then(redeemedProducts => {
          foundProducts.forEach(foundProduct => {
            if (foundProduct.status !== 0) {
              redeemedProducts.forEach(redeemedProduct => {
                if (foundProduct.id === redeemedProduct.id) {
                  foundProduct.status = 4
                }
              })
            }
          })
        })
    })
    .then(() => {
      retrieveUserPoints(Number(req.params.id))
        .then(userPoints => {
          foundProducts.forEach(product => {
            if (product.status !== 0) {
              product.status = calcPoints(product.points, userPoints)
            }
          })
        })
        .then(() => res.json({ ok: true, message: 'Products status by user found', foundProducts }))
    })
    .catch(next)
}
