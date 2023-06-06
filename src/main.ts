import express from "express";
import customerRouter from "./routes/customers";
import basketRouter from "./routes/basket";
import detailRouter from "./routes/detail";
import orderRouter from "./routes/order";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/api/customer", customerRouter);
app.use("/api/basket", basketRouter);
app.use("/api/detail", detailRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
