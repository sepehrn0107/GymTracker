import express from "express";
import { registerExerciseSchema } from "../validation/exercise.validation";
import { registerExercise } from "../controller/exercise/register.exercise.controller";
import validateSchema from "../middleware/validateSchema.middleware";
import { AuthJWT } from "../middleware/authJWT.middleware";

const router = express.Router();

router.post(
  "/register",
  validateSchema(registerExerciseSchema),
  AuthJWT,
  registerExercise
);
export default router;
