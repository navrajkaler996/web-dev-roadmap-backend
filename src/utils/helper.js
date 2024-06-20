import bcrypt from "bcrypt";

export const hashPassword = async (password, saltRounds) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const encryptedPassword = await bcrypt.hash(password, salt);

  return encryptedPassword;
};

export const comparePassword = async (password, encryptedPassword) => {
  let result = await bcrypt.compare(password, encryptedPassword);

  return result;
};
