import express, { Router } from "express";
import { Inject, Service, Container } from "typedi";
import { CreateUserController } from "../../../useCases/create-user/createUserController";

const userRouter = express.Router();

userRouter.use(
  "/",
  (req, res) => Container.get(CreateUserController).execute(req, res) as any
);

export { userRouter };
