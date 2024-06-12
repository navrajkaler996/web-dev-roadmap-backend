import {
  getUserByEmailHandler,
  updateTopicsHandler,
} from "../controllers/user.controller.js";

const userRoutes = (fastify, options, done) => {
  fastify.get("/get-user-by-email/:email", getUserByEmailHandler);
  fastify.post("/update-topic", updateTopicsHandler);

  done();
};

export default userRoutes;
