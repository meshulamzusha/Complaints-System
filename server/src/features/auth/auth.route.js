import express from "express"

import { validate } from "../../middleware/validationMiddleware.js"
import authController from "./auth.controller.js"
import AdminLoginSchema from "./auth.schema.js"

const router = express.Router()

router.post("/login", validate(AdminLoginSchema), authController.login)

export default router