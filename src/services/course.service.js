import prisma from "../utils/prisma.js";

export const getCourses = () => {
  return prisma.course.findMany();
};

export const getTopics = () => {
  return prisma.topic.findMany();
};
