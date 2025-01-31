import { userController } from '../controllers/userController.js';

export async function userRoutes(fastify, options) {
  fastify.get('/users', userController.getAllUsers);
  fastify.get('/user/:id', userController.getUserById);
  fastify.post('/register', userController.registerUser);
  fastify.put('/user/:id', userController.updateUser);
  fastify.delete('/user/:id', userController.deleteUser);
}
