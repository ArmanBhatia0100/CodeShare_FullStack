import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/api/v1/share", (req, res) => {
  const { code } = req.body;
  res.json({status:200, message: "link generated", link: `https://www.google.com?code=11` });
});

router.get("/api/v1/share/:codeID", (req, res) => {
  const { codeID } = req.params;
  res.json({status:200, message: "link generated", link: `https://www.google.com?code=11` });
});
export default router; 