import "dotenv/config";

const isPasswordCorrect = (password) => {
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  return password === ADMIN_PASSWORD;
};

export default {
  isPasswordCorrect,
};
