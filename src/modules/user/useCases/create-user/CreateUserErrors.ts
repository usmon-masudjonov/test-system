import { Result } from "../../../../core/logic/Result";
import { UseCaseError } from "../../../../core/logic/UseCaseError";

export namespace CreateUserErrors {
  export class UsernameAlreadyExists extends Result<UseCaseError> {
    constructor(username: string) {
      super(false, {
        message: `The username ${username} already exists`,
      });
    }
  }
}
