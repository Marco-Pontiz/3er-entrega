import app from "./app.js";
import { createAdminUser } from "./libs/createUser.js";
import "./database.js";
import logger from "../src/log4";

const loggerConsola= log4js.getLogger('consola');

async function main() {
  await createAdminUser();
  app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}
main();