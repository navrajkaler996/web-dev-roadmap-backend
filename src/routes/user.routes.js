import {
  getUserByEmailHandler,
  loginHandler,
  updateTopicsHandler,
} from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const userRoutes = (fastify, options, done) => {
  fastify.get(
    "/get-user-by-email/:email",
    { preHandler: verifyToken },
    getUserByEmailHandler
  );
  fastify.post("/update-topic", updateTopicsHandler);
  fastify.post("/login", loginHandler);

  done();
};

export default userRoutes;
