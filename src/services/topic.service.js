import prisma from "../utils/prisma.js";

export const getLinksByTopicId = (topicId) => {
  return prisma.topicLink.findMany({
    where: { topicId: Number(topicId) },
  });
};
