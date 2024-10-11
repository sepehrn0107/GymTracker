import express from "express";
import { createSessionSchema } from "../validation/session.validation";
import { registerSession } from "../controller/session/index.session.controller";
import validateSchema from "../middleware/validateSchema.middleware";
import { AuthJWT } from "../middleware/authJWT.middleware";

const router = express.Router();

router.post(
  "/register",
  validateSchema(createSessionSchema),
  AuthJWT,
  registerSession
);
