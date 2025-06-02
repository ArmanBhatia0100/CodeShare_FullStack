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
    res.json({ message: "Hello World" });
  });

  
app.post("/api/v1/share", (req, res) => {
  const { code } = req.body;
  res.json({status:200, message: "link generated", link: `https://www.google.com?code=11` });
});
/**
 * Listen to the port
 */
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
