import express from "express";
import validateSchema from "../middleware/validateSchema.middleware";
import {
  registerUserSchema,
  activateUserSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
  loginUserSchema,
  changeOldPasswordSchema,
} from "../validation/auth.validation";
import {
  registerUser,
  activateUser,
  forgotPassword,
  resetPasswordHandler,
  login,
} from "../controller/auth/index.auth.controller";

const router = express.Router();

router.post("/register", validateSchema(registerUserSchema), registerUser);
router.post("/activate", validateSchema(activateUserSchema), activateUser);
router.post(
  "/forgotPassword",
  validateSchema(ForgotPasswordSchema),
  forgotPassword
);
router.post(
  "/resetPassword",
  validateSchema(ResetPasswordSchema),
  resetPasswordHandler
);
router.post("/login", validateSchema(loginUserSchema), login);

export default router;
