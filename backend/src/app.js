import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import contactRouter from "./routes/contact.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: env.frontendUrl
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    service: "devsynthetix-backend",
    uptime: process.uptime()
  });
});

app.use("/api/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
