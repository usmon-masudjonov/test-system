import correlator from "./Correlator";
import { createLogger } from "../infra/Winston";

const logger = createLogger({
  getCorrelationId: correlator.getId,
});

export default logger;
