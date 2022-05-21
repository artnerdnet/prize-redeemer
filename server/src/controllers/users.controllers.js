import { getUsers, getUser, createUser, updateUser, deleteUser, getUserPoints } from "../services/users.services.js"

export const findAllUsers = (req, res, next) =>
  getUsers()
    .then((users) => res.json({ ok: true, message: 'Users found', users }))
    .catch(next)

export const addUser = async (req, res, next) =>
  createUser(req.body)
    .then((user) => res.json({ ok: true, message: 'User created', user }))
    .catch(next)

export const findUserById = async (req, res, next) => {
  getUser(req.body.id)
    .then((user) => res.json({ ok: true, message: 'User found', user }))
    .catch(next)
}

export const editUser = async (req, res, next) =>
  updateUser(req.body)
    .then((user) => res.json({ ok: true, message: 'User updated', user }))
    .catch(next)

export const removeUser = async (req, res, next) =>
  deleteUser(req.body.id)
    .then((user) => res.json({ ok: true, message: 'User deleted', user }))
    .catch(next)

export const retrieveUserPoints = async (id) => {
  getUserPoints(id)
    .then((points) => points)
}
