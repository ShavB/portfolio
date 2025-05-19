import config from "./config/config";
import express, { Request, Response } from "express";
import cors from "cors";
import emailRoutes from "./route/emailRoute";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", emailRoutes);
app.use(errorHandler);

export default app;
