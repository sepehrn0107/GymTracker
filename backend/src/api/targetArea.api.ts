import express from "express";
import { registerTargetAreaSchema } from "../validation/targetArea.valdation";
import { registerTargetArea } from "../controller/exercise/targetArea.controller";
import validateSchema from "../middleware/validateSchema.middleware";

const router = express.Router();

router.post(
  "/create",
  validateSchema(registerTargetAreaSchema),
  registerTargetArea
);
export default router;
