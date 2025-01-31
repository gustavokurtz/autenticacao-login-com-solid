import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
export const userService = {
    getAllUsers: async () => userRepository.findAll(),
    getUserById: async (id) => userRepository.findById(id),
    registerUser: async ({ name, email, password }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return userRepository.create({ name, email, password: hashedPassword });
    },
    updateUser: async (id, { name, password }) => {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        return userRepository.update(id, { name, password: hashedPassword });
    },
    deleteUser: async (id) => userRepository.delete(id),
};
