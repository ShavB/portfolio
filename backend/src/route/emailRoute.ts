import { Request, Response, Router } from "express";
import { sendEmail, getName } from "../controller/emailController";
import resend from "../resend/resend";
import { errorHandler } from "../middlewares/errorHandler";
const router = Router();

router.get("/", getName);
router.post("/emailService", sendEmail);

export default router;
