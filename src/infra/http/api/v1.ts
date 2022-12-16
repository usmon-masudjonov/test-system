import express from "express";
import { userRouter } from "../../../modules/user/infra/http/routes";

const v1Router = express.Router();

v1Router.use("/user", userRouter);

export { v1Router };
