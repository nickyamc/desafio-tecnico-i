import express from "express";
import * as orderService from "../services/orderService"
import { OrderEntry } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(orderService.findAll());
});

router.post("/", (_req, res) => {
  try {
    const order: OrderEntry = _req.body;
    res.send(orderService.create(order.basketId));
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    res.status(301).send({message});
  }
  
});

export default router;
