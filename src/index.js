import Fastify from "fastify";
import userRoutes from "./routes/user.routes.JS";

const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/api/v1/users/" });

try {
  fastify.listen({ port: 5000 });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
