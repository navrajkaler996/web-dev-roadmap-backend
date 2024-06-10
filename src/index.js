import Fastify from "fastify";
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.route.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes, { prefix: "/api/v1/users/" });
fastify.register(courseRoutes, { prefix: "/api/v1/courses/" });

try {
  fastify.listen({ port: 5000 });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
