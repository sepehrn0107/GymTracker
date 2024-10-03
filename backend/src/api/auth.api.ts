import express from "express";
import validateSchema from "../middleware/validateSchema.middleware";
import {
    registerUserSchema,
    activateUserSchema
} from "../validation/auth.validation";
import {
    registerUser,
    activateUser
} from '../controller/auth/index.auth.controller'

const router = express.Router();

router.post("/register", validateSchema(registerUserSchema), registerUser)
router.post("/activate", validateSchema(activateUserSchema), activateUser)

export default router;