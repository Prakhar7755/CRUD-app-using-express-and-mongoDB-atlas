import express from 'express';
import {
  getAllUsers,
  createUser,
  getUserById,
  deleteById,
  updateUserById,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUserById);
router.delete('/users/:id', deleteById);

export default router;
