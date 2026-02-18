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

const getAll = async (req, res) => {
  const complaints = await service.getAll();

  if (!complaints) {
    return res.status(500).json({
      ok: false,
      code: 500,
      message: "Receiving complaints failed..",
    });
  }

  res.status(200).json({
    ok: true,
    code: 200,
    message: "The complaints was received successfully.",
    complaints: complaints,
  });
};

export default {
  create,
  getAll,
};
