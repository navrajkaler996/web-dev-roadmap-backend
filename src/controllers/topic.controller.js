import { getLinksByTopicId } from "../services/topic.service.js";

export async function getLinksByTopicIdHandler(request, reply) {
  try {
    const { params } = request;

    const { topicId } = params;

    const topicLinks = await getLinksByTopicId(topicId);

    if (topicLinks) {
      return topicLinks;
    }
  } catch (error) {
    reply.status(500).send(error);
  }
}
