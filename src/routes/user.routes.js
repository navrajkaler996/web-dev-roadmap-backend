import { getUserByEmailHandler } from "../controllers/user.controller.js";

const userRoutes = (fastify, options, done) => {
  fastify.get("/get-user-by-email/:email", getUserByEmailHandler);

  done();
};

export default userRoutes;
