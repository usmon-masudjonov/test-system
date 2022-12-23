import ErrorStackParser from "error-stack-parser";
import errors from "../errors/errors";
import logger from "../../infra/logger";
import { ErrorTypeEnum, IError } from "../errors/types";

enum ErrorOrigins {
  POSTGRES = "DatabaseError",
}

export class BaseError extends Error {
  public appCode: number;

  constructor(error) {
    super(error.message);

    const stackTrace = this.parseStackTrace();
    const information = this.extractInformationFromError(error);

    logger.error({
      message: error.message,
      stackTrace,
      information,
    });

    if (information) {
      this.appCode = information.appCode;
    }

    Error.captureStackTrace(this, this.constructor);
  }

  parseStackTrace(): string[] {
    let stackTrace = [];

    ErrorStackParser.parse(this).forEach((trace) => {
      if (!trace.fileName.includes("node_modules") && trace.functionName) {
        stackTrace.unshift(trace.functionName);
      }
    });

    return stackTrace;
  }

  extractInformationFromError(error: Error): IError {
    if (error.constructor.name === ErrorOrigins.POSTGRES) {
      return errors.findByTypeAndCode(ErrorTypeEnum.POSTGRES, error["code"]);
    }
  }
}
