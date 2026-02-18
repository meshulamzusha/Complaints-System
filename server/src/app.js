import express from "express";
import cors from "cors";

import complaintRoutes from "../src/features/complaints/complaints.route.js";
import authRoutes from "../src/features/auth/auth.route.js";

const app = express();

app.use(express.json(), cors());

app.use("/api/complaints", complaintRoutes);
app.use("/api/admin", authRoutes);

export default app;
