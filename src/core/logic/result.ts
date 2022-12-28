import logger from "../infra/logger";
import { BaseError } from "./baseError/baseError";

export class Result<T> {
  private _isSuccess: boolean;
  private _isFailure: boolean;
  private _value: T;
  public error: T | string;

  public constructor(isSuccess: boolean, error?: T | string, value?: T) {
    if (isSuccess && error) {
      throw new BaseError(
        "InvalidOperation: A result cannot be successful and contain an error"
      );
    }
    if (!isSuccess && !error) {
      throw new BaseError(
        "InvalidOperation: A failing result needs to contain an error message"
      );
    }

    this._isSuccess = isSuccess;
    this._isFailure = !isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);

    if (error) {
      new BaseError(error["message"] || error);
    } else {
      logger.info(this);
    }
  }

  public getValue(): T {
    if (!this._isSuccess) {
      throw new BaseError(
        "Can't get the value of an error result. Use 'errorValue' instead."
      );
    }

    return this._value;
  }

  public isSuccess(): boolean {
    return this._isSuccess;
  }

  public isFailure(): boolean {
    return this._isFailure;
  }

  public errorValue(): T {
    return this.error as T;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U>(error: any): Result<U> {
    return new Result<U>(false, error);
  }

  public static combine(results: Result<any>[]): Result<any> {
    for (let result of results) {
      if (result._isFailure) return result;
    }
    return Result.ok();
  }
}
