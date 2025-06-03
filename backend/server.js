import express from "express";
import cors from "cors";
import routes from "./routes.js";
import connectDB from "./db/db_connect.js";
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
 * Use the routes
 */
app.use("/", routes);

/**
 * Listen to the port
 */
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});

