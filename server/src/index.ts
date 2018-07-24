import "reflect-metadata";
import { createKoaServer } from "routing-controllers";

import MushroomController from "./mushrooms/controller";

import setupDb from "./db";

const app = createKoaServer({
  cors: true,
  controllers: [MushroomController]
});

setupDb()
  .then(_ => app.listen(4000, () => console.log("Listening on port 4000")))
  .catch(err => console.error(err));
