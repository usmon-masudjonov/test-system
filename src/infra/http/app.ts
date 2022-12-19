import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import ServerConfig from "../../config/server";
import { v1Router } from "./api/v1";
import correlationIDMiddleware from "../../core/infra/middlewares/CorrelationID";
import logger from "../../core/infra/Logger";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(correlationIDMiddleware);
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(
  morgan(function (tokens, req, res) {
    logger.info({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      contentLength: tokens.res(req, res, "content-length"),
      responseTime: tokens["response-time"](req, res),
      remoteAddr: tokens["remote-addr"](req, res),
      userAgent: tokens["user-agent"](req, res),
      httpVersion: tokens["http-version"](req, res),
      totalTime: tokens["total-time"](req, res),
    });
  })
);

app.use("/api/v1", v1Router);

app.listen(ServerConfig.port, () => {
  logger.info("Server is running on port", ServerConfig.port);
});
