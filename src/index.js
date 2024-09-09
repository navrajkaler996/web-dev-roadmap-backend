import Fastify from "fastify";
import fastifyCors from "@fastify/cors";

//Importing routes
import userRoutes from "./routes/user.routes.js";
import courseRoutes from "./routes/course.route.js";
import topicRoutes from "./routes/topic.route.js";

const fastify = Fastify({
  logger: true,
});

await fastify.register(fastifyCors, {
  origin: true,
});

// fastify.addHook("preHandler", verifyToken);

fastify.register(userRoutes, { prefix: "/api/v1/users/" });
fastify.register(courseRoutes, { prefix: "/api/v1/courses/" });
fastify.register(topicRoutes, { prefix: "/api/v1/topics/" });

try {
  fastify.listen({ port: 5000, host: "10.0.0.76" });
} catch (error) {
  fastify.log.error(error);
  process.exit(1);
}
