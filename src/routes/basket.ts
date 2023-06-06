import express from "express";
import * as basketService from "../services/basketService";
import { BasketEntry } from "../types";
const router = express.Router();

router.get("/", (_req, res) => {
  res.json(basketService.findAll());
});

router.post("/", (_req, res) => {
  try {
    const basket: BasketEntry = _req.body;
    res.send(basketService.create(basket));
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    res.status(301).send({message});
  }
  
});

export default router;
