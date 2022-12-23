import correlator from "./correlator";
import { createLogger } from "./winston";

const logger = createLogger({
  getCorrelationId: correlator.getId,
});

export default logger;
