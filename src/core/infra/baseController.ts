import * as express from "express";
import { BaseError } from "../logic/baseError/baseError";
import { BaseResponseBuilder } from "../logic/baseResponse/baseResponse";
import correlator from "./correlator";

export abstract class BaseController {
  protected req: express.Request;
  protected res: express.Response;

  protected abstract executeImpl(): Promise<void | any>;

  public execute(req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;

    this.executeImpl();
  }

  public static jsonResponse(
    res: express.Response,
    code: number,
    message: string
  ) {
    return res.status(code).json(
      new BaseResponseBuilder()
        .setMeta({
          code,
          message,
        })
        .build()
    );
  }

  public ok<T>(res: express.Response, dto?: T) {
    if (!!dto) {
      return res.status(200).json(
        new BaseResponseBuilder()
          .setMeta({
            message: "Successfully Completed",
            code: 200,
          })
          .setData(dto)
          .build()
      );
    } else {
      return res.sendStatus(200);
    }
  }

  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      400,
      message ? message : "Unauthorized"
    );
  }

  public unauthorized(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      401,
      message ? message : "Unauthorized"
    );
  }

  public paymentRequired(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      402,
      message ? message : "Payment required"
    );
  }

  public forbidden(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      403,
      message ? message : "Forbidden"
    );
  }

  public notFound(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      404,
      message ? message : "Not found"
    );
  }

  public conflict(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      409,
      message ? message : "Conflict"
    );
  }

  public tooMany(message?: string) {
    return BaseController.jsonResponse(
      this.res,
      429,
      message ? message : "Too many requests"
    );
  }

  public todo() {
    return BaseController.jsonResponse(this.res, 400, "TODO");
  }

  public fail(error: BaseError) {
    return this.res.status(500).json(
      new BaseResponseBuilder()
        .setMeta({
          correlationId: correlator.getId(),
        })
        .setError({
          appCode: error.appCode,
          code: 500,
          message: "Internal Server Error",
        })
        .build()
    );
  }
}
