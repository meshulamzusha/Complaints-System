import express from "express";
import cors from "cors";

import complaintRoutes from "../src/features/complaints/complaints.route.js"

const app = express();

app.use(express.json(), cors());

app.use('/api/complaints', complaintRoutes)

export default app;
