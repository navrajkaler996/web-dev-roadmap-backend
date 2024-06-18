import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, reply) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
      throw new Error("No token provided");
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    return;
  } catch (error) {
    reply.code(403).send({ error: "Failed to authenticate token" });
  }
};

export default verifyToken;
