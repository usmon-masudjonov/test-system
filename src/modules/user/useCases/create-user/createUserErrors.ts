import { Result } from "../../../../core/logic/result";
import { UseCaseError } from "../../../../core/logic/useCaseError";

export namespace CreateUserErrors {
  export class UsernameAlreadyExists extends Result<UseCaseError> {
    constructor(username: string) {
      super(false, {
        message: `The username ${username} already exists`,
      });
    }
  }
}
