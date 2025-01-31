import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const userRepository = {
    findAll: async () => prisma.user.findMany(),
    findById: async (id) => prisma.user.findUnique({ where: { id } }),
    create: async (userData) => prisma.user.create({ data: userData }),
    update: async (id, userData) => prisma.user.update({ where: { id }, data: userData }),
    delete: async (id) => {
        await prisma.user.delete({ where: { id } });
    }
};
