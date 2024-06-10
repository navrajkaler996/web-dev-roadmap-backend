import { getCoursesHandler } from "../controllers/course.controller.js";

const courseRoutes = (fastify, options, done) => {
  fastify.get("/all", getCoursesHandler);

  done();
};

export default courseRoutes;
