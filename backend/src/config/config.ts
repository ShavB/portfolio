import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  emailApi: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5010,
  nodeEnv: process.env.NODE_ENV || "development",
  emailApi: process.env.EMAIL_SERVICE_API || "email-api",
};

export default config;
