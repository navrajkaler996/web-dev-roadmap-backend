import { PrismaClient } from "@prisma/client";
import { coursesData, topicsData } from "./data/data.js";

const prisma = new PrismaClient();

async function main() {
  const deleteCourses = await prisma.course.deleteMany();

  const courses = await prisma.course.createMany({
    data: coursesData,
  });

  const topics = await prisma.topic.createMany({
    data: topicsData,
  });

  console.log({ courses });
  console.log({ topics });
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
