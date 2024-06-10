import {
  getUserByEmail,
  getUserCoursesCompleted,
  getUserCoursesStarted,
} from "../services/user.service.js";

export async function getUserByEmailHandler(request, reply) {
  try {
    const { params } = request;

    const { email } = params;

    const user = await getUserByEmail(email);

    if (user) {
      const userId = user.userId;
      const coursesStarted = await getUserCoursesStarted(userId);
      const coursesCompleted = await getUserCoursesCompleted(userId);

      const finalCoursesStarted = coursesStarted?.map(
        (course) => course.courseId
      );

      const finalCoursesCompleted = coursesCompleted?.map(
        (course) => course.courseId
      );
      const finalUser = {
        ...user,
        coursesStarted: finalCoursesStarted,
        coursesCompleted: finalCoursesCompleted,
      };

      console.log(finalUser);
      return finalUser;
    }

    return user;
  } catch (error) {
    reply.status(500).send(error);
  }
}
