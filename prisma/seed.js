import { PrismaClient } from "@prisma/client";
import {
  courseCompletedData,
  courseStartedData,
  coursesData,
  topicsData,
  userData,
} from "./data/data.js";

const prisma = new PrismaClient();

async function main() {
  const deleteCourses = await prisma.course.deleteMany();

  const deleteUsers = await prisma.user.deleteMany();
  const courses = await prisma.course.createMany({
    data: coursesData,
  });

  const topics = await prisma.topic.createMany({
    data: topicsData,
  });

  const users = await prisma.user.create({
    data: {
      userId: 0,
      firstName: "Navraj",
      email: "navrajkaler996@gmail.com",
      password: "admin",
    },
  });

  const coursesStarted = await prisma.courseStarted.createMany({
    data: courseStartedData,
  });

  const coursesCompleted = await prisma.courseCompleted.createMany({
    data: courseCompletedData,
  });

  console.log({ courses });
  console.log({ topics });
  console.log({ users });
  console.log({ coursesStarted });
  console.log({ coursesCompleted });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
