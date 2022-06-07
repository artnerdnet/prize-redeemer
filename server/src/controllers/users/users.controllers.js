import { getUsers, getUser, createUser, updateUser, deleteUser, getUserPoints } from '#services/users/users.services.js';
import { errorHandler } from '#lib/errorHandler/error.js';

export const findAllUsers = (_, res) => {
	console.log('looking for users');
	getUsers()
		.then((users) => res.json({ ok: true, message: 'Users found', users }))
		.catch((error) => errorHandler(res, 'Error getting users', error));
};

export const addUser = async (req, res) =>
	createUser(req.body)
		.then((user) => res.json({ ok: true, message: 'User created', user }))
		.catch((error) => errorHandler(res, 'Error creating user', error));

export const findUserById = async (req, res) => {
	const id = Number(req.body.id);
	getUser(id)
		.then((user) => res.json({ ok: true, message: 'User found', user }))
		.catch((error) => errorHandler(res, 'Error fetching user by id', error));
};

export const editUser = async (req, res) =>
	updateUser(req.body)
		.then((user) => res.json({ ok: true, message: 'User updated', user }))
		.catch((error) => errorHandler(res, 'Error editing user', error));

export const removeUser = async (req, res) =>
	deleteUser(Number(req.body.id))
		.then(() => res.json({ ok: true, message: 'User deleted', user: null }))
		.catch((error) => errorHandler(res, 'Error deleting user', error));

export const retrieveUserPoints = async (id) =>
	getUserPoints(id)
		.then((points) => points);

