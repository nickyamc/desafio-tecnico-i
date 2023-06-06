import express from "express";
import * as customerService from "../services/customerService";
import { CustomerEntry } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(customerService.findAll());
});

router.get("/:id", (_req, res) => {
    const { id } = _req.params;
    res.json(customerService.findByDni(parseInt(id)));
  });

router.post("/", (_req, res) => {
  const customer: CustomerEntry = _req.body;
  res.send(customerService.create(customer));
});

export default router;
