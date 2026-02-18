import express from "express";

import controller from "./complaints.controller.js";
import { validate } from "../../middleware/validationMiddleware.js";
import complaintSchema from "./complaints.schema.js";

const router = express.Router();

router.post("/", validate(complaintSchema), controller.create);

export default router