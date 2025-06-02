import express from "express";
import cors from "cors";

/**
 * Initialize the express app
 */
const app = express();

/**
 * Use the cors middleware
 * Use the express.json middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Get the root route
 */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * Listen to the port
 */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
