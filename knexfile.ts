import type { Knex } from "knex";
import PostgresConfig from "./src/config/postgres";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: PostgresConfig.database,
      user: PostgresConfig.user,
      password: PostgresConfig.password,
      host: PostgresConfig.host,
      port: PostgresConfig.port,
    },
    pool: {
      min: 2,
      max: 70,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  staging: {
    client: "postgresql",
    connection: {
      database: PostgresConfig.database,
      user: PostgresConfig.user,
      password: PostgresConfig.password,
      host: PostgresConfig.host,
      port: PostgresConfig.port,
    },
    pool: {
      min: 2,
      max: 70,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      database: PostgresConfig.database,
      user: PostgresConfig.user,
      password: PostgresConfig.password,
      host: PostgresConfig.host,
      port: PostgresConfig.port,
    },
    pool: {
      min: 2,
      max: 70,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
