export async function getUserByEmail(request, reply) {
  try {
    reply.send({ message: "get user by email" });
  } catch (error) {
    reply.status(500).send(error);
  }
}
