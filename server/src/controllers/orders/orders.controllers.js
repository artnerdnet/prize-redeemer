import { getOrder, getOrders, getOrdersByUserId, createOrder, updateOrder, deleteOrder } from '#services/orders/orders.services.js';
import { getAllOrderedProducts } from '#controllers/products/products.controllers.js';
import { errorHandler } from '#lib/errorHandler/error.js';

export const findAllOrders = (_, res) =>
	getOrders()
		.then((orders) => res.json({ ok: true, message: 'Orders found', orders }))
		.catch((error) => errorHandler(res, 'Error fetching orders', error));


export const findOrderById = async (req, res) =>
	getOrder(Number(req.body.id))
		.then((order) => {
			res.json({ ok: true, message: 'Order by id found', order });
		})
		.catch((error) => errorHandler(res, 'Error getting order by id', error));


export const addOrder = async (req, res) =>
	createOrder(req.body)
		.then((order) => res.json({ ok: true, message: 'Order created', order }))
		.catch((error) => errorHandler(res, 'Error adding order', error));


export const findAllOrdersByUserId = async (req, res) => {
	getOrdersByUserId(Number(req.params.id))
		.then((orders) => res.json({ ok: true, message: 'Orders by user id found', orders }))
		.catch((error) => errorHandler(res, 'Error fetching orders by user', error));
};

export const getAllRedeemedProducts = (id) =>
	getOrdersByUserId(id)
		.then((orders) => {
			if (orders.length) {
				return getAllOrderedProducts(orders);
			} else {
				throw new Error();
			}
		})
		.then(products => products)
		.catch((error) => { throw new Error(error); });

export const editOrder = async (req, res) =>
	updateOrder(req.body)
		.then((order) => res.json({ ok: true, message: 'Order updated', order }))
		.catch((error) => errorHandler(res, 'Error editing order', error));

export const removeOrder = async (req, res) =>
	deleteOrder(Number(req.body.id))
		.then(() => res.json({ ok: true, message: 'Order deleted', order: null }))
		.catch((error) => errorHandler(res, 'Error deleting order', error));

