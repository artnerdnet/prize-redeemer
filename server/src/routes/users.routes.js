import express from 'express';
import { findAllUsers, findUserById, editUser, removeUser, addUser } from '#controllers/users/users.controllers.js';

const router = express.Router();

router.route('/user')
  .get(findUserById)
  .patch(editUser)
  .delete(removeUser)
  .post(addUser)

router.route('/users')
  .get(findAllUsers)

export default router;
