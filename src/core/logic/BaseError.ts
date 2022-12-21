import ErrorStackParser from "error-stack-parser";

export class BaseError extends Error {
  constructor(message) {
    super(message);

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
}
