import { Prisma, PrismaClient } from "@prisma/client";
import { User } from "../types/user.js";

const prisma = new PrismaClient();

export const userRepository = {
  findAll: async (): Promise<User[]> => prisma.user.findMany(),

  findById: async (id: string): Promise<User | null> => 
    prisma.user.findUnique({ where: { id } }),

  create: async (userData: Prisma.UserCreateInput): Promise<User> =>
    prisma.user.create({ data: userData }),

  update: async (id: string, userData: Partial<User>): Promise<User> => 
    prisma.user.update({ where: { id }, data: userData }),

  delete: async (id: string): Promise<void> => {
    await prisma.user.delete({ where: { id } });
  }
};
