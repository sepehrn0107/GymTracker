import express from "express";
import {
  editExerciseSchema,
  registerExerciseSchema,
} from "../validation/exercise.validation";
import {
  editExercise,
  registerExercise,
} from "../controller/exercise/index.exercise.controller";
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
