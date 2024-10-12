import express from "express";
import auth from "./auth.api";
import exercise from "./exercise.api";
import targetArea from "./targetArea.api";
import session from "./session.api";

const router = express.Router();

router.use("/auth", auth);
router.use("/exercise", exercise);
router.use("/targetArea", targetArea);
router.use("/session", session);

router.get("/", (req, res) => {
  res.json({
    message: "working",
  });
});
export default router;
