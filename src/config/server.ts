import * as env from "env-var";
import dotenv from "dotenv";

dotenv.config();

type ServerConfigType = {
  env: string;
  port: number;
};

const ServerConfig: ServerConfigType = {
  env: env.get("SERVER_ENV").required().asString(),
  port: env.get("SERVER_PORT").required().asPortNumber(),
};

export default ServerConfig;
