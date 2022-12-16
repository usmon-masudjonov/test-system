import { Response } from "express";
import { UseCase } from "../../../../core/domain/UseCase";
import { UserPassword } from "../../domain/valueObjects/UserPassword";
import { CreateUserDTO } from "./CreateUserDTO";
import { Service } from "typedi";

@Service()
export class CreateUserUseCase
  implements UseCase<CreateUserDTO, Promise<Response>>
{
  async execute(req: CreateUserDTO): Promise<Response> {
    const { firstName, lastName, phoneNumber } = req;

    const passwordOrError = UserPassword.create({
      value: req.password,
    });

    return;
  }
}
