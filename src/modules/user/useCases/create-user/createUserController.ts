import { BaseController } from "../../../../core/infra/baseController";
import { CreateUserDTO } from "./createUserDTO";
import { CreateUserUseCase } from "./createUserUseCase";
import { Service, Inject } from "typedi";
import { CreateUserErrors } from "./createUserErrors";
import { BaseError } from "../../../../core/logic/baseError/baseError";

@Service()
export class CreateUserController extends BaseController {
  @Inject() useCase: CreateUserUseCase;

  constructor() {
    super();
  }

  protected async executeImpl(): Promise<any> {
    const dto: CreateUserDTO = this.req.body as CreateUserDTO;

    try {
      const result = await this.useCase.execute(dto);

      if (result.isFailure()) {
        const error = result;

        switch (error.constructor) {
          case CreateUserErrors.UsernameAlreadyExists:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        return this.ok(this.res, result.getValue());
      }
    } catch (error) {
      return this.fail(new BaseError(error));
    }
  }
}
