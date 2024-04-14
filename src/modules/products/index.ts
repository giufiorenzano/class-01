import express from "express";

export const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.json({ products: [] });
});

productsRouter.get("/:id", (req, res) => {
  res.json({ productId: req.params.id });
});
