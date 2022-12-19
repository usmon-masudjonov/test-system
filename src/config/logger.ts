import * as env from "env-var";
import dotenv from "dotenv";

dotenv.config();

type LoggerConfigType = {
  directory: string;
};

const LoggerConfig: LoggerConfigType = {
  directory: env.get("LOGS_DIRECTORY").required().asString(),
};

export default LoggerConfig;
