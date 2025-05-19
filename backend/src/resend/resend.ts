import { Resend } from "resend";
import config from "../config/config";

const resend: any = new Resend(config.emailApi);

export default resend;
