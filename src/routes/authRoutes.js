import express from "express";
import User from "../services/mongodb/models/User";
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json({ users });
});

export default router;
