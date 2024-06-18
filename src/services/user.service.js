import prisma from "../utils/prisma.js";

export const getUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const getUserCoursesStarted = (userId) => {
  return prisma.courseStarted.findMany({
    where: { userId },
  });
};

export const getUserCoursesCompleted = (userId) => {
  return prisma.courseCompleted.findMany({
    where: { userId },
  });
};

export const getUserTopicsCompleted = (userId) => {
  return prisma.topicCompleted.findMany({
    where: { userId },
  });
};

export const updateTopicStatus = async (userId, topicId) => {
  const isTopicCompleted = await prisma.topicCompleted.findFirst({
    where: {
      userId,
      topicId,
    },
  });

  //If isTopicCompleted is not null,
  //that means topic is already completed
  //and needs to be deleted
  if (isTopicCompleted !== null) {
    const { topicCompletedId } = isTopicCompleted;
    return prisma.topicCompleted.delete({
      where: {
        topicCompletedId,
      },
    });
  } else {
    return prisma.topicCompleted.create({ data: { userId, topicId } });
  }
};

//user sign up
export const signup = (data) => {
  return prisma.user.create({
    data,
  });
};
