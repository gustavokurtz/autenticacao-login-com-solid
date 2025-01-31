import Fastify from 'fastify'
import { userRoutes } from './routes/userRoutes.js';

const fastify = Fastify({
  logger: true
})


fastify.register(userRoutes);


// Iniciar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT ?? 3000, host: '0.0.0.0' });
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT ?? 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();