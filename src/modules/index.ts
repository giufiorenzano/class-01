import express from "express";
import { productsRouter } from "./products";
import { logger } from "../middlewares/logger"

export const router = express.Router();

router.use("/products", logger, productsRouter);
