import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();

await connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/clerk", express.json(), clerkWebhooks);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
