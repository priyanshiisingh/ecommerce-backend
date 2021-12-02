import express from "express";
import dotenv from "dotenv";
dotenv.config("../.env");
import connectdb from "./services/mongodb/models/connectDB";

const app = express();

const PORT = process.env.PORT || 3003;

connectdb();

app.listen(PORT, (req, res) => {
  console.log(`Server listening to PORT ${PORT}`);
});
