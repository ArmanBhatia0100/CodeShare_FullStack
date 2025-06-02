import express from "express";
import cors from "cors";
import routes from "./routes.js";

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
  console.log("Server is running on port 3000");
});
