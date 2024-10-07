import express from "express";
import { registerExerciseSchema } from "../validation/exercise.validation";
import { registerExercise } from "../controller/exercise/register.exercise.controller";
import validateSchema from "../middleware/validateSchema.middleware";

const router = express.Router();

router.post(
  "/registerexercise",
  validateSchema(registerExerciseSchema),
  registerExercise
);
export default router;
