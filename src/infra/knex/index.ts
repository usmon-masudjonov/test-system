import knex, { Knex } from "knex";
import config from "../../../knexfile";
import ServerConfig from "../../config/server";

export default knex(config[ServerConfig.env]) as Knex;
