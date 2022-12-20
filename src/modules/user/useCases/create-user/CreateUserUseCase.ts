import { UseCase } from "../../../../core/domain/UseCase";
import { UserPassword } from "../../domain/valueObjects/UserPassword";
import { CreateUserDTO } from "./CreateUserDTO";
import { Either, left, Result } from "../../../../core/logic/Result";
import { CreateUserErrors } from "./CreateUserErrors";
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

    await knex.select("*").from("users");

    return left(new CreateUserErrors.UsernameAlreadyExists(username));
  }
}
