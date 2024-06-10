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
