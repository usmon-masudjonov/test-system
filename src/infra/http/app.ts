import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import ServerConfig from "../../config/server";
import { v1Router } from "./api/v1";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/v1", v1Router);

app.listen(ServerConfig.port, () => {
  console.log("Server is running on port", ServerConfig.port);
});
