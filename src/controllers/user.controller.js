import {
  getUserByEmail,
  getUserCoursesCompleted,
  getUserCoursesStarted,
  getUserTopicsCompleted,
  updateTopicStatus,
} from "../services/user.service.js";

export async function getUserByEmailHandler(request, reply) {
  try {
    const { params } = request;

    const { email } = params;

    const user = await getUserByEmail(email);

    if (user) {
      const userId = user.userId;
      //Fetching the courseIds for the courses started by the user
      const coursesStarted = await getUserCoursesStarted(userId);
      //Fetching the courseIds for the courses completed by the user
      const coursesCompleted = await getUserCoursesCompleted(userId);
      //Fetching the topicIDs for the topics completed by the user
      const topicsCompleted = await getUserTopicsCompleted(userId);

      const finalCoursesStarted = coursesStarted?.map(
        (course) => course.courseId
      );

      const finalCoursesCompleted = coursesCompleted?.map(
        (course) => course.courseId
      );

      const finalTopicsCompleted = topicsCompleted?.map(
        (topic) => topic.topicId
      );

      //Creating final user data
      const finalUser = {
        ...user,
        coursesStarted: finalCoursesStarted,
        coursesCompleted: finalCoursesCompleted,
        topicsCompleted: finalTopicsCompleted,
      };

      return finalUser;
    }

    return user;
  } catch (error) {
    reply.status(500).send(error);
  }
}

export async function updateTopicsHandler(request, reply) {
  try {
    const { body } = request;

    const { userId, topicId } = body;

    const response = await updateTopicStatus(userId, topicId);

    return response;
  } catch (error) {
    reply.status(500).send(error);
  }
}
