import { FastifyRequest, FastifyReply } from "fastify";
import { userService } from "../services/userService.js";

export const userController = {
  getAllUsers: async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await userService.getAllUsers();
    return reply.status(200).send(users);
  },

  getUserById: async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const { id } = request.params;
    const user = await userService.getUserById(id);
    return reply.status(200).send(user);
  },

  registerUser: async (request: FastifyRequest<{ Body: { name: string; email: string; password: string } }>, reply: FastifyReply) => {
    const user = await userService.registerUser(request.body);
    return reply.status(201).send(user);
  },

  updateUser: async (request: FastifyRequest<{ Params: { id: string }; Body: { name?: string; password?: string } }>, reply: FastifyReply) => {
    const { id } = request.params;
    const user = await userService.updateUser(id, request.body);
    return reply.status(200).send(user);
  },

  deleteUser: async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const { id } = request.params;
    await userService.deleteUser(id);
    return reply.status(200).send({ message: "Usuário excluído com sucesso!" });
  },
};
