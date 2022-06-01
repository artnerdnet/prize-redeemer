import { errorHandler } from '#lib/errorHandler/error.js';
import { getProduct, createProduct, getProducts, updateProduct, deleteProduct } from '#services/products/products.services.js';
import { getAllRedeemedProducts } from '#controllers/orders/orders.controllers.js';
import { retrieveUserPoints } from '#controllers/users/users.controllers.js';
import { calcPoints, getStockStatus } from './helpers.js';

export const findProducts = (_, res) =>
	getProducts()
		.then((products) => res.json({ ok: true, message: 'Products found', products }))
		.catch((error) => errorHandler(res, 'Error fetching products', error));

export const addProduct = async (req, res) =>
	createProduct(req.body)
		.then((product) => res.json({ ok: true, message: 'Product created', product }))
		.catch((error) => errorHandler(res, 'Error adding product', error));

export const findProductById = async (req, res) =>
	getProduct(Number(req.body.id))
		.then((product) => res.json({ ok: true, message: 'Product found', product }))
		.catch((error) => errorHandler(res, 'Error fetching product', error));

export const editProduct = async (req, res) =>
	updateProduct(req.body)
		.then((product) => res.json({ ok: true, message: 'Product updated', product }))
		.catch((error) => errorHandler(res, 'Error editing product', error));

export const removeProduct = async (req, res) =>
	deleteProduct(Number(req.body.id))
		.then(() => res.json({ ok: true, message: 'Product deleted', product: null }))
		.catch((error) => errorHandler(res, 'Error deleting product', error));

export const findProductsStatusByUser = async (req, res) => {
	const foundProducts = new Array();

	getProducts()
		.then((products) => {
			if (!products.length) {
				return errorHandler({ ...res, status: 404 }, 'No products found', 'Not found');
			}

			products.forEach(product => {
				foundProducts.push({ ...product, status: getStockStatus(product.stock) });
			});
		})
		.then(() => {
			getAllRedeemedProducts(Number(req.params.id))
				.then(redeemedProducts => {
					foundProducts.forEach(foundProduct => {
						if (foundProduct.status !== 0) {
							redeemedProducts.forEach(redeemedProduct => {
								if (foundProduct.id === redeemedProduct.id) {
									foundProduct.status = 4;
								}
							});
						}
					});
				});
		})
		.then(() => {
			retrieveUserPoints(Number(req.params.id))
				.then(userPoints => {
					foundProducts.forEach(product => {
						if (product.status !== 0) {
							product.status = calcPoints(product.points, userPoints);
						}
					});
				})
				.then(() => res.json({ ok: true, message: 'Products status by user found', products: foundProducts }));
		})
		.catch((error) => errorHandler(res, 'Error getting products status', error));
};

export const getAllOrderedProducts = async (orders) => await Promise.all(
	orders.map(async (order) => {
		return await getProduct(order.productId);
	})
);