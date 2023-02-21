import app from "./app.js";
import { createAdminUser } from "./libs/createUser.js";
import "./database.js";
import logger from './log4';

async function main() {
  await createAdminUser();
  app.listen(app.get("port"));

  logger.info("Server on port", app.get("port"));
  logger.warn("Environment:", process.env.NODE_ENV);
}

main();
