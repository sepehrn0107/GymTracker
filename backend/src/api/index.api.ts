import express from "express";
import auth from "./auth.api";
import exercise from "./exercise.api";

const router = express.Router();

router.use("/auth", auth);
router.use("/exercise", exercise);

router.get("/", (req, res) => {
  res.json({
    message: "working",
  });
});
export default router;
