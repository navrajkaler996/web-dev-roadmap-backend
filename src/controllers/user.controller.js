import fastify from "fastify";
import {
  getUserByEmail,
  getUserCoursesCompleted,
  getUserCoursesStarted,
  getUserTopicsCompleted,
  signup,
  updateTopicStatus,
} from "../services/user.service.js";

import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../utils/helper.js";

const JWT_SECRET = process.env.JWT_SECRET;

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

export async function loginHandler(request, reply) {
  try {
    const { email, password } = request.body;

    const user = await getUserByEmail(email);

    if (!user) reply.status(404).send({ message: "Wrong credentials!" });

    //comparing recieved password with the stored hashed password
    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch)
      reply.status(404).send({ message: "Wrong credentials!" });

    const token = jwt.sign({ userId: user.userId }, JWT_SECRET, {
      expiresIn: "1h",
    });

    reply.status(200).send({ token });
  } catch (error) {
    reply.status(500).send(error);
  }
}

export async function signupHandler(request, reply) {
  try {
    const saltRounds = 10;
    const { email, firstName, password } = request.body;

    const userExists = await getUserByEmail(email);

    if (userExists) {
      reply.status(400).send({ message: "Email already registered!" });
    }

    const encryptedPassword = await hashPassword(password, saltRounds);

    const data = { email, firstName, password: encryptedPassword };

    const newUser = await signup(data);

    if (newUser.userId) {
      reply.status(200).send({ message: "Sign up successful!" });
    }
  } catch (error) {
    reply.status(error.statusCode || 500).send({ message: error.message });
  }
}
