import { BaseController } from "../../../../core/infra/BaseController";
import { CreateUserDTO } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Service, Inject } from "typedi";
import { Result } from "../../../../core/logic/Result";

@Service()
export class CreateUserController extends BaseController {
  @Inject() useCase: CreateUserUseCase;

  constructor() {
    super();
  }

  protected async executeImpl(): Promise<any> {
    const dto: CreateUserDTO = this.req.body as CreateUserDTO;

    const result = await this.useCase.execute(dto);

    return this.fail("ABC");
  }
}
