import express from "express";
import {
  editExerciseSchema,
  registerExerciseSchema,
} from "../validation/exercise.validation";
import { registerExercise } from "../controller/exercise/register.exercise.controller";
import { editExercise } from "../controller/exercise/edit.exercise.controller";
import validateSchema from "../middleware/validateSchema.middleware";
import { AuthJWT } from "../middleware/authJWT.middleware";

const router = express.Router();

router.post(
  "/register",
  validateSchema(registerExerciseSchema),
  AuthJWT,
  registerExercise
);

router.post("/edit", validateSchema(editExerciseSchema), AuthJWT, editExercise);
export default router;
