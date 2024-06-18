import {
  getUserByEmailHandler,
  loginHandler,
  signupHandler,
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
  fastify.post("/signup", signupHandler);

  done();
};

export default userRoutes;
