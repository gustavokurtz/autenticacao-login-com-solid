import { userService } from "../services/userService.js";
export const userController = {
    getAllUsers: async (request, reply) => {
        const users = await userService.getAllUsers();
        return reply.status(200).send(users);
    },
    getUserById: async (request, reply) => {
        const { id } = request.params;
        const user = await userService.getUserById(id);
        return reply.status(200).send(user);
    },
    registerUser: async (request, reply) => {
        const user = await userService.registerUser(request.body);
        return reply.status(201).send(user);
    },
    updateUser: async (request, reply) => {
        const { id } = request.params;
        const user = await userService.updateUser(id, request.body);
        return reply.status(200).send(user);
    },
    deleteUser: async (request, reply) => {
        const { id } = request.params;
        await userService.deleteUser(id);
        return reply.status(200).send({ message: "Usuário excluído com sucesso!" });
    },
};
