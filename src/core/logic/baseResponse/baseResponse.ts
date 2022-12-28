import { BaseError } from "../baseError/baseError";

class BaseResponse {
  public data;
  public meta;
  public error: BaseError | Error;

  constructor(meta, data, error) {
    this.meta = meta;
    this.data = data;
    this.error = error;
  }
}

export class BaseResponseBuilder {
  private _meta;
  private _data;
  private _error;

  public setMeta(meta: Record<string, any>) {
    this._meta = meta;
    return this;
  }

  public setData(data: Record<string, any> | Record<string, any>[]) {
    this._data = data;
    return this;
  }

  public setError(error: Record<string, any>) {
    this._error = error;
    return this;
  }

  public build(): BaseResponse {
    return new BaseResponse(this._meta, this._data, this._error);
  }
}
