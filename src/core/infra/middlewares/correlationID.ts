import { NextFunction, Request, Response } from "express";
import correlator from "../correlator";

export default function correlationIDMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  correlator.bindEmitter(req);
  correlator.bindEmitter(res);
  correlator.bindEmitter(req.socket);

  correlator.withId(() => {
    const currentCorrelationId = correlator.getId();
    res.set("x-correlation-id", currentCorrelationId);
    next();
  }, req.get("x-correlation-id") as any);
}
