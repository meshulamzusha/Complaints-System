import jwt from "jsonwebtoken"
import service from "./auth.service.js";

const login = (req, res) => {
  const correct = service.isPasswordCorrect(req.body.password);

  if (correct) {
    const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      ok: true,
      code: 200,
      message: "You have successfully connected.",
      token: token,
    });
  }

  return res.status(401).json({
    ok: false,
    code: 401,
    message: "Unauthorized user",
  });
};

export default {
    login,
}
