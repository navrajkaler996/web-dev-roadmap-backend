import { PrismaClient } from "@prisma/client";
import {
  courseCompletedData,
  courseStartedData,
  coursesData,
  topicLinkData,
  topicsData,
  userData,
} from "./data/data.js";

const prisma = new PrismaClient();

async function main() {
  const deleteCourses = await prisma.course.deleteMany();

  const deleteUsers = await prisma.user.deleteMany();
  const deleteTopicsLink = await prisma.topicLink.deleteMany();
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

  //modifying topicLinkData to add topicId
  const firstTopic = await prisma.topic.findFirst();

  console.log(firstTopic);

  let modifiedTopicLinkData = topicLinkData.map((topicLink) => {
    topicLink.topicId = firstTopic.id;

    return topicLink;
  });

  console.log(modifiedTopicLinkData);

  // const topicLink = await prisma.topicLink.createMany({
  //   data: topicLinkData,
  // });

  console.log({ courses });
  console.log({ topics });
  console.log({ users });
  console.log({ coursesStarted });
  console.log({ coursesCompleted });
  // console.log({ topicLink });
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
