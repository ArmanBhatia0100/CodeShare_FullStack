import { Router } from "express";
import CodeModel from "./model/codeModel.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/api/v1/share/", async (req, res) => {

  const { code, language } = req.body;
  
  const codeID = await CodeModel.create({code, language});

  if(!codeID) {
    return res.status(400).json({status:400, message: "code not found"});
  }
  res.json({status:200, publicLink: `http://localhost:3000/api/v1/share/${codeID._id}` });
});

router.get("/api/v1/share/:codeID", async (req, res) => {
  const { codeID } = req.params;

  const codeDoc = await CodeModel.findById(codeID);

  if(!codeDoc) {
    return res.status(400).json({status:400, message: "code not found"});
  }
  res.send({status:200, code: codeDoc.code, language: codeDoc.language });
});
export default router;