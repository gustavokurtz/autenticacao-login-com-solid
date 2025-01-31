import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository.js";
import { User } from "../types/user.js";

export const userService = {
  getAllUsers: async (): Promise<User[]> => userRepository.findAll(),

  getUserById: async (id: string): Promise<User | null> => userRepository.findById(id),

  registerUser: async ({ name, email, password }: Omit<User, "id">): Promise<User> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return userRepository.create({ name, email, password: hashedPassword });
  },

  updateUser: async (id: string, { name, password }: Partial<User>): Promise<User> => {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    return userRepository.update(id, { name, password: hashedPassword });
  },

  deleteUser: async (id: string): Promise<void> => userRepository.delete(id),
};
