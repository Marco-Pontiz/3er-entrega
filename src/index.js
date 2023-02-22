import app from "./app.js";
import { createAdminUser } from "./libs/createUser.js";
import "./database.js";
//import logger from './log4';
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

async function main() {
  await createAdminUser();
  app.listen(app.get("port"));
  console.log(`http://localhost:${app.get("port")}`)

  // logger.info("Server on port", app.get("port"));
  // logger.warn("Environment:", process.env.NODE_ENV);
}

main();
