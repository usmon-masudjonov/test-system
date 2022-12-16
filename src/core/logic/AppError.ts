import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export namespace GenericAppError {
  export class UnexpectedError extends Result<UseCaseError> {
    public constructor(error: any) {
      super(false, {
        message: `An unexpected error occurred.`,
        error,
      } as UseCaseError);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(error);
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err);
    }
  }
}
