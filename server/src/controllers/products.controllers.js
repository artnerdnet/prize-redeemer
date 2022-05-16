import { getProduct, createProduct, getProducts, updateProduct, deleteProduct } from "../services/products.services.js"

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
