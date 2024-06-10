import Fastify from "fastify";
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.route.js";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

await fastify.register(fastifyCors, {
  origin: true,
});

fastify.register(userRoutes, { prefix: "/api/v1/users/" });
fastify.register(courseRoutes, { prefix: "/api/v1/courses/" });

try {
  fastify.listen({ port: 5000, host: "10.0.0.76" });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
