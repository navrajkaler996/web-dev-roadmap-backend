import { getUserByEmail } from "../controllers/user.controller.js";

const userRoutes = (fastify, options, done) => {
  fastify.get("/:email", getUserByEmail);

  done();
};

export default userRoutes;
