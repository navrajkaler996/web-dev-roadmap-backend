import { getUserByEmail } from "../controllers/userController.js";

const userRoutes = (fastify, options, done) => {
  fastify.get("/:email", getUserByEmail);

  done();
};

export default userRoutes;
