import Fastify from "fastify";
import cors from "@fastify/cors";  // Importando CORS
import { userRoutes } from "./routes/userRoutes.js";

const PORT: number = 3000;
const HOST: string = "0.0.0.0";

const fastify = Fastify({ logger: true });

// Habilitando CORS para permitir requisições externas
fastify.register(cors, {
  origin: "*", // Permite todas as origens (ajuste para produção)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
});

fastify.register(userRoutes);

fastify.listen({ port: PORT, host: HOST }, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});
