import { UseCase } from "../../../../core/domain/useCase";
import { UserPassword } from "../../domain/valueObjects/userPassword";
import { CreateUserDTO } from "./createUserDTO";
import { Either, left, Result } from "../../../../core/logic/result";
import { CreateUserErrors } from "./createUserErrors";
import { Service } from "typedi";
import knex from "../../../../infra/knex";

type Response = Either<
  CreateUserErrors.UsernameAlreadyExists | Result<any>,
  Result<void>
>;

@Service()
export class CreateUserUseCase
  implements UseCase<CreateUserDTO, Promise<Response>>
{
  async execute(req: CreateUserDTO): Promise<Response> {
    const { firstName, lastName, phoneNumber, username, password } = req;

    const passwordOrError = UserPassword.create({
      value: req.password,
    });

    await knex("ax").select("*");

    return left(new CreateUserErrors.UsernameAlreadyExists(username));
  }
}
