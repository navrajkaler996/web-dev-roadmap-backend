import { getLinksByTopicIdHandler } from "../controllers/topic.controller.js";

const topicRoutes = (fastify, options, done) => {
  fastify.get("/links-by-topic-id/:topicId", getLinksByTopicIdHandler);
  done();
};

export default topicRoutes;
