import { getCourses, getTopics } from "../services/course.service.js";

export async function getCoursesHandler(request, reply) {
  try {
    const courses = await getCourses();

    const topics = await getTopics();

    if (courses?.length > 0 && topics?.length > 0) {
      for (let i = 0; i < courses.length; i++) {
        let finalTopics = [];
        for (let j = 0; j < topics.length; j++) {
          if (courses[i].id === topics[j].courseId) {
            finalTopics.push(topics[j]);
          }
        }

        courses[i].topics = finalTopics;
      }
    }

    return courses;
  } catch (error) {
    reply.status(500).send(error);
  }
}
