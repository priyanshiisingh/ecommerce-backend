import express from "express";
import User from "../services/mongodb/models/User";
const router = express.Router();

/*
type : GET
path : /api/v1/auth/users 
params: none
isProtected : true (admin) 
*/

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ users: {} });
  }
});

/*
type : POST
path : /api/v1/auth/signup
params: none
isProtected : false (admin) 
*/

router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email, password });
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ users: {} });
  }
});

export default router;
