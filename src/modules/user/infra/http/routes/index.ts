import express, { Router } from "express";
import { Container } from "typedi";
import { CreateUserController } from "../../../useCases/create-user/createUserController";

const userRouter: Router = express.Router();

userRouter.use(
  "/",
  (req, res) => Container.get(CreateUserController).execute(req, res) as any
);

export { userRouter };
