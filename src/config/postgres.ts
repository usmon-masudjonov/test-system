import * as env from "env-var";
import dotenv from "dotenv";

dotenv.config();

type PostgresConfigType = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

const PostgresConfig: PostgresConfigType = {
  host: env.get("POSTGRES_HOST").required().asString(),
  port: env.get("POSTGRES_PORT").required().asPortNumber(),
  user: env.get("POSTGRES_USER").required().asString(),
  password: env.get("POSTGRES_PASSWORD").required().asString(),
  database: env.get("POSTGRES_DB_NAME").required().asString(),
};

export default PostgresConfig;
