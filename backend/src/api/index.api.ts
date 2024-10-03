import express from "express";
import auth from "./auth.api"

const router = express.Router();

router.use("/auth", auth);

router.get("/", (req, res) => {
  res.json({
    message: "working",
  });
});
export default router;