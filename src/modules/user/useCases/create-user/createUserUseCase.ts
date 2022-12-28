import { UseCase } from "../../../../core/domain/useCase";
import { UserPassword } from "../../domain/valueObjects/userPassword";
import { CreateUserDTO } from "./createUserDTO";
import { Result } from "../../../../core/logic/result";
import { CreateUserErrors } from "./createUserErrors";
import { Service } from "typedi";
import { User } from "../../domain/user";
import knex from "../../../../infra/knex";
import { UserMapper } from "../../mappers/userMapper";

@Service()
export class CreateUserUseCase
  implements UseCase<CreateUserDTO, Promise<Result<User | any>>>
{
  async execute(req: CreateUserDTO): Promise<Result<User | any>> {
    const { firstName, lastName, phoneNumber, username, password } = req;

    const user = User.create({
      firstName,
      lastName,
      password,
      phoneNumber,
      username,
    });

    if (user.isFailure()) {
      return Result.fail<void>(user.errorValue());
    }

    const mapper = new UserMapper();

    return Result.ok(await mapper.toResponse(user.getValue()));
  }
}
