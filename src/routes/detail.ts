import express from "express";
import * as detailService from "../services/detailService"

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(detailService.findAll());
});


export default router;