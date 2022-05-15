import express from 'express';
import { getUsers, getUser, updateUser, deleteUser, createUser } from '../controllers/users.controllers.js';

const router = express.Router();

router.route('/user')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)
  .post(createUser)

router.route('/user')
  .post(createUser)

router.route('/users')
  .get(getUsers)

export default router;
