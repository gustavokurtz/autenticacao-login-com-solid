import { userService } from '../services/userService.js';

export const userController = {
  getAllUsers: async (request, reply) => {
    try {
      const users = await userService.getAllUsers();
      return reply.status(200).send(users);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar usuários', details: error.message });
    }
  },

  getUserById: async (request, reply) => {
    try {
      const { id } = request.params;
      const user = await userService.getUserById(id);
      return reply.status(200).send(user);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar usuário', details: error.message });
    }
  },

  registerUser: async (request, reply) => {
    try {
      const user = await userService.registerUser(request.body);
      return reply.status(201).send({ message: 'Usuário criado!', user });
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao criar usuário', details: error.message });
    }
  },

  updateUser: async (request, reply) => {
    try {
      const { id } = request.params;
      const user = await userService.updateUser(id, request.body);
      return reply.status(200).send({ message: 'Usuário atualizado com sucesso!', user });
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao atualizar usuário', details: error.message });
    }
  },

  deleteUser: async (request, reply) => {
    try {
      const { id } = request.params;
      await userService.deleteUser(id);
      return reply.status(200).send({ message: 'Usuário excluído com sucesso!' });
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao deletar usuário', details: error.message });
    }
  },
};
