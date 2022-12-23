import errors from "../../../../errors.json";
import { ErrorTypeEnum, IError } from "./types";

class Errors {
  private errors: IError[];

  constructor(errors) {
    this.errors = errors;
  }

  public findByTypeAndCode(type: ErrorTypeEnum, code: string): IError {
    return this.errors.find(
      (error) => error.type === type && error.code === code
    );
  }
}

export default new Errors(errors);
