import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";
const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/api/v1/users/" });

// fastify.get("/", (req, reply) => {
//   return {
//     message: "Hello World!",
//   };
// });

try {
  fastify.listen({ port: 5000 });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
