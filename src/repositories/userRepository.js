import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userRepository = {
  findAll: () => prisma.user.findMany(),

  findById: (id) => prisma.user.findUnique({ where: { id } }),

  create: (userData) => prisma.user.create({ data: userData }),

  update: (id, userData) =>
    prisma.user.update({ where: { id }, data: userData }),

  delete: (id) => prisma.user.delete({ where: { id } }),
};
