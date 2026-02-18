import service from "./complaints.service.js";

const create = (req, res) => {
  const complaint = service.create(req.body);

  if (!complaint) {
    return res.status(500).json({
      ok: false,
      code: 500,
      message: "Something went wrong with the complaint submission.",
    });
  }

  res.status(201).json({
    ok: true,
    code: 201,
    message: "The complaint was sent successfully.",
  });
};

export default {
    create,
}
