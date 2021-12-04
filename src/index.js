import express from "express";
import dotenv from "dotenv";
dotenv.config("../.env");
import connectdb from "./services/mongodb/connectDB";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();

const PORT = process.env.PORT || 3000;

connectdb();

app.use(cors());
app.use(express.json());

//route to handle auth request
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server listening to PORT ${PORT}`);
});
